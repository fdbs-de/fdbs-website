
<template>
    <SectionHero title="Workflow FDBS Projekte" image="/images/content/wiki/generisch/fdbs_muster_grau.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Allgemeines</b><br>
            Tags: <b>Workflow</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <ol><li><p>Eine Abteilung überlegt sich eine vertriebs- oder verkaufsfördernde Maßnahme.</p></li><li><p>Die gleiche Abteilung überlegt sich welche Rahmenbedingungen dafür geschaffen werden müssen.</p></li><li><p>Die Maßnahme wird mit dem Vorstand abgestimmt.</p></li><li><p>Anschließend sorgt die Abteilung dafür das alle Rahmenbedingungen erfüllt sind und erstellt eine Material- und Equipment-Übersicht (Deko, grafische Produkte, Textentwürfe, Bilddaten mit Nutzungslizenzen (nicht in Office-Dateien gespeichert) usw.).</p></li><li><p>Auf dem Laufwerk "Daten" wird ein Projektordner erstellt in dem alle zusammen arbeiten. Dies macht Mails mit Einzelinformationen an die Beteiligten überflüssig.</p></li><li><p>Wenn alle Rahmenbedingungen stehen wird die Marketing-Abteilung über BV oder FBR gebrieft.</p></li><li><p>Die auftraggebende Abteilung erstellt einen Zeitplan für die Organisation und Folgetermine zur Abstimmung, sowie falls nötig Deadlines für Teilziele oder/und Fertigstellung.</p></li><li><p>Die Marketing-Abteilung erstellt ein Konzept zur Maßnahme und präsentiert dieses der Abteilung und dem Vorstand.</p></li><li><p>Danach folgt die Umsetzung.</p></li></ol><ul><li><p>Rahmenbedingungen sind z.B.:</p><ul><li><p>realistisches Datum mit Puffer für die Marketing-Umsetzung (nicht eine Woche vorher)</p></li><li><p>benötigtes Material und Equipment</p></li><li><p>Terminkoordination mit Lieferanten</p></li><li><p>fester Ansprechpartner aus der Abteilung</p></li><li><p>Budget</p></li><li><p>Location</p></li><li><p>Umfang der Maßnahme (z.B. mit wie vielen Gästen wird geplant)</p></li><li><p>Umsetzungsideen (bei Messen z.B. wie wird eingeladen und wie wird der Einlass geregelt)</p></li><li><p>Ansprechpartner von beteiligten Drittfirmen</p></li></ul></li></ul>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Workflow FDBS Projekte',
        description: 'Allgemeines, Workflow',
        category: 'Allgemeines',
        image: '/images/content/wiki/generisch/fdbs_muster_grau.png',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Workflow FDBS Projekte',
        description: 'Allgemeines, Workflow',
    })
</script>

<style lang="sass" scoped></style>