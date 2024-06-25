<template>
    <div class="explorer">
        <div class="header py-4">
            <IodInput class="!h-10 w-72" placeholder="Suchen" clearable v-model="search"/>
            <HeSpacer />
            <IodButtonGroup class="bg-zinc-100">
                <IodIconButton type="button" icon="grid_view" background="var(--color-text-soft)" :variant="layout === 'grid' ? 'contained' : 'text'" @click="layout = 'grid'"/>
                <IodIconButton type="button" icon="view_list" background="var(--color-text-soft)" :variant="layout === 'list' ? 'contained' : 'text'" @click="layout = 'list'"/>
            </IodButtonGroup>
        </div>
        
        <div class="header py-2">
            <IodIconButton type="button" variant="text" corner="pill" icon="refresh" @click="fetch" v-tooltip="'Aktualisieren'"/>
            <MediaBreadcrumbs :path @navigate="openDirectory($event)"/>
            <HeSpacer />
            <IodLoader type="bar" v-show="loading"/>
        </div>

        <div class="main small-scrollbar">
            <div class="grid" v-if="items.length && layout === 'grid'">
                <MediaItem v-for="item in items" :item="item" @click="navigateOrDownload(item)" />
            </div>

            <div class="list" v-if="items.length && layout === 'list'">
                <MediaRow is="button" v-for="item in items" :item="item" @click="navigateOrDownload(item)" />
            </div>
        </div>

        <div class="footer">
            <IodPagination v-model="pagination"/>
            <HeSpacer />
            <IodSelect class="!h-10" v-tooltip="'Einträge pro Seite'" :modelValue="pagination.size" @update:modelValue="setPagination({ size: parseInt($event) })" :options="[
                { value: 10, text: '10 pro Seite' },
                { value: 20, text: '20 pro Seite' },
                { value: 50, text: '50 pro Seite' },
                { value: 100, text: '100 pro Seite' },
                { value: 250, text: '250 pro Seite' },
                { value: 100000000, text: 'Alle' },
            ]"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import type { MediaItem } from '~/types/media'
    import throttle from 'lodash.throttle'

    type Pagination = {
        from: number,
        to: number,
        total: number,
        page: number,
        lastPage: number,
        size: number,
    }


    
    const props = defineProps({
        root: {
            type: String,
            default: '',
        },
        layout: {
            type: String,
            default: 'grid',
        },
    })


    
    const route = useRoute()
    const loading = ref(false)
    const path = ref(route.query?.path || props.root)
    const items = ref([])
    
    const layout = ref(props.layout)
    const search = ref('')
    const pagination = ref({
        size: 20,
        from: 0,
        to: 0,
        page: 1,
        lastPage: 1,
        total: 0,
    })



    async function fetch() {
        loading.value = true

        try {
            const {data} = await useAxios().get(apiRoute('/media/:path', {
                path: path.value,
                size: pagination.value.size,
                page: pagination.value.page,
                filter_search: search.value,
            }))

            pagination.value.size = data.meta.per_page
            pagination.value.from = data.meta.from
            pagination.value.to = data.meta.to
            pagination.value.page = data.meta.current_page
            pagination.value.lastPage = data.meta.last_page
            pagination.value.total = data.meta.total
    
            items.value = data.data
        }
        catch (error)
        {}

        loading.value = false
    }
    const throttledFetch = throttle(fetch, 300)

    function setPagination(value: Partial<Pagination>) {
        pagination.value = { ...pagination.value, ...value }
    }



    function navigateOrDownload(item: MediaItem) {
        item.mime_type === 'directory' ? openDirectory(item.src_path as string) : downloadFile(item.cdn_path as string)
    }

    function downloadFile(p: string) {
        window.open(p, '_blank')
    }

    function openDirectory(p: string) {
        // Early return if above root
        if (!p.startsWith(props.root)) return

        // Early return if already open
        if (p === path.value) return
        
        // Set path
        path.value = p

        // Push state
        navigateTo(`?path=${path.value}`)
    }



    useRouter().beforeEach((to) => openDirectory(to.query.path as string || props.root))
    watch(() => [path, search, pagination.value.size, pagination.value.page], throttledFetch, { deep: true })
</script>

<style lang="sass" scoped>
    .explorer
        border: 1px solid var(--color-background-soft)
        border-radius: var(--radius-l)

        .header
            display: flex
            align-items: center
            padding-inline: 1rem
            gap: .5rem
            border-bottom: 1px solid var(--color-background-soft)
            position: relative

            .iod-loader
                position: absolute
                left: 0
                right: 0
                bottom: -1px
                height: 2px !important

        .main
            background: var(--color-background-soft)
            min-height: 10rem

            .grid
                display: grid
                grid-template-columns: repeat(auto-fill, minmax(170px, 1fr))
                gap: 1rem
                padding: 1rem

            .list
                padding: 1rem .25rem
                gap: .25rem
                display: flex
                flex-direction: column

        .footer
            display: flex
            align-items: center
            padding-inline: 1rem
            gap: 1rem
            height: 4.5rem
            border-top: 1px solid var(--color-background-soft)
</style>