<template>
    <Teleport to="body">
        <FocusTrap :active="isOpen" @deactivate="close()">
            <div class="iod-container iod-popup popup-outer-wrapper scrollbar" :class="classes" :style="styles" @click.self.exact="closeOnBackdropClick()">
                <div class="popup-inner-wrapper">
                    <div class="popup-content small-scrollbar">
                        <slot></slot>
                    </div>
    
                    <div class="popup-header" v-if="!noHeader">
                        <h3>{{ title }}</h3>
                        <IodButton label="esc" icon-right="close" corner="pill" variant="contained" @click="close()"/>
                    </div>
                </div>
            </div>
        </FocusTrap>
    </Teleport>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { FocusTrap } from 'focus-trap-vue'


    const emits = defineEmits([
        'open',
        'close',
    ])

    const props = defineProps({
        title: {
            type: String,
            default: '',
        },
        placement: {
            type: String as PropType<'left' | 'center' | 'right'>,
            default: 'center',
        },
        shouldCloseOnBackdropClick: {
            type: Boolean,
            default: false,
        },
        noHeader: {
            type: Boolean,
            default: false,
        },
        blur: {
            type: String,
            default: '20px',
        },
        maxWidth: {
            type: String,
            default: '700px',
        },
        backdropColor: {
            type: String,
            default: 'rgb(33 34 36 / 80%)',
        },
        modalColor: {
            type: String,
            default: 'var(--color-background)',
        },
    })

    const isOpen = ref(false)

    const classes = computed(() => {
        return [
            `popup-placement-${props.placement}`,
            {
                'open': isOpen.value
            },
        ]
    })

    const styles = computed(() => {
        return {
            '--local-blur': props.blur,
            '--local-max-width': props.maxWidth,
            '--local-color-backdrop': props.backdropColor,
            '--local-color-modal': props.modalColor,
        }
    })



    function open()
    {
        isOpen.value = true
        emits('open')
    }

    function close()
    {
        isOpen.value = false
        emits('close')
    }

    function closeOnBackdropClick()
    {
        if (!props.shouldCloseOnBackdropClick) return

        close()
    }



    // Expose functions
    defineExpose({
        open,
        close,
    })
</script>

<style lang="sass" scoped>
    .iod-container.iod-popup
        --local-blur: 20px
        --local-max-width: 700px
        --local-color-backdrop: rgb(61 65 69 / 80%)
        --local-color-modal: var(--color-background)

        position: fixed
        z-index: 10000
        bottom: 0
        left: 0
        height: 100%
        width: 100%
        pointer-events: none
        background: transparent
        perspective: 1000px
        transition: background 300ms
        box-sizing: border-box
        overflow: hidden

        *
            box-sizing: inherit

        .popup-inner-wrapper
            position: relative
            z-index: 1
            max-width: var(--local-max-width)
            display: flex
            flex-direction: column
            transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1)

            .popup-header
                flex: none
                display: flex
                align-items: center
                padding: 1rem
                
                h3
                    flex: 1
                    margin: 0
                    font-size: 1.25rem
                    font-weight: 500
                    color: inherit
                    white-space: nowrap
                    text-overflow: ellipsis
                    overflow: hidden

                .iod-button
                    --local-color-background: currentColor

            .popup-content
                display: flex
                flex-direction: column
                order: 1

        &.popup-placement-left,
        &.popup-placement-right
            .popup-inner-wrapper
                background: var(--local-color-modal)
                height: 100%
                overflow-y: hidden
                width: calc(100% - 2rem)

                .popup-header
                    color: var(--color-text)
                    border-bottom: 1px solid var(--color-border)

                .popup-content
                    overflow: auto
                    flex: 1

        &.popup-placement-left
            .popup-inner-wrapper
                margin: 0 auto 0 0
                transform: translateX(-100%)

        &.popup-placement-right
            .popup-inner-wrapper
                margin: 0 0 0 auto
                transform: translateX(100%)

        &.popup-placement-center
            overflow-y: hidden

            .popup-inner-wrapper
                margin: 6rem auto
                width: calc(100% - 2rem)
                transform-origin: center center -200px
                transform: rotateX(-10deg)
                opacity: 0

                .popup-header
                    color: white

                .popup-content
                    background: var(--local-color-modal)
                    border-radius: var(--radius-l)

        &.open
            pointer-events: all
            overflow-y: auto
            background: var(--local-color-backdrop)
            backdrop-filter: blur(var(--local-blur))
                
            .popup-inner-wrapper
                transform: rotateX(0deg) translateX(0)
                opacity: 1
</style>