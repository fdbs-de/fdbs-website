<template>
    <SectionHero title="Deine Karriere bei FDBS" image="/images/content/banner/karriere_513169496_482949832.webp" />
    
    <SectionText>
        <p>
            FDBS ist ein Braunschweiger Großhandelsunternehmen und versteht sich seit über 100 Jahren als Partner für Fleischereien,
            Bäckereien, Gastronomen, und Hoteliers. Wir liefern Frischeprodukte, High-End-Convenience, sowie nahezu alles an
            Bedarfsartikeln und inspirieren unsere Kunden mit immer neuen Trends.<br><br>
        </p>
        <p>
            Unser Ziel ist es, unsere Kunden mit qualitativ hochwertigen Lebensmitteln schnell und zuverlässig zu beliefern.
            Neben der Qualität und Herkunft unserer Produkte spielen eine hohe Kundenorientierung sowie kooperative Beziehungen
            zu unseren Geschäftspartnern für uns eine große Rolle.<br><br>
        </p>
        <p>
            Wir sind ein sich ständig weiterentwickelndes Unternehmen mit über 100 Mitarbeitern und bieten ergänzend zu unserem
            großen Handelssortiment einen einzigartigen Rundum-Service in Kundendienst, Werkstatt und Marketing, der den
            Anforderungen unserer Kunden entspricht.<br><br>
        </p>
        <p>
            Du hast Interesse an der Food Branche, suchst Abwechslung und bist bereit Verantwortung zu übernehmen?
            Dann bist Du bei uns genau richtig!
        </p>
    </SectionText>
    
    <SectionText size="page">
        <h2 class="text-center mb-12">Unsere Stellenangebote</h2>

        <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-2 mb-4">
                <IodInput class="!rounded-xl" label="Stellenangebote suchen" v-model="search"/>
                <small class="mx-2">Alle Stellen verstehen sich ausgeschrieben für M/W/D</small>
            </div>
            
            <div class="flex flex-col gap-4" v-if="filteredPosts.length">
                <NuxtLink class="flex flex-col p-6 border-2 border-solid border-zinc-200 text-zinc-600 rounded-xl hover:border-rose-600 hover:text-rose-600" :to="post.path" v-for="post in filteredPosts">
                    <h3 class="m-0 text-xl text-inherit">{{ post.meta.title }}</h3>
                    <span>{{ post.meta.description }}</span>
                </NuxtLink>
            </div>
            
            <div class="flex items-center justify-center p-6 border-2 border-solid border-zinc-200 text-zinc-600 rounded-xl" v-else>
                <span v-if="availablePosts.length === 0">Wir schreiben zurzeit keine Stellen aus</span>
                <span v-else>Keine Stellenangebote gefunden</span>
            </div>
            
            <div class="initiative-card p-6 border-2 border-solid border-zinc-200 text-zinc-600 rounded-xl">
                <h3>Deine Initiativbewerbung</h3>
                <p>
                    Sollte derzeit keine passende Stelle ausgeschrieben sein, laden wir Dich dennoch dazu ein, Dich bei uns zu bewerben.<br>
                    Sende Deine Initiativbewerbung an <a href="mailto:bewerbungen@fdbs.de">bewerbungen@fdbs.de</a>.<br>
                    <b>Wir freuen uns, von Dir zu hören!</b>
                </p>
            </div>
        </div>
    </SectionText>
    
    <SectionKarriereBenefits />
</template>

<script lang="ts" setup>
    const search = ref('')
    const availablePosts = useRouter().getRoutes().filter(route => route?.path?.startsWith('/karriere/'))
    const filteredPosts = computed(() => availablePosts.filter(job => {
        let search_ = search.value.toLowerCase().trim()
        if (!search_) return true

        let title = (job?.meta?.title as string)?.toLowerCase().trim()
        if (title?.includes(search_)) return true

        let description = (job?.meta?.description as string)?.toLowerCase().trim()
        if (description?.includes(search_)) return true
    }))

    definePageMeta({
        title: 'Deine Karriere bei FDBS',
        description: '',
    })

    useSeoMeta({
        title: 'Deine Karriere bei FDBS',
        description: '',
    })
</script>

<style lang="sass" scoped>
    .initiative-card
        background-color: var(--color-background)
        background-image: url('/images/content/karriere/application.png')
        background-position: bottom right
        background-repeat: no-repeat
        background-size: contain
        position: relative
        overflow: hidden

        &::before
            content: ''
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            background: linear-gradient(135deg, rgba(255,255,255,1) 70%, rgba(255,255,255,.6) 100%)

        h3
            color: var(--color-primary)
            font-size: clamp(1.75rem, 5vw, 2.5rem)
            margin-block: 0
            position: relative

        a
            color: var(--color-text)
            font-weight: 600

            &:hover
                color: var(--color-text)
                text-decoration: underline

        p
            margin-bottom: .4rem
            position: relative
</style>
