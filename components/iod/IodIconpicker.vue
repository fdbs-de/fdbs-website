<template>
    <div class="iod-container iod-iconpicker" >
        <div class="icon-picker">
            <div class="icon" v-for="icon in icons.filter(e => e.category === 'action')" :key="icon.icon" @click="selectIcon(icon.icon)">{{icon.icon}}</div>
        </div>
    </div>
</template>

<script lang="ts">
    interface Icon {
        category: string;
        icon: string;
    }
</script>

<script setup lang="ts">
    const emits = defineEmits([
        'select',
    ])

    defineProps<{
        icons: Icon[];
    }>()




    const selectIcon = (icon: string): void => {
        emits('select', icon)
    }
</script>

<style lang="sass" scoped>
    .iod-container.iod-iconpicker
        box-sizing: border-box

        *
            box-sizing: inherit

        .icon-picker
            display: grid
            grid-template-columns: repeat(auto-fit, minmax(2.5rem, 1fr))
            gap: .5rem
            padding: .5rem
            border-radius: var(--radius-m)
            background: var(--color-background)
            border: 1px solid var(--color-border)
            max-height: 50vh
            overflow-y: auto
            width: 320px

            .icon
                display: flex
                justify-content: center
                align-items: center
                font-size: 1.5rem
                line-height: 1
                aspect-ratio: 1
                border-radius: var(--radius-s)
                background: var(--color-background-soft)
                font-family: var(--font-icon)
                cursor: pointer
                transition: all 50ms ease-in-out
                overflow: hidden

                &:hover
                    color: var(--color-primary)
</style>