<template>
  <div class="iod-container iod-select">
    <IodineInput
      ref="inputComponent"
      :label="label"
      :placeholder="placeholder"
      :autofocus="autofocus"
      :disabled="disabled"
      :required="required"
      :size="size"
      :readonly="true"
      :border="border"
      v-model="selectedOptionText"
      @mousedown="activate"
      @blur="activate"
      @keydown="handleKeyDown"
    >
      <template #right>
        <DropdownArrowIcon class="dropdown-arrow" :class="{'open': popoverComponent?.showing}"/>
      </template>
    </IodineInput>

    <!-- Form compatibility: used as form exposure for internalValue  -->
    <input
      type="hidden"
      :name="name"
      :form="form"
      :value="internalValue"
    />

    <pop-over :parent-rect="_DOMRect!" ref="popoverComponent">
      <div class="select-dropdown-wrapper" :style="{ minWidth: _DOMRect.width.value + 'px', maxHeight: maxSize}"  ref="dropdownWrapper" tabindex="-1"
      @keydown="handleKeyDown"
      >
        <!-- Mousedown instead of click due to event ordering. Prevents hiding of elements to interfere with this event dispatch -->
        <button
          class="select-dropdown-item"
          v-for="(option, i) in props.options"
          :key="i"
          :tabindex="popoverComponent?.showing ? 0 : -1"
          :disabled="option.disabled"
          :data-selected="selectedOptions.includes(option)"
          :data-indicator-style="indicatorStyle"
          :data-highlighted="highlightedOption?.value === option.value"
          @mousedown="!option.disabled && change(option)"
          @blur="checkOptionCloseOnBlur"
          @mouseenter="highlightOption(option)"
        >
          <IodineToggle v-if="indicatorStyle === 'box'" :modelValue="selectedOptions.includes(option)" readonly />
          <span>{{option.text}}</span>
        </button>
      </div>
    </pop-over>
  </div>
</template>

<script lang="ts">
import type { Ref, PropType } from "vue"
</script>

<script setup lang="ts">
import { onMounted, getCurrentInstance, ref, watch, computed, nextTick, isProxy, toRaw } from "vue"
import {getEmptyRefDOMBounds, useElementBounding} from './helpers/refDOMBounds'

import PopOver from "./partials/PopOver.vue";
import IodineInput from "./IodInput.vue";
import IodineToggle from "./IodToggle.vue";
import DropdownArrowIcon from "./icons/DropdownArrowIcon.vue";

type InputTypes_ = string | number | boolean | undefined | null;
type SelectInputTypes = InputTypes_ | InputTypes_[];

/*
Reference: https://www.w3schools.com/tags/tag_select.asp
    autofocus   autofocus   Specifies that the drop-down list should automatically get focus when the page loads
    disabled 	disabled 	Specifies that a drop-down list should be disabled
    form 	    form_id 	Defines which form the drop-down list belongs to
    multiple 	multiple 	Specifies that multiple options can be selected at once
    name 	    name 	    Defines a name for the drop-down list
    required 	required 	Specifies that the user is required to select a value before submitting the form
    size 	    number 	    Defines the number of visible options in a drop-down list

Global Attributes: https://www.w3schools.com/tags/ref_standardattributes.asp
    .
    .
    .
Event Attributes: https://www.w3schools.com/tags/ref_eventattributes.asp
    .
    .
    .
*/

interface Option {
  /* https://www.w3schools.com/tags/tag_option.asp */
  disabled?: boolean; // Specifies that an option should be disabled
  label?: string; // Specifies a shorter label for an option
  selected?: boolean; // Specifies that an option should be pre-selected when the page loads
  value: InputTypes_; // Specifies the value of the option
  text: string; // Specifies the text to be displayed for the option
}

const props = defineProps({
  /* Own Attributes */
  options: { type: Array as PropType<Option[]>, default : ()=>[]},
  modelValue: {
    type: null as unknown as PropType<SelectInputTypes>,
    default: () => null as SelectInputTypes,
  },
  label: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  border: { type: Boolean, default: false },
  indicatorStyle: { type: String, default: "side" as "side" | "box" },
  maxSize: { type: String, default: "" },

  /* https://www.w3schools.com/tags/tag_select.asp */
  autofocus: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  form: { type: String, default: "" },
  multiple: { type: Boolean, default: false },
  name: { type: String, default: "" },
  required: { type: Boolean, default: false },
  size: { type: Number, default: 4 },
  /* https://www.w3schools.com/tags/ref_standardattributes.asp */
});

