<template>
    <SectionHero title="Impressum" image="/images/content/banner/rechtliches_437198485.webp" />
    <SectionText>
        <span class="contents" v-html="auth.domain?.legal_notice"></span>
    </SectionText>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Impressum',
        description: '',
    })

    const auth = useAuthStore()
</script>

<style lang="sass" scoped></style>
