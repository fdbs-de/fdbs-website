<template>
    <div class="iod-container iod-profile-array" v-tooltip="tooltip">
        <span class="item additional" v-if="showAdditionalCount" :style="{zIndex: limit + 1}">+{{ data.length - limit }}</span>
        <template v-for="(item, i) in data.slice(0, limit)">
            <IodIcon
                class="item"
                use-backdrop
                :image="(item.image as string)"
                :icon="(item.icon as string)"
                :color="(item.color as string)"
                :alt="(item.label as string)"
                :style="{zIndex: limit - i}"
            />
        </template>
    </div>
</template>

<script lang="ts" setup>
    type Profile = {
        image?: string | null,
        icon?: string | null,
        color?: string | null,
        label?: string | null,
    }

    const props = defineProps({
        data: {
            type: Array as PropType<Profile[]>,
            default: () => [],
        },
        limit: {
            type: Number,
            default: 3,
        },
    })

    const showAdditionalCount = computed(() => props.data.length > props.limit)
    const limit = computed(() => showAdditionalCount.value ? props.limit - 1 : props.limit)
    const tooltip = computed(() => props.data.map(item => item.label).join(', '))
</script>

<style lang="sass" scoped>
    .iod-container.iod-profile-array
        --local-color-background: var(--color-background)
        --local-inset: -.75rem

        height: 2rem
        display: flex
        align-items: center
        font-size: .75rem

        .item
            position: relative
            height: 100%
            aspect-ratio: 1
            object-fit: cover
            border-radius: 100vh
            box-shadow: 0 0 0 2px var(--local-color-background)
            margin-left: var(--local-inset)
            background: var(--color-background)
            user-select: none
            font-size: inherit

            &.additional
                display: flex
                align-items: center
                justify-content: center
                color: var(--color-text)
                line-height: 1
                font-weight: 600
                white-space: nowrap
                overflow: hidden
                text-overflow: ellipsis
                background: var(--color-background-soft)
                padding: .5rem
                font-size: .75rem

            &:first-child
                margin-left: 0
                
</style>