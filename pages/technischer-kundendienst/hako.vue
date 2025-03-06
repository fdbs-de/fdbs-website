<template>
    <section class="section-customerservice-hero">
        <HeLimiter>
            <div class="content-wrapper">
                <div class="plain text-plain">
                    <h2>Der Frühling steht <br>vor der Tür!</h2>
                    <div>
                        <p>
                            Es ist die perfekte Zeit,<br>
                            um Ihr Sortiment an Reinigungs-<br>
                            und Wasserstrahltechnik aufzufrischen!
                        </p>
                        <p>
                            Nutzen Sie die erstklassigen Hako-Angebote, die<br>
                            Ihre Arbeit <b>erleichtert</b> und <b>effizienter</b> gestaltet!<br>
                            <br>
                            Angebote gültig vom 01.03.2025 bis 16.05.2025
                        </p>
                    </div>
                </div>
            </div>
        </HeLimiter>
    </section>


    <section class="section-customerservice-angebote">
        <HeLimiter>
            <h2>Die Angebote von Hako & FDBS</h2>
            <div class="grid">
                <NuxtLink class="flex-1">
                    <img src="/images/content/customerservice/hako/scrubmaster-b5_400x350.png">
                </NuxtLink>
                <NuxtLink class="flex-1">
                    <img src="/images/content/customerservice/hako/scrubmaster-b45_400x350.png">
                </NuxtLink>
                <NuxtLink class="flex-1">
                    <img src="/images/content/customerservice/hako/scrubmaster-b25_400x350.png">
                </NuxtLink>
            </div>
            <div class="grid">
                <NuxtLink class="flex-1">
                    <img src="/images/content/customerservice/hako/sweepmaster-m600_400x350.png">
                </NuxtLink>
                <NuxtLink class="flex-1">
                    <img src="/images/content/customerservice/hako/oertzen-c.x305_400x350.png">
                </NuxtLink>
                <NuxtLink class="flex-1">
                    <img src="/images/content/customerservice/hako/sweepmaster-b800-r_400x350.png">
                </NuxtLink>
            </div>
        </HeLimiter>
    </section>
    <SectionText>
        <div class="formatted-content">
            <p>
                Bei Interesse melden Sie sich gerne unter <a target="_self" rel="noopener noreferrer nofollow"
                    href="tel:05312105541">0531-210 55 - 41</a>
                oder schreiben Sie eine Mail an <a target="_self" rel="noopener noreferrer nofollow"
                    href="mailto:service@fdbs.de">service@fdbs.de</a>
            </p>
        </div>

    </SectionText>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Top Aktuelles vom technischen Kundendienst',
        description: '',
    })

    const NuxtLink = defineNuxtLink({})
</script>

<style lang="sass" scoped>
    p
        text-align: center
        font-size: clamp(1rem, 5vw, 1.25rem)

    .section-customerservice-hero
        margin-block: 0 5rem
        --cut: 5vw
        width: 100%
        position: relative
        background: var(--color-background-soft)
        background-image: url('/images/content/customerservice/hako/csm_Web_Header_Sweepmaster_ba823f8c94.jpg')
        background-size: cover
        background-position: center
        background-repeat: no-repeat


        &::after
            content: ''
            background-image: linear-gradient(90deg, rgb(#FF4C1B, 1) 40%, rgb(#FF4C1B, .2) 60%)
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
            padding-block: 10rem 12rem
            
            .plain
                color: var(--color-on-primary)
                display: flex
                flex-direction: column
                align-items: stretch
                position: relative
                z-index: 2
                gap: 2rem

                > h2
                    font-size: clamp(2rem, 10vw, 3.5rem)
                    font-weight: 600
                    margin-block: 0
                    color: inherit
                    max-width: 700px

                > div p
                    text-align: left    
                    color: inherit
                    opacity: .9
                
                > .iod-button
                    --local-color-background: var(--color-on-primary)
                    --local-color-text: var(--color-primary)
                    max-width: 400px



    @media only screen and (max-width: 500px)
        .fdbs-marketing
            &::after
                background-image: linear-gradient(0deg, rgb(#e00047, 1) 20%, rgb(#e00047, .2) 80%)

            .content-wrapper
                padding-block: 6rem
                gap: 2rem

                .plain
                    text-align: center
                    align-items: center




    .section-customerservice-angebote
        h2
            font-size: clamp(2rem, 10vw, 3.5rem)
            text-align: center
            font-weight: 600
            margin-block: 0 3rem

        .grid
            display: flex
            gap: 2rem
            align-items: center
            margin-block: 0 2rem

            a
                display: block
                width: 100%
                border-radius: 1rem
                overflow: hidden
                border: 1px solid var(--color-background-soft)
                flex: 50

                &.highlight
                    box-shadow: var(--shadow-l)
                    flex: 55

            img
                width: 100%
                display: flex
                
    @media only screen and (max-width: 700px)
        .section-customerservice-angebote
            .grid
                gap: 2rem


    
    @media only screen and (max-width: 500px)
        .section-customerservice-angebote
            padding: 6rem 0
            
            h2
                margin-bottom: 2rem

            .grid
                gap: .5rem

                a
                    flex: 1 !important
                    border-radius: .5rem !important
                    box-shadow: none !important



</style>
