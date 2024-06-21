<template>
    <div class="iod-container iod-button-group" :class="classes">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
        vertical: {
            type: Boolean,
            default: false,
        },
        horizontal: {
            type: Boolean,
            default: false,
        },
        corner: {
            type: String,
            default: 'm',
        }
    })

    const direction = computed(() => {
        if (props.vertical) return 'vertical'
        if (props.horizontal) return 'horizontal'
        return 'horizontal'
    })

    const classes = computed(() => {
        return [
            `direction-${direction.value}`,
            `corner-${props.corner}`,
        ]
    })
</script>

<style lang="sass">
    .iod-container.iod-button-group
        display: flex


        &.direction-horizontal
            flex-direction: row

            > .iod-button
                &:first-child
                    border-top-left-radius: inherit !important
                    border-bottom-left-radius: inherit !important

                &:last-child
                    border-top-right-radius: inherit !important
                    border-bottom-right-radius: inherit !important

        &.direction-vertical
            flex-direction: column

            > .iod-button
                &:first-child
                    border-top-left-radius: inherit !important
                    border-top-right-radius: inherit !important

                &:last-child
                    border-bottom-left-radius: inherit !important
                    border-bottom-right-radius: inherit !important


        &.corner-none
            border-radius: 0

        &.corner-s
            border-radius: var(--radius-s)

        &.corner-m
            border-radius: var(--radius-m)

        &.corner-l
            border-radius: var(--radius-l)

        &.corner-xl
            border-radius: var(--radius-xl)

        &.corner-pill
            border-radius: 1000px


        > .iod-button
            flex: 1 !important
            border-radius: 0 !important
</style>