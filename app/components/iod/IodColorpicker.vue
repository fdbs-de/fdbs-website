<template>
    <div class="iod-container iod-colorpicker">
        <div class="sb-container">
            <div class="colorpanel" :style="`background: ${hueColorString};`"></div>
            <div class="handle"
                :style="`left: ${color.saturation * 100}%; top: ${(1 - color.brightness) * 100}%; background: ${fullColorString};`">
            </div>
            <area-slider class="bar" v-model:x="color.saturation" :y="1 - color.brightness"
                @update:y="color.brightness = 1 - $event" />
        </div>

        <div class="slider-layout">
            <button type="button" class="color-output-button" :data-test="fullAlphaColorString" :style="{ color: fullAlphaColorString }" :title="computedColor" @click="copyToClipboard(computedColor)"></button>

            <div class="slider-wrapper hue">
                <div class="background"></div>
                <div class="handle-wrapper">
                    <div class="handle" :style="`left: ${color.hue * 100}%; background: ${hueColorString};`"></div>
                </div>
                <area-slider class="area" :padding="8" v-model:x="color.hue" />
            </div>

            <div class="slider-wrapper alpha">
                <div class="background" :style="`background: ${alphaColorGradientString}; color: ${fullColorString};`">
                </div>
                <div class="handle-wrapper">
                    <div class="handle" :style="`left: ${color.alpha * 100}%;`"></div>
                </div>
                <area-slider class="area" :padding="8" v-model:x="color.alpha" />
            </div>
        </div>

        <div class="output-layout">
            <IodineSelect v-model="outputMode" ref="outputSelector" :options="
                [
                    { value: 'hex', text: 'Hex' },
                    { value: 'rgb', text: 'RGB' },
                    { value: 'hsl', text: 'HSL' },
                    { value: 'hsb', text: 'HSB' },
                ].filter(e => props.allowedOutputFormats.includes(e.value as any))
            "
            :disabled="colorModeSelectedDisabled"/>

            <div class="sub-layout">
                <IodineInput type="text" ref="colorOutput" v-model="computedColor" @keydown="keyDown" @mousedown="handleColorCodeMouseDown"/>

                <IodineInput type="number" class="alpha" v-model="computedAlpha" min="0" max="100" />
            </div>
        </div>

        <div class="swatch-layout" v-if="props.swatchPalettes">
            <IodineSelect class="swatchSelector" placeholder="Select a palette" v-model="swatchPalette" :options="
                props.swatchPalettes?.map(e => ({ value: e.id, text: e.name })) ?? []
            "/>
            <div class="grid" v-if="selectedSwatchPalette.colors.length">
                <div class="swatch" v-for="swatch in selectedSwatchPalette.colors" :key="swatch.hex"
                    :style="`background: ${swatch.hex};`" @click="changeColorHEX(swatch.hex)"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'

interface HSBColor {
    hue: number;
    saturation: number;
    brightness: number;
    alpha: number;
}

interface HSLColor {
    hue: number;
    saturation: number;
    lightness: number;
    alpha: number;
}

interface RGBColor {
    red: number;
    green: number;
    blue: number;
    alpha: number;
}

interface HexColor {
    hex: string;
}

interface SwatchPalette {
    id: string;
    name: string;
    colors: HexColor[];
}
</script>

<script setup lang="ts">
import { ref, computed, nextTick, watch, onMounted } from 'vue'

import AreaSlider from './partials/AreaSlider.vue'
import IodineSelect from './IodSelect.vue'
import IodineInput from './IodInput.vue'
import { initiateDragListening, temporarySetCursor } from './helpers/dragListener';



