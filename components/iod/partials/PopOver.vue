<template>
    <Teleport to="body">
        <div class="popover" ref="popoverDiv" :style="[positionCSS,
         {
            display: showing ? '' : 'none'
         }
        ]">
            <slot>
            </slot>
        </div>
    </Teleport>
</template>

<script lang="ts"> 
    import type { refDOMBounds } from '../helpers/refDOMBounds'
</script>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { getEmptyRefDOMBounds, useElementBounding } from '../helpers/refDOMBounds'




const props = defineProps({
    parentRect: {
        type: Object as PropType<refDOMBounds>,
        default: (): refDOMBounds => {
            return getEmptyRefDOMBounds()
        }
    },
    placement: {
        type: String as PropType<'top' | 'bottom'>,
        default: 'top'
    },
    forcePlacement: {
        type: Boolean,
        default: false
    },
    visible: {
        type: Boolean,
        default: false
    },
    maySlideAroundToTheLeft: {
        type: Boolean,
        default: false
    }
});

const showing = ref(false);
const popoverDiv = ref({} as HTMLInputElement)

let ourBounds = getEmptyRefDOMBounds();

const toggle = () => {
    showing.value = !showing.value;
}

onMounted(() => {
    ourBounds = useElementBounding(popoverDiv.value, ourBounds);
})

defineExpose({
    toggle,
    showing
})

const positionCSS = computed(() => {
    if(props.parentRect == null) return {};

    const bodyRect = document?.body.getBoundingClientRect();

    const offsetToBody = {
        top: props.parentRect?.top.value - bodyRect?.top,
        left: props.parentRect?.left.value - bodyRect?.left,
        bottom: props.parentRect?.bottom.value - bodyRect?.top,
    }

    const scrollBarWidth = (window?.innerWidth - document?.documentElement?.clientWidth);
    const graceMargin = 10;

    const css = {
        top: '',
        transform: '',
        left: `${offsetToBody.left}px`,
        maxWidth: `calc(100vw - ${scrollBarWidth + graceMargin*2}px)`
    }

    if(ourBounds.width.value + offsetToBody.left > bodyRect?.width - scrollBarWidth) {
        css.left = `${bodyRect?.width - ourBounds.width.value - graceMargin}px`;
    }

    let actualPlacement = props.placement;
    if(!props.forcePlacement)
    {
        //check if the current placement (top / bottom) is possible without clipping the window
        let preferBottom = Math.abs(Math.min(props.parentRect.top.value - ourBounds.height.value, 0))
        let preferTop = Math.max(props.parentRect.bottom.value + ourBounds.height.value - window?.innerHeight, 0)

        if(preferBottom > preferTop) actualPlacement = 'bottom'
        else if(preferTop > preferBottom) actualPlacement = 'top';

    }

    switch (actualPlacement)
    {
        case 'top':
            css.top = `${offsetToBody?.top}px`;
            css.transform = `translateY(-100%)`;
            break;
        case 'bottom':
            css.top = `${offsetToBody.bottom}px`;
            break;
    }
    return css;
});
</script>

<style lang="sass" scoped>
.popover
    z-index: 2147483647
    position: absolute
</style>
