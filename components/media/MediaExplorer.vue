<template>
    <div class="explorer">
        <div class="header py-4">
            <IodIconButton type="button" variant="text" icon="refresh" @click="fetch" background="var(--color-text-soft)" v-tooltip="'Aktualisieren'"/>
            <IodInput class="!h-10 w-64" placeholder="Suchen"/>
            <HeSpacer />
            <IodButtonGroup class="bg-zinc-100">
                <IodIconButton type="button" icon="grid_view" background="var(--color-text-soft)" :variant="layout === 'grid' ? 'contained' : 'text'" @click="layout = 'grid'"/>
                <IodIconButton type="button" icon="view_list" background="var(--color-text-soft)" :variant="layout === 'list' ? 'contained' : 'text'" @click="layout = 'list'"/>
            </IodButtonGroup>
        </div>

        <div class="header py-2">
            <MediaBreadcrumbs :path @navigate="openDirectory($event)"/>
            <HeSpacer />
            <IodLoader type="bar" v-show="loading"/>
        </div>

        <div class="main small-scrollbar">
            <div class="grid" v-if="items.length && layout === 'grid'">
                <MediaItem v-for="item in items" :item="item" @click="navigateOrDownload($event, item)" />
            </div>

            <div class="list" v-if="items.length && layout === 'list'">
                <MediaRow is="button" v-for="item in items" :item="item" @click="navigateOrDownload($event, item)" />
            </div>
        </div>

        <div class="footer">
            <IodPagination v-if="items.length" :total="items.length" @set-page="path = $event"/>
            <HeSpacer />
            <!-- <IodSelect class="!h-10" v-tooltip="'Einträge pro Seite'" :modelValue="20" @update:modelValue="setPagination({ size: parseInt($event) })" :options="[
                { value: 10, text: '10 pro Seite' },
                { value: 20, text: '20 pro Seite' },
                { value: 50, text: '50 pro Seite' },
                { value: 100, text: '100 pro Seite' },
                { value: 250, text: '250 pro Seite' },
                { value: 100000000, text: 'Alle' },
            ]"/> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
        root: {
            type: String,
            default: '',
        }
    })

    const path = ref(props.root)
    const items = ref([])
    const loading = ref(false)
    const layout = ref('grid')

    async function fetch()
    {
        loading.value = true
        const {data} = await useAxios().get('/media/'+path.value)
        loading.value = false

        items.value = data.data
    }

    function navigateOrDownload(e: MouseEvent, item: any)
    {
        if (item.mime_type === 'directory')
            openDirectory(item.src_path)
        else
            downloadFile(item.cdn_path)
    }

    function downloadFile(p: string)
    {
        // open in new tab
        window.open(p, '_blank')
    }

    function openDirectory(p: string)
    {
        if (!p.startsWith(props.root)) return

        path.value = p
    }

    watch(path, fetch, { immediate: true, deep: true })
</script>

<style lang="sass" scoped>
    .explorer
        border: 1px solid var(--color-background-soft)
        border-radius: var(--radius-l)

        .header
            display: flex
            align-items: center
            padding-inline: 1rem
            gap: 1rem
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