<template>
    <component :is="is" class="he-container he-flex" :class="classes" :style="{gap, padding, alignItems: alignV, justifyContent: alignH}">
        <slot />
    </component>
</template>

<script lang="ts" setup>
    const props = defineProps({
        is: {
            type: [String, Object, Function, Symbol, Array, Promise, Boolean, Number],
            default: 'div',
        },
        vertical: {
            type: Boolean,
            default: false,
        },
        horizontal: {
            type: Boolean,
            default: false,
        },
        wrap: {
            type: Boolean,
            default: false,
        },
        alignY: {
            type: String,
            default: 'center',
        },
        alignX: {
            type: String,
            default: 'unset',
        },
        padding: {
            type: [String, Number],
            default: 0,
        },
        gap: {
            type: [String, Number],
            default: 0,
        },
        breakpoint: {
            type: [Number, String],
            default: null,
        },
        reversed: {
            type: Boolean,
            default: false,
        }
    })

    const classes = computed(() => {
        return [
            `flex-direction-${direction.value}`,
            {
                'flex-wrap': props.wrap,
                'reversed': props.reversed,
                'reached-breakpoint': reachedBreakpoint.value,
            },
        ]
    })

    const reachedBreakpoint = ref(false)
    function calculateReachedBreakpoint()
    {
        if (!props.breakpoint) return reachedBreakpoint.value = false
        return reachedBreakpoint.value = matchMedia(`(max-width: ${props.breakpoint}px)`).matches
    }


    const direction = computed(() => {
        if (reachedBreakpoint.value) return 'vertical'
        if (props.horizontal) return 'horizontal'
        if (props.vertical) return 'vertical'
        return 'vertical'
    })

    const alignV = computed(() => {
        if (direction.value === 'vertical') return props.alignX
        return props.alignY
    })

    const alignH = computed(() => {
        if (direction.value === 'vertical') return props.alignY
        return props.alignX
    })

    const padding = computed(() => {
        if (typeof props.padding === 'number') return `${props.padding}rem`
        return props.padding
    })

    const gap = computed(() => {
        if (typeof props.gap === 'number') return `${props.gap}rem`
        return props.gap
    })


    onMounted(() => {
        calculateReachedBreakpoint()
        window.addEventListener('resize', calculateReachedBreakpoint)
    })
</script>

<style lang="sass" scoped>
    .he-container.he-flex
        display: flex

        &.flex-wrap
            flex-wrap: wrap

        &.flex-direction-horizontal
            flex-direction: row

            &.reversed:not(.reached-breakpoint)
                
                flex-direction: row-reverse

        &.flex-direction-vertical
            flex-direction: column

            &.reversed:not(.reached-breakpoint)
                
                flex-direction: column-reverse
</style>