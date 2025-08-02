<template>
    <SectionHero title="Firmenwiki" image="/images/content/banner/karriere_513169496_482949832.webp" />
    <SectionText size="page">
        <div class="flex flex-col gap-4">
            <IodInput class="!rounded-xl" label="Einträge suchen" v-model="search">
                <template #right>
                    <select class="form-select" v-model="category">
                        <option value="">Alle Kategorien</option>
                        <option v-for="item in categories" :value="item" :key="(item as string)">{{item}}</option>
                    </select>
                </template>
            </IodInput>
            
            <template v-if="filteredPosts.length">
                <NuxtLink class="flex flex-col p-6 border-2 border-solid border-zinc-200 text-zinc-600 rounded-xl hover:border-rose-600 hover:text-rose-600" :to="post.path" v-for="post in filteredPosts">
                    <h3 class="m-0 text-xl text-inherit">{{ post.meta.title }}</h3>
                    <span>{{ post.meta.description }}</span>
                </NuxtLink>
            </template>
            
            <div class="flex items-center justify-center p-6 border-2 border-solid border-zinc-200 text-zinc-600 rounded-xl" v-else>
                Keine Einträge gefunden
            </div>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    const search = ref('')
    const category = ref('')
    const availablePosts = useRouter().getRoutes().filter(route => route?.path?.startsWith('/intern/wiki/'))
    const filteredPosts = computed(() => availablePosts.filter(job => {
        // Filters
        let search_ = search.value.toLowerCase().trim()
        let category_ = category.value.toLowerCase().trim()

        // Meta
        let pageTitle = (job?.meta?.title as string)?.toLowerCase().trim()
        let pageDescription = (job?.meta?.description as string)?.toLowerCase().trim()
        let pageCategory = (job?.meta?.category as string)?.toLowerCase().trim()
        
        if (!search_ && !category_) return true
        
        if (search_ && !pageTitle?.includes(search_) && !pageDescription?.includes(search_)) return false
        
        if (category_ && pageCategory !== category_) return false
        
        return true
    }))

    const categories = computed(() => [...new Set(availablePosts.map(post => post?.meta?.category))])

    definePageMeta({
        title: 'Firmenwiki',
        description: '',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })
    
    useSeoMeta({
        title: 'Firmenwiki',
        description: '',
    })
</script>

<style lang="sass" scoped>
    .form-select
        background-color: transparent
        border: 1px solid var(--color-border)
        padding: 0 .5rem
        height: 2rem
        border-radius: var(--radius-m)
        font-family: inherit
        color: var(--color-text)
        font-size: 1rem
</style>
