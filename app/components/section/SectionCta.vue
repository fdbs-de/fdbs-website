<template>
    <section class="section-cta" :style="`background-image: url(${src}); --local-color: ${color}`">
        <HeLimiter>
            <div class="content-wrapper">
                <div class="plain text-plain">
                    <slot></slot>
                </div>
            </div>
        </HeLimiter>
    </section>
</template>

<script lang="ts" setup>
    defineProps({
        color: String,
        src: String,
    })
</script>

<style lang="sass" scoped>
    .section-cta
        --local-color: var(--color-primary)
        width: 100%
        position: relative
        background: var(--color-background-soft)
        background-size: cover
        background-position: center
        background-repeat: no-repeat
        background-attachment: fixed
        padding-block: 10rem

        &::after
            content: ''
            background-color: var(--local-color)
            mask: linear-gradient(85deg, rgb(white, 1) 40%, rgb(white, .2) 60%)
            width: 100%
            height: 100%
            position: absolute
            bottom: 0
            left: 0
            z-index: 1

        .content-wrapper
            display: flex
            position: relative
            z-index: 2
            gap: 4rem
            
            .plain
                color: var(--color-on-primary)
                display: flex
                flex-direction: column
                align-items: stretch
                position: relative
                z-index: 2
                gap: 2rem



    @media only screen and (max-width: 500px)
        .section-cta
            &::after
                mask: linear-gradient(0deg, rgb(white, 1) 20%, rgb(white, .4) 80%)

            .content-wrapper
                justify-content: center
                gap: 2rem

                .plain
                    text-align: center
                    align-items: center
</style>