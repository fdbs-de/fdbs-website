<template>
    <SectionHero title="Unsere Angebote" image="/images/content/banner/foodservice_365702048_356901877_454625888.webp" />
    <SectionText size="page">
        <AppOfferExplorer content="domain/angebote/mit_preise" featured="domain/angebote/mit_preise/aktuell"/>
    </SectionText>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Unsere Angebote',
        description: '',
    })

    definePageMeta({
        middleware: ['auth', 'kunde-oder-personal'],
        layout: 'auth',
    })
</script>

<style lang="sass" scoped></style>
