<template>
    <div class="he-container he-carousel">
        <TransitionGroup :name="'slide-'+direction" tag="div" class="slides">
            <div class="slide" v-for="slide in slides" :key="slide" v-show="slide == currentSlide">
                <slot :name="slide"></slot>
            </div>
        </TransitionGroup>
        
        <div class="controls" :class="{overlay: overlay}" :style="'animation-duration: '+interval+'ms'">
            <IodIconButton v-if="arrows" aria-label="Vorigen Slide anzeigen" icon="west" corner="pill" variant="contained" size="s" @click="prevSlide(true)" />
            <div v-if="dots" class="dots">
                <button class="dot" :aria-label="'Slide Nr. '+i+' anzeigen'" :class="{autoplay: autoSlide, active: slide == currentSlide}" v-for="(slide, i) in slides" :key="slide" @click="goToSlide(slide, true)"></button>
            </div>
            <IodIconButton v-if="arrows" aria-label="Nächsten Slide anzeigen" icon="east" corner="pill" variant="contained" size="s" @click="nextSlide(true)" />
        </div>
    </div>
</template>

<script setup lang="ts">
    const slots = useSlots()
    const props = defineProps({
        infinite: {
            type: Boolean,
            default: false,
        },
        dots: {
            type: Boolean,
            default: false,
        },
        arrows: {
            type: Boolean,
            default: false,
        },
        interval: {
            type: Number,
            default: 0,
        },
        overlay: {
            type: Boolean,
            default: false,
        },
    })

    const autoSlide = ref<Boolean>(false)
    const currentSlide = ref<string|null>(null)
    const direction = ref<'ltr' | 'rtl'>('rtl')
    const slides = computed(() => Object.keys(slots))



    function prevSlide(stopAutoPlay: Boolean = false)
    {
        // Get index
        let index = slides.value.indexOf(currentSlide.value as string)

        index--

        // Cycle if needed and enabled
        if (index < 0 && props.infinite) index = slides.value.length - 1

        // Prevent underflow
        if (index < 0) index = 0
        
        // Set slide
        currentSlide.value = slides.value[index]

        // Set direction
        direction.value = 'ltr'

        // Stop auto play
        if (stopAutoPlay) autoPlay().off()
    }

    function nextSlide(stopAutoPlay: Boolean = false)
    {
        // Get index
        let index = slides.value.indexOf(currentSlide.value as string)

        index++

        // Cycle if needed and enabled
        if (index >= slides.value.length && props.infinite) index = 0

        // Prevent overflow
        if (index >= slides.value.length) index = slides.value.length - 1
        
        // Set slide
        currentSlide.value = slides.value[index]

        // Set direction
        direction.value = 'rtl'

        // Stop auto play
        if (stopAutoPlay) autoPlay().off()
    }

    function goToSlide(slide: string, stopAutoPlay: Boolean = false)
    {
        let oldIndex = slides.value.indexOf(currentSlide.value as string)
        let newIndex = slides.value.indexOf(slide)

        // Set slide
        currentSlide.value = slide

        // Set direction
        direction.value = oldIndex < newIndex ? 'rtl' : 'ltr'

        // Stop auto play
        if (stopAutoPlay) autoPlay().off()
    }

    function autoPlay()
    {
        return {
            on: () => { autoSlide.value = true },
            off: () => { autoSlide.value = false },
        }
    }


    onMounted(() => {
        // Set first slide
        currentSlide.value = slides.value[0]

        if (props.interval > 0)
        {
            autoSlide.value = true

            setInterval(() => {
                if (!autoSlide.value) return
    
                nextSlide()
            }, props.interval)
        }
    })
</script>

<style lang="sass" scoped>
    .he-container.he-carousel
        display: flex
        flex-direction: column
        min-height: 3.5rem
        background: var(--color-background-soft)
        position: relative
        overflow: hidden

        .slide-ltr-enter-active,
        .slide-ltr-leave-active,
        .slide-rtl-enter-active,
        .slide-rtl-leave-active
            transition: all 500ms ease-in-out

        .slide-ltr-leave-active,
        .slide-rtl-leave-active
            position: absolute

        .slide-ltr-enter-from,
        .slide-rtl-leave-to
            transform: translateX(-100%)
            opacity: 0

        .slide-ltr-leave-to,
        .slide-rtl-enter-from
            transform: translateX(100%)
            opacity: 0



        .slides
            flex: 1
            border-radius: inherit
            height: 100%
            position: relative
            overflow: hidden

            .slide
                position: absolute
                top: 0
                bottom: 0
                left: 0
                right: 0

        .controls
            position: relative
            left: 0
            right: 0
            display: flex
            justify-content: space-between
            align-items: center
            padding: 1rem .5rem .5rem
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4))
            color: var(--color-on-primary)
            border-bottom-left-radius: inherit
            border-bottom-right-radius: inherit

            &.overlay
                position: absolute
                z-index: 1
                bottom: 0

            .iod-container.iod-button
                --local-color-background: currentColor
                width: 3rem

            .dots
                flex: 1
                display: flex
                flex-wrap: wrap
                justify-content: center
                align-items: center
                gap: .5rem
                padding: .5rem
                animation-duration: inherit

                .dot
                    display: inline-block
                    width: 2rem
                    height: 5px
                    border-radius: 4px
                    cursor: pointer
                    position: relative
                    animation-duration: inherit
                    overflow: hidden

                    &::before,
                    &::after
                        content: ""
                        position: absolute
                        top: 0
                        left: 0
                        right: 0
                        bottom: 0
                        opacity: 0
                        background-color: currentColor
                        transform-origin: left center

                    &::before
                        opacity: .2
                        display: block

                    &::after
                        opacity: 1
                        display: none
                        transform: scaleX(0)
                        animation: fill linear infinite
                        animation-duration: inherit

                    @keyframes fill
                        0%
                            transform: scaleX(0)
                        100%
                            transform: scaleX(1)

                    &:hover,
                    &:focus
                        &::before
                            opacity: .7 !important

                    &.active:not(.autoplay)
                        &::before
                            opacity: 1 !important

                    &.active.autoplay
                        &::before
                            opacity: .5
                        &::after
                            display: block
</style>