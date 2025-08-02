<template>
    <div class="iod-container iod-alert" :class="classes">
        <h3 v-show="title">{{ title }}</h3>

        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
        title: {
            type: String,
            default: '',
        },
        colorPreset: {
            type: String,
        },
        as: {
            type: String,
            default: 'alert',
        },
    })

    const classes = computed((): object => {
        return [
            `alert-color-preset-${props.colorPreset}`,
            `alert-type-${props.as}`
        ]
    })
</script>

<style lang="sass" scoped>
    .iod-container.iod-alert
        color: var(--color-text)
        border-radius: var(--radius-m)
        padding: 1rem
        display: flex
        flex-direction: column
        gap: 1rem
        position: relative

        &.alert-color-preset-success
            color: var(--color-success)

        &.alert-color-preset-info
            color: var(--color-info)

        &.alert-color-preset-warning
            color: var(--color-warning)

        &.alert-color-preset-error
            color: var(--color-error)

        &.alert-type-alert
            height: auto

        &.alert-type-placeholder
            user-select: none
            padding-block: 0
            color: var(--color-text-disabled)

            &::before
                display: none

            .content
                align-items: center
                justify-content: center

        &::before
            content: ''
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            z-index: 0
            pointer-events: none
            border-radius: inherit
            background: currentColor
            opacity: .07

        h3
            position: relative
            z-index: 1
            margin: 0
            color: inherit

        .content
            flex: 1
            position: relative
            z-index: 1
            margin: 0
            color: inherit
            display: flex
            flex-direction: column
            align-items: flex-start

</style>