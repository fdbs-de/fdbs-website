<template>
    <component :is="is" class="he-container he-card">
        <slot />
    </component>
</template>

<script lang="ts" setup>
    defineProps({
        is: {
            type: [String, Object, Function, Symbol, Array, Promise, Boolean, Number],
            default: 'div',
        },
    })
</script>

<style lang="sass" scoped>
    .he-container.he-card
        background: var(--color-background)
        border: 1px solid var(--color-background-soft)
        border-radius: var(--radius-xl)
        box-shadow: var(--shadow-s)
</style>