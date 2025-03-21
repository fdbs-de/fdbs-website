<template>
    <section class="fdbs-testimonials">
        <HeLimiter>
            <div class="content-wrapper">
                <div class="plain text-plain">
                    <h2>
                        Eindrücke<br>
                        unserer<br>
                        <b>{{currentTestimonial.type}}</b>
                    </h2>
                </div>
                <div class="plain slider-plain">
                    <div class="testimonial-outer-wrapper">
                        <TransitionGroup tag="div" class="animation-wrapper" :name="`slide-${direction}`">
                            <div class="testimonial-inner-wrapper" v-for="testimonial in testimonials" :key="testimonial.id" v-show="currentTestimonial.id === testimonial.id">
                                <div class="bubble">
                                    <p>{{ testimonial.text }}</p>
                                    <img src="/images/app/arrow_white_down.svg" alt="arrow down">
                                </div>
                                <div class="author">
                                    <img :src="testimonial.author.image" :alt="testimonial.author.name">
                                    <span class="name">
                                        {{ testimonial.author.name }} –
                                        <a :href="testimonial.author.link" target="_blank">{{ testimonial.author.company }}</a>
                                    </span>
                                </div>
                            </div>
                        </TransitionGroup>
                        <div class="testimonial-controls">
                            <IodIconButton type="button" icon="west" variant="contained" corner="pill" @click="previous(); stopAutoplay()"/>
                            <IodIconButton type="button" icon="east" variant="contained" corner="pill" @click="next(); stopAutoplay()"/>
                        </div>
                    </div>
                </div>
            </div>
        </HeLimiter>
    </section>
</template>

<script setup>
    const testimonials = ref([
        {
            id: 1,
            type: 'Partner',
            text: 'Seit vielen Jahren arbeiten wir sehr gerne mit dem FDBS als verlässlichen Kunden zusammen. Dabei sind in enger Kooperation viele spannende Projekte für den FDBS und seine Kunden entstanden. Wir freuen uns auf viele weitere Jahre guter Zusammenarbeit!',
            author: {
                image: '/images/content/testimonials/schmiedel.png',
                name: 'Michael Schmiedel',
                company: 'SignPoint GmbH',
                link: 'https://signpoint.de',
            },
        },
        {
            id: 3,
            type: 'Partner',
            text: 'Der FDBS ist für uns als R&S Vertriebs GmbH seit weit über 30 Jahren ein wichtiger Handelspartner. Die Zusammenarbeit ist stets unbürokratisch und Entscheidungen für ein Produkt werden schnell, zuverlässig und kurzfristig getroffen. Der FDBS unterstützt uns auch kreativ, indem sie unsere Werbemittel auf ihren eigenen Webseiten und in Handzetteln veröffentlicht und Vorschläge zu neuen Gestaltungen macht. Für uns ist die FDBS ein wichtiger und kompetenter Großhändler und Partner, mit viel Know-How und einem tollen Team!',
            author: {
                image: '/images/content/testimonials/kuehne.png',
                name: 'Ralf Kühne',
                company: 'Verkaufsleitung R&S Nord',
                link: 'https://www.rs-europa.com/',
            }
        },
    ])

    const currentTestimonialIndex = ref(0)
    const autoplayInterval = ref(10000)
    const direction = ref('left')
    let autoplay

    const currentTestimonial = computed(() => testimonials.value[currentTestimonialIndex.value])



    const next = () => {
        direction.value = 'left'
        currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % testimonials.value.length
    }

    const previous = () => {
        direction.value = 'right'
        currentTestimonialIndex.value = (currentTestimonialIndex.value - 1 + testimonials.value.length) % testimonials.value.length
    }



    onMounted(() => {
        startAutoplay()
    })

    function startAutoplay()
    {
        autoplay = setInterval(() => {
            next()
        }, autoplayInterval.value)
    }

    function stopAutoplay()
    {
        clearInterval(autoplay)
    }
</script>

