<template>
    <div class="iod-container iod-table">
        <div class="table-fixture-wrapper">
            <div class="fixture-row">
                <slot name="left"/>

                <div class="p-1 flex items-center gap-1 bg-background-soft rounded-lg" v-if="$slots['wrapped-left']">
                    <slot name="wrapped-left"/>
                </div>

                <IodInput
                    class="table-search-input"
                    placeholder="Suchen"
                    v-model="filter.search"
                >
                    <template #right>
                        <IodTableFilters :filter="filter" :filterSettings="filterSettings" />
                        <IodIconButton type="button" variant="text" size="s" icon="search" @click="$emit('request:refresh')" v-tooltip="'Suchen'"/>
                    </template>
                </IodInput>
                
                <div class="spacer"></div>
                
                <div class="p-1 flex items-center gap-1 bg-background-soft rounded-lg" v-if="$slots['wrapped-right'] || selection.length">
                    <IodIconButton size="s" variant="text" :icon="action.icon" v-tooltip="action.text" :background="action.color" v-for="action in multipleActions" @click.stop="action.run(selection)" :disabled="!selection.length"/>
                    <slot name="wrapped-right"/>
                </div>
                
                <slot name="right"/>
                <slot name="header"/> <!-- Depricated -->
            </div>

            <div class="fixture-row">
                <IodIcon icon="filter_list" style="color: var(--color-text-soft)" v-tooltip="'Aktive Filter'"/>
                <IodButton class="filter-tag" size="s" corner="pill" variant="contained" :label='`Auswahl: ${selection.length}`' v-show="selection.length" @click="deselectAll()" v-tooltip="'Alles abwählen'"/>
                <IodButton class="filter-tag" size="s" corner="pill" variant="contained" :label='`Suche: "${filter.search}"`' v-show="filter.search" @click="filter.search = ''"/>
                <IodButton class="filter-tag" size="s" corner="pill" variant="contained" :label="`${item.label}: ${item.value}`" @click="delete filter[item.key]" v-for="item in displayFilter"/>
                <IodButton class="filter-tag" size="s" corner="pill" variant="contained" :label='`Seite: ${pagination.page}`' v-if="pagination" v-show="pagination.page > 1" @click="setPagination({ page: 0 })"/>
                <div class="spacer"></div>
            </div>

            <IodLoader type="bar" v-show="loading" />
        </div>




        <div class="table-empty-wrapper" v-show="!items.length">
            <div class="table-empty-text">Keine Einträge gefunden</div>
        </div>

        <div class="table-inner-wrapper" v-show="items.length">
            <div class="table-head">
                <div class="table-row">
                    <div class="table-column centered w-12">
                        <IodToggle
                            :modelValue="items.length && items.every(item => selection.includes(item.id))"
                            @update:modelValue="$event ? selectAll() : deselectAll()"
                            v-tooltip="'Alle auswählen'"
                            />
                    </div>
                    <div class="table-column" v-for="column in columns.filter(e => e.show)" :class="{
                        'resizeable': column.resizeable,
                        'resizing': column.resizing,
                        'sortable': column.sortable,
                        'sorted-field': sort.field === column.name,
                    }" :style="`width: ${column.width}px;`" @mousedown.exact="toggleSort(column.name)">
                        <div class="column-label" v-tooltip="column.label">{{ column.label }}</div>
                        <div class="column-sort-indicator">{{ sort.order === 'asc' ? 'arrow_upward' : 'arrow_downward' }}</div>
                        <div class="column-resize-handle" @mousedown.stop="startResize($event, column)"></div>
                    </div>
                </div>
            </div>

            <div class="table-body">
                <div class="table-row" v-for="item in items" @click="rowClick(item)">
                    <div class="table-column centered w-12">
                        <IodToggle :modelValue="getSelection.includes(item.id)" @click.stop @update:modelValue="setSelection(item, $event)"/>
                    </div>

                    <div class="table-column" v-for="column in columns.filter(e => e.show)" :style="`width: ${column.width}px;`">
                        <IodTableColumn :data="getData(item, column)"/>
                    </div>

                    <div class="table-column actions">
                        <div class="button-container">
                            <IodIconButton v-for="action in individualActions" size="s" variant="contained" :icon="action.icon" :background="action.color" v-tooltip="action.text" @click.stop="action.run([item.id])"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="table-pagination-wrapper" v-show="items.length">
            <IodPagination :modelValue="pagination" @update:modelValue="setPagination($event)"/>
            
            <div class="spacer"></div>

            <div class="size-fixture">
                <IodSelect class="table-page-size-select" v-tooltip="'Einträge pro Seite'" :modelValue="pagination.size" @update:modelValue="setPagination({ size: parseInt($event) })" :options="[
                    { value: 10, text: '10 pro Seite' },
                    { value: 20, text: '20 pro Seite' },
                    { value: 50, text: '50 pro Seite' },
                    { value: 100, text: '100 pro Seite' },
                    { value: 250, text: '250 pro Seite' },
                    { value: 100000000, text: 'Alle' },
                ]"/>

                <VDropdown placement="top-end">
                    <IodIconButton type="button" size="s" variant="text" icon="grid_view" v-tooltip="'Ansicht anpassen'"/>
                    <template #popper>
                        <div class="flex flex-col p-2">
                            <IodToggle
                                type="switch"
                                v-for="column in columns.filter(e => e.hideable)"
                                :label="column.label"
                                v-model="column.show" />
                        </div>
                    </template>
                </VDropdown>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    type Column = {
        name: string,
        label: string,
        valuePath?: string,
        transform?: (value: any, item: any) => any,
        width?: number,
        sortable?: boolean,
        resizeable?: boolean,
        hideable?: boolean,
        default?: string | undefined,
        // Private
        show?: boolean,
        resizing?: boolean,
    }

    type Action = {
        icon?: string,
        text?: string,
        color?: string,
        individual: boolean,
        multiple: boolean,
        triggerOnRowClick: boolean,
        isAvailable: (items: any[]) => boolean,
        run: (items: (string | number)[]) => void,
    }

    type Item = {
        id: number | string,
        [key: string]: any,
    }

    type Pagination = {
        from: number,
        to: number,
        total: number,
        page: number,
        lastPage: number,
        size: number,
    }

    type Sort = {
        field: string,
        order: 'asc' | 'desc',
    }

    type FilterSetting = {
        name: string,
        label: string,
        type: 'select',
        multiple: boolean,
        values: {
            value: any,
            text: string
        }[],
    }



    const props = defineProps({
        columns: {
            type: Array as PropType<Column[]>,
            default: () => [],
        },
        actions: {
            type: Array as PropType<Action[]>,
            default: () => [],
        },
        items: {
            type: Array as PropType<Item[]>,
            default: () => [],
        },
        pagination: {
            type: Object as PropType<Pagination>,
            default: () => ({ from: 0, to: 0, total: 0, page: 1, lastPage: 1, size: 20, }),
        },
        sort: {
            type: Object as PropType<Sort>,
            default: () => ({ field: '', order: '' }),
        },
        filter: Object,
        filterSettings: {
            type: Array as PropType<FilterSetting[]>,
            default: () => [],
        },
        selection: {
            type: Array as PropType<(string | number)[]>,
            default: () => [],
        },
        scope: {
            type: String,
            default: 'generic',
        },
        loading: {
            type: Boolean,
            default: false,
        },
    })

    const emits = defineEmits([
        'update:selection',
        'update:filter',
        'update:pagination',
        'update:sort',
        'request:refresh',
    ])



    const individualActions = computed<Action[]>(() => {
        return props.actions.filter((action: Action) => action.individual ?? false)
    })

    const multipleActions = computed<Action[]>(() => {
        return props.actions.filter((action: Action) => action.multiple ?? false)
    })

    const rowClick = (item: Item) => {
        for (const action of individualActions.value.filter(action => action.triggerOnRowClick))
        {
            action.run([item.id])
        }
    }



    // START: Selection
    const getSelection = computed(() => {
        return props.selection ?? []
    })

    const setSelection = (item: Item, value: boolean) => {
        let selection = getSelection.value

        if (value)
        {
            if (!selection.includes(item.id))
            {
                selection.push(item.id)
            }
        }
        else
        {
            selection = selection.filter((id) => id !== item.id)
        }

        emits('update:selection', selection)
    }

    const selectAll = () => {
        let selection = []

        for (const item of props.items)
        {
            selection.push(item.id)
        }

        emits('update:selection', selection)
    }

    const deselectAll = () => {
        emits('update:selection', [])
    }
    // END: Selection



    // START: Filter
    const filter = ref({...props.filter})

    const displayFilter = computed(() => {
        // Get the filter settings;
        let filterSettings = props.filterSettings ?? []

        // Get the filter values
        let filter_ = {...filter.value}

        // Remove empty values
        for (const key in filter_)
        {
            if (!filter_[key]) delete filter_[key]
        }

        // Get the display filter
        let displayFilter = []

        // Loop through the filter
        for (const key in filter_)
        {
            // Get the filter setting
            let setting = filterSettings.find(setting => setting.name === key)

            // If the setting is not found, skip it
            if (!setting) continue

            // Get the value
            let value = filter_[key]

            // If the value is an array, join it
            if (Array.isArray(value)) value = value.join(', ')

            // If the value is a boolean, convert it to a string
            if (typeof value === 'boolean') value = value ? 'An' : 'Aus'

            // If the value is a string, capitalize it
            if (typeof value === 'string') value = capitalizeWords(value)

            // Add the filter to the display filter
            displayFilter.push({
                key,
                label: setting.label,
                value,
            })
        }

        // Return the display filter
        return displayFilter
    })

    watch(filter, () => { emits('update:filter', filter.value) }, { deep: true })
    // END: Filter



    // START: Sort
    const getSort = computed(() => {
        return props.sort ?? { field: '', order: '' }
    })

    const setSort = (value: Sort) => {
        value = {
            ...getSort.value,
            ...value,
        }

        // Prevent non sortable columns from being sorted
        if (!columns.value.find((column: Column) => column.name === value.field)?.sortable)
        {
            return
        }

        // Emit the new sort
        emits('update:sort', value)
    }

    const toggleSort = (field: string) => {
        let value = (getSort.value.field === field) ? { order: getSort.value.order === 'asc' ? 'desc' : 'asc' } : { field, order: 'asc' }
        
        setSort(value as Sort)
    }
    // END: Sort



    // START: Pagination
    function setPagination(value: Partial<Pagination>)
    {
        emits('update:pagination', { ...props.pagination, ...value })
    }
    // END: Pagination



    const columns = ref<Column[]>([])

    watch(() => props.columns, () => {
        columns.value = props.columns.map(column => { return {
            ...column,
            resizing: false,
            // show: LocalSetting.get(props.scope, 'show.'+column.name, true),
            // width: LocalSetting.get(props.scope, 'width.'+column.name, column.width ?? 50),
            show: true,
            width: column.width ?? 50,
        }})
    },{
        immediate: true,
        deep: true,
    })

    watch(() => columns.value, () => {
        for (const column of columns.value)
        {
            // LocalSetting.set(props.scope, 'show.'+column.name, column.show)
            // LocalSetting.set(props.scope, 'width.'+column.name, column.width)
        }
    },{
        deep: true,
    })



    const startResize = (event: MouseEvent, column: Column) => {
        let startX = event.clientX
        let startWidth = column.width ?? 100
        column.resizing = true
        
        const mouseMove = (event: MouseEvent) => {
            let diff = event.clientX - startX
            let newWidth = startWidth + diff
            
            // Limit the width to 80px - 2000px
            column.width = Math.min(Math.max(newWidth, 80), 2000)
        }

        const mouseUp = () => {
            document.removeEventListener('mousemove', mouseMove)
            document.removeEventListener('mouseup', mouseUp)

            column.resizing = false
        }

        document.addEventListener('mousemove', mouseMove)
        document.addEventListener('mouseup', mouseUp)
    }



    const getData = (item: Item, column: Column) => {
        let path = column?.valuePath?.split('.') ?? []
        let value = item as any
        let data = {
            text: column.default ?? null,
            tooltip: null,
            color: null,
            icon: null,
            image: null,
        }

        for (const part of path)
        {
            if (!value.hasOwnProperty(part))
            {
                value = null
                break
            }

            value = value[part]
        }
        
        if (column.transform)
        {
            let transformedValue = column.transform(value, item)

            if (typeof transformedValue === 'string')
            {
                data.text = transformedValue
            }
            else
            {
                data = {
                    ...data,
                    ...transformedValue,
                }
            }
        }
        else
        {
            data.text = value ?? column.default ?? null
        }
        

        return data
    }
