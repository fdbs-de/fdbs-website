<template>
    <SectionHero title="Spezifikations Datenbank" image="/images/content/banner/foodservice_365702048_356901877_454625888.webp" />
    <SectionText size="page">
        <MediaExplorer root="domain/spezifikationen" layout="list" />
    </SectionText>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Spezifikations Datenbank',
        description: '',
    })

    definePageMeta({
        middleware: 'auth',
        layout: 'auth',
    })
</script>

<style lang="sass" scoped></style>
