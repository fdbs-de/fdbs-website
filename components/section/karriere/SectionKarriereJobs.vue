<template>
    <section class="jobs-section">
        <HeLimiter>
            <h2 class="text-center mb-12">Unsere Stellenangebote</h2>

            <div class="flex flex-col gap-8">
                <div class="flex flex-col gap-2 mb-4">
                    <IodInput class="!rounded-xl" label="Stellenangebote suchen" v-model="search"/>
                    <small class="mx-2">Alle Stellen verstehen sich ausgeschrieben für M/W/D</small>
                </div>
                
                <div class="flex flex-col gap-4" v-if="filteredJobs.length">
                    <NuxtLink class="flex flex-col p-6 border-2 border-solid border-zinc-200 text-zinc-600 rounded-xl hover:border-rose-600 hover:text-rose-600" :to="'/karriere/'+job.slug" v-for="job in filteredJobs">
                        <h3 class="m-0 text-xl text-inherit">{{ job.title }}</h3>
                        <span><b>{{ job.role }},</b> {{ job.tags.join(', ') }}</span>
                    </NuxtLink>
                </div>
                
                <div class="placeholder p-6 border-2 border-solid border-zinc-200 text-zinc-600 rounded-xl" v-else>
                    <span v-if="jobs.length === 0">Wir schreiben zurzeit keine Stellen aus</span>
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
        </HeLimiter>
    </section>
</template>

<script lang="ts" setup>
    import jobs from '~/data/posts/jobs.json'

    const search = ref('')

    const filteredJobs = computed(() => {
        return jobs.filter(job => {
            if (search.value.trim() && !job?.title?.toLowerCase().trim().includes(search.value.toLowerCase().trim())) return false
            return true
        })
    })
</script>

<style lang="sass" scoped>
    .jobs-section
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

        .placeholder
            display: flex
            align-items: center
            justify-content: center
</style>