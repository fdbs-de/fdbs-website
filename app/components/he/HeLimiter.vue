<template>
    <component :is="is" class="he-container he-limiter" :class="`size-${size}`">
        <slot></slot>
    </component>
</template>

<script lang="ts" setup>
    defineProps({
        is: {
            type: [String, Object, Function, Symbol, Array, Promise, Boolean, Number],
            default: 'div'
        },
        size: {
            type: String,
            default: 'page',
        },
    })
</script>

<style lang="sass" scoped>
    .he-container.he-limiter
        width: 100%
        display: block
        margin-inline: auto
        padding-inline: 1.5rem

        &.size-full
            max-width: unset

        &.size-page
            max-width: 1300px

        &.size-text
            max-width: 650px

        &.size-form
            max-width: 550px

    @media only screen and (max-width: 768px)
        .he-container.he-limiter
            padding-inline: 1rem
</style>