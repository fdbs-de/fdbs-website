<template>
    <button
        type="button"
        class="iod-container iod-file-input"
        :class="classes"
        tabindex="-1"
        @click="uploadInput?.click()"
    >
        <div class="border" v-if="border"></div>

        <IodIcon icon="upload"/>
        <div class="text-wrapper">
            <label class="label">{{ label }}</label>
            <small>Dateien via Drag and Drop auswählen oder <span class="fake-link">Gerät durchsuchen</span></small>
            <small v-if="helper">{{helper}}</small>
            
            <input type="file" ref="uploadInput" :multiple :accept @change="upload"/>
        </div>
        <div class="upload-wrapper" v-show="selectedFiles.length > 0">
            <span>Ausgewählt:</span>
            <small v-for="file in selectedFiles.slice(0, 3)">{{ file }}</small>
            <small v-show="selectedFiles.length > 3">...und {{ selectedFiles.length - 3 }} weitere</small>
        </div>
    </button>
</template>

<script lang="ts" setup>
    const props = defineProps({
        modelValue: {
            type: Array,
            default: () => [],
        },
        label: {
            type: String,
            default: '',
        },
        helper: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        border: {
            type: Boolean,
            default: false,
        },
        multiple: {
            type: Boolean,
            default: false,
        },
        accept: {
            type: String,
            default: '',
        },
    })

    const emits = defineEmits([
        'update:modelValue',
    ])

    const uploadInput = ref()
    const selectedFiles = ref<Array<string>>([])



    const classes = computed((): object => {
        return [
            {
                // 'focused': isFocused.value,
                // 'filled': isFilled.value,
                // 'invalid': !isValid.value,
                'disabled': props.disabled,
                // 'obfuscated': isObfuscated.value,
            }
        ]
    })



    const upload = (e: Event) => {
        const files = (e.target as HTMLInputElement).files as FileList
        selectedFiles.value = []
        
        for (const file of files)
        {
            selectedFiles.value.push(file.name)
        }

        emits('update:modelValue', files)
    }
</script>

<style lang="sass" scoped>
    .iod-container.iod-file-input
        font-size: 1rem

        --local-color-background: var(--color-primary)
        --local-color-text: var(--color-on-primary)
        --local-font-size: 1rem

        --local-color-border: var(--color-border)

        position: relative
        display: flex
        flex-direction: column
        background: var(--color-background-soft)
        border-radius: var(--radius-m)
        user-select: none

        *
            box-sizing: inherit

        &.focused
            --local-color-border: var(--color-border-focused)

        &.disabled
            --local-color-border: var(--color-border-disabled)
            background: var(--color-background-disabled)

        &.invalid
            --local-color-border: var(--color-error)



        .border
            height: 100%
            width: 100%
            position: absolute
            top: 0
            left: 0
            z-index: 3
            border-radius: inherit
            border-width: 1px
            border-style: solid
            border-color: var(--local-color-border)
            pointer-events: none

        .iod-icon
            flex: none
            position: relative
            display: flex
            height: 4.5rem
            width: 4.5rem
            margin: 1.5rem auto 0
            font-size: 2.5rem
            color: var(--color-primary)
            border-radius: 50%

            &::before
                content: ''
                position: absolute
                top: 0
                left: 0
                bottom: 0
                right: 0
                background: currentColor
                border-radius: inherit
                opacity: .2

        .text-wrapper
            display: flex
            flex-direction: column
            align-items: center
            padding-inline: 1rem
            margin-block: 1.5rem

            .fake-link
                color: var(--color-text)
                cursor: pointer

                &:hover
                    color: var(--color-text-soft)
        
            input[type="file"]
                display: none

        .upload-wrapper
            display: flex
            flex-direction: column
            padding: 1rem
            border-top: 1px solid var(--local-color-border)
</style>