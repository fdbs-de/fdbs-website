<template>
    <SectionHero title="Unsere Marken" image="/images/content/banner/marken_509487561.webp" />
    <SectionGrid>
        <Card :is="NuxtLink" cover to="/marken/eichenhof" name="Eichenhof" image="/images/content/marken/eichenhof/eichenhof_card.png" />
        <Card :is="NuxtLink" cover to="/marken/il-campese" name="Il Campese" image="/images/content/marken/il-campese/ilcampese_card.png" />
        <Card :is="NuxtLink" cover to="/marken/maxi-france" name="Maxi France" image="/images/content/marken/maxi-france/maxifrance_card.png" />
    </SectionGrid>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Unsere Marken',
        description: '',
    })

    const NuxtLink = defineNuxtLink({})
</script>

<style lang="sass" scoped></style>
