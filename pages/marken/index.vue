<template>
    <SectionHero title="Unsere Marke" image="/images/content/banner/marken_509487561.webp" />
    <SectionGrid>
        <Card :is="NuxtLink" cover to="/marken/maxi-france" name="Maxi France"
            image="/images/content/marken/maxi-france/maxifrance_card.png" style="max-width:600px" />
    </SectionGrid>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Unsere Marke',
        description: '',
    })

    const NuxtLink = defineNuxtLink({})
</script>

<style lang="sass" scoped></style>
