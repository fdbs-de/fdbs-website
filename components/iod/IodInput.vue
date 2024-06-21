<template>
    <label
        ref="containerElement"
        class="iod-container iod-input"
        :class="classes"
        tabindex="-1"
    >
        <div class="box-wrapper">
            <div class="border" v-if="border"></div>
            <div class="tint-background"></div>

            <div class="side-wrapper">
                <div class="side-icon" v-if="iconLeft"><span>{{iconLeft}}</span></div>
                <slot class="side-slot" v-if="$slots.left" name="left"></slot>
            </div>

            <div class="input-wrapper">
                <div class="label" v-if="label">{{label}}</div>
                
                <div class="inner-input-wrapper">
                    <span class="prefix" v-if="prefix">{{prefix}}</span>

                    <div class="input-compactor">
                        <input
                            ref="input"
                            class="input"
                            :form="form"
                            :pattern="pattern"
                            :autocomplete="autocomplete"
                            :spellcheck="spellcheck"
                            :disabled="disabled"
                            :aria-disabled="disabled"
                            :required="required"
                            :aria-required="required"
                            :readonly="readonly"
                            :tabindex="tabindex"
                            :name="name || 'generic'"
                            :title="title"
                            :type="computedInputType"
                            :min="min__"
                            :max="max__"
                            :minlength="min__"
                            :maxlength="max__"
                            :step="step__"
                            :autofocus="autofocus"
                            :value="internalValue"
                            :aria-label="label"
                            @input="setInput(($event.target as HTMLInputElement).value); emitUpdate()"
                            @focus.stop="inputEvent('focus', $event)"
                            @blur.stop="inputEvent('blur', $event)"
                            @keydown="inputEvent('keydown', $event)"
                            @keyup="inputEvent('keyup', $event)"
                            @keypress="inputEvent('keypress', $event)"
                            @change="inputEvent('change', $event)"
                            @keydown.esc="inputEvent('esc', $event)"
                            @keydown.enter="inputEvent('enter', $event)"
                            @keydown.space="inputEvent('space', $event)"
                            @mousedown="handleMouseDown($event)"
                        />

                        <div class="placeholder" v-if="placeholder && allowsForCenteredLabelOrPlaceholder">{{placeholder}}</div>
                    </div>

                    <span class="suffix" v-if="suffix">{{suffix}}</span>
                </div>
            </div>

            <div class="side-wrapper">
                <button type="button" class="side-button" :disabled="disabled || !showClearButton" @click="clearInput()" v-if="hasClearButton" :class="{'hide-button': !showClearButton}">
                    <close-icon />
                </button>

                <button type="button" class="side-button" :disabled="disabled" @click="toggleObfuscation()" v-if="hasObfuscationToggle && showObfuscationToggle">
                    <div class="obfuscation-cross"></div>
                    <visibility-icon />
                </button>

                <div class="side-icon" v-if="iconRight"><span>{{iconRight}}</span></div>
                <slot class="side-slot" v-if="$slots.right" name="right"></slot>
            </div>
                
            <div class="progress-bar" v-if="hasPasswordScore">
                <div class="progress" :class="'score-'+passwordScore"></div>
            </div>
        </div>

        <div class="bottom-bar" v-if="hasBottomBar">
            <div class="helper-text" v-if="helperText">{{helperText}}</div>
            <div class="max-text" v-if="hasMax && showMax">{{internalValueTextLength}} / {{max__}}</div>
        </div>
        
    </label>
</template>

<script lang="ts">
    import type { PropType } from 'vue'
    import type { CallbackArgument } from './helpers/dragListener.ts'
</script>

<script setup lang="ts">
    import { ref, computed, onMounted, watch } from 'vue'
    import { initiateDragListening, temporarySetCursor } from './helpers/dragListener'

    import CloseIcon from './icons/CloseIcon.vue'
    import VisibilityIcon from './icons/VisibilityIcon.vue'
    import { exposeNativeAttribute } from './helpers/nativeReactiveness'



    const emits = defineEmits([
        'update:modelValue',
        'update:valid',
        'focus',
        'blur',
        'keydown',
        'keyup',
        'keypress',
        'change',
        'esc',
        'enter',
        'space',
        'clear',
    ])

    const props = defineProps({
        modelValue: {
            type: null as unknown as PropType<string | number | null>,
            default: '',
        },
        type: {
            type: String,
            default: 'text',
        },
        form: {
            type: String,
        },
        name: {
            type: String,
        },
        label: {
            type: String,
        },
        placeholder: {
            type: String,
        },
        helper: {
            type: String,
        },
        title: {
            type: String,
        },
        errorText: {
            type: String,
        },
        iconLeft: {
            type: String,
        },
        iconRight: {
            type: String,
        },
        prefix: {
            type: String,
        },
        suffix: {
            type: String,
        },
        clearable: {
            type: Boolean,
            default: false,
        },
        required: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        tabindex: {
            type: [Number, String],
            default: 0,
        },
        pattern: {
            type: String,
        },
        autocomplete: {
            type: String,
            default: 'off',
        },
        autofocus: {
            type: Boolean,
            default: false,
        },
        spellcheck: {
            type: Boolean,
            default: false,
        },
        min: {
            type: [Number, String],
            default: null,
        },
        max: {
            type: [Number, String],
            default: null,
        },
        step: {
            type: [Number, String],
            default: null,
        },
        border: {
            type: Boolean,
            default: false,
        },
        hideMax: {
            type: Boolean,
            default: false,
        },
        hideObfuscationToggle: {
            type: Boolean,
            default: false,
        },
        showScore: {
            type: Boolean,
            default: false,
        },
        scoreFunction: {
            type: Function,
            // eslint-disable-next-line
            default: () => (password: string) => { return { score: 4 }},
        },
    })



    // START: Internal variables
    const internalValue = ref('' as string|number)

    const isValid = ref(true as boolean)
    const isFocused = ref(false as boolean)
    const isObfuscated = ref(true as boolean)

    const containerElement = ref({} as HTMLElement)
    const input = ref({} as HTMLInputElement)
    // END: Internal variables


    const internalValueText = computed((): string => {
        return internalValue.value.toString()
    })

    const internalValueTextLength = computed((): number => {
        return internalValueText.value.length
    })

    const inputType = computed((): string => {
        return ['text', 'email', 'number', 'url', 'password', 'search', 'tel', 'date', 'time', 'datetime-local'].includes(props.type) ? props.type : 'text'
    })

    const computedInputType = computed((): string => {
        if (inputType.value === 'password' && isObfuscated.value) return 'password'
        if (inputType.value === 'password' && !isObfuscated.value) return 'text'

        return inputType.value
    })

    const isInputTypeTextBased = computed((): boolean => {
        return ['text', 'email', 'url', 'password', 'search', 'tel'].includes(inputType.value)
    })



    const hasObfuscationToggle = computed((): boolean => {
        return inputType.value === 'password'
    })

    const showObfuscationToggle = computed((): boolean => {
        return !props.hideObfuscationToggle
    })



    const helperText = computed((): string => {
        // Prefer error text over helper text over empty
        return props.errorText || props.helper || ''
    })



    const min__ = computed((): number|undefined => {
        return parseNumber(props.min) ?? undefined
    })

    const max__ = computed((): number|undefined => {
        return parseNumber(props.max) ?? undefined
    })

    const step__ = computed((): number|undefined => {
        return parseNumber(props.step) ?? undefined
    })



    const isFilled = computed((): boolean => {
        return internalValueTextLength.value > 0
    })

    const isFocusedOrFilled = computed((): boolean => {
        return isFocused.value || isFilled.value
    })

    const allowsForCenteredLabelOrPlaceholder = computed((): boolean => {
        return !['date', 'time', 'datetime-local'].includes(inputType.value)
    })



    const hasClearButton = computed((): boolean => {
        return props.clearable || inputType.value === 'search'
    })

    const showClearButton = computed((): boolean => {
        return isFilled.value
    })



    const hasBottomBar = computed((): boolean => {
        return !!helperText.value || (hasMax.value && showMax.value)
    })

    const hasMax = computed((): boolean => {
        return isInputTypeTextBased.value && !!max__.value
    })

    const showMax = computed((): boolean => {
        return !!props.hideMax
    })



    const hasPasswordScore = computed((): boolean => {
        return props.showScore && inputType.value === 'password'
    })

    const passwordScore = computed((): number => {
        return props.scoreFunction(internalValue.value).score
    })



    const classes = computed((): object => {
        return [
            `input-type-${inputType.value}`,
            {
                'focused': isFocused.value,
                'filled': isFilled.value,
                'focused-or-filled': isFocusedOrFilled.value,
                'allows-for-centered-label-or-placeholder': allowsForCenteredLabelOrPlaceholder.value,
                'invalid': !isValid.value,
                'has-label': props.label,
                'bottom-bar-space': hasBottomBar.value,
                'disabled': props.disabled,
                'obfuscated': isObfuscated.value,
            }
        ]
    })
    


    // START: Input & parse functions
    const parse = (value: string|number|null|undefined): string|number => {
        // Return empty string if value is undefined
        if (value === undefined) return ''

        // Return empty string if value is null
        if (value === null) return ''

        // Return value as number if value number
        // Return empty string if value is not a number
        if (inputType.value === 'number') return parseNumber(Number(value)) ?? ''

        // Return value as string
        return value.toString()
    }
    
    const parseNumber = (value: string|number|null): number|null => {
        // Return fallback if value is null
        if (value === null) return null

        // Return fallback if value is not a number
        if (isNaN(Number(value))) return null

        // Return value as number
        return Number(value)
    }
    
    const setInput = (value: string|number|null|undefined): void => {
        internalValue.value = parse(value)
    }
    // END: Input & parse functions



    // START: Emits & events
    const emitUpdate = (): void => {
        emits('update:modelValue', internalValue.value)
    }

    const emitClear = (): void => {
        emits('clear')
    }

    const inputEvent = (type: 'update:modelValue'|'update:valid'|'focus'|'blur'|'keydown'|'keyup'|'keypress'|'change'|'esc'|'enter'|'space'|'clear', event: Event): void => {
        
        if (shouldBounceEvent(event)) return
        
        emits(type, event)

        switch (type)
        {
            case 'focus': isFocused.value = true; break;
            case 'blur': isFocused.value = false; validateOnBlur(); break;
        }
    }

    let firstDragFrame = true;
    function handleMouseDown(event: MouseEvent){
        if (inputType.value !== 'number') return
        firstDragFrame = true
        initiateDragListening({
            event: event,
            callback: handleDragMouseMove,
            onlyCallbackOnStepX: true,
            stepSizeX: 10,
        })

    }
    function handleDragMouseMove (args: CallbackArgument): void {

        if(args.stepX === 0) return

        if(firstDragFrame)
        {
            firstDragFrame = false
            temporarySetCursor('ew-resize');
            return
        }


        //set value
        internalValue.value = Number(internalValue.value) + (args.stepX * (step__.value ?? 1))

        //clamp value
        if(max__.value)
        {
            if(Number(internalValue.value) > max__.value) internalValue.value = max__.value
        }

        if(min__.value || min__.value === 0)
        {
            if(Number(internalValue.value) < min__.value) internalValue.value = min__.value
        }


        //This is a hack tbh.
        //We aren't allowed to change the selectionStart and selectionEnd of a number input
        //So we change the type to text, set the selectionStart and selectionEnd and then change the type back to number
        const oldType = input.value.type
        input.value.type = 'text'
        input.value.selectionStart = 0
        input.value.selectionEnd = 0
        input.value.type = oldType

        emitUpdate()

    }

    function shouldBounceEvent (event: Event): boolean {
        if(!(event instanceof FocusEvent)) return false

        if (event.relatedTarget === containerElement.value && isFocused.value)
        {
            setFocus()
            return true
        }

        return false
    }
    // END: Emits & events



    // START: Misc
    const setFocus = (): void => {
        input.value.focus()
        // console.log('FOCUSING')
    }

    const toggleObfuscation = (): void => {
        isObfuscated.value = !isObfuscated.value
    }
    // END: Misc



    // START: Validation
    const validateOnBlur = (): void => {
        validate(['errorTextPresent', 'badInput', 'patternMismatch', 'rangeOverflow', 'rangeUnderflow', 'stepMismatch', 'tooLong', 'tooShort', 'typeMismatch', 'valueMissing'])
    }

    const validateInstantly = (): void => validate(['errorTextPresent', 'badInput', 'patternMismatch', 'tooLong'])
    
    const validate = (watchForKey: string[]): void => {
        // Return if input is disabled or empty
        if (props.disabled || !input.value) return
        
        // Get validity state
        let validityState = input.value.validity

        // Convert validity state to json object
        let validityStateObject = {
            badInput: !!validityState?.badInput,
            patternMismatch: !!validityState?.patternMismatch,
            rangeOverflow: !!validityState?.rangeOverflow,
            rangeUnderflow: !!validityState?.rangeUnderflow,
            stepMismatch: !!validityState?.stepMismatch,
            tooLong: !!validityState?.tooLong,
            tooShort: !!validityState?.tooShort,
            typeMismatch: !!validityState?.typeMismatch,
            valid: !!validityState?.valid,
            valueMissing: !!validityState?.valueMissing,
            errorTextPresent: !!props.errorText,
        }

        // Select all keys of the validityStateObject that are in the watchForKey array and check if all of them are false meaning the input is valid
        isValid.value = Object.values(Object.fromEntries(Object.entries(validityStateObject).filter(([key]) => watchForKey.includes(key)))).every((value) => value === false)

        // Emit valid event
        emits('update:valid', isValid.value)
    }
    // END: Validation



    // Clear input value
    const clearInput = (): void => {
        setInput('')
        emitUpdate()
        emitClear()
        setFocus()
    }



    // On mounted
    onMounted((): void => {
        validateInstantly()
    })

    // Value watcher
    watch(() => props.modelValue, (newValue): void => {
        setInput(newValue)
        validateInstantly()
    }, {
        immediate: true
    })

    // Expose public methods
    defineExpose({
        focus: setFocus,
        input: input,
        selectionStart: exposeNativeAttribute<number|null>()(input, 'selectionStart'),
        selectionEnd: exposeNativeAttribute<number|null>()(input, 'selectionEnd'),
    })
</script>

<style lang="sass" scoped>
    .iod-container.iod-input
        --gap-affix: 0em

        font-size: 1rem
        height: 3rem
        display: flex
        background: var(--color-background-soft)
        border-radius: var(--radius-m)
        position: relative
        box-sizing: border-box

        *
            box-sizing: inherit

        &.focused
            .border
                border-color: var(--color-border-focused)

        &.filled
            .input-wrapper .inner-input-wrapper .input-compactor
                .placeholder
                    opacity: 0

        &.focused-or-filled
            .box-wrapper
                .progress-bar
                    transform: scaleY(1)

        &.focused-or-filled,
        &:not(.allows-for-centered-label-or-placeholder)
            .input-wrapper
                .label
                    transform: translate(0, -5px) scale(0.72)

        &.has-label
            .input-wrapper
                .inner-input-wrapper
                    padding-top: 1em !important

            &:not(.focused)
                .input-wrapper .inner-input-wrapper .input-compactor .placeholder
                    opacity: 0

            &:not(.focused):not(.filled)
                .input-wrapper .inner-input-wrapper
                    .prefix,
                    .suffix
                        opacity: 0

        &.bottom-bar-space
            margin-bottom: 1.3em

        &.disabled
            background: var(--color-background-disabled)

            .border
                border-color: var(--color-border-disabled)

        &.input-type-password:not(.obfuscated)
            .side-wrapper
                .side-button
                    .obfuscation-cross
                        clip-path: inset(0 0 0 0)

        &.invalid
            .border
                border-color: var(--color-error)

            .tint-background
                opacity: .2
                background: var(--color-error)

            .box-wrapper
                .side-wrapper
                    .side-icon
                        color: var(--color-error)

            .bottom-bar
                .max-text,
                .helper-text
                    color: var(--color-error)



        .box-wrapper
            width: 100%
            height: 100%
            overflow: auto
            position: relative
            border-radius: inherit
            display: flex
            align-items: center

            .side-wrapper
                padding: 0 var(--local-padding, .5rem)
                display: flex
                align-items: center
                height: 100%
                position: relative
                z-index: 2

                .side-icon
                    height: 2em
                    width: 2em
                    display: flex
                    align-items: center
                    justify-content: center
                    flex: none
                    font-family: var(--font-icon)
                    color: inherit
                    user-select: none
                    color: var(--color-text-soft)

                    > span
                        font-size: 1.25em
                    
                .side-button
                    height: 2em
                    width: 2em
                    display: flex
                    align-items: center
                    justify-content: center
                    flex: none
                    border: none
                    padding: 0
                    margin: 0
                    border-radius: .25em
                    background: transparent
                    color: var(--color-text-soft)
                    font-family: inherit
                    font-size: inherit
                    position: relative
                    transition: all 100ms
                    cursor: pointer

                    &:hover
                        background: #00000040
                        color: var(--color-text)

                    &:focus
                        background: #00000040
                        color: var(--color-text)
                        outline: none

                    &:disabled
                        cursor: initial

                    &.hide-button
                        opacity: 0
                        cursor: initial
                        user-select: none
                        pointer-events: none

                    .obfuscation-cross
                        content: ''
                        width: 0
                        height: 60%
                        position: absolute
                        left: 50%
                        top: calc(20% + 1px)
                        z-index: 1
                        transition: clip-path 160ms, border 100ms, background 100ms
                        transform: rotate(45deg) translateX(-50%)
                        background: var(--color-background-soft)
                        border-left: 2px solid currentColor
                        border-right: 1px solid var(--color-background-soft)
                        clip-path: inset(0 0 100% 0)

            .progress-bar
                height: 3px
                background: #00000040
                width: 100%
                position: absolute
                bottom: 0
                left: 0
                z-index: 2
                pointer-events: none
                transform: scaleY(0)
                transform-origin: center bottom
                text-align: left
                transition: all 200ms
                overflow: hidden

                .progress
                    height: 100%
                    transition: all 300ms
                    position: absolute
                    top: 0
                    left: 0

                    &.score-0
                        width: 5%
                        background: var(--color-error)

                    &.score-1
                        width: 25%
                        background: var(--color-error)

                    &.score-2
                        width: 50%
                        background: #ff9f43

                    &.score-3
                        width: 75%
                        background: #f1c40f

                    &.score-4
                        width: 100%
                        background: #2ecc71

        .input-wrapper
            display: flex
            flex: 1
            align-items: center
            height: 100%
            width: 100%
            position: relative
            z-index: 2
            overflow: hidden

            .inner-input-wrapper
                flex: 1
                display: flex
                align-items: center
                height: 100%
                gap: var(--gap-affix)

                .prefix,
                .suffix
                    user-select: none
                    pointer-events: none
                    transition: opacity 160ms
                    color: var(--color-text-soft)

                .input-compactor
                    flex: 1
                    position: relative
                    height: 100%

                    .input
                        height: 100%
                        width: 100%
                        flex: 1
                        padding: 0
                        border: none
                        background: none
                        border-radius: 3px
                        font-family: inherit
                        font-size: inherit
                        resize: none
                        color: var(--color-text)

                        // Disable number arrows
                        &[type="number"]
                            -moz-appearance: textfield

                        &[type="password"]::-ms-reveal,
                        &[type="password"]::-ms-clear
                            display: none

                        &[type="search"]::-webkit-search-decoration,
                        &[type="search"]::-webkit-search-cancel-button,
                        &[type="search"]::-webkit-search-results-button,
                        &[type="search"]::-webkit-search-results-decoration
                            display: none

                        &:focus
                            outline: none

                        &::-webkit-outer-spin-button,
                        &::-webkit-inner-spin-button
                            -webkit-appearance: none
                            margin: 0

                    .placeholder
                        font-size: inherit
                        height: 100%
                        width: 100%
                        line-height: 1.5
                        position: absolute
                        top: 0
                        left: 0
                        display: flex
                        align-items: center
                        padding-block: 0
                        padding-left: var(--mui-left-input-padding__)
                        padding-right: var(--mui-right-input-padding__)
                        white-space: nowrap
                        overflow: hidden
                        text-overflow: ellipsis
                        text-align: left
                        pointer-events: none
                        transition: opacity 160ms
                        color: var(--color-text-soft)
                        transform-origin: top left
                        user-select: none
                        opacity: .8

            .label
                font-size: inherit
                height: 100%
                width: 100%
                line-height: 1.5
                position: absolute
                top: 0
                left: 0
                z-index: 1
                display: flex
                align-items: center
                padding-block: 0
                padding-left: var(--mui-left-input-padding__)
                padding-right: var(--mui-right-input-padding__)
                white-space: nowrap
                overflow: hidden
                text-overflow: ellipsis
                text-align: left
                pointer-events: none
                transition: all 200ms
                color: var(--color-text-soft)
                transform-origin: top left
                user-select: none

        .border,
        .tint-background
            height: 100%
            width: 100%
            position: absolute
            top: 0
            left: 0
            z-index: 3
            border-radius: inherit
            border-width: 1px
            border-style: solid
            border-color: var(--color-border)
            pointer-events: none

        .tint-background
            z-index: 1
            border: none !important
            background: transparent
            opacity: 0

        .bottom-bar
            height: 1.3em
            width: 100%
            position: absolute
            top: 100%
            left: 0
            gap: 1em
            padding: 0 1em
            display: flex
            align-items: flex-end
            user-select: none
            pointer-events: none

            .helper-text
                font-size: .75em
                color: var(--color-text-soft)
                line-height: 1.5
                flex: 1
                white-space: nowrap
                overflow: hidden
                text-overflow: ellipsis

            .max-text
                font-size: .75em
                color: var(--color-text-soft)
                line-height: 1.5
                white-space: nowrap
                overflow: hidden
                text-overflow: ellipsis
                justify-self: flex-end
                margin-left: auto
</style>@/components/library/helpers/nativeReactiveness