const props = defineProps({
    swatchPalettes: {
        type:null as unknown as PropType<Array<SwatchPalette> | undefined>,
        default: ()=>undefined,
    },
    modelValue: {
        type: null as unknown as PropType<HSBColor | HSLColor | RGBColor | HexColor | string | undefined>,
        default: ()=>undefined,
    },
    outputFormat: {
        type: String as PropType<'hex' | 'rgb' | 'hsl' | 'hsb' | undefined>,
        default: undefined,
    },
    fixOutputFormat: {
        type: Boolean,
        default: false,
    },
    allowedOutputFormats: {
        type: Array as PropType<Array<'hex' | 'rgb' | 'hsl' | 'hsb'>>,
        default: ()=>['hex', 'rgb', 'hsl', 'hsb'],
    }
})

const colorModeSelectedDisabled = ref(false)


const color = ref({ hue: 0, saturation: 1, brightness: 1, alpha: 1 } as HSBColor)
const outputMode = ref('hex' as 'hex' | 'rgb' | 'hsl' | 'hsb')
const swatchPalette = ref(null as string | null)
const outputSelector = ref<InstanceType<typeof IodineSelect> | null>(null)
const colorOutput = ref<InstanceType<typeof IodineInput> | null>(null)
let typedColor = "";

const computedColor = computed({
    get(){
        switch (outputMode.value) {
            case 'hex':
                return `#${fullHexColorString.value}`
            case 'rgb':
                var rgb = hsb2rgb(color.value);
                return `${Math.round(rgb.red * 255)}, ${Math.round(rgb.green * 255)}, ${Math.round(rgb.blue * 255)}`
            case 'hsl':
                var hsl = hsb2hsl(color.value);
                return `${Math.round(hsl.hue * 360)}, ${Math.round(hsl.saturation * 100)}%, ${Math.round(hsl.lightness * 100)}%`
            case 'hsb':
                return `${Math.round(color.value.hue * 360)}, ${Math.round(color.value.saturation * 100)}%, ${Math.round(color.value.brightness * 100)}%`
            default:
                return ""
        }
    },
    set(value) {
        typedColor = value;
    }
})


function keyDown(event: KeyboardEvent) {


    if (event.key == 'Enter') {
        recalculateColor()
        event.preventDefault();
        return
    }

    typedColor = computedColor.value


    if(event.key == "ArrowUp")
    {
        nudgeColor(+1);
        event.preventDefault();
    }
    if(event.key == "ArrowDown")
    {
        nudgeColor(-1);
        event.preventDefault();
    }
}

function changeColorHEX(newColor: string) {
    let {r, g, b} = hexStringToRGB(newColor)

    let temp = rgb2hsb({ red: r / 255, green: g / 255, blue: b / 255, alpha: color.value.alpha })

    if([temp.hue, temp.saturation, temp.brightness].some(e => isNaN(e))) {
        return
    }

    color.value = temp
}

let colorNudgingIsDragging = false;
let colorNudgingCaret = 0;
async function handleColorCodeMouseDown(event: MouseEvent){
    if(!colorOutput.value) return;
    if(!colorOutput.value.selectionStart) return;

    typedColor = computedColor.value
    colorNudgingIsDragging = true;
    colorNudgingCaret = -1;
    initiateDragListening({
        event: event,
        callback: (args)=>{
            nudgeColor(-args.stepY)
        },
        endCallback: ()=>{
            colorNudgingIsDragging = false;
        },
        onlyCallbackOnStepY: true,
        stepSizeY: 4,
    })

}

