<template>
    <component :is="is" type="button" class="profile-chip" :class="classes">
        <IodIcon
            class="pictogram"
            use-backdrop
            v-show="!!icon || !!image"
            :image="image"
            :icon="icon"
            :color="color"
            :alt="title || subtitle"
            :style="{'order': imageOrder}"
            />

        <HeFlex class="content" :align-x="horizontalAlign">
            <span class="name">{{ title }}</span>
            <span class="subtitle" v-show="subtitle">{{ subtitle }}</span>
        </HeFlex>

        <slot></slot>
    </component>
</template>

<script lang="ts" setup>
    const props = defineProps({
        image: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        subtitle: {
            type: String,
            default: '',
        },
        is: {
            default: 'button',
        },
        align: {
            type: String,
            default: 'left',
        },
        corner: {
            type: String,
            default: 'm',
        },
    })

    const imageOrder = computed(() => props.align === 'left' ? 0 : 1)
    const horizontalAlign = computed(() => props.align === 'left' ? 'flex-start' : 'flex-end')

    const classes = computed((): object => {
        return [
            `corner-${props.corner}`,
        ]
    })
</script>

<style lang="sass" scoped>
    .profile-chip
        display: flex
        align-items: center
        gap: 1rem
        padding-inline: 1rem
        user-select: none
        transition: all 80ms ease-in-out
        --local-image-height: 100%

        &:hover
            background-color: var(--color-background-soft)

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

        .content
            flex: 1

            .name
                font-weight: 600
                color: var(--color-text)
                line-height: 1.25rem

            .subtitle
                font-size: .625rem
                font-weight: 400
                color: var(--color-text-soft)
                line-height: 1rem

        .pictogram
            height: var(--local-image-height)
            border-radius: 50%
</style>