<style lang="sass" scoped>
    .fdbs-testimonials
        --cut: 5vw
        width: 100%
        position: relative
        background: var(--color-background-soft)
        background-image: url('/images/content/testimonials/testimonials_bg.png')
        background-size: cover
        background-position: center
        background-repeat: no-repeat
        background-attachment: fixed
        clip-path: polygon(0 var(--cut), 100% 0, 100% calc(100% - var(--cut)), 0 100%)

        &::before
            content: ''
            background-image: linear-gradient(90deg, rgb(#364040, .7) 40%, rgb(#364040, 0) 60%)
            width: 100%
            height: 100%
            position: absolute
            bottom: 0
            left: 0
            z-index: 1
            pointer-events: none

        &::after
            content: ''
            background-image: linear-gradient(#00000000, #000000aa)
            width: 100%
            height: 8rem
            position: absolute
            bottom: 0
            left: 0
            z-index: 3
            pointer-events: none

        .content-wrapper
            display: flex
            position: relative
            z-index: 2
            gap: 4rem

            h2
                font-size: clamp(2rem, 10vw, 3.5rem)
                font-weight: 400
                margin-block: 0
                color: var(--color-on-primary)

                b
                    font-weight: 700
                    color: var(--color-primary)

            .plain
                flex: 1
                display: flex
                padding-top: 10rem
                max-width: 600px

            .testimonial-outer-wrapper
                flex: 1
                display: flex
                flex-direction: column
                gap: 2rem
                padding: 2rem
                padding-bottom: 10rem
                border-radius: 16px 16px 0 0
                background: rgb(white, .4)
                border-top: 2px solid rgb(white, .3)
                border-right: 2px solid rgb(white, .3)
                backdrop-filter: blur(15px)
                overflow: hidden

                .animation-wrapper
                    position: relative

                .slide-left-move,
                .slide-right-move,
                .slide-left-enter-active,
                .slide-right-enter-active,
                .slide-left-leave-active,
                .slide-right-leave-active
                    transition: all 700ms ease

                .slide-left-enter-from,
                .slide-right-leave-to
                    transform: translate(100%, 0) !important
                    opacity: 0

                .slide-right-enter-from,
                .slide-left-leave-to
                    transform: translate(-100%, 0) !important
                    opacity: 0

                .slide-left-leave-active,
                .slide-right-leave-active
                    top: 0
                    position: absolute

                .testimonial-inner-wrapper
                    display: flex
                    flex-direction: column
                    border-radius: 16px
                    background: rgb(white, .6)
                    padding: 2px

                    .bubble
                        border-radius: 14px
                        background: white
                        padding: 1rem
                        position: relative

                        > p
                            margin: 0

                        > img
                            position: absolute
                            top: 100%
                            left: 2.25rem
                            transform: translate(-50%, 0)
                            pointer-events: none

                    .author
                        display: flex
                        align-items: center
                        padding: 1rem
                        gap: 1rem

                        img
                            height: 2.5rem
                            width: 2.5rem
                        
                        .name
                            font-size: .9rem
                            color: var(--color-text)
                            font-family: var(--font-heading)

                .testimonial-controls
                    display: flex
                    justify-content: space-between

                    .iod-button
                        --local-color-background: white
                        height: 2.25rem
                        width: 3.5rem



    @media only screen and (max-width: 900px)
        .fdbs-testimonials
            &::before
                background-image: linear-gradient(0deg, rgb(#364040, .7) 40%, rgb(#364040, 0) 60%)

            .content-wrapper
                flex-direction: column
                align-items: center

                .text-plain
                    text-align: center

                .slider-plain
                    padding-top: 0



    @media only screen and (max-width: 500px)
        .fdbs-testimonials
            &::after
                height: 4rem

            .content-wrapper
                .text-plain
                    padding-top: 6rem

                .slider-plain
                    .testimonial-outer-wrapper
                        padding: 1rem
                        padding-bottom: 5rem
</style>