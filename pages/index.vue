<template>
    <SectionHomeHero />
    <section id="bestellzeiten">
        <HeLimiter>
            <div>
                <img src="/images/content/bestellzeiten.png">
            </div>
        </HeLimiter>

    </section>
    <SectionHomeServices />
    <SectionCta id="marketing" color="var(--color-primary)" src="/images/content/mkbs/woman.jpg">
        <h2>Wir machen Ihr Unternehmen sichtbar!</h2>
        <div>
            <p>
                Unsere Marketingabteilung macht<br>
                Ihr Unternehmen bekannt.
            </p>
            <p>
                Ob im Web, auf Social Media oder als Print:<br>
                <b>wir bringen Sie an die Spitze!</b>
            </p>
        </div>
        <IodButton :is="NuxtLink" to="/mkbs" size="l" corner="pill" label="Jetzt durchstarten"
            background="var(--color-on-primary)" color="var(--color-primary)" />
    </SectionCta>
    <SectionHomeKundendienst />
    <SectionHomeTestimonials />
    <SectionHomeMarken />
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'The Competence in Foodservice',
        description: 'Wir sind FDBS – Ihre Kompetenz rund um den Foodservice. Von Food, über Non-Food bis hin zum Marketing und technischen Kundendienst können wir Ihnen helfen.',
    })

    const NuxtLink = defineNuxtLink({})
</script>

<style lang="sass" scoped>
    #marketing
        clip-path: polygon(0 0, 100% 5vw, 100% 100%, 0 calc(100% - 5vw))
        padding-block: 10rem 12rem

        h2
            font-size: clamp(2rem, 10vw, 3.5rem)
            font-weight: 600
            margin-block: 0
            color: inherit
            max-width: 700px

        .iod-button
            max-width: 400px

    @media only screen and (max-width: 500px)
        #marketing
            padding-block: 6rem 7rem


    #bestellzeiten
        margin-block: 3rem
        div
            display: block
            width: 100%                
            overflow: hidden
            flex: 50
    
        img
            width: 100%
            display: flex
            background: white
</style>
