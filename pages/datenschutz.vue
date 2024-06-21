<template>
    <SectionHero title="Datenschutzerklärung" image="/images/content/banner/rechtliches_437198485.webp" />
    <SectionText>
        <span class="contents" v-html="auth.domain?.legal_privacy"></span>
    </SectionText>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Datenschutzerklärung',
        description: '',
    })

    const auth = useAuthStore()
</script>

<style lang="sass" scoped></style>
