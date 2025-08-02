<template>
    <div class="iod-container iod-breadcrumbs">
        <template v-for="(item, i) in items" :key="item.navigate_path">
            <span v-show="i !== 0">/</span>
            <IodButton
                normal-case
                variant="text"
                size="s"
                corner="pill"
                type="button"
                class="breadcrumb"
                :icon-left="i === 0 ? 'home_storage' : ''"
                :label="item.text"
                @click="emits('navigate', item.navigate_path)"
            />
        </template>
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

    const emits = defineEmits(['navigate'])
</script>

<style lang="sass" scoped>
    .iod-container.iod-breadcrumbs
        display: flex
        flex-wrap: wrap
        align-items: center
        user-select: none

        > span
            margin-inline: .25rem
            color: var(--color-border-focused)

        .breadcrumb
            text-transform: none
            letter-spacing: normal
            color: var(--color-text-soft)

            &:first-child
                font-weight: 600
</style>