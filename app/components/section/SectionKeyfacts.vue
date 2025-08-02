<template>
    <section class="keyfact-section">
        <HeLimiter>
            <slot name="title">
                <h2 class="w-full text-center">{{title}}</h2>
            </slot>
            <div class="keyfacts" :style="`--color-local-primary: ${color}; --color-local-primary-shade: ${accentColor};`">
                <div class="placeholder"></div>
                <div class="fact-card" v-for="keyfact in keyfacts">
                    <IodIcon :icon="keyfact.icon" />
                    <h3>{{ keyfact.name }}</h3>
                </div>
            </div>
        </HeLimiter>
    </section>
</template>

<script setup>
    defineProps({
        keyfacts: {
            type: Array,
            default: () => [],
        },
        title: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: '#e00047',
        },
        accentColor: {
            type: String,
            default: '#e0004730',
        },
    })
</script>

<style lang="sass" scoped>
    .keyfact-section
        padding-block: 4rem
        
    .keyfacts
        display: grid
        grid-template-columns: 1fr 1fr 1fr
        grid-auto-rows: 4rem
        grid-gap: 3rem
        padding-inline: 6rem
        padding-top: 3rem

        --color-local-primary: #e00047
        --color-local-primary-shade: #e0004730

    .placeholder
        grid-column: 2
        grid-row: 1

    .fact-card
        background: var(--color-background)
        border-radius: var(--radius-l)
        padding: 1.5rem
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        grid-row: span 2
        gap: 1.5rem
        border: 1px solid var(--color-background-soft)
        box-shadow: var(--shadow-elevation-low)
        transition: all 0.2s ease-in-out

        &:hover
            box-shadow: var(--shadow-elevation-medium)

        .iod-icon
            font-size: 4rem
            line-height: 1
            color: var(--color-local-primary)
            filter: drop-shadow(0.07em 0.07em 0px var(--color-local-primary-shade))

        h3
            font-size: 1.3rem
            margin: 0
            text-align: center

    @media only screen and (max-width: 1100px)
        .keyfacts
            padding-inline: 0rem

    @media only screen and (max-width: 900px)
        .keyfacts
            grid-template-columns: 1fr 1fr

    @media only screen and (max-width: 600px)
        .keyfacts
            grid-template-columns: 1fr !important
            grid-auto-rows: auto
            gap: 2rem

            .fact-card
                grid-row: auto

                .iod-icon
                    font-size: 3rem

                h3
                    font-size: 1.1rem

            .placeholder
                display: none
</style>