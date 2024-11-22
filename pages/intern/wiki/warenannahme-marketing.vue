
<template>
    <SectionHero title="Warenannahme & Rechungen Marketing" image="/images/content/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Marketing</b><br>
            Tags: <b>Warenannahme, Rechnungen</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Alle Waren, die von extern geliefert werden, sind umgehend, spätestens aber am Folgetag der Lieferung, auf ihre Vollzähligkeit und Unversehrtheit zu prüfen!</p><p>Nach erfolgter Prüfung werden alle Waren sinnvoll im Büro verräumt, so dass diese die Produktionsabläufe im Büro nicht stören.</p><p>Weiterhin sind Rechnungen umgehend, spätestens nach Erhalt und Kontrolle der Ware oder Dienstleistung, zu bearbeiten!</p><p>Zum Ende einer jeden Arbeitswoche prüft jeder Mitarbeiter ob alle Rechnungen bearbeitet sind.</p><p></p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Warenannahme & Rechungen Marketing',
        description: 'Marketing, Warenannahme, Rechnungen',
        category: 'Marketing',
        image: '/images/content/wiki/generisch/fdbs_muster_rot.png',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Warenannahme & Rechungen Marketing',
        description: 'Marketing, Warenannahme, Rechnungen',
    })
</script>

<style lang="sass" scoped></style>