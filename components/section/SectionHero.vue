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
            align-items: center
            justify-content: center
            height: 300px
            padding: 0 1rem
            background-color: var(--color-background-soft)
            background-position: center
            background-repeat: no-repeat
            background-size: cover

        h1
            text-align: center
            font-weight: 700

    @media only screen and (max-width: 700px)
        #hero-section
            .inner-wrapper
                height: auto !important
                aspect-ratio: 2/1
</style>