function nudgeColor(amount: number){

    if(!colorOutput.value) return;
    if(colorOutput.value.selectionStart == null) return;

    let caret = colorOutput.value.selectionStart;
    if(colorNudgingIsDragging)
    {
        if(colorNudgingCaret == -1)
        {
            //Wait for the first drag event to set the caret
            //This ensures that the caret is set to the correct position
            colorNudgingCaret = caret;
            temporarySetCursor('ns-resize');
        }
        caret = colorNudgingCaret
    }

    let lengthOrig = typedColor.length
    let pre = typedColor.slice(0, caret)
    let post = typedColor.slice(caret)

    pre = pre.replaceAll(/[a-zG-Z %]+/g, "").replaceAll(' ', '')
    post = post.replaceAll(/[a-zG-Z %]+/g, "").replaceAll(' ', '')


    const nudge = function (number:number, amount:number, min:number, max:number){
        return Math.min(Math.max(number + amount, min), max)
    }

    switch(outputMode.value)
    {
        case 'rgb': {
            let {r, g, b} = rgbStringToRGB(typedColor)
            let commas = (pre.split(",").length - 1)
            if(commas == 0)
            {
                r = nudge(r, amount, 0, 255)
            }
            else if(commas == 1)
            {
                g = nudge(g, amount, 0, 255)
            }
            else if(commas == 2)
            {
                b = nudge(b, amount, 0, 255)
            }
            typedColor = `rgb(${r}, ${g}, ${b})`
            recalculateColor()

            break
        }
        case 'hex': {
            let RGB = hexStringToRGB(typedColor)
            if(pre.length <= 3)
            {
                RGB.r = nudge(RGB.r, amount, 0, 255)
            }
            else if(pre.length <= 5)
            {
                RGB.g = nudge(RGB.g, amount, 0, 255)
            }
            else if(pre.length <= 7)
            {
                RGB.b = nudge(RGB.b, amount, 0, 255)
            }
            
            typedColor = `#${rgb2hex({
                red: RGB.r / 255,
                green: RGB.g / 255,
                blue: RGB.b / 255,
                alpha: color.value.alpha
            }).hex}`
            
            recalculateColor()
            break

        }
        case 'hsl' :
        case 'hsb': {
            let {r, g, b} = rgbStringToRGB(pre + post)
            let commas = (pre.split(",").length - 1)
            if(commas == 0)
            {
                r = nudge(r, amount, 0, 360)
            }
            else if(commas == 1)
            {
                g = nudge(g, amount, 0, 100)
            }
            else if(commas == 2)
            {
                b = nudge(b, amount, 0, 100)
            }
            typedColor = `${r}, ${g}%, ${b}%`
            recalculateColor()
            break
        }
    }
    nextTick(() => {
        if(!colorOutput.value) return;

        let input = colorOutput.value
        let newCaret = caret + (computedColor.value.length - lengthOrig)
        colorNudgingCaret = newCaret
        input.selectionStart = newCaret
        input.selectionEnd = newCaret
    })
    return
}

function recalculateColor() {
    switch (outputMode.value) {
        case 'hex' :{
            let {r, g, b} = hexStringToRGB(typedColor)

            let temp = rgb2hsb({ red: r / 255, green: g / 255, blue: b / 255, alpha: color.value.alpha })

            if([temp.hue, temp.saturation, temp.brightness].some(e => isNaN(e))) {
                return
            }

            color.value = temp
            break
        }
        case 'rgb': {
            let {r, g, b} = rgbStringToRGB(typedColor)
            let temp = rgb2hsb({ red: r / 255, green: g / 255, blue: b / 255, alpha: color.value.alpha })

            if([temp.hue, temp.saturation, temp.brightness].some(e => isNaN(e))) {
                return
            }

            color.value = temp
            break
        }
        case 'hsl': {
            let tmpColor = typedColor
            tmpColor = tmpColor.replaceAll('hsl(', '').replaceAll(')', '').replaceAll(' ', '').replaceAll('%', '')
            let [h, s, l] = tmpColor.split(',').map(e => Number(e))
            let tempRGB = hsl2rgb({ hue: h, saturation: s / 100, lightness: l / 100, alpha: color.value.alpha })
            let temp = rgb2hsb({ red: tempRGB.red / 255, green: tempRGB.green / 255, blue: tempRGB.blue / 255, alpha: color.value.alpha })

            if([temp.hue, temp.saturation, temp.brightness].some(e => isNaN(e))) {
                return
            }

            color.value = temp

            break
        }
        case 'hsb': {
            let tmpColor = typedColor
            tmpColor = tmpColor.replaceAll('hsb(', '').replaceAll(')', '').replaceAll(' ', '').replaceAll('%', '')
            let [h, s, b] = tmpColor.split(',').map(e => Number(e))
            let temp = { hue: h / 360, saturation: s / 100, brightness: b / 100, alpha: color.value.alpha }

            if([temp.hue, temp.saturation, temp.brightness].some(e => isNaN(e))) {
                return
            }

            color.value = temp

            break
        }
    }
}

