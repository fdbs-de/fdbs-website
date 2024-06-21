<template>
    <div class="he-container he-menu">
        <nav class="he-desktop-menu">
            <ul class="sub-menu">
                <HeMenuItem
                    v-for="item in menu"
                    :key="item.id"
                    :href="item.href"
                    :label="item.label"
                    :notification="item.notification"
                    :children="item.children || []"
                    :initial-open="true"
                    :show-toggle="true"
                />
            </ul>
        </nav>
    
        <IodIconButton class="he-mobile-menu-toggle" type="button" aria-label="Navigation öffnen" icon="menu" variant="contained" size="s" corner="pill" @click="menuPopup.open()" />
    
        <IodPopup ref="menuPopup" placement="right" blur="none" should-close-on-backdrop-click>
            <div class="he-mobile-menu menu-main">
                <ul class="sub-menu is-open">
                    <HeMenuItem
                        v-for="item in menu"
                        :key="item.id"
                        :href="item.href"
                        :label="item.label"
                        :notification="item.notification"
                        :children="item.children || []"
                        :initial-open="mobileSubmenuInitialOpen"
                        :show-toggle="mobileSubmenuShowToggle"
                        @navigate="menuPopup.close()"
                    />
                </ul>
            </div>
        </IodPopup>
    </div>
</template>

<script lang="ts" setup>
    import HeMenuItem from './HeMenuItem.vue'

    export type MenuItem = {
        id: string
        href: string
        label: string
        notification?: string
        children?: MenuItem[]
    }

    defineProps({
        menu: {
            type: Array as PropType<MenuItem[]>,
            default: () => [],
        },
        mobileBreakpoint: {
            type: Number,
            default: null,
        },
        mobileSubmenuInitialOpen: {
            type: Boolean,
            default: false,
        },
        mobileSubmenuShowToggle: {
            type: Boolean,
            default: false,
        },
    })

    const menuPopup = ref()
</script>

<style lang="sass">
    .he-container.he-menu
        a
            text-decoration: none

    .he-mobile-menu-toggle
        display: none !important
        --local-font: var(--font-brand)
        --local-color-background: var(--color-text-soft) !important

    .he-mobile-menu.menu-main
        overflow-y: auto
        overflow-x: hidden
        flex: 1
        padding-block: 1rem

        .sub-menu
            display: none
            flex-direction: column
            list-style: none
            padding: 0
            margin: 0
            gap: .25rem

            &.is-open
                display: flex

            .he-menu-item
                display: contents

                .menu-item-row
                    display: flex
                    align-items: center
                    gap: .5rem
                    padding-inline: .5rem

                    > .menu-item-link
                        flex: 1
                        display: flex
                        align-items: center
                        min-height: 2.5rem
                        padding: .25rem 1rem
                        gap: .5rem
                        color: var(--color-text-soft)
                        border-radius: var(--radius-m)
                        text-decoration: none

                        &:hover,
                        &:focus
                            background: var(--color-background-soft)
                            color: var(--color-text)
                            outline: none

                        &.router-link-active
                            color: var(--color-text)

                        > .notification
                            display: flex
                            align-items: center
                            justify-content: center
                            border-radius: 30rem
                            height: 1.35rem
                            font-size: .8rem
                            background-color: var(--bg-rose-500)
                            color: white
                            line-height: 1.35rem
                            padding-inline: .6rem
                            pointer-events: none
                            user-select: none

                    > .toggle-button
                        position: relative
                        display: flex
                        align-items: center
                        justify-content: center
                        height: 2.5rem
                        width: 2.5rem
                        border-radius: var(--radius-m)
                        color: var(--color-text-soft)
                        font-family: var(--font-icon)
                        font-size: 1.75rem
                        margin-right: 1rem
                        user-select: none
                        cursor: pointer
                        transition: transform 100ms ease-out

                        &:hover,
                        &:focus
                            background: var(--color-background-soft)
                            color: var(--color-text)
                            outline: none

                        &.is-open
                            transform: rotate(180deg)

            li > ul
                padding-left: 1rem


        
    .he-desktop-menu
        display: flex
        gap: 2rem
        padding-inline: 1rem

        // General styling
        .sub-menu
            list-style: none

            .menu-item-row
                display: contents
                color: inherit

                .toggle-button
                    display: none

                .menu-item-link
                    font-weight: 500
                    color: inherit
                    text-align: center

                    &.router-link-active
                        color: var(--color-primary) !important

                    .notification
                        position: absolute
                        top: -.75rem
                        right: -1rem
                        display: flex
                        align-items: center
                        justify-content: center
                        border-radius: 30rem
                        height: 1rem
                        font-size: .7rem
                        background-color: var(--bg-rose-500)
                        color: white
                        line-height: 1rem
                        padding-inline: .5rem
                        pointer-events: none
                        user-select: none
        
        // Horizontal menu
        > .sub-menu
            display: contents

            > .he-menu-item
                display: flex
                align-items: center
                position: relative
                color: var(--color-text-soft)

                > .menu-item-row > .menu-item-link
                    display: flex
                    align-items: center
                    color: inherit

                &.has-dropdown > .menu-item-row::after
                    content: "arrow_drop_down"
                    position: absolute
                    top: 100%
                    left: 50%
                    font-size: 1.5rem
                    font-family: var(--font-icon)
                    opacity: .7
                    transform: translate(-50%, -50%)
                    user-select: none
                    pointer-events: none

                &:hover,
                &:focus
                    color: var(--color-text)

                    > .menu-item-row::after
                        opacity: 1

                    > .sub-menu
                        opacity: 1
                        pointer-events: all
                        transform: translate(-50%, 0)


                // All nested sub menus
                .sub-menu
                    position: absolute
                    top: 100%
                    left: 50%
                    z-index: 1
                    min-width: 220px
                    white-space: nowrap
                    display: flex
                    flex-direction: column
                    padding: 1rem 0
                    border-radius: var(--radius-m)
                    border: 1px solid var(--color-background-soft)
                    background: var(--color-background)
                    opacity: 0
                    pointer-events: none
                    transform: translate(-50%, 10px)
                    transition: opacity 300ms ease-in-out, transform 300ms ease-in-out

                    > .he-menu-item
                        width: 100%
                        color: var(--color-text-soft)
                        position: relative

                        > .menu-item-row > .menu-item-link
                            display: flex
                            align-items: center
                            padding: 0 2rem 0 1rem
                            height: 3rem
                            color: inherit

                        > .sub-menu
                            top: calc(-1rem - 1px)
                            left: 100%
                            transform: translate(0, -10px)

                        &.has-dropdown > .menu-item-row::after
                            content: "arrow_right"
                            position: absolute
                            top: 50%
                            right: 5px
                            font-size: 1.5rem
                            transform: translate(0, -50%)
                            font-family: var(--font-icon)
                            user-select: none
                            pointer-events: none

                        &:hover,
                        &:focus
                            color: var(--color-text)

                            > .menu-item-row::after
                                opacity: 1

                            > .menu-item-row > .menu-item-link
                                background: var(--color-background-soft)

                            > .sub-menu
                                opacity: 1
                                pointer-events: all
                                transform: translate(0, 0)



    @media only screen and (max-width: 1023px)
        .he-mobile-menu-toggle
            display: flex !important

        .he-desktop-menu
            display: none
</style>