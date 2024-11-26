<template>
    <component
        download
        type="button"
        target="_blank"
        class="media-item"
        :is="isDirectory ? 'button' : 'a'"
        :href="item.cdn_path"
        :class="{'disabled': disabled}"
        @click="isDirectory ? emit('navigate') : null"
    >
        <div class="media-preview">
            <img class="media-thumbnail bg-zinc-800" v-if="item.thumbnail" :src="item.thumbnail" :alt="item.name">
            <div class="media-icon-wrapper" v-else>
                <MediaIcon :mime="(item.mime_type as string)"/>
            </div>
        </div>
        <div class="media-info">
            <span class="title" v-tooltip="tooltip" href="#">{{ item.name }}</span>
        </div>
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
    .media-item
        display: flex
        flex-direction: column
        border: 1px solid var(--color-background-soft)
        border-radius: var(--radius-l)
        overflow: hidden
        transition: all 50ms ease
        position: relative

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

        &:focus:not(:disabled):not(.disabled)
            outline: 2px solid var(--color-primary)

        &:focus:not(:disabled):not(.disabled),
        &:hover:not(:disabled):not(.disabled)
            border-color: var(--color-primary)

            &::after
                opacity: .1

        &:disabled,
        &.disabled
            pointer-events: none
            opacity: .5

        .media-preview
            position: relative
            z-index: 1
            padding: .5rem
            border-color: inherit
            
            .media-thumbnail
                display: block
                width: 100%
                aspect-ratio: 1
                border-radius: var(--radius-m)
                border: 1px solid transparent
                border-color: inherit
                object-fit: cover

            .media-icon-wrapper
                display: flex
                align-items: center
                justify-content: center
                width: 100%
                aspect-ratio: 1
                border: 1px solid transparent
                border-color: inherit
                border-radius: var(--radius-m)
                background: var(--color-background)

        .media-info
            position: relative
            z-index: 1
            display: flex
            align-items: center
            gap: 0 .5rem
            padding: 1rem
            border-top: inherit
            transition: all 50ms ease

            .title
                grid-area: title
                margin-right: auto
                max-width: 100%
                font-size: .875rem
                font-weight: 500
                color: var(--color-text)
                overflow: hidden
                text-overflow: ellipsis
                white-space: nowrap
</style>