const computedAlpha = computed({
    get() {
        return Math.round(color.value.alpha * 100)
    },
    set(newValue) {
        color.value.alpha = newValue / 100
    }
})



function rgbStringToRGB(rgb: string): { r: number, g: number, b: number } {

    rgb = rgb.replaceAll('rgb(', '').replaceAll(')', '').replaceAll(' ', '')
    var [r, g, b] = rgb.split(',').map(e => Number(e))
    return { r, g, b }
}
function hexStringToRGB(hex: string): { r: number, g: number, b: number } {
    hex = hex.replaceAll('#', '')
    if (hex.length == 3) {
        hex = hex.split('').map(e => e + e).join('')
    }
    var r = Number(`0x${hex.slice(0, 2)}`)
    var g = Number(`0x${hex.slice(2, 4)}`)
    var b = Number(`0x${hex.slice(4, 6)}`)
    return { r, g, b }
}


const hueColorString = computed((): string => {
    return `hsl(${color.value.hue * 360}, 100%, 50%)`
})

const alphaColorGradientString = computed((): string => {
    let hslColor = hsb2hsl(color.value)
    return `linear-gradient(to right, hsl(${hslColor.hue * 360}deg, ${hslColor.saturation * 100}%, ${hslColor.lightness * 100}%, 0), hsl(${hslColor.hue * 360}deg, ${hslColor.saturation * 100}%, ${hslColor.lightness * 100}%, 1))`
})

const fullColorString = computed((): string => {
    let hslColor = hsb2hsl(color.value)
    return `hsl(${hslColor.hue * 360}deg ${hslColor.saturation * 100}% ${hslColor.lightness * 100}%)`
})

const fullAlphaColorString = computed((): string => {
    let hslColor = hsb2hsl(color.value)
    return `hsla(${hslColor.hue * 360}deg, ${hslColor.saturation * 100}%, ${hslColor.lightness * 100}%, ${color.value.alpha})`
})

const fullHexColorString = computed((): string => {
    return rgb2hex(hsb2rgb(color.value)).hex
})

const selectedSwatchPalette = computed((): SwatchPalette => {
    return props.swatchPalettes?.find(e => e.id === swatchPalette.value) ?? { id: '', name: '', colors: [] }
})


function rgb2hsb(color: RGBColor): HSBColor
{
    let { red, green, blue } = color
    var MAX = Math.max(red, green, blue)
    var MIN = Math.min(red, green, blue)

    let H = 0
    let S = 0
    let B = MAX

    switch(true)
    {
        case MAX == MIN:
            H = 0
            break
        case MAX == red:
            H = (green - blue) / (MAX - MIN)
            break
        case MAX == green:
            H = 2 + (blue - red) / (MAX - MIN)
            break
        case MAX == blue:
            H = 4 + (red - green) / (MAX - MIN)
            break
    }

    H = Math.min(H * 60, 360)
    if (H < 0) {
        H += 360
    }

    S = (MAX==MIN) ? 0 : (MAX-MIN) / MAX
    if(MAX == 0) {
        S = 0
    }


    return {
        hue: H / 360,
        saturation: S,
        brightness: B,
        alpha: color.alpha,
    }

}


function hsl2rgb(hsl: HSLColor) :RGBColor {
    let t1, t2;
    let r, g, b;
    let { hue, saturation, lightness } = hsl
    hue = hue / 60.0;
    if (lightness <= 0.5)
    {
        t2 = lightness * (saturation + 1);
    }
    else
    {
        t2 = lightness + saturation - (lightness * saturation);
    }
    t1 = lightness * 2 - t2;
    r = HueToRgb(t1, t2, hue + 2) * 255;
    g = HueToRgb(t1, t2, hue) * 255;
    b = HueToRgb(t1, t2, hue - 2) * 255;
    return {red: r, green: g, blue: b, alpha: hsl.alpha};
}

function HueToRgb(t1: number, t2: number, hue: number) {
    if (hue < 0) hue += 6;
    if (hue >= 6) hue -= 6;
    if (hue < 1) return (t2 - t1) * hue + t1;
    else if (hue < 3) return t2;
    else if (hue < 4) return (t2 - t1) * (4 - hue) + t1;
    else return t1;
}

function hsb2hsl(color: HSBColor): HSLColor
{
    let { hue, saturation, brightness } = color

    let lightness = (2 - saturation) * brightness / 2

    if (lightness != 0) {
        if (lightness == 1) {
            saturation = 0
        }
        else if (lightness < .5) {
            saturation = saturation * brightness / (lightness * 2)
        }
        else {
            saturation = saturation * brightness / (2 - lightness * 2)
        }
    }

    return {
        hue,
        saturation,
        lightness,
        alpha: color.alpha,
    }
}

function hsb2rgb (color: HSBColor): RGBColor
{
    let { hue, saturation, brightness } = color

    let r, g, b

    if (saturation == 0) {
        r = g = b = brightness
    }
    else {
        let h = (hue * 360 / 60) % 6
        let i = Math.floor(h)
        let f = h - i
        let p = brightness * (1 - saturation)
        let q = brightness * (1 - saturation * f)
        let t = brightness * (1 - saturation * (1 - f))

        switch (i) {
            case 0:
                r = brightness
                g = t
                b = p
                break
            case 1:
                r = q
                g = brightness
                b = p
                break
            case 2:
                r = p
                g = brightness
                b = t
                break
            case 3:
                r = p
                g = q
                b = brightness
                break
            case 4:
                r = t
                g = p
                b = brightness
                break
            case 5:
                r = brightness
                g = p
                b = q
                break
            default:
                r = brightness
                g = p
                b = q
        }
    }

    return {
        red: r,
        green: g,
        blue: b,
        alpha: color.alpha,
    }
}

function rgb2hex (color: RGBColor): HexColor
{
    let { red, green, blue } = color

    let r = Math.round(red * 255).toString(16).padStart(2, '0')
    let g = Math.round(green * 255).toString(16).padStart(2, '0')
    let b = Math.round(blue * 255).toString(16).padStart(2, '0')

    return {
        hex: `${r}${g}${b}`.toUpperCase()
    }
}

function updateModelValue()
{
    let localColor:HSBColor|HSLColor|RGBColor|HexColor;
    switch(outputMode.value) {
        case 'hex':
            localColor = {hex: computedColor.value} as HexColor
            break
        case 'rgb':
            {
                let tmp = rgbStringToRGB(computedColor.value)
                localColor = {red: tmp.r, green: tmp.g, blue: tmp.b, alpha: color.value.alpha * 100} as RGBColor
                break
            }
        case 'hsl':
            {
                //break up the string "hhh, sss%, lll%" into an array of numbers
                let tmpColor = computedColor.value
                tmpColor = tmpColor.replaceAll('hsl(', '').replaceAll(')', '').replaceAll(' ', '').replaceAll('%', '')
                let [h, s, l] = tmpColor.split(',').map(e => Number(e))
                localColor = {hue: h, saturation: s, lightness: l, alpha: color.value.alpha * 100} as HSLColor
                break
            }
        case 'hsb':
            {
                localColor = {hue: color.value.hue * 360, saturation: color.value.saturation * 100, brightness: color.value.brightness * 100, alpha: color.value.alpha} as HSBColor
                break
            }
        default:
            return
    }
    emits('update:modelValue', localColor)
}

function setColor(c: RGBColor | HSBColor | HSLColor | HexColor | string)
{
    let localColor = color.value
    if(typeof c === "string")
    {
        let rgb = hexStringToRGB(c as string)
        color.value = rgb2hsb({red: rgb.r/255, green: rgb.g/255, blue: rgb.b/255, alpha: color.value.alpha})
    }
    else{
        switch(true) {
            case 'red' in c:
                color.value = rgb2hsb(c as RGBColor)
            break
            case 'brightness' in c:
                color.value = c as HSBColor
            break
            case 'lightness' in c:
                color.value = rgb2hsb(hsl2rgb(c as HSLColor))
            break
            case 'hex' in c:
            {
                let rgb = hexStringToRGB((c as HexColor).hex)
                color.value = rgb2hsb({red: rgb.r/255, green: rgb.g/255, blue: rgb.b/255, alpha: color.value.alpha})
            }
            break
        }
    }

    if([color.value.hue, color.value.saturation, color.value.brightness].some(e => isNaN(e))) {
        color.value = localColor
        console.warn("Invalid color value", c)
    }

}

function copyToClipboard(value: string): void
{
    navigator.clipboard.writeText(value)
}

watch(computedColor, updateModelValue);
watch(computedAlpha, updateModelValue);

onMounted(() => {
    if(props.outputFormat) {
        outputMode.value = props.outputFormat
    }
    if(props.fixOutputFormat) {
        colorModeSelectedDisabled.value = true
    }
    if(!props.allowedOutputFormats.includes(outputMode.value)){
        outputMode.value = props.allowedOutputFormats[0]
    }
    if(props.allowedOutputFormats.length == 1){
        colorModeSelectedDisabled.value = true
    }
    if(props.modelValue) {
        setColor(props.modelValue)
    }
})

let emits = defineEmits(['update:modelValue'])

</script>

