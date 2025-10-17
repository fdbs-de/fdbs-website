<template>
    <IodInput class="!h-10 !rounded-full w-full md:w-auto" placeholder="Suchen" clearable v-model="search">
        <template #right>
            <IodIconButton type="button" class="!w-12" icon="refresh" size="s" corner="pill" variant="text" @click="fetch" v-tooltip="'Aktualisieren'"/>
        </template>
    </IodInput>

    <IodLoader type="bar" v-show="loading"/>

    <h3>Aktuelle Angebote</h3>
    <div class="featured-grid" v-if="featuredItems.length ">
        <MediaItem v-for="item in featuredItems" :item="item" />
    </div>

    <h3>Alle Angebote</h3>
    <div class="content-grid" v-if="items.length ">
        <MediaItem v-for="item in items" :item="item" />
    </div>
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
        grid-template-columns: repeat(auto-fit, minmax(150px, 250px))
        gap: 1rem
</style>