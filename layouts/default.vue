<template>
    <AppHeader :menu :cta/>
    <main>
        <slot />
    </main>
    <AppFooter />
</template>

<script lang="ts" setup>
    useHead({
        titleTemplate: (title) => title ? `${title} – FDBS` : 'FDBS',
        bodyAttrs: {
            class: 'small-scrollbar'
        }
    })

    const menu = useMenu('main')
    const cta = ref({ label: 'Loginbereich', href: '/intern', icon: 'login' })
</script>

<style lang="sass" scoped></style>
