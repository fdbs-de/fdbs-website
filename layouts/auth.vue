<template>
    <AppHeader :menu :cta/>
    <main>
        <slot />
    </main>
    <AppFooter />
</template>

<script lang="ts" setup>
    useHead({
        titleTemplate: (title) => title ? `${title} – FDBS Loginbereich` : 'FDBS Loginbereich',
        bodyAttrs: {
            class: 'small-scrollbar'
        }
    })

    const menu = useMenu('auth')
    const cta = ref({ label: 'Profil', href: '/intern/profil' })
</script>

<style lang="sass" scoped></style>
