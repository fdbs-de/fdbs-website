<template>
    <section class="grid-section">
        <HeLimiter :size>
            <div class="grid">
                <slot />
            </div>
        </HeLimiter>
    </section>
</template>

<script setup>
    defineProps({
        size: {
            type: String,
            default: 'page',
        }
    })
</script>

<style lang="sass" scoped>
    .grid-section
        padding-block: 4rem

        .grid
            display: grid
            gap: 4rem
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
</style>