<template>
    <Transition name="slide">
        <HeCard class="upload-card" key="card" v-show="uploadManager.status.total > 0">
            <TransitionGroup name="fade">
                <div class="header" key="header">
                    <span class="flex-1">{{ uploadManager.statusText || 'Keine Uploads' }} </span>
                    <IodIconButton type="button" variant="text" corner="pill" size="s" icon="expand_less" :class="{expanded}" @click="expanded = !expanded"/>
                    <IodIconButton type="button" variant="text" corner="pill" size="s" icon="cancel" @click="uploadManager.clearAll()" />
                </div>
                <div class="content small-scrollbar" key="content" v-show="expanded">
                    <TransitionGroup name="fade">
                        <div class="upload" v-for="upload in uploadManager.uploads" :key="upload.id" :data-status="upload.status">
                            <div class="progress" :style="`transform: scaleX(${upload.progress / 100})`"></div>
                            <span class="flex-1">{{ upload.name }}</span>
                            <div class="h-9 w-9 flex items-center justify-center relative">
                                <IodIconButton class="relative z-10" type="button" variant="text" corner="pill" size="s" icon="close" @click="uploadManager.cancel(upload.id)" />
                                <IodLoader class="absolute pointer-events-none" :thickness="3" v-show="upload.status === 'uploading'"/>
                            </div>
                        </div>
                    </TransitionGroup>
                </div>
            </TransitionGroup>
        </HeCard>
    </Transition>
</template>

<script lang="ts" setup>
    const uploadManager = useUploadStore()
    const expanded = ref(true)
</script>

<style lang="sass" scoped>
    .fade-move,
    .fade-enter-active,
    .fade-leave-active
        transition: all 200ms ease-in-out !important

    .fade-enter-from,
    .fade-leave-to
        opacity: 0

    .fade-leave-active
        position: absolute



    .slide-move,
    .slide-enter-active,
    .slide-leave-active
        transition: all 200ms ease-in-out !important

    .slide-enter-from,
    .slide-leave-to
        transform: translateY(100%)

    .slide-leave-active
        position: absolute



    .upload-card
        display: flex
        flex-direction: column
        border: none
        border-radius: var(--radius-l) var(--radius-l) 0 0 !important
        box-shadow: var(--shadow-m)
        position: fixed
        z-index: 100
        bottom: 0
        right: 1rem
        padding: .25rem
        gap: .25rem
        width: calc(100% - 2rem)
        max-width: 22rem
        user-select: none
        transition: all 200ms ease-in-out

        .header
            display: flex
            font-weight: 500
            align-items: center
            color: var(--color-text)
            border-radius: var(--radius-m)
            height: 3rem
            background: var(--color-background-soft)
            padding-inline: 1rem .5rem !important

            .iod-button
                transition: transform 200ms ease-in-out
                &.expanded
                    transform: rotate(180deg)

        .content
            display: flex
            flex-direction: column
            max-height: 30rem
            overflow-y: auto

        .upload
            flex: none
            display: flex
            align-items: center
            padding-inline: 1rem .5rem !important
            height: 3rem
            border-radius: var(--radius-m)
            width: 100%
            color: var(--color-text)
            position: relative
            overflow: hidden

            &:hover
                background: var(--color-background-soft)

            .progress
                content: ''
                position: absolute
                top: 0
                bottom: 0
                left: 0
                right: 0
                z-index: -1
                user-select: none
                pointer-events: none
                background: transparent
                opacity: 0
                transform-origin: left
                transform: scaleX(0)
                transition: all 100ms ease-in-out, transform 200ms ease-in-out, opacity 500ms ease-in-out
                mask-image: linear-gradient(to right, #00000066, #000000ff)

            &[data-status="uploading"]
                color: var(--color-info)
                .progress
                    background: var(--color-info)
                    opacity: .2

            &[data-status="completed"]
                color: var(--color-success)
                .progress
                    opacity: 0

            &[data-status="cancelled"]
                color: var(--color-error)
                .progress
                    background: var(--color-error)
                    opacity: .2

            .iod-button
                --local-color-background: currentColor
</style>