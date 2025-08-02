<template>
    <hr class="he-container he-divider" :class="{'vertical': vertical}"/>
</template>

<script lang="ts" setup>
    defineProps({
        vertical: {
            type: Boolean,
            default: false,
        },
    })
</script>

<style lang="sass" scoped>
    .he-container.he-divider:not(.vertical)
        border: none
        border-top: 1px solid var(--color-border)
        width: 100%

    .he-container.he-divider.vertical
        border: none
        border-left: 1px solid var(--color-border)
        width: unset
</style>