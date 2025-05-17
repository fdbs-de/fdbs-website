<template>
    <div class="explorer">
        <div class="header">
            <MediaBreadcrumbs class="p-1 gap-1 rounded-full bg-background-soft w-full md:w-auto" :path="(path as string)" @navigate="navigate($event)"/>
            <HeSpacer class="hidden md:block" />
            <IodInput class="!h-10 !rounded-full w-full md:w-auto" placeholder="Suchen" clearable v-model="search">
                <template #right>
                    <IodIconButton type="button" class="!w-12" icon="refresh" size="s" corner="pill" variant="text" @click="fetch" v-tooltip="'Aktualisieren'"/>
                </template>
            </IodInput>

            <IodLoader type="bar" v-show="loading"/>
        </div>
        

        <div class="main small-scrollbar">
            <div class="grid gap-2 p-2 md:gap-4 md:p-4" v-if="items.length && layout === 'grid'">
                <MediaItem v-for="item in items" :item="item" @navigate="navigate(item.src_path)" />
            </div>

            <div class="list" v-if="items.length && layout === 'list'">
                <MediaRow v-for="item in items" :item="item" @navigate="navigate(item.src_path)" />
            </div>

            <div class="flex items-center justify-center h-40 select-none" v-if="!items.length">
                <span>Keine Dateien gefunden</span>
            </div>
        </div>

        <div class="footer">
            <IodPagination v-model="pagination" class="w-full md:w-auto" />
            <HeSpacer class="hidden md:block" />
            <IodSelect class="w-full md:w-auto !h-10 !rounded-full" v-tooltip="'Einträge pro Seite'" :modelValue="pagination.size" @update:modelValue="setPagination({ size: parseInt($event) })" :options="[
                { value: 10, text: '10 pro Seite' },
                { value: 20, text: '20 pro Seite' },
                { value: 50, text: '50 pro Seite' },
                { value: 100, text: '100 pro Seite' },
                { value: 250, text: '250 pro Seite' },
                { value: 100000000, text: 'Alle' },
            ]"/>
            <div class="flex items-center p-1 gap-1 rounded-full bg-background-soft">
                <IodIconButton type="button" class="!w-12" icon="grid_on" size="s" corner="pill" :variant="layout === 'grid' ? 'contained' : 'text'" @click="layout = 'grid'" v-tooltip="'Gridansicht'" />
                <IodIconButton type="button" class="!w-12" icon="view_headline" size="s" corner="pill" :variant="layout === 'list' ? 'contained' : 'text'" @click="layout = 'list'" v-tooltip="'Listenansicht'" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import type { MediaItem } from '~/types/media'
    // @ts-ignore
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
    const items = ref<MediaItem[]>([])
    
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
            const {data} = await useAxios().get(apiRoute('/api/media/:path', {
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
        catch (error) {}

        loading.value = false
    }
    const throttledFetch = throttle(fetch, 300)

    function setPagination(value: Partial<Pagination>) {
        pagination.value = { ...pagination.value, ...value }
    }



    function navigate(p: string) {
        // Early return if above root
        if (!p.startsWith(props.root)) return

        // Early return if already open
        if (p === path.value) return
        
        // Set path
        path.value = p

        // Push state
        navigateTo(`?path=${path.value}`)
    }



    useRouter().beforeEach((to) => navigate(to.query.path as string || props.root))
    watch(() => [path, search, pagination.value.size, pagination.value.page], throttledFetch, { deep: true })
</script>

<style lang="sass" scoped>
    .explorer
        border: 1px solid var(--color-background-soft)
        border-radius: var(--radius-l)

        .bg-background-soft
            background: var(--color-background-soft)

        .header
            display: flex
            flex-wrap: wrap
            align-items: center
            gap: 1rem
            padding: 1rem
            border-bottom: 1px solid var(--color-background-soft)
            position: relative

            .iod-loader
                position: absolute
                left: 0
                right: 0
                bottom: -1px
                height: 2px !important

        .main
            .grid
                display: grid
                grid-template-columns: repeat(auto-fill, minmax(150px, 1fr))

            .list
                display: flex
                flex-direction: column

        .footer
            display: flex
            flex-wrap: wrap
            align-items: center
            gap: 1rem
            padding: 1rem
            border-top: 1px solid var(--color-background-soft)
</style>