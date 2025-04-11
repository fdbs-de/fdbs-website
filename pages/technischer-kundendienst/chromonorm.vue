<template>
    <section id="angebote">
        <HeLimiter>
            <h2>CHROMOnorm & FDBS</h2>
            <div class="grid">
                <div class="flex-1">
                    <img src="/images/content/customerservice/chromonorm/chromonorm-abfallkühler-1.png">
                    <p class="text-center">
                        Abfallkühler 1x240l - steckerfertig<br>
                    </p>
                </div>
                <div class="flex-1 highlight">

                    <img src="/images/content/customerservice/chromonorm/flockeneisbereiter_test.png">
                    <p class="text-center">
                        Flockeneisbereiter mit 174kg Speicher<br>
                    </p>
                </div>
                <div class="Flex-1">
                    <NuxtLink class="flex-1" to="/marken/maxi-france">
                        <img src="/images/content/customerservice/chromonorm/chromonorm-abfallkühler-2-2.png">
                    </NuxtLink>
                    <p class="text-center">
                        Abfallkühler 2x240l - steckerfertig<br>
                    </p>
                </div>
            </div>
        </HeLimiter>
    </section>


    <SectionText>
        <p class="text-center">
            Bei Interesse melden Sie sich gerne unter
            <a target="_self" rel="noopener noreferrer nofollow" href="tel:05312105541">0531-210 55 - 41</a>
            oder schreiben Sie eine Mail an
            <a target="_self" rel="noopener noreferrer nofollow" href="mailto:service@fdbs.de">service@fdbs.de</a>
        </p>
    </SectionText>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'NEU: Hako-Angebote',
        description: '',
    })

    const NuxtLink = defineNuxtLink({})
</script>

<style lang="sass" scoped>
    #hero
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))
        padding-block: 8rem 13rem
        margin-bottom: 3rem

        h1
            font-size: clamp(2rem, 10vw, 3.5rem)
            font-weight: 600
            margin-block: 0
            color: inherit
            max-width: 700px

        .iod-button
            max-width: 400px

    #angebote
        h2
            font-size: clamp(2rem, 10vw, 3.5rem)
            text-align: center
            font-weight: 600
            margin-block: 0 2rem

        .grid
            display: flex
            gap: 4rem
            align-items: center

            div
                display: block
                width: 100%
                border-radius: 1rem
                overflow: hidden
                border: 1px solid var(--color-background-soft)
                flex: 50
                box-shadow: var(--shadow-l)

                &.highlight
                    box-shadow: var(--shadow-l)
                    flex: 55

            img
                width: 100%
                display: flex
</style>
