<template>
    <SectionHero title="Dokumente" image="/images/content/banner/foodservice_365702048_356901877_454625888.webp" />
    <SectionText size="page">
        <MediaExplorer root="domain/angebote/mp" />
    </SectionText>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Dokumente',
        description: '',
    })

    definePageMeta({
        middleware: ['auth', 'kunde-oder-personal'],
        layout: 'auth',
    })
</script>

<style lang="sass" scoped></style>
