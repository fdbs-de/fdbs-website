<template>
    <section id="hero">
        <HeLimiter>
            <div class="hero-content">
                <div class="bg" :style="`height: calc(100% - ${offset}px); top: ${offset}px;`">
                    <h1><b>Marketing</b> // <b>Kommunikation</b></h1>
                </div>
            </div>
        </HeLimiter>
    </section>
    <SectionGrid>
        <Card :is="NuxtLink" cover to="/mkbs/social-media" name="Social Media" image="
            /images/content/mkbs/banner/header_some.png" />

        <Card :is="NuxtLink" cover to="/mkbs/print" name="Print Design"
            image="/images/content/mkbs/banner/header_print.png" />

        <Card :is="NuxtLink" cover to="/mkbs/crossmedia" name="Crossmedia Marketing"
            image="/images/content/mkbs/banner/header_cossmedia_292968998.png" />
    </SectionGrid>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Marketing & Kommunikation',
        description: '',
    })

    const NuxtLink = defineNuxtLink({})



    // START: Scroll handling
    const offset = ref(0)

    onMounted(() => {
        window.addEventListener('scroll', () => {
            offset.value = window.scrollY
        })

        offset.value = window.scrollY
    })
    // END: Scroll handling
</script>

<style lang="sass" scoped>
    section#hero
        display: flex
        margin-top: 1rem
        width: 100%

        .limiter
            display: flex

        .hero-content
            display: flex
            width: 100%
            aspect-ratio: 2
            position: relative
            overflow: hidden
            border-radius: var(--radius-xl)

            .bg
                position: absolute
                top: 0
                left: 0
                background: var(--color-background-soft)
                width: 100%
                height: 100%
                background-image: url('/images/content/mkbs/woman.jpg')
                background-size: cover
                background-position: center
                background-repeat: no-repeat
                border-radius: var(--radius-xl)
                overflow: hidden

            h1
                position: absolute
                z-index: 1
                bottom: 0
                left: 0
                width: 100%
                color: #ffffffcc
                padding: 4rem 1rem 2rem
                margin: 0
                text-align: center
                background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 70%)
                font-size: clamp(1.5rem, 5vw, 3rem)
                font-weight: 400

                b
                    color: #ffffff
  
    
    @media only screen and (max-width: 1000px)
        section#about
            padding: 10rem 0

    @media only screen and (max-width: 600px)
        section#about
            padding: 5rem 0

            .mega-heading
                .fancy,
                b
                    color: var(--color-local-primary)
                    -webkit-text-stroke: 0 transparent
</style>
