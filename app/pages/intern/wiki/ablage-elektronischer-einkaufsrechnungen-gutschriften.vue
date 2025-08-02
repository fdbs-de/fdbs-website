
<template>
    <SectionHero title="Ablage elektronischer Einkaufsrechnungen/Gutschriften" image="/images/content/wiki/generisch/fdbs_muster_grau.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Allgemeines</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Einkaufsrechnung/Gutschrift kommt per Post/Mail (rechnungen@fdbs.de) an und wird von Frau Stöger oder Frau Sanner in die jeweiligen Unterordner/Abteilungen verschoben/zugeordnet.</p><p>Rechnungsabarbeiter (Dispo) prüft die vorliegende Bestellung/Wareneingang mit der Rechnung und arbeitet diese in Navision ab (geb. Einkaufsrechnung/Gutschrift ist somit erstellt).</p><p>Original Rechnung/Gutschrift aus E-Mail oder eingescannten Beleg mit linker Maus in Drop-Zone der gebuchten Einkaufsrechnung/Gutschrift ziehen.</p><p>Fertig!</p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Ablage elektronischer Einkaufsrechnungen/Gutschriften',
        description: 'Allgemeines, -',
        category: 'Allgemeines',
        image: '/images/content/wiki/generisch/fdbs_muster_grau.png',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Ablage elektronischer Einkaufsrechnungen/Gutschriften',
        description: 'Allgemeines, -',
    })
</script>

<style lang="sass" scoped></style>