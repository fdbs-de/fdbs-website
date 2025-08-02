<template>
    <div class="profile-card">
        <div class="profile-banner" :style="{ backgroundImage: `url(${banner})` }">
            <IodIconButton v-if="allowBannerUpload" class="overlay-button" type="button" size="xl" corner="l" icon="upload" @click="$emit('upload:banner')" />
            
            <VDropdown v-if="showActions" placement="bottom-end">
                <IodButton type="button" size="s" label="Bearbeiten" corner="pill" variant="contained" background="var(--color-background)" />
    
                <template #popper>
                    <slot name="actions" />
                </template>
            </VDropdown>
        </div>

        <div class="profile-image">
            <img :src="image" :alt="title">
            <IodIconButton v-if="allowImageUpload" class="overlay-button" type="button" size="xl" corner="pill" icon="upload" @click="$emit('upload:image')" />
        </div>

        <div class="profile-info">
            <h2>{{ title }}</h2>
            <p v-if="subtitle">{{ subtitle }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
    defineProps({
        banner: {
            type: String,
            default: '/images/app/default/user_banner.jpg',
        },
        image: {
            type: String,
            default: '/images/app/default/user_image.jpg',
        },
        title: {
            type: String,
        },
        subtitle: {
            type: String,
        },
        showActions: {
            type: Boolean,
            default: false,
        },
        allowImageUpload: {
            type: Boolean,
            default: false,
        },
        allowBannerUpload: {
            type: Boolean,
            default: false,
        },
    })

    defineEmits(['upload:image', 'upload:banner'])
</script>

<style lang="sass" scoped>
    .profile-card
        width: 100%
        display: flex
        flex-direction: column
        align-items: center
        text-align: center
        overflow: hidden

        .overlay-button.iod-button
            opacity: 0
            position: absolute
            top: 5px
            bottom: 5px
            left: 5px
            right: 5px
            width: auto
            height: auto
            z-index: 2
            --local-color-text: white
            --local-color-background: #00000090
            transition: all 100ms

            &:hover
                opacity: 1

        .profile-banner
            width: 100%
            height: 12rem
            position: relative
            z-index: 1
            display: flex
            align-items: flex-end
            justify-content: flex-end
            padding: 1rem
            background-size: cover
            background-position: center
            background-repeat: no-repeat
            background-color: var(--color-background-soft)

        .profile-image
            width: 10rem
            height: 10rem
            margin-top: -5rem
            border-radius: 50%
            background: var(--color-background)
            position: relative
            z-index: 2

            &::before,
            &::after
                content: ''
                position: absolute
                bottom: 50%
                width: 1.5rem
                height: 1.5rem
                background: transparent
                pointer-events: none

            &::before
                right: calc(100% - 1px)
                border-radius: 0 0 var(--radius-xl) 0
                box-shadow: .75rem .75rem 0 var(--color-background)

            &::after
                left: calc(100% - 1px)
                border-radius: 0 0 0 var(--radius-xl)
                box-shadow: -.75rem .75rem 0 var(--color-background)

            img
                width: 100%
                height: 100%
                object-fit: cover
                border-radius: 50%
                border: 5px solid var(--color-background)
                position: relative
                z-index: 1

        .profile-info
            width: 100%
            display: flex
            flex-direction: column
            align-items: center
            padding-block: 1rem 2rem

            h2
                margin: 0
                font-size: 1.5rem
                font-weight: 600

            p
                margin: 0
</style>