<template>
    <div class="iod-container iod-breadcrumbs">
        <button
            type="button"
            class="breadcrumb"
            v-for="item in items"
            :key="item.navigate_path"
            @click="emits('navigate', item.navigate_path)"
            @dragover.prevent
            @drop.prevent="onDrop($event, item.src_path)"
        >
            <div class="label">{{ item.text }}</div>
        </button>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
        path: {
            type: String,
            default: '',
        },
        rootPath: {
            type: String,
            default: '',
        },
    })

    const items = computed(() => {
        const items = []

        const parts = props.path.split('/').filter(e => e)

        let path = []

        for (const part of parts)
        {
            path.push(part)

            items.push({
                text: part,
                navigate_path: [props.rootPath, ...path].filter(e => e).join('/'),
                src_path: path.join('/'),
            })
        }

        return items
    })

    function onDrop(event: DragEvent, path: string)
    {
        emits('drop', {
            event: event as DragEvent,
            path: path as string
        })
    }

    const emits = defineEmits(['drop', 'navigate'])
</script>

<style lang="sass" scoped>
    .iod-container.iod-breadcrumbs
        display: flex
        align-items: center
        gap: 2rem
        user-select: none

        .breadcrumb
            background: transparent
            border: none
            display: flex
            align-items: center
            margin: 0
            gap: .5rem
            cursor: pointer
            font-size: 1rem
            text-decoration: none
            color: var(--color-text-soft)
            font-family: inherit
            position: relative
            padding: 0 .5rem
            border: none
            border-radius: var(--radius-s)
            outline: none

            &:hover
                color: var(--color-text)
                background: #00000010

            &:not(.breadcrumb:first-child)::after
                content: 'chevron_right'
                position: absolute
                top: 50%
                left: -1rem
                color: #00000070
                transform: translate(-50%, -50%)
                user-select: none
                pointer-events: none
                font-family: var(--font-icon)

            &:first-child
                font-weight: 500

                &::before
                    content: 'home_storage'
                    user-select: none
                    pointer-events: none
                    font-family: var(--font-icon)
                    font-size: 1.5rem
                    line-height: 1
</style>