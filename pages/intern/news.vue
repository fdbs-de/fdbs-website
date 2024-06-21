<template>
    <SectionHero title="News und Termine" image="/images/content/banner/foodservice_365702048_356901877_454625888.webp" />
    <SectionText>
        <!-- TODO: Posts implemenation -->
    </SectionText>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'News und Termine',
        description: '',
    })

    definePageMeta({
        middleware: 'auth',
        layout: 'auth',
    })
</script>

<style lang="sass" scoped></style>
