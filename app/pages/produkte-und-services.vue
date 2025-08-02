<template>
    <SectionHero title="Unsere Produkte & Services" image="/images/content/banner/produkte_services_229048757.webp" />
    <SectionGrid>
        <Card :is="NuxtLink" cover to="/angebote" name="Unsere Angebote" image="/images/content/services/angebote_cover.png" />
        <Card :is="NuxtLink" cover to="/foodservice" name="Foodservice" image="/images/content/services/foodservice_cover.png" />
        <Card :is="NuxtLink" cover to="/eigenmarke-maxi-france" name="Eigenmarke: Maxi France" image="/images/content/maxi-france/mf_cover.webp" />
        <Card :is="NuxtLink" cover to="/mkbs" name="Marketing & Kommunikation" image="/images/content/services/mkbs_cover.png" />
        <Card :is="NuxtLink" cover to="/technischer-kundendienst" name="Technischer Kundendienst" image="/images/content/services/technischer_kundendienst_cover.png" />
    </SectionGrid>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Unsere Produkte & Services',
        description: '',
    })

    const NuxtLink = defineNuxtLink({})
</script>

<style lang="sass" scoped></style>
