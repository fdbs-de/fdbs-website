<template>
    <SectionHero title="Unsere Rezeptideen" image="/images/content/banner/angebote_526077708.webp" />
    <SectionText size="page">
        <MediaExplorer root="domain/rezepte" />
    </SectionText>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Unsere Rezeptideen',
        description: '',
    })
</script>

<style lang="sass" scoped></style>
