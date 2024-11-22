
<template>
    <SectionHero title="Archivierung der gebuchten Einkaufslieferungen (Lieferscheine)" image="https://www.scan-profi.de/wp-content/uploads/2018/10/Scannen-B%C3%BCro-Privat.jpg" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Lager</b><br>
            Tags: <b>Anleitung, Guide, Digitalisierung</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p style="text-align: center"></p><p style="text-align: center"><strong><u class="content-underline">Archivierung der gebuchten Einkaufslieferungen (Lieferscheine)</u></strong></p><ul><li><p>Die gebuchten Lieferscheine werden nach Datum und anschließend nach dem Alphabet sortiert</p></li><li><p>Anschließend wird jeder Lieferschein pro Bestellung eingescannt (Liefert ein Lieferant mehrere Vorgänge an, so muss jeder Vorgang einzeln eingescannt werden)</p></li><li><p>Die eingescannten Lieferscheine sind nach dem Scanvorgang im Ordner ,,Lieferscheine_WE´´ zu finden (Pfad: Dieser PC – daten (<a target="_blank" rel="noopener noreferrer nofollow" href="file://fdbs-file">\\fdbs-file</a>) (G:) - Lieferscheine_WE Verknüpfung)</p></li><li><p>Nun in Microsoft Navision auf ,,Geb. Einkaufslieferungen´´ gehen und dort nach Buchungsdatum filtern</p></li><li><p>Den Ordner ,,Lieferscheine_WE´´ öffnen und die passende Datei zum jeweiligen Einkauf in die ,,Drop-Zone´´ ziehen</p></li><li><p>Nachdem alle Lieferscheine den jeweiligen Vorgängen zugeordnet wurden, wird der Ordner ,,Lieferscheine_WE´´ geleert und die Original Lieferscheine werden der Aktenvernichtung zugeführt</p></li></ul><p style="text-align: center">&nbsp;<strong>! Lieferscheine sollen immer tagesaktuell abgelegt werden !</strong></p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Archivierung der gebuchten Einkaufslieferungen (Lieferscheine)',
        description: 'Lager, Anleitung, Guide, Digitalisierung',
        category: 'Lager',
        image: 'https://www.scan-profi.de/wp-content/uploads/2018/10/Scannen-B%C3%BCro-Privat.jpg',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Archivierung der gebuchten Einkaufslieferungen (Lieferscheine)',
        description: 'Lager, Anleitung, Guide, Digitalisierung',
    })
</script>

<style lang="sass" scoped></style>