<template>
    <HeCard
        is="div"
        class="media-item"
        :class="classes"
        @dragover.prevent="onDraggingOver"
        @dragstart="onStartDraggingOver"
        @dragend="onStopDraggingOver"
        @dragleave="onStopDraggingOver"
        @drop.prevent="onDrop"
    >
        <div class="media-preview">
            <img class="media-thumbnail" v-if="item.thumbnail" :src="item.thumbnail" :alt="item.name">
            <div class="media-icon-wrapper" v-else>
                <MediaIcon :mime="(item.mime_type as string)" />
            </div>
        </div>
        <div class="media-info">
            <NuxtLink v-if="isDirectory" class="title" v-tooltip="nameTooltip" :to="`/d/media/${item.src_path}`">{{ item.name }}</NuxtLink>
            <a v-if="!isDirectory" class="title" v-tooltip="nameTooltip" href="#" @click.prevent="emits('edit', item)">{{ item.name }}</a>
            <IodProfileArray class="profiles" :data="profiles" @dblclick.stop="emits('share', item)"/>
        </div>
        <div class="overlay" v-show="showContextMenu">
            <VDropdown placement="bottom">
                <IodIconButton class="more-button" type="button" variant="contained" corner="pill" icon="more_vert" size="s"/>
                <template #popper>
                    <ContextMenu class="min-w-15">
                        <ContextMenuItem is="a" icon="open_in_new" :href="(item.cdn_path as string)" target="_blank" rel="noopener noreferrer">In neuem Tab öffnen</ContextMenuItem>
                        <ContextMenuItem is="a" icon="download" :href="(item.cdn_path as string)" target="_blank" download rel="noopener noreferrer">Herunterladen</ContextMenuItem>
                        <ContextMenuDivider />
                        <ContextMenuItem is="button" v-close-popper icon="share" @click="emits('share', item)">Freigeben</ContextMenuItem>
                        <ContextMenuItem is="button" v-close-popper icon="edit" @click="emits('rename', item)">Umbenennen</ContextMenuItem>
                        <ContextMenuItem is="button" v-close-popper icon="settings" @click="emits('edit', item)">Eigenschaften</ContextMenuItem>
                        <ContextMenuDivider />
                        <ContextMenuItem is="button" v-close-popper color="var(--color-error)" icon="delete" @click="emits('delete', item)">Löschen</ContextMenuItem>
                    </ContextMenu>
                </template>
            </VDropdown>
        </div>
    </HeCard>
</template>

<script lang="ts" setup>
    import type { MediaItem } from '~/types/media'



    const props = defineProps({
        item: {
            type: Object as PropType<MediaItem>,
            required: true
        },
        selected: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        dragging: {
            type: Boolean,
            default: false
        },
        showContextMenu: {
            type: Boolean,
            default: false
        },
    })

    const dragOver = ref(false)
    const isDirectory = computed(() => props.item.mime_type === 'directory')

    const classes = computed(() => {
        return [
            isDirectory.value ? 'is-directory' : 'is-file',
            {
                'selected': props.selected,
                'ghost': ghost.value,
                'disabled': props.disabled,
                'dragging': props.dragging,
                'dragover': dragOver.value,
            },
        ]
    })

    // Ghost items are items that are not selectable, draggable or dropable
    const ghost = computed(() => {
        // @case: disabled
        if (props.disabled) return true

        // @case: selected and dragging
        if (props.selected && props.dragging) return true

        // @case: dragging and not a directory
        if (props.dragging && !isDirectory.value) return true

        // @case: not ghost
        return false
    })

    const profiles = computed(() => {
        let profiles = props.item.access
        .filter(access => !!access.permissible_id)
        .sort((a, b) => a.permissible_type.localeCompare(b.permissible_type) || a.permissible?.name?.localeCompare(b.permissible?.name))
        .map((access) => ({
            label: access?.permissible?.name,
            image: access?.permissible?.profile_image || null,
            color: access?.permissible?.color || null,
            icon: access?.permissible?.icon || null,
        }))

        let publicAccess = props.item.access.find(access => !access.permissible_id)?.permission || null
        if (publicAccess)
        {
            profiles.unshift({
                label: 'Allgemeiner Zugriff',
                icon: {
                    'read': 'visibility',
                    'write': 'edit',
                    'admin': 'shield_person',
                }[publicAccess],
                color: null,
                image: null,
            })
        }

        if (props.item.inherit_access)
        {
            profiles.unshift({
                label: 'Vererbt',
                icon: 'folder',
                color: null,
                image: null,
            })
        }

        return profiles
    })

    const nameTooltip = computed(() => {
        return props.item.name + (isDirectory.value ? '' : ' - ' + humanFileSize(props.item.meta.size as number))
    })



    function onStartDraggingOver()
    {
        dragOver.value = false
    }

    function onDraggingOver()
    {
        dragOver.value = true
    }

    function onStopDraggingOver()
    {
        dragOver.value = false
    }

    function onDrop(event: DragEvent)
    {
        dragOver.value = false

        if (ghost.value)
        {
            event.stopPropagation()
            return
        }

        emits('drop', event)
    }



    const emits = defineEmits(['select', 'download', 'edit', 'share', 'rename', 'drop', 'delete'])
</script>

<style lang="sass" scoped>
    .media-item
        --local-border-color: var(--color-background-soft)

        position: relative
        display: flex
        flex-direction: column
        border-radius: var(--radius-l)
        transition: all 50ms ease
        overflow: hidden
        border-color: var(--local-border-color) !important

        &::after
            content: ''
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            pointer-events: none
            background: var(--color-info)
            border-radius: inherit
            z-index: 0
            opacity: 0
            transition: opacity 50ms ease

        &.ghost
            opacity: .5

        &.selected:not(.ghost),
        &.dragover:not(.ghost)
            --local-border-color: var(--color-info)

            &::after
                opacity: .1

        &:hover:not(.ghost)
            box-shadow: var(--shadow-m)

            .more-button
                opacity: 1

        .media-preview
            position: relative
            z-index: 1
            padding: .5rem
            
            .media-thumbnail
                width: 100%
                aspect-ratio: 1
                border-radius: var(--radius-m)
                object-fit: cover

            .media-icon-wrapper
                display: flex
                align-items: center
                justify-content: center
                width: 100%
                aspect-ratio: 1
                border-radius: var(--radius-m)

        .media-info
            position: relative
            z-index: 1
            display: flex
            align-items: center
            gap: 0 .5rem
            padding: 1rem
            border-top: 1px solid var(--local-border-color)
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

            .profiles
                grid-area: profiles
                height: 1.5rem
                font-size: 1rem

        .overlay
            position: absolute
            top: 0
            right: 0
            padding: .5rem
            z-index: 10
            pointer-events: none
            
        .more-button
            opacity: 0
            pointer-events: all
</style>