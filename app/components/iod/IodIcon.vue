<template>
    <span class="iod-container iod-icon" aria-hidden="true" :style="{color}">
        <img v-if="image" :src="image" :alt="alt"/>
        <span v-else><slot>{{ icon }}</slot></span>
        <div v-if="useBackdrop" class="color-backdrop"></div>
    </span>
</template>

<script setup lang="ts">
    defineProps({
        icon: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: '',
        },
        image: {
            type: String,
            default: '',
        },
        alt: {
            type: String,
            default: '',
        },
        useBackdrop: {
            type: Boolean,
            default: false,
        },
    })
</script>

<style lang="sass" scoped>
    .iod-container.iod-icon
        position: relative
        display: inline-flex
        aspect-ratio: 1
        align-items: center
        justify-content: center
        font-weight: 400 !important
        font-family: var(--font-icon)
        font-size: 1.5rem
        line-height: 1
        object-fit: contain
        user-select: none
        box-sizing: border-box

        *
            box-sizing: inherit

        img
            position: relative
            z-index: 1
            display: block
            height: 100%
            width: 100%
            object-fit: inherit
            object-position: center
            border-radius: inherit

        span
            position: relative
            z-index: 1
            display: block
            border-radius: inherit
            font-size: inherit

        .color-backdrop
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            border-radius: inherit
            background: currentColor
            opacity: .15
            pointer-events: none
</style>