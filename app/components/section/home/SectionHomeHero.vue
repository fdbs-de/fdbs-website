<template>
    <section class="section-home-hero">
        <video src="/images/content/background_loop.mp4" loop muted autoplay controls="false"></video>
        <div class="content-wrapper">
            <h1>Wir sind FDBS</h1>
            <HeLimiter is="p" size="text">
                Ihr kompetenter Großhandel und Foodservice in Braunschweig.
                Von <NuxtLink to="/foodservice">Food</NuxtLink>
                über <NuxtLink style="white-space: nowrap;" to="/foodservice">Non-Food</NuxtLink>
                bis hin zum <NuxtLink to="/mkbs">Marketing</NuxtLink>
                und <NuxtLink to="/technischer-kundendienst">technischen Kundendienst</NuxtLink> können wir Ihnen helfen.
            </HeLimiter>
            <!-- <a class="bottom-cta" href="#services">
                Unsere Services
                <img src="/images/app/arrow_white_down.svg" alt="arrow down">
            </a> -->
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="sass" scoped>
    .section-home-hero
        width: 100%
        position: relative
        background: var(--color-background-soft)

        video
            width: 100%
            height: 100%
            object-fit: cover
            position: absolute
            top: 0
            left: 0
            z-index: 0

        &::after
            content: ''
            background-color: rgb(white, 0.85)
            background-image: linear-gradient(rgb(white, 0) 70%, rgb(white, 1) 100%)
            width: 100%
            height: 100%
            position: absolute
            bottom: 0
            left: 0
            z-index: 1

        .content-wrapper
            min-height: 70vh
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            position: relative
            z-index: 2
            padding: 2rem 1rem
            font-family: var(--font-heading)

            > h1
                font-size: clamp(2.2rem, 10vw, 6rem)
                font-weight: 700
                color: var(--color-primary)
                margin-block: 1rem

            > p
                font-size: clamp(1.25rem, 2vw, 1.7rem)
                text-align: center
                color: var(--color-text)

                a
                    font-weight: 700
                    color: var(--color-primary)

                    &:hover
                        color: var(--color-secondary)

            .bottom-cta
                height: 3rem
                color: var(--color-text)
                background: var(--color-background)
                border-radius: 3rem
                padding: 0 2rem
                display: flex
                align-items: center
                justify-content: center
                font-family: var(--font-heading)
                font-weight: 500
                font-size: 1rem
                white-space: nowrap
                filter: drop-shadow(0 .5rem .5rem rgb(0 0 0 / .15))
                position: absolute
                bottom: 2rem
                left: 50%
                transform: translate(-50%, 0)
                animation: float 4s infinite ease-in-out

                > img
                    position: absolute
                    top: 100%
                    left: 50%
                    transform: translate(-50%, 0)
                    pointer-events: none

                @keyframes float
                    0%
                        transform: translate(-50%, -1rem)
                    50%
                        transform: translate(-50%, 0rem)
                    100%
                        transform: translate(-50%, -1rem)
</style>