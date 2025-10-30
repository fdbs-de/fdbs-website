<template>
    <SectionHero title="Unsere Angebote" image="/images/content/banner/angebote_526077708.webp" />
    <SectionText size="page">
        <AppOfferExplorer content="domain/angebote/ohne_preise" featured="domain/angebote/ohne_preise/aktuell">
            <template #banner>
                <div class="online-shop-card mt-16">
                    <div class="wrapper">
                        <h3>Unser neuer Online-Shop</h3>
                        <p>
                            Entdecken Sie unsere große Auswahl an frischen und hochwertigen Lebensmitteln - einfach, schnell und zuverlässig bestellt.
                        </p>
                        <NuxtLink to="/foodservice/online-shop">Jetzt den neuen Online-Shop testen und bequem einkaufen!</NuxtLink>
                    </div>
                    <img src="https://fdbs.de/images/content/online-shop/online-shop-cover.jpg" alt="Hände halten ein Handy mit dem Online-Shop des FDBS"/>
                </div>
            </template>
        </AppOfferExplorer>
    </SectionText>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Unsere aktuellen Angebote',
        description: '',
    })
</script>

<style lang="sass" scoped>
    .online-shop-card
        background-color: var(--color-background-soft)
        color: var(--color-text-soft)
        border-radius: 1rem
        padding: .5rem
        position: relative
        overflow: hidden
        display: grid
        align-items: center
        grid-template-columns: 1fr 300px
        grid-template-areas: "content image"

        .wrapper
            grid-area: content
            padding: 1rem

        img
            height: 100%
            object-fit: cover
            border-radius: .5rem
            mask-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%)

        h3
            color: var(--color-text)
            font-size: clamp(1.75rem, 5vw, 2.5rem)
            margin-block: 0
            position: relative

        a
            color: var(--color-primary)
            text-decoration: underline
            font-weight: 600
            border-radius: 3px

            &:hover
                color: var(--color-secondary)

            &:focus
                outline: 2px solid var(--color-secondary)

        p
            margin-bottom: .4rem
            position: relative
            max-width: 600px

    @media (max-width: 768px)

        .online-shop-card
            grid-template-columns: 1fr
            grid-template-areas: "image" "content"

            img
                width: 100%
                height: auto
                mask-image: none
</style>