</script>

<style lang="sass" scoped>
    .iod-container.iod-table
        display: grid
        grid-template-rows: auto auto

        .table-fixture-wrapper
            position: relative
            padding-block: 1rem
            display: flex
            flex-direction: column
            gap: 1rem
            border-bottom: 1px solid var(--color-border)

            .fixture-row
                padding-inline: 1rem
                display: flex
                align-items: center
                flex-wrap: wrap
                gap: 1rem
                position: relative

                .filter-tag
                    padding-inline: .75rem !important
                    height: 1.5rem !important
                    text-transform: unset !important
                    letter-spacing: unset !important
                    --local-color-background: var(--color-text) !important

            .iod-loader
                position: absolute !important
                height: 2px
                left: 0
                right: 0
                bottom: 0

            .table-search-input
                height: 2.5rem
                width: 100%
                max-width: 400px
                min-width: 100px
                border-radius: var(--radius-m)

                .iod-button
                    --local-color-background: var(--color-text) !important

            .spacer
                flex: 1

        .table-empty-wrapper
            display: flex
            justify-content: center
            align-items: center
            height: 15rem
            padding: 1rem

            .table-empty-text
                font-size: 1rem

        .table-inner-wrapper
            display: grid
            grid-template-rows: auto auto
            overflow: hidden
            overflow-x: auto

            &::-webkit-scrollbar
                width: 3px
                height: 3px

            &::-webkit-scrollbar-track
                background: var(--color-background)

            &::-webkit-scrollbar-thumb
                background: #00000050
                border-radius: 0
                background-clip: content-box
                border: 0

                &:hover
                    background: var(--color-text-soft)
                    border: 0
                    border-radius: 0

            .table-row
                display: flex
                align-items: center
                min-height: 3rem
                position: relative
                border-bottom: 1px solid var(--color-background-soft)

                &:last-child
                    border-bottom: none

            .table-column
                display: flex
                align-items: center
                justify-content: flex-start
                user-select: none
                position: relative
                overflow: hidden

                &.resizeable
                    .column-resize-handle
                        display: block

                    &:hover
                        background: var(--color-background-soft)

                &.resizing
                    background: var(--color-background-soft)

                    .column-resize-handle
                        opacity: 1 !important

                &.centered
                    justify-content: center

                &.actions
                    flex: 1
                    justify-content: flex-end
                    position: sticky
                    right: 0
                    z-index: 100
                    opacity: 0
                    overflow: hidden
                    transition: all 100ms

                    .button-container
                        display: flex
                        align-items: center
                        padding: .25rem 1rem
                        gap: .25rem
                        background: var(--color-background-soft)
                        transform-origin: right
                        transform: translateX(1rem)
                        transition: all 100ms

                &.sortable:hover
                    .column-sort-indicator
                        color: var(--color-text-soft)

                &.sortable.sorted-field
                    .column-sort-indicator
                        color: var(--color-text)

                &.sortable.sorted-field,
                &.sortable:hover
                    .column-sort-indicator
                        display: block

                    .column-label
                        padding-right: .25rem

                .column-sort-indicator
                    font-family: var(--font-icon)
                    font-size: 1.25rem
                    display: none
                    user-select: none
                    pointer-events: none

                .column-resize-handle
                    width: 6px
                    cursor: col-resize
                    position: absolute
                    right: 3px
                    top: 3px
                    bottom: 3px
                    border-radius: 3px
                    background: var(--color-text)
                    z-index: 10
                    display: none
                    opacity: 0

                    &:hover
                        opacity: .7

                .column-label
                    padding-inline: 1rem
                    font-weight: bold
                    overflow: hidden
                    text-overflow: ellipsis
                    white-space: nowrap
                    color: var(--color-text)

            .table-head
                .table-row
                    height: 3rem
                    border-bottom: 1px solid var(--color-border)

                    .table-column
                        height: 100%

                        &.actions
                            background: none

            .table-body
                .table-row
                    &:hover
                        background-color: var(--color-background-soft)

                        .table-column.actions
                            opacity: 1

                            .button-container
                                transform: translateX(0)

                    .table-column
                        align-self: stretch



        .table-pagination-wrapper
            padding: 1rem
            display: flex
            align-items: center
            border-top: 1px solid var(--color-border)

            .spacer
                flex: 1

            .size-fixture
                display: flex
                align-items: center
                gap: .25rem
                padding: .25rem
                height: 2.5rem
                border-radius: var(--radius-m)
                background: var(--color-background-soft)

                .table-page-size-select
                    height: 2.5rem
                    width: 10rem
                    border-radius: var(--radius-m)

                .iod-button
                    --local-color-background: var(--color-text) !important
</style>