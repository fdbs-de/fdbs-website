<template>
    <li class="he-menu-item" :class="{'has-dropdown': hasDropdown}">
        <div class="menu-item-row">
            <NuxtLink class="menu-item-link" :to="href" @click="emits('navigate')">
                <span class="text" v-if="label">{{label}}</span>
                <span class="notification" v-if="notification">{{ notification }}</span>
            </NuxtLink>
            <button class="toggle-button" :class="{'is-open': isOpen}" v-if="hasDropdown && showToggle" @click="toggle()">arrow_drop_down</button>
        </div>

        <ul class="sub-menu" :class="{'is-open': isOpen}" v-if="hasDropdown">
            <HeMenuItem
                v-for="item in children"
                :key="item.id"
                :href="item.href"
                :label="item.label"
                :notification="item.notification"
                :children="item.children || []"
                :initial-open="initialOpen"
                :show-toggle="showToggle"
                @navigate="emits('navigate')"
            />
        </ul>
    </li>
</template>

<script setup>
    import HeMenuItem from './HeMenuItem.vue'



    const emits = defineEmits(['navigate'])
    const props = defineProps({
        href: {
            type: [String, Object],
            default: '#'
        },
        label: {
            type: String,
            default: ''
        },
        notification: {
            type: [String, Number],
            default: ''
        },
        children: {
            type: Array,
            default: () => []
        },
        initialOpen: {
            type: Boolean,
            default: false
        },
        showToggle: {
            type: Boolean,
            default: false
        },
    })

    const hasDropdown = computed(() => props.children?.length > 0)
    const isOpen = ref(props.initialOpen)

    function toggle()
    {
        isOpen.value = !isOpen.value
    }
</script>