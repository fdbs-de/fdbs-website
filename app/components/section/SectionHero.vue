<template>
    <section id="hero-section" :class="{'large': largeHero}">
        <HeLimiter>
            <div class="inner-wrapper rounded-xl" :style="'background-image: url('+(image || '')+')'">
                <h1 :style="`color: ${color};`" v-if="title">{{title}}</h1>
            </div>
        </HeLimiter>
    </section>
</template>

<script lang="ts" setup>
    defineProps({
        title: String,
        image: String,
        color: {
            type: String,
            default: 'var(--color-primary)'
        },
        largeHero: {
            type: Boolean,
            default: false
        },
    })
</script>

<style lang="sass" scoped>
    #hero-section
        display: flex
        margin-top: 1rem

        &.large
            .inner-wrapper
                height: 500px

        .inner-wrapper
            display: flex
            align-items: flex-end
            height: 300px
            padding: 0
            border: 2px solid var(--color-border)
            background-color: var(--color-background)
            background-position: center
            background-repeat: no-repeat
            background-size: cover
            overflow: hidden

        h1
            width: 100%
            text-align: center
            font-weight: 700
            padding: 4rem 1rem 1.5rem
            margin: 0
            text-shadow: 0 0 2px #fff
            background: radial-gradient(transparent 1px, var(--color-background) 1px)
            background-size: 4px 4px
            backdrop-filter: blur(6px)
            mask: linear-gradient(to bottom, transparent 0rem, black 4rem)

    @media only screen and (max-width: 700px)
        #hero-section
            .inner-wrapper
                height: auto !important
                aspect-ratio: 2/1
</style>