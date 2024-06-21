<template>
    <component :is class="media-row" :class="classes" >
        <div class="media-preview">
            <img class="media-thumbnail" v-if="item.thumbnail" :src="item.thumbnail" :alt="item.name">
            <div class="media-icon-wrapper" v-else>
                <MediaIcon :mime="(item.mime_type as string)" />
            </div>
        </div>
        <span class="title" v-tooltip="nameTooltip" @click.prevent="emits('edit', item)">{{ item.name }}</span>
        <IodProfileArray class="profiles" :data="profiles" @dblclick.stop="emits('share', item)"/>
    </component>
</template>

<script lang="ts" setup>
    import type { MediaItem } from '~/types/media'



    const props = defineProps({
        is: {
            type: [String, Object, Function, Symbol, Array, Promise, Boolean, Number],
            default: 'div',
        },
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



    const emits = defineEmits(['select', 'download', 'edit', 'share', 'rename', 'drop', 'delete'])
</script>

<style lang="sass" scoped>
    .media-row
        position: relative
        display: flex
        align-items: center
        padding-inline: .5rem 1rem
        gap: 1rem
        height: 3rem
        overflow: hidden
        transition: all 50ms ease

        &:hover
            box-shadow: var(--shadow-s)
            border-radius: var(--radius-m)
            background: var(--color-background)

        .media-preview
            position: relative
            z-index: 1
            padding: .25rem
            height: 100%
            aspect-ratio: 1
            
            .media-thumbnail
                width: 100%
                height: 100%
                padding: .25rem
                object-fit: contain

            .media-icon-wrapper
                width: 100%
                height: 100%
                display: flex
                align-items: center
                justify-content: center
                aspect-ratio: 1
                border-radius: var(--radius-m)

                .media-icon
                    font-size: .4rem

        .title
            margin-right: auto
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
</style>