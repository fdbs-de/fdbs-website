<template>
    <div class="media-icon" :class="['type-'+ mediatype]" :style="{color: meta.color}">
        <IodIcon :icon="meta.icon"/>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
        mime: String,
    })

    const dict = {
        'file': { color: '#475569', icon: 'widgets' },
        'directory': { color: '#475569', icon: 'category' },

        'image': { color: '#0ea5e9', icon: 'landscape' },
        'image/svg+xml': { color: '#ec4899', icon: 'polyline' },
        'image/gif': { color: '#3b82f6', icon: 'animation' },

        'video': { color: '#a855f7', icon: 'movie' },

        'audio': { color: '#f59e0b', icon: 'audiotrack' },

        'application/pdf': { color: '#F43F5E', icon: 'category' },

        'text': { color: '#475569', icon: 'subject' },
        'text/plain': { color: '#475569', icon: 'subject' },
        'text/html': { color: '#4f46e5', icon: 'web' },
        'text/php': { color: '#f97316', icon: 'php' },
        'text/css': { color: '#f97316', icon: 'style' },
        'text/javascript': { color: '#f59e0b', icon: 'data_object' },
        'text/markdown': { color: '#06B6D4', icon: 'markdown' },
        'text/xml': { color: '#16a34a', icon: 'code' },
        'text/csv': { color: '#059669', icon: 'table' },
    }



    const mediatype = computed(() => {
        return props.mime === 'directory' ? 'directory' : 'file'
    })

    const meta = computed(() => {
        let generic = props.mime?.split('/')[0] as string

        if (dict.hasOwnProperty(props.mime as string))
        {
            // @ts-ignore
            return dict[props.mime]
        }

        if (dict.hasOwnProperty(generic))
        {
            // @ts-ignore
            return dict[generic]
        }

        return dict[mediatype.value]
    })
</script>

<style lang="sass" scoped>
    .media-icon
        text-align: center
        font-size: 1rem
        color: var(--color-primary)
        display: flex
        align-items: center
        justify-content: center
        position: relative
        overflow: hidden

        &.type-file
            aspect-ratio: 11/14
            width: 4.5em
            clip-path: polygon(0 0, calc(100% - 1em) 0, 100% 1em, 100% 100%, 0 100%)
            border-radius: .5em

            .iod-icon
                font-size: 3em

        &.type-directory
            aspect-ratio: 14/11
            height: 4.5em
            clip-path: polygon(0 0, calc(50% - .5em) 0, 50% .5em, calc(100% - .25em) .5em, 100% .75em, 100% 100%, 0 100%)
            border-radius: .5em
            padding-top: .5em

            .iod-icon
                font-size: 2.5em

        &::after
            content: ''
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            background: currentColor
            opacity: .2
            pointer-events: none
</style>