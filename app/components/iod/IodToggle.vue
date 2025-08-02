<template>
    <div
        ref="containerElement"
        class="iod-container iod-toggle"
        :class="classes"
        :tabindex="tabindex"
        :role="type__"
        :aria-checked="internalValue"
        :disabled="disabled"
        :aria-disabled="disabled"
        :aria-readonly="readonly"
        @click="inputEvent('input', $event); toggle($event)"
        @focus="inputEvent('focus', $event)"
        @blur="inputEvent('blur', $event)"
        @keydown="inputEvent('keydown', $event)"
        @keyup="inputEvent('keyup', $event)"
        @keypress="inputEvent('keypress', $event)"
        @keydown.esc="inputEvent('esc', $event)"
        @keydown.space.prevent="inputEvent('space', $event); toggle($event)"
        @keydown.enter="inputEvent('enter', $event)">

        <input class="input"
            readonly
            :name="name || 'generic'"
            :value="value__"
            :checked="internalValue"
            :disabled="disabled"
            :required="required"
            :type="dataType === 'boolean' ? 'checkbox' : 'hidden'">
        
        <div class="label" v-if="$slots.prependLabel || prependLabel">
            <slot name="prependLabel">{{prependLabel}}</slot>
        </div>
        
        <div class="checkbox-wrapper" v-if="type__ === 'checkbox'">
            <div class="focus-indicator"></div>
            <div class="checkbox">
                <transition name="checked">
                    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" v-show="internalValue" :style="`--mui-stroke-offset__: ${checkmarkPathLength}`">
                        <path ref="checkmarkPath" d="M3,12l6,6l12,-12"/>
                    </svg>
                </transition>
            </div>
        </div>

        <div class="switchbox" v-else-if="type__ === 'switch'">
            <div class="switchdot-wrapper">
                <div class="focus-indicator"></div>
                <div class="switchdot"></div>
            </div>
        </div>

        <div class="label" v-if="$slots.label || label">
            <slot name="label">{{label}}</slot>
        </div>

        <div class="border" v-if="border"></div>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed, onMounted, watch } from 'vue'



    const emits = defineEmits([
        'update:modelValue',
        'input',
        'focus',
        'blur',
        'keydown',
        'keyup',
        'keypress',
        'esc',
        'space',
        'enter',
    ])

    const props = defineProps({
        modelValue: {
            type: null as unknown as PropType<boolean | string | number | null | undefined>,
            default: null,
        },
        type: {
            type: String,
            default: 'checkbox',
        },
        name: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        required: {
            type: Boolean,
            default: false,
        },
        tabindex: {
            type: [Number, String],
            default: 0,
        },
        prependLabel: {
            type: String,
            default: '',
        },
        offValue: {
            type: [Boolean, String, Number, null] as PropType<boolean|string|number|null>,
            default: false,
        },
        label: {
            type: String,
            default: '',
        },
        value: {
            type: [Boolean, String, Number, null] as PropType<boolean|string|number|null>,
            default: true,
        },
        border: {
            type: Boolean,
            default: false,
        },
    })



    const isFocused = ref(false as boolean)
    const internalValue = ref(false as boolean)
    const containerElement = ref({} as HTMLElement)
    const checkmarkPath = ref({} as SVGPathElement)
    const checkmarkPathLength = ref(0 as number)



    const value__ = computed((): boolean|string|number|null|undefined => {
        return internalValue.value ? props.value : props.offValue
    })

    const type__ = computed((): string => {
        return ['checkbox', 'switch'].includes(props.type) ? props.type : 'checkbox'
    })

    const dataType = computed((): string => {
        return typeof props.offValue !== 'boolean' || typeof props.value !== 'boolean' ? 'string' : 'boolean'
    })

    const classes = computed((): object => {
        return {
            'active': internalValue.value,
            'disabled': props.disabled,
        }
    })



    const parseValue = (value: string|boolean|number|null|undefined) => {
        if (value === props.offValue) return false

        if (value === props.value) return true
        
        if (typeof value === 'boolean') return value

        return false
    }

    const toggle = (event: MouseEvent|KeyboardEvent): void => {
        if (shouldBounceEvent(event)) return

        internalValue.value = !internalValue.value
        emits('update:modelValue', value__.value)
    }

    const inputEvent = (type: 'update:modelValue' | 'input' | 'focus' | 'blur' | 'keydown' | 'keyup' | 'keypress' | 'esc' | 'space' | 'enter', event: MouseEvent|KeyboardEvent|FocusEvent): void => {
        emits(type, event)

        switch (type)
        {
            case 'focus': isFocused.value = true; break;
            case 'blur': isFocused.value = false; break;
        }
    }

    const shouldBounceEvent = (event: MouseEvent|KeyboardEvent): boolean => {
        if (props.disabled) return true

        if (props.readonly) return true
        

        // It is possible to pass a clickable element inside the component
        // We have to bounce the click event if the origin is from such an element
        // First we get the path of the event
        let path = event.composedPath() as HTMLElement[]

        // Then we go through the path
        for (const element of path)
        {
            // Only go through child elements and stop at the container element
            if (element === containerElement.value) return false

            // Bounce event for all elements with the "iod-container" class
            if ([...element.classList].includes('iod-container')) return true

            // Bounce event for interactive elements
            if (['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(element.tagName)) return true
        }

        return false
    }



    onMounted((): void => {
        checkmarkPathLength.value = type__.value === 'checkbox' ? checkmarkPath.value.getTotalLength() || 0 : 0
    })



    watch(() => props.modelValue, (newValue): void => {
        internalValue.value = parseValue(newValue)
    }, {
        immediate: true,
    })
</script>

<style lang="sass" scoped>
    .iod-container.iod-toggle
        --local-color-off: var(--color-border)
        --local-color-off-text: var(--color-background)
        --local-color-on: var(--color-text)
        --local-color-on-text: var(--color-background)

        font-size: 1rem
        position: relative
        vertical-align: top
        display: inline-flex
        align-items: center
        justify-content: flex-start
        gap: 1em
        padding-inline: 0.625em
        padding-block: .5em
        min-height: 2.5em
        cursor: pointer
        user-select: none
        border-radius: var(--radius-m)
        box-sizing: border-box

        *
            box-sizing: inherit

        &.active
            .checkbox
                background: var(--local-color-on)
                border-color: var(--local-color-on)
                color: var(--local-color-on-text)

            .switchbox
                border-color: var(--local-color-on)
                background: var(--local-color-on)
                color: var(--local-color-on-text)

                .switchdot-wrapper
                    left: calc(100% - 1.25em + 4px)



        &:hover:not(.disabled)
            .focus-indicator
                opacity: .075
                transform: translate(-50%, -50%) scale(1)



        &:focus:not(.disabled)
            outline: none
            
            .focus-indicator
                opacity: .15
                transform: translate(-50%, -50%) scale(1)



        &.disabled
            cursor: initial

            .checkbox
                border-color: var(--color-background-disabled)
                background: transparent
                color: var(--color-text-soft-disabled)

            .switchbox
                border-color: var(--color-background-disabled)
                background: var(--color-background-disabled)
                color: var(--color-text-soft-disabled)

        &.disabled.active
            .checkbox
                border-color: var(--color-background-disabled)
                background: var(--color-background-disabled)



        .checkbox-wrapper
            height: 1.25em
            width: 1.25em
            display: flex
            align-items: center
            justify-content: flex-start
            flex: none
            position: relative

        .checkbox
            height: 100%
            width: 100%
            border-radius: 0.25em
            position: relative
            z-index: 1
            user-select: none
            border: 2px solid transparent
            transition: all 50ms ease-in-out

            border-color: var(--local-color-off)
            background: transparent
            color: var(--local-color-off-text)

            .checkmark
                height: 100%
                width: 100%
                position: absolute
                top: 0
                left: 0
                text-align: center
                color: inherit
                transition: stroke-dashoffset 80ms linear
                stroke-dasharray: var(--mui-stroke-offset__)
                stroke-dashoffset: 0
                fill: none
                stroke-width: 2.4
                stroke: currentColor
                stroke-linecap: round
                stroke-linejoin: round

                &.checked-enter-active
                    stroke-dashoffset: var(--mui-stroke-offset__)

                &.checked-leave-to
                    stroke-dashoffset: calc(-1 * var(--mui-stroke-offset__))

        .switchbox
            height: 1.25em
            width: 2.25em
            border-radius: 1em
            border: 2px solid transparent
            transition: all 50ms ease-in-out
            position: relative !important

            border-color: var(--local-color-off)
            background: var(--local-color-off)
            color: var(--local-color-off-text)

            .switchdot-wrapper
                height: calc(1.25em - 4px)
                aspect-ratio: 1
                transition: all 80ms cubic-bezier(0.80, 0, 0.2, 1)
                position: absolute
                top: 0
                left: 0
                pointer-events: none

                .switchdot
                    height: 100%
                    width: 100%
                    border-radius: 50%
                    position: relative
                    z-index: 1
                    background: currentColor

        .focus-indicator
            height: 2.25em
            width: 2.25em
            border-radius: 50%
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%) scale(.6)
            transition: all 100ms ease-in-out
            background: var(--color-text)
            opacity: 0
            pointer-events: none

        .input
            display: none
        
        .label
            line-height: 1.25
            user-select: none
            flex: unset

        .border
            height: 100%
            width: 100%
            position: absolute
            top: 0
            left: 0
            border-radius: inherit
            border: 1px solid var(--color-border)
            pointer-events: none
</style>