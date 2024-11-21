<template>
    <template v-if="job">
        <SectionHero :title="job.title" image="/images/content/banner/karriere_513169496_482949832.webp" />
        <SectionText>
            <HeDivider />
            <span>
                Anstellungsart: <b>{{ job.role }}</b><br>
                Tags: <b>{{ job.tags.join(', ') || '-' }}</b>
            </span>
            <HeDivider />
            <div class="formatted-content" v-html="job.content"></div>
        </SectionText>
    </template>
    <SectionText v-else>
        <h2 class="m-0 text-center">Seite nicht gefunden</h2>
    </SectionText>
</template>

<script lang="ts" setup>
    import jobs from '~/data/posts/jobs.json'

    const job = computed(() => {
        return jobs.find(job => job.slug === useRoute().params.slug)
    })

    useSeoMeta({
        title: job.value?.title || 'FDBS Karriere',
        description: '',
    })
</script>

<style lang="sass" scoped></style>
