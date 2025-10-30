<template>
    <!-- <IodInput class="!h-10 !rounded-full w-full md:w-auto" placeholder="Suchen" clearable v-model="search">
        <template #right>
            <IodIconButton type="button" class="!w-12" icon="refresh" size="s" corner="pill" variant="text" @click="fetch" v-tooltip="'Aktualisieren'"/>
        </template>
    </IodInput> 
    <IodLoader type="bar" v-show="loading"/> -->

    <h3>Aktuelle Angebote</h3>
    <div class="featured-grid" v-if="featuredItems.length ">
        <a class="offer-item" v-for="item in featuredItems" :href="item.cdn_path || '#'" target="_blank" rel="noopener">
            <img :src="item.thumbnail || ''" :alt="item.name" />
            <span v-tooltip="item.name">{{ item.name }}</span>
        </a>
    </div>
    <IodAlert v-else as="placeholder" class="h-64 border">
        Keine aktuellen Angebote verfügbar.
    </IodAlert>

    <slot name="banner" />

    <h3 class="mt-16">Alle Angebote</h3>
    <div class="content-grid" v-if="items.length ">
        <a class="offer-item" v-for="item in items" :href="item.cdn_path || '#'" target="_blank" rel="noopener">
            <img :src="item.thumbnail || ''" :alt="item.name" />
            <span v-tooltip="item.name">{{ item.name }}</span>
        </a>
    </div>
    <IodAlert v-else as="placeholder" class="h-64 border">
        Keine Angebote verfügbar.
    </IodAlert>
</template>

<script lang="ts" setup>
    import type { MediaItem } from '~~/types/media'
    // @ts-ignore
    import throttle from 'lodash.throttle'



    const props = defineProps({
        content: {
            type: String,
            required: true,
        },
        featured: {
            type: String,
            required: false,
        },
    })


    
    const loading = ref(false)
    const items = ref<MediaItem[]>([])
    const featuredItems = ref<MediaItem[]>([])
    const search = ref('')



    async function fetchFiles(path: string, search: string = '') {
        try {
            return (await useAxios().get(apiRoute('/api/media/:path', {
                path,
                size: 250,
                page: 1,
                filter_search: search,
            }))).data.data.filter((i: MediaItem) => i.mime_type !== 'directory')
        }
        catch (error) {}
    }

    async function fetch() {
        loading.value = true

        if (props.content) items.value = await fetchFiles(props.content, search.value)
        if (props.featured) featuredItems.value = await fetchFiles(props.featured, search.value)

        loading.value = false
    }

    const throttledFetch = throttle(fetch, 300)

    watch(() => [search], throttledFetch, { deep: true, immediate: true })
</script>

<style lang="sass" scoped>
    .featured-grid
        display: grid
        grid-template-columns: repeat(2, 1fr)
        gap: 1rem

    .content-grid
        display: grid
        grid-template-columns: repeat(5, 1fr)
        gap: 1rem

    .offer-item
        position: relative
        display: flex
        flex-direction: column
        align-items: center
        text-align: center
        color: var(--color-text)
        border-radius: .5rem
        overflow: hidden
        transition: all 100ms

        > img
            position: relative
            z-index: 1
            width: 100%
            max-height: 300px
            border-radius: .5rem
            border: 1px solid var(--color-border)
            object-fit: contain
            background: var(--color-background-soft)
            transition: all 100ms

        > span
            position: relative
            z-index: 1
            margin-block: .5rem
            font-weight: 600

        &::after
            content: ''
            position: absolute
            inset: 0
            z-index: 0
            opacity: 0
            background: var(--color-primary)

        &:hover,
        &:focus
            color: var(--color-primary)

            &::after
                opacity: .1

            img
                background: currentColor
                border: 2px solid currentColor

        &:focus
            outline: 2px solid var(--color-primary)

    @media (max-width: 768px)
        .featured-grid
            grid-template-columns: 1fr

        .content-grid
            grid-template-columns: repeat(2, 1fr)
</style>