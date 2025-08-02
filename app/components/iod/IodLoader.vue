<template>
    <div class="iod-container iod-loader" :class="'loading-'+type">
        <svg v-if="type === 'spinner'" class="spinner" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" :stroke-width="thickness" stroke-linecap="round" stroke-miterlimit="10"/>
        </svg>
    
        <div v-if="type === 'bar'" class="bar">
            <div class="indeterminate"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    defineProps({
        type: {
            type: String,
            default: 'spinner',
        },
        thickness: {
            type: Number,
            default: 5,
        },
    })
</script>

<style lang="sass" scoped>
    .iod-container.iod-loader
        display: flex
        justify-content: stretch
        align-items: stretch

        &.loading-spinner
            height: 2rem
            width: 2rem

        &.loading-bar
            height: 3px
            width: 100%

        .spinner
            height: 100%
            width: 100%
            animation: rotate 2s linear infinite
            transform-origin: center center
            margin: 0
            flex: none
            user-select: none
            color: currentColor
            box-sizing: border-box

            *
                box-sizing: inherit

            .path
                stroke: currentColor
                stroke-dasharray: 1, 200
                stroke-dashoffset: 0
                animation: dash 1.5s ease-in-out infinite

            @keyframes rotate
                100%
                    transform: rotate(360deg)
                    
            @keyframes dash
                0%
                    stroke-dasharray: 1, 200
                    stroke-dashoffset: 0
                50%
                    stroke-dasharray: 89, 200
                    stroke-dashoffset: -35px
                100%
                    stroke-dasharray: 89, 200
                    stroke-dashoffset: -124px

        .bar
            position: relative
            display: block
            height: 100%
            width: 100%
            color: var(--color-text)
            background: var(--color-background)
            overflow: hidden

            &:before
                content: ''
                position: absolute
                background-color: currentColor
                top: 0
                left: 0
                bottom: 0
                right: 0
                opacity: .2

            .indeterminate
                background-color: currentColor

                &:before
                    content: ''
                    position: absolute
                    background-color: inherit
                    top: 0
                    left: 0
                    bottom: 0
                    will-change: left, right
                    animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite
                
                &:after
                    content: ''
                    position: absolute
                    background-color: inherit
                    top: 0
                    left: 0
                    bottom: 0
                    will-change: left, right
                    animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite
                    animation-delay: 1.15s

            @keyframes indeterminate
                0%
                    left: -35%
                    right: 100%
                60%
                    left: 100%
                    right: -90%
                100%
                    left: 100%
                    right: -90%

            @keyframes indeterminate-short
                0%
                    left: -200%
                    right: 100%
                60%
                    left: 107%
                    right: -8%
                100% 
                    left: 107%
                    right: -8%
</style>