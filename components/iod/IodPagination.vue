<template>
    <div class="iod-container iod-pagination">
        <IodIconButton type="button" size="s" variant="text" icon="first_page" :disabled="modelValue.page <= 1" @click="setPage(1)" />
        <IodIconButton type="button" size="s" variant="text" icon="chevron_left" :disabled="modelValue.page <= 1" @click="setPage(modelValue.page - 1)" />
        
        <div class="range">
            <span><b>{{ modelValue.from }} - {{ modelValue.to }}</b> / {{ modelValue.total }}</span>
        </div>
        
        <IodIconButton type="button" size="s" variant="text" icon="chevron_right" :disabled="modelValue.page >= modelValue.lastPage" @click="setPage(modelValue.page + 1)" />
        <IodIconButton type="button" size="s" variant="text" icon="last_page" :disabled="modelValue.page >= modelValue.lastPage" @click="setPage(modelValue.lastPage)" />
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
        modelValue: {
            type: Object,
            default: () => ({
                from: 0,
                to: 0,
                total: 0,
                page: 1,
                lastPage: 1,
                size: 20,
            }),
        },
    })

    const emits = defineEmits(['update:modelValue'])
    const setPage = (page: number) => emits('update:modelValue', { ...props.modelValue, page })
</script>

<style lang="sass" scoped>
    .iod-container.iod-pagination
        display: inline-flex
        align-items: center
        justify-content: center
        gap: .25rem
        padding: .25rem
        height: 2.5rem
        border-radius: var(--radius-m)
        background: var(--color-background-soft)
        overflow: hidden
        user-select: none

        .iod-button
            --local-color-background: var(--color-text) !important

        .range
            display: flex
            align-items: center
            justify-content: center
            min-width: 10rem

            b
                font-weight: 500
                color: var(--color-text)
</style>