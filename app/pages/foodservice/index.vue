<template>
    <SectionHero title="Unser Foodservice"
        image="/images/content/banner/foodservice_365702048_356901877_454625888.webp" />
    <SectionGrid>
        <Card :is="NuxtLink" cover to="/foodservice/mehrwegpflicht" name="Mehrwegpflicht" image="
            /images/content/foodservice/mehrwegpflicht-cover.png" />

        <Card :is="NuxtLink" cover to="/foodservice/rezepte" name="Rezepte"
            image="/images/content/foodservice/recipe-cover.png" />

        <Card :is="NuxtLink" cover to="/foodservice/tierhaltungskennzeichnung" name="Tierhaltungskennzeichnung"
            image="/images/content/foodservice/tierhaltungskennzeichnung-cover.png" />
    </SectionGrid>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Unser Foodservice',
        description: '',
    })

    const NuxtLink = defineNuxtLink({})
</script>

<style lang="sass" scoped></style>
