<template>
    <div class="iod-container iod-tag" :class="classes" :style="styles">
        <div class="prefix" v-if="hasPrefix"><slot name="prefix">{{ prefix }}</slot></div>
        <div class="divider-prefix" v-if="hasPrefix && hasLabel"></div>
        <div class="label" v-if="hasLabel"><slot>{{ label }}</slot></div>
        <div class="divider-prefix-suffix" v-if="hasPrefix && hasSuffix && !hasLabel"></div>
        <div class="divider-suffix" v-if="hasLabel && hasSuffix"></div>
        <div class="suffix" v-if="hasSuffix"><slot name="suffix">{{ suffix }}</slot></div>

        <div class="border" v-if="border"></div>
    </div>
</template>

<script lang="ts" setup>
    const slots = useSlots()
    const props = defineProps({
        prefix: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        suffix: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: '',
        },
        background: {
            type: String,
            default: '',
        },
        colorPreset: {
            type: String,
            default: '',
        },
        size: {
            type: String,
            default: 's',
        },
        corner: {
            type: String,
            default: 'm',
        },
        border: {
            type: Boolean,
            default: false,
        },
    })

    const hasPrefix = computed((): boolean => {
        return !!props.prefix || !!slots.prefix
    })
    const hasSuffix = computed((): boolean => {
        return !!props.suffix || !!slots.suffix
    })
    const hasLabel = computed((): boolean => {
        return !!props.label || !!slots.default
    })

    const classes = computed((): object => {
        return [
            `tag-size-${props.size}`,
            `tag-corner-${props.corner}`,
            `tag-color-preset-${props.colorPreset}`
        ]
    })

    const styles = computed((): object => {
        const styles: Record<string, string> = {}
        if (props.background) styles['--local-color-background'] = props.background
        if (props.color) styles['--local-color-text'] = props.color
        return styles
    })
</script>

<style lang="sass" scoped>
    .iod-container.iod-tag
        font-size: 1rem

        --local-padding: .75rem
        --local-color-background: var(--color-text)
        --local-color-text: var(--color-background)

        display: inline-flex
        flex-direction: row
        align-items: stretch
        padding: 0
        height: 2rem
        text-align: center
        font-family: inherit
        font-weight: 500
        border-radius: var(--radius-m)
        border: none
        user-select: none
        vertical-align: top
        position: relative
        background: transparent
        box-sizing: border-box
        overflow: hidden



        &.tag-color-preset-success
            --local-color-background: var(--color-success)
            --local-color-text: var(--color-on-success)

        &.tag-color-preset-info
            --local-color-background: var(--color-info)
            --local-color-text: var(--color-on-info)

        &.tag-color-preset-warning
            --local-color-background: var(--color-warning)
            --local-color-text: var(--color-on-warning)

        &.tag-color-preset-error
            --local-color-background: var(--color-error)
            --local-color-text: var(--color-on-error)

        &.tag-color-preset-primary
            --local-color-background: var(--color-primary)
            --local-color-text: var(--color-on-primary)

        &.tag-color-preset-secondary
            --local-color-background: var(--color-secondary)
            --local-color-text: var(--color-on-secondary)

        &.tag-color-preset-tertiary
            --local-color-background: var(--color-tertiary)
            --local-color-text: var(--color-on-tertiary)


    
        &.tag-size-xs
            height: 1.75rem
            --local-padding: .5rem

        &.tag-size-s
            height: 2rem
            --local-padding: .75rem

        &.tag-size-m
            height: 2.5em
            --local-padding: 1rem

        &.tag-size-l
            height: 3rem
            --local-padding: 1.25rem

        &.tag-size-xl
            height: 3.5rem
            --local-padding: 1.5rem



        &.tag-corner-none
            border-radius: 0

        &.tag-corner-s
            border-radius: var(--radius-s)

        &.tag-corner-m
            border-radius: var(--radius-m)

        &.tag-corner-l
            border-radius: var(--radius-l)

        &.tag-corner-xl
            border-radius: var(--radius-xl)

        &.tag-corner-pill
            border-radius: 1000px



        .divider-prefix,
        .divider-suffix
            width: .5rem
            height: 100%
            background: var(--local-color-background)

        .divider-prefix
            margin-left: -.25rem
            clip-path: polygon(100% 0%, 100% 100%, 0% 100%)

        .divider-suffix
            margin-right: -.25rem
            clip-path: polygon(0% 0%, 100% 0, 0% 100%)

        .divider-prefix-suffix
            width: .5rem
            height: 100%
            background: var(--local-color-background)
            margin-left: -.25rem
            margin-right: -.25rem
            clip-path: polygon(calc(100% - 2px) 0%, 100% 0%, 2px 100%, 0% 100%)



        .suffix,
        .prefix,
        .label
            display: flex
            align-items: center
            padding-inline: var(--local-padding)
            color: var(--local-color-background)

        .label
            color: var(--local-color-text)
            background: var(--local-color-background)



        .border
            height: 100%
            width: 100%
            position: absolute
            top: 0
            left: 0
            z-index: 2
            border-radius: inherit
            border: 2px solid var(--local-color-background)
            pointer-events: none
</style>