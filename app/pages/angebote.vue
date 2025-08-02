<template>
    <SectionHero title="Unsere aktuellen Angebote" image="/images/content/banner/angebote_526077708.webp" />
    <SectionText size="page">
        <MediaExplorer root="domain/angebote" />
    </SectionText>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Unsere aktuellen Angebote',
        description: '',
    })
</script>

<style lang="sass" scoped></style>
