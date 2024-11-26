<template>
    <component
        download
        type="button"
        target="_blank"
        class="media-row"
        :is="isDirectory ? 'button' : 'a'"
        :href="item.cdn_path"
        :class="{'disabled': disabled}"
        @click="isDirectory ? emit('navigate') : null"
    >
        <div class="media-preview">
            <img class="media-thumbnail bg-zinc-800" v-if="item.thumbnail" :src="item.thumbnail" :alt="item.name">
            <div class="media-icon-wrapper" v-else>
                <MediaIcon :mime="(item.mime_type as string)" />
            </div>
        </div>
        <span class="title" v-tooltip="tooltip">{{ item.name }}</span>
    </component>
</template>

<script lang="ts" setup>
    import type { MediaItem } from '~/types/media'

    const props = defineProps({
        item: {
            type: Object as PropType<MediaItem>,
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
    })

    const isDirectory = computed(() => props.item.mime_type === 'directory')
    const tooltip = computed(() => props.item.name + (isDirectory.value ? '' : ' - ' + humanFileSize(props.item.meta.size as number)))

    const emit = defineEmits(['navigate'])
</script>

<style lang="sass" scoped>
    .media-row
        position: relative
        display: flex
        align-items: center
        padding-inline: 1rem
        gap: 1rem
        height: 4rem
        overflow: hidden
        transition: all 50ms ease
        border: 1px solid transparent
        --border-color: var(--color-background-soft)

        &::after
            content: ''
            position: absolute
            top: 0
            bottom: 0
            left: 0
            right: 0
            z-index: 0
            background: var(--color-primary)
            opacity: 0

        &:not(:last-of-type)
            border-bottom-color: var(--color-background-soft)

        &:focus:not(:disabled):not(.disabled)
            outline: 2px solid var(--color-primary)
        
        &:focus:not(:disabled):not(.disabled),
        &:hover:not(:disabled):not(.disabled)
            --border-color: var(--color-primary)
            border-color: var(--border-color)
            border-radius: var(--radius-m)
            
            &::after
                opacity: .1

        &:disabled,
        &.disabled
            pointer-events: none
            opacity: .5

        .media-preview
            position: relative
            z-index: 1
            height: 100%
            padding-block: .5rem
            
            .media-thumbnail
                display: block
                height: 100%
                aspect-ratio: 1
                border: 1px solid var(--border-color)
                border-radius: var(--radius-m)
                object-fit: cover

            .media-icon-wrapper
                display: flex
                align-items: center
                justify-content: center
                height: 100%
                aspect-ratio: 1
                border: 1px solid var(--border-color)
                border-radius: var(--radius-m)
                background: var(--color-background)

                .media-icon
                    font-size: .3rem

        .title
            margin-right: auto
            font-size: 1rem
            font-weight: 500
            color: var(--color-text)
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap

        .profiles
            grid-area: profiles
            height: 1.5rem
            font-size: 1rem
</style>