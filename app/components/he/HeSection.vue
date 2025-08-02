<template>
    <component :is="is" class="he-container he-section" :class="classes">
        <div class="above" v-if="$slots.above">
            <slot name="above"></slot>
        </div>
        <div class="background" v-if="$slots.background">
            <slot name="background"></slot>
        </div>
        <div class="inner" :style="{background}">
            <slot></slot>
        </div>
        <div class="foreground" v-if="$slots.foreground">
            <slot name="foreground"></slot>
        </div>
        <div class="below" v-if="$slots.below">
            <slot name="below"></slot>
        </div>
    </component>
</template>

<script lang="ts" setup>
    const props = defineProps({
        is: {
            type: String,
            default: 'section',
        },
        background: {
            type: String,
            default: '',
        },
        shadow: {
            type: String,
            default: 'none',
        },
        dividerPosition: {
            type: String,
            default: 'relative',
        },
        sticky: {
            type: Boolean,
            default: false,
        },
    })

    const classes = computed((): object => {
        return [
            `section-shadow-${props.shadow}`,
            `divider-position-${props.dividerPosition}`,
            {
                'section-sticky': props.sticky,
            },
        ]
    })
</script>

<style lang="sass" scoped>
    .he-container.he-section
        position: relative
        display: flex
        flex-direction: column

        .background
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            z-index: 0
            pointer-events: none

        .inner
            position: relative
            z-index: 1
            display: flex
            flex-direction: column
            width: 100%

        .above,
        .below
            position: relative
            z-index: 2
            left: 0
            width: 100%

        .foreground
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            z-index: 3
            pointer-events: none



        &.section-sticky
            position: sticky
            top: 0
            z-index: 1000



        &.section-shadow-none
            box-shadow: none

        &.section-shadow-s
            box-shadow: var(--shadow-s)

        &.section-shadow-m
            box-shadow: var(--shadow-m)

        &.section-shadow-l
            box-shadow: var(--shadow-l)



        &.divider-position-absolute-outer
            .above
                position: absolute
                bottom: 100%

            .below
                position: absolute
                top: 100%

        &.divider-position-absolute-inner
            .above
                position: absolute
                top: 0

            .below
                position: absolute
                bottom: 0

        &.divider-position-relative
            .above,
            .below
                position: relative
</style>