<template>
    <SectionHero title="Ihr Dashboard" image="/images/content/banner/foodservice_365702048_356901877_454625888.webp" />
    <SectionText size="page">
        <!-- <HeCarousel class="h-96 rounded-xl" overlay dots arrows infinite :interval="5000">
            <template #1>
                <div class="h-full p-6 bg-rose-600">
                    <h2 class="m-0 text-rose-50">Ihre Übersicht</h2>
                    <p class="m-0 text-rose-100">Wir haben die Übersicht für Sie angepasst.</p>
                </div>
            </template>
            <template #2>
                <div class="h-full p-6 bg-amber-500">
                    <h2 class="m-0 text-amber-950">Ihre Übersicht</h2>
                    <p class="m-0 text-amber-900">Wir haben die Übersicht für Sie angepasst.</p>
                </div>
            </template>
        </HeCarousel> -->


        <h2>Relevantes für Sie</h2>
        <div class="grid">
            <NuxtLink class="icon-card highlight" target="_self" to="/intern/angebote" v-if="auth.isAdmin() || auth.hasAnyRole(['Personal', 'Kunde'])">
                <IodIcon icon="sell" />
                <h3>Angebote</h3>
                <p>Finden Sie unsere aktuellen Angebote ganz einfach zum Download.</p>
            </NuxtLink>

            <!-- <NuxtLink class="icon-card" target="_self" to="/intern/wiki" v-if="auth.isAdmin() || auth.hasRole('Personal')">
                <IodIcon icon="local_library" />
                <h3>Firmenwiki</h3>
                <p>Hier finden Sie alle Informationen rund um den FDBS.</p>
            </NuxtLink> -->

            <NuxtLink class="icon-card" target="_self" to="/intern/dokumente" v-if="auth.isAdmin() || auth.hasRole('Personal')">
                <IodIcon icon="download" />
                <h3>Dokumente</h3>
                <p>Hier finden Sie alle Dokumente, die Sie für Ihre Arbeit benötigen.</p>
            </NuxtLink>

            <NuxtLink class="icon-card" target="_self" to="/intern/spezifikationen" v-if="auth.isAdmin() || auth.hasAnyRole(['Personal', 'Kunde'])">
                <IodIcon icon="cloud_done" />
                <h3>Spezifikationen</h3>
                <p>Hier finden Sie alle Spezifikationen zu unseren Produkten.</p>
            </NuxtLink>
        </div>


        <template v-if="auth.isAdmin() || auth.hasRole('Personal')">
            <h2 class="mt-16 mb-6">Links und Tools</h2>
            <div class="grid">
                <NuxtLink class="icon-card" target="_blank" to="https://fdbs.prevenio.de/">
                    <IodIcon icon="school"/>
                    <h3>Prevenio Schulungen</h3>
                    <p>Betriebliche Unterweisungen für den FDBS.</p>
                </NuxtLink>
                <NuxtLink class="icon-card" target="_blank" to="https://fleischer-dienst.mitarbeiterangebote.de/login">
                    <IodIcon icon="percent"/>
                    <h3>Mitarbeiterangebote</h3>
                    <p>Angebote bei vielen Firmen für FDBS Mitarbeiter.</p>
                </NuxtLink>
                <NuxtLink class="icon-card" target="_blank" to="https://www.dienstradtool.eurorad.de/register/step1/de45f84422f17ec3961693afaa2844101e4a8c47a2789adeb449f966672656ba">
                    <IodIcon icon="pedal_bike"/>
                    <h3>Dienstrad</h3>
                    <p>Dienstfahrrad-Leasing für Firmen.</p>
                </NuxtLink>
                <NuxtLink class="icon-card" target="_blank" to="/ci">
                    <IodIcon icon="format_paint"/>
                    <h3>Corporate Identity</h3>
                    <p>Styleguides für die FDBS Marke.</p>
                </NuxtLink>
                <NuxtLink class="icon-card" target="_blank" to="https://fleischerdienstde-my.sharepoint.com/my">
                    <IodIcon icon="cloud"/>
                    <h3>Onedrive</h3>
                    <p>Ihre persönliche Ablage für Dateien beim FDBS.</p>
                </NuxtLink>
                <NuxtLink class="icon-card" target="_blank" to="https://phoneapp.unify.com/#/dialpad">
                    <IodIcon icon="phone"/>
                    <h3>Unify Phone</h3>
                    <p>Ihr Unify Phone bei FDBS.</p>
                </NuxtLink>
            </div>
        </template>
    </SectionText>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Übersicht',
        description: '',
    })

    definePageMeta({
        middleware: 'auth',
        layout: 'auth',
    })

    const auth = useAuthStore()
</script>

<style lang="sass" scoped>
    .grid
        display: grid
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
        gap: 2rem

    .icon-card
        display: flex
        flex-direction: column
        align-items: stretch
        gap: .5rem
        padding: 1.5rem
        color: var(--color-text-soft)
        border-radius: var(--radius-l)
        border: 1px solid var(--color-background-soft)
        text-align: center
        transition: all 100ms ease-in

        &.highlight
            background: var(--color-primary)
            border-color: transparent
            color: var(--color-on-primary)
            box-shadow: var(--shadow-m)

            .iod-icon
                color: var(--color-on-primary)
                filter: drop-shadow(4px 4px 0 #ffffff50)

            h3
                color: var(--color-on-primary)

            &:hover
                box-shadow: var(--shadow-l)

        &:hover
            box-shadow: var(--shadow-m)

        .iod-icon
            font-size: 4rem
            color: var(--color-primary)
            margin: 1rem auto 2.5rem
            filter: drop-shadow(4px 4px 0 #e0004730)
        
        h3
            font-size: 1.5rem
            margin: 0
            color: var(--color-primary)

        p
            margin: 0
            flex: 1
</style>
