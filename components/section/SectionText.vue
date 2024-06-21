<template>
    <section class="text-section">
        <HeLimiter :size>
            <slot />
        </HeLimiter>
    </section>
</template>

<script setup>
    defineProps({
        size: {
            type: String,
            default: 'text',
        }
    })
</script>

<style lang="sass" scoped>
    .text-section
        padding-block: 4rem
</style>