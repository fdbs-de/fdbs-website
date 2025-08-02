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
    <section id="about">
        <HeLimiter>
            <h2 class="mega-heading">
                <div class="larger">
                    <span class="word">Wir </span>
                    <span class="word">sind </span>
                    <span class="word"><b>MKBS</b> ✨</span>
                </div>
                <br>
                <br>
                <span class="word">Wir </span>
                <span class="word">kümmern </span>
                <span class="word">uns </span>
                <span class="word">um </span>
                <span class="word">Ihr </span>
                <span class="word">Marketing.</span>
                <br>
                <span class="word">Ob </span>
                <!-- <NuxtLink class="word fancy red" to="/mkbs/web">Web</NuxtLink> -->
                <!-- <span class="word">, </span> -->
                <NuxtLink class="word fancy blue" to="/mkbs/social-media">Social Media</NuxtLink>
                <span class="word">, </span>
                <NuxtLink class="word fancy yellow" to="/mkbs/print">Print</NuxtLink>
                <span class="word"> oder </span>
                <NuxtLink class="word fancy green" to="/mkbs/crossmedia">Crossmedia Marketing</NuxtLink>
                <span class="word">.</span>
                <br>
                <span class="word">Wir </span>
                <span class="word">bringen </span>
                <span class="word">Sie </span>
                <span class="word">an </span>
                <span class="word">die </span>
                <span class="word"><b>Spitze</b>! 💪</span>
            </h2>
        </HeLimiter>
    </section>
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



    section#about
        padding: 12.5rem 0

        .mega-heading
            font-size: clamp(1.3rem, 5vw, 4.7rem)
            font-weight: 400
            margin: 0
            line-height: 1.4
            text-align: left
            font-family: var(--font-text)

            .larger
                font-size: clamp(2.5rem, 5vw, 6rem)
                font-weight: 700
                display: contents


            .word
                transition: opacity 100ms ease-in-out
                --color-local-primary: var(--color-text)

                &.red
                    --color-local-primary: #eb3b5a

                &.blue
                    --color-local-primary: #4b7bec

                &.yellow
                    --color-local-primary: #f7b731

                &.green
                    --color-local-primary: #20bf6b

            &:has(.fancy:hover) .word:not(.fancy:hover)
                opacity: .5

            .fancy,
            b
                font-weight: 900
                color: transparent
                transition: all 100ms ease-in-out
                -webkit-text-stroke: 0.02em var(--color-local-primary)

            .fancy:hover
                color: var(--color-local-primary)


    
    section#survey
        padding-block: 5rem
        background: var(--color-background-soft)
        position: relative

        &::before,
        &::after
            content: ''
            width: 100%
            height: 1rem
            border-radius: 1rem
            background: var(--color-background)
            position: absolute

        &::before
            top: 0
            left: 0
            border-radius: 0 0 1rem 1rem

        &::after
            bottom: 0
            left: 0
            border-radius: 1rem 1rem 0 0

        h2
            font-size: clamp(1.5rem, 5vw, 2.5rem)
            margin: 0 0 3rem
            line-height: 1.4
            text-align: center
            font-family: var(--font-text)

    
    
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
