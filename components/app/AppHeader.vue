<template>
    <header :class="{'scrolled': isScrolled}">
        <HeLimiter>
            <div class="flex justify-start w-40">
                <NuxtLink to="/" class="mr-auto h-10">
                    <img class="block h-full" src="/images/branding/logo_no_spacing.png" alt="FDBS Logo">
                </NuxtLink>
            </div>
            <div class="flex lg:flex-1 lg:justify-center">
                <HeMenu :menu="menu" mobile-submenu-show-toggle />
            </div>
            <div class="flex justify-end lg:w-40">
                <IodButton v-if="cta" :is="NuxtLink" :to="cta.href" :label="cta.label" size="m" corner="pill" color-preset="primary"/>
            </div>
        </HeLimiter>
    </header>
</template>

<script lang="ts" setup>
    import type { MenuItem } from '@/components/he/HeMenu.vue'

    defineProps({
        menu: {
            type: Array as PropType<MenuItem[]>,
            required: true,
        },
        cta: {
            type: Object,
            default: null,
        },
    })

    const NuxtLink = defineNuxtLink({})



    // START: Scroll handling
    const isScrolled = ref(false)

    function handleScroll() {
        isScrolled.value = window.scrollY > 0
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })
    // END: Scroll handling
</script>

<style lang="sass" scoped>
    header
        position: sticky
        left: 0
        top: 0
        width: 100%
        height: 4.5rem
        z-index: 1000
        background: rgba(255, 255, 255, 0.85)
        backdrop-filter: blur(20px)
        border-bottom: 1px solid hsla(0,0%,100%,.6)
        transition: border-color .2s ease-in-out

        &.scrolled
            border-color: var(--color-background-soft)

        > .he-limiter
            position: relative
            z-index: 1
            height: 100%
            display: flex !important
            align-items: center
            gap: 2rem

    @media only screen and (max-width: 1023px)
        header
            .he-limiter
                gap: 1rem

            .he-menu
                order: 2 !important
</style>