let _DOMRect = getEmptyRefDOMBounds();
const inputComponent = ref<typeof IodineInput | null>(null);
const popoverComponent = ref<typeof PopOver | null>(null);
const dropdownWrapper = ref<HTMLElement | null>(null);
const internalValue = ref(null) as Ref<SelectInputTypes>;
const highlightedOption = ref<Option | null>(null);
//Functions

function highlightOption(option: Option)
{

  if(option.disabled)
  {
    highlightedOption.value = null;
    return {scroll: () => undefined};
  }

  highlightedOption.value = option;

  return {
    scroll: () =>{
      nextTick(() => {
        //scroll into view
        const item = dropdownWrapper.value?.querySelector(`[data-highlighted="true"]`) as HTMLElement;

        if(item == null) return;

        dropdownWrapper.value?.scrollTo({
          top: item.offsetTop
          - dropdownWrapper.value.offsetTop
          + (item.offsetHeight/2)
          - (dropdownWrapper.value.offsetHeight / 2),
          behavior: "smooth",
        })
      });
    }
  }
}

function handleKeyDown(event: KeyboardEvent)
{

  const keys = [
    "ArrowDown",
    "ArrowUp",
    "Enter",
    "Escape",
  ];

  if(!keys.includes(event.key)) { return; }
  if(!popoverComponent.value) { return; }

  event.preventDefault();
  let options = props.options;
  if (isProxy(options)){
    options = toRaw(options);
  }

  let index = -1;
  if([ "ArrowDown", "ArrowUp"].includes(event.key))
  {
    if(highlightedOption.value != null)
    {
      index = options.indexOf(toRaw(highlightedOption.value));
    }
  }
  const nextIndex = () => {
    index = (index + 1) % options.length
  }
  const prevIndex = () => {
    // x + (n-1) % n is a trick to substract 1 and wrap around to the end of the array
    index = (index + options.length - 1) % options.length
  }

  switch(event.key)
  {
    case "ArrowDown":
      if(index === -1)
      {
        index = 0;
        for(let i = 0;i < options.length + 1 && options[index].disabled; i++)
        {
          nextIndex();
        }
        highlightOption(highlightedOption.value = options[index]).scroll();
      }
      else
      {
        nextIndex();
        for(let i = 0;i < options.length + 1 && options[index].disabled; i++)
        {
          nextIndex();
        }

        highlightOption(options[index]).scroll();
      }
      break;
    case "ArrowUp":
      if(index === -1)
      {
        index = options.length - 1;
        for(let i = 0;i < options.length + 1 && options[index].disabled; i++)
        {
          prevIndex();
        }
        highlightOption(options[options.length - 1]).scroll();
      }
      else
      {
        prevIndex();
        for(let i = 0;i < options.length + 1 && options[index].disabled; i++)
        {
          prevIndex();
        }

        highlightOption(options[index]).scroll()
      }
      break;
    case "Enter":

      if(!popoverComponent.value.showing)
      {
        popoverComponent.value.showing = true;
        return;
      }

      if(highlightedOption.value != null)
      {
        change(highlightedOption.value);
      }
      break;
    case "Escape":
      popoverComponent.value.showing = false;
      break;
  }
}

onMounted(() => {
  const instance = getCurrentInstance();
  const el = instance?.vnode.el as HTMLElement;
  _DOMRect = useElementBounding(el.firstChild as HTMLElement, _DOMRect);

  //find the first option that matches the modelValue
  const option = props.options.find((o) => o.value === props.modelValue);
  
  if (option)
  {
    change(option);
  }
});

watch(() => props.modelValue, (value) => {
  internalValue.value = value;
}, {
  deep: true,
  immediate: true,
});

const selectedOptions = computed(()=>{
    if(props.multiple && internalValue.value instanceof Array)
    {
      let options = props.options.filter((o) => (internalValue.value as InputTypes_[]).includes(o.value));
      return options;
    }

    //find the first option that matches the modelValue
    const option = props.options.find((o) => o.value === internalValue.value);

    if (option)
    {
      return [option];
    }

    return [];
});

const selectedOptionText = computed({
  get() {

    if(props.multiple && internalValue.value instanceof Array)
    {
      let options = props.options.filter((o) => (internalValue.value as InputTypes_[]).includes(o.value));
      return options.map((o) => o.text).join(", ");
    }

    //find the first option that matches the modelValue
    const option = props.options.find((o) => o.value === internalValue.value);

    if (option)
    {
      return option.text;
    }

    return "";
  },

  set(value) {
    internalValue.value = value;
  },
});

const emits = defineEmits([
  'update:modelValue',
])


function activate(event: Event)
{
  if(!popoverComponent.value) return;

  if (['mousedown'].includes(event?.type))
  {
    popoverComponent.value.toggle();
    return;
  }

  // Bounce blur event if it comes from relatedTarget inside the popover
  if (event instanceof FocusEvent)
  {
    let node = event.relatedTarget as HTMLElement | null

    while (node)
    {
      if (node === dropdownWrapper.value)
      {
        setFocus()
        if(props.multiple)
        {
         return;
        }
        break;
      }

      node = node.parentElement;
    }
  }

  if (['blur'].includes(event?.type))
  {
    if(!popoverComponent.value) return;
    popoverComponent.value.showing = false;
    return;
  }
}

function checkOptionCloseOnBlur(event: FocusEvent)
{
  if(!props.multiple) return;
  let node = event.relatedTarget as HTMLElement | null

  while (node)
  {
    if (node === dropdownWrapper.value || node === inputComponent.value?.$el)
    {
      return
    }
    node = node.parentElement;
  }
  //we clicked outside, hide the popover
  if(!popoverComponent.value) return;
  popoverComponent.value.showing = false;
}

function change(option: Option)
{

  if(option.disabled) return;

  if(props.multiple)
  {
    if(!(internalValue.value instanceof Array))
    {
      internalValue.value = [];
    }

    if(!internalValue.value.includes(option.value))
    {
      //If not already selected, add it
      internalValue.value.push(option.value);
    }
    else
    {
      //If already selected, remove it
      internalValue.value = internalValue.value.filter((o) => o !== option.value);
    }

    emits('update:modelValue', internalValue.value)
    return;
  }

  internalValue.value = option.value;
  emits('update:modelValue', internalValue.value)
}

function setFocus()
{
  inputComponent.value?.focus()
}
</script>

<style lang="sass" scoped>
.iod-container.iod-select
  display: flex
  height: 3rem
  border-radius: var(--radius-m)

  .iod-input
    height: inherit
    width: 100%
    border-radius: inherit

  .dropdown-arrow
    transform: rotate(0deg)
    transition: transform 100ms ease-in-out
    pointer-events: none

    &.open
      transform: rotate(180deg)

.select-dropdown-wrapper
  display: flex
  flex-direction: column
  border: 1px solid var(--color-border)
  border-radius: var(--radius-m)
  background: var(--color-background-soft)
  color: var(--color-text-soft)
  padding-block: .5rem
  user-select: none
  max-height: min(90vh, 20rem)
  overflow-y: auto
  font-size: .9em
  box-shadow: var(--shadow-m)

  .select-dropdown-item
    position: relative
    width: 100%
    min-height: 2.5rem
    padding-inline: 1rem
    cursor: pointer
    display: flex
    align-items: center
    justify-content: flex-start
    gap: 1rem
    color: inherit
    background: transparent
    border: none
    font-size: inherit

    &::before
      content: ""
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      border-radius: inherit
      background-color: currentColor
      opacity: 0
      pointer-events: none
      transition: opacity 50ms ease-in-out

    &[data-indicator-style="side"]::after
      content: ""
      position: absolute
      top: .5rem
      bottom: .5rem
      left: 0
      width: 0
      border-radius: 0 1rem 1rem 0
      background-color: var(--color-primary)
      pointer-events: none
      transition: width 100ms ease-in-out



    &:focus
      outline: none
      color: var(--color-text)

      &::before
        opacity: .05



    &[data-highlighted="true"]
      color: var(--color-text)

      &::before
        opacity: .075 !important


    
    &[data-selected="true"]
      color: var(--color-text)

      &::before
        opacity: .05

      &::after
        width: 3px


      
    &:disabled
      color: var(--color-text-soft-disabled)
      cursor: initial

      &::before
        //opacity: 0 !important

      > .iod-toggle
        --local-color-off: var(--color-border)


    
    > .iod-toggle
      padding: 0 !important
      margin: 0 !important
      min-height: 0 !important
      pointer-events: none
      --local-color-off: var(--color-border-focused)

    > span
      position: relative
      z-index: 1
      white-space: nowrap
      overflow: auto
      
      // Dont display the scrollbar
      scrollbar-width: none
      -ms-overflow-style: none

      &::-webkit-scrollbar
        display: none

</style>