<style lang="sass" scoped>
    .iod-container.iod-colorpicker
        background: var(--color-background)
        border-radius: var(--radius-m)
        padding-top: .5rem
        border: 1px solid var(--color-border)
        width: 320px
        height: fit-content
        display: flex
        flex-direction: column
        box-sizing: border-box

        *
            box-sizing: inherit

        .handle
            height: 14px
            width: 14px
            border-radius: 50%
            border: 2px solid white
            box-shadow: 0 1px 1px 2px #00000020
            position: absolute
            z-index: 1
            pointer-events: none

        .sb-container
            display: flex
            aspect-ratio: 1
            position: relative
            border-top: 1px solid var(--color-border)

            .handle
                transform: translate(-50%, -50%)

            .bar
                height: 100%
                width: 100%
                position: absolute
                top: 0
                left: 0

            .colorpanel
                width: 100%
                height: 100%
                position: relative

                &:after
                    content: ''
                    position: absolute
                    top: 0
                    left: 0
                    width: 100%
                    height: 100%
                    pointer-events: none
                    background: linear-gradient(to bottom, rgb(0, 0, 0, 0), rgb(0, 0, 0, 1))

                &:before
                    content: ''
                    position: absolute
                    top: 0
                    left: 0
                    width: 100%
                    height: 100%
                    background: linear-gradient(to right, rgb(255, 255, 255, 1), rgb(255, 255, 255, 0))
                    pointer-events: none

        .slider-wrapper
            --height: 16px
            width: 100%
            height: var(--height)
            border-radius: calc(var(--height) / 2)
            position: relative

            &.hue
                background: red

                .background
                    background: linear-gradient(to right, red, yellow, lime, cyan, blue, magenta, red)

            &.alpha
                background-color: white
                background-image: linear-gradient(45deg, #b4b4b4 25%, transparent 25%), linear-gradient(-45deg, #b4b4b4 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #b4b4b4 75%), linear-gradient(-45deg, transparent 75%, #b4b4b4 75%)
                background-size: calc(var(--height) / 2) calc(var(--height) / 2)
                background-position: 0 0, 0 calc(var(--height) / 4), calc(var(--height) / 4) calc(var(--height) / 4 * -1), calc(var(--height) / 4 * -1) 0px

                .background::after
                    content: ''
                    position: absolute
                    top: 0
                    left: 100%
                    bottom: 0
                    width: calc(var(--height) / 2)
                    background: currentColor
                    border-radius: 0 calc(var(--height) / 2) calc(var(--height) / 2) 0

            .background
                position: absolute
                top: 0
                bottom: 0
                left: calc(var(--height) / 2)
                right: calc(var(--height) / 2)

            .handle-wrapper
                position: absolute
                top: 0
                bottom: 0
                left: calc(var(--height) / 2)
                right: calc(var(--height) / 2)

                .handle
                    top: 1px
                    transform: translateX(-50%)

            .area
                position: absolute
                top: 0
                bottom: 0
                left: 0
                right: 0

        .slider-layout
            display: grid
            grid-template-columns: auto 1fr
            grid-template-rows: 1fr 1fr
            grid-template-areas: 'coloroutput hue' 'coloroutput alpha'
            align-items: center
            padding: 1rem
            gap: 1rem
            border-top: 1px solid var(--color-border)

            .color-output-button
                grid-area: coloroutput
                position: relative
                aspect-ratio: 1
                width: 2.5rem
                display: flex
                align-items: center
                justify-content: center
                --height: 16px
                background-color: white
                background-image: linear-gradient(45deg, #b4b4b4 25%, transparent 25%), linear-gradient(-45deg, #b4b4b4 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #b4b4b4 75%), linear-gradient(-45deg, transparent 75%, #b4b4b4 75%)
                background-size: calc(var(--height) / 2) calc(var(--height) / 2)
                background-position: 0 0, 0 calc(var(--height) / 4), calc(var(--height) / 4) calc(var(--height) / 4 * -1), calc(var(--height) / 4 * -1) 0px
                border-radius: 50%
                padding: 0
                border: none
                cursor: pointer
                user-select: none
                border: 1px solid var(--color-border)
                transition: transform 80ms ease-in-out

                &::after
                    content: ''
                    position: absolute
                    top: 0
                    left: 0
                    bottom: 0
                    right: 0
                    border-radius: inherit
                    background: currentColor

                &:hover
                    transform: scale(1.1)

        .output-layout
            display: flex
            align-items: center
            padding: 1rem
            gap: 1rem
            border-top: 1px solid var(--color-border)

            .sub-layout
                flex: 1
                display: flex
                align-items: center
                gap: 1rem

                .iod-input
                    flex: 1
                    height: 2rem
                    --local-padding: .25rem

                .alpha
                    width: 3rem
                    flex: none
                    
                    &::-webkit-outer-spin-button,
                    &::-webkit-inner-spin-button
                        -webkit-appearance: none
                        margin: 0
                        appearance: none

            .iod-select
                width: 5rem
                height: 2rem
                flex: none
                --local-padding: .25rem

        .swatch-layout
            border-top: 1px solid var(--color-border)
            display: flex
            flex-direction: column
            gap: 1rem
            padding: 1rem

            .iod-select
                width: 100%
                height: 2rem
                flex: none
                --local-padding: .25rem
            
            .grid
                display: grid
                grid-template-columns: repeat(auto-fill, minmax(1.8rem, 1fr))
                gap: .5rem

            .swatch
                width: 100%
                aspect-ratio: 1
                border-radius: var(--radius-s)
                border: 1px solid var(--color-border)
                cursor: pointer
                user-select: none

                &.selected
                    border-color: var(--color-primary)

                &:hover
                    border-color: var(--color-primary)
</style>