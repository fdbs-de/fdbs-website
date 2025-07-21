<template>
    <SectionCta id="hero" color="#FF4C1B"
        src="/images/content/customerservice/hako/csm_Web_Header_Sweepmaster_ba823f8c94.jpg">
        <h1>Effizienz kennt<br>
            kein Ablaufdatum!</h1>
        <div>
            <p>
                Die Nachfrage war hoch - und ihr Interesse ist uns wichtig!<br><br>
                Deshalb verlängern wir unser aktuelles<br>
                Angebot im Bereich Reinigungs- und Wasserstrahltechnik.
            </p>
            <p>
                Nutzen Sie die Gelegenheit, sich leistungsstarke<br>
                Technik zu attraktiven Konditionen zu sichern.<br><br>
                <b>Jetzt verlängert - nur bis 15.07.2025</b><br>
            </p>
        </div>
        <IodButton is="a" href="/downloads/hako_fdbs_aktion_2025-1.pdf" size="l" corner="pill" label="Zum Flyer"
            background="var(--color-on-primary)" color="#FF4C1B" target="_blank" />
    </SectionCta>


    <section id="angebote">
        <HeLimiter>
            <h2>Die Angebote von Hako & FDBS</h2>
            <div class="grid">
                <div class="flex-1">
                    <img src="/images/content/customerservice/hako/scrubmaster-b5_400x350.png">
                </div>
                <div class="flex-1">
                    <img src="/images/content/customerservice/hako/scrubmaster-b45_400x350.png">
                </div>
                <div class="flex-1">
                    <img src="/images/content/customerservice/hako/scrubmaster-b25_400x350.png">
                </div>
                <div class="flex-1">
                    <img src="/images/content/customerservice/hako/sweepmaster-m600_400x350.png">
                </div>
                <div class="flex-1">
                    <img src="/images/content/customerservice/hako/oertzen-c.x305_400x350.png">
                </div>
                <div class="flex-1">
                    <img src="/images/content/customerservice/hako/sweepmaster-b800-r_400x350.png">
                </div>
            </div>
        </HeLimiter>
    </section>


    <SectionText>
        <p class="text-center">
            Bei Interesse melden Sie sich gerne unter
            <a target="_self" rel="noopener noreferrer nofollow" href="tel:05312105541"
                style="color:var(--color-primary)">0531-210 55 - 41</a>
            oder schreiben Sie eine Mail an
            <a target="_self" rel="noopener noreferrer nofollow" href="mailto:service@fdbs.de"
                style="color:var(--color-primary)">service@fdbs.de</a>
        </p>
    </SectionText>
</template>

<script lang="ts" setup>
useSeoMeta({
    title: 'Hako-Angebote',
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
            display: grid
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
            gap: 1.5rem

            div
                display: block
                width: 100%
                border-radius: var(--radius-l)
                overflow: hidden
                border: 1px solid var(--color-background-soft)

            img
                width: 100%
                display: flex
</style>
