
<template>
    <SectionHero title="Arbeitsablauf Kontraktartikel" image="/images/content/wiki/generisch/muster_2.jpg" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Vertrieb</b><br>
            Tags: <b>Kontrakt</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Die digitale Muster- Version der Kontrakte liegt im Laufwerk:<br>Verkauf-&gt; Kontrakte-&gt; „MUSTER_VORLAGE_Mengenkontrakt_Schweinenacken TK“</p><p>Diese Version wird vom Innendienst mit den nötigen Daten ausgefüllt und <strong>2x </strong>ausgedruckt dem Außendienst mitgegeben.</p><p>Der AD lässt das Dokument unterzeichnen und gibt <strong>1x</strong> das unterschriebene Formular dem Innendienstleiter/ Assistenz der Vetriebsleitung weiter. <strong>Ein </strong>Exemplar behält der Kunde.</p><p>&nbsp;</p><p>Die Assistenz Vertriebsleitung trägt alle nötigen Daten in eine Excel Tabelle ein.</p><p>Nötige Daten sind:</p><p>Kundennummer, Kundenname, Außendienst, Kontrakt Menge, Preis, Laufzeit, abgenommene Menge und Restmenge</p><p>Außerdem wird das unterschriebene Formular digital archiviert und eingescannt und im Ordner abgespeichert.</p><p>&nbsp;</p><p>In Navision unter „Debitor“ und „Zertifizierungen“ die Laufzeit für den Kontraktartikel hinterlegen.</p><p>&nbsp;</p><p>Einmal wöchentlich die Mengen überprüfen, die die Kunden genommen haben und in die Excel Datei eingeben und dem zugehörigen AD und ID zusenden.</p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Arbeitsablauf Kontraktartikel',
        description: 'Vertrieb, Kontrakt',
        category: 'Vertrieb',
        image: '/images/content/wiki/generisch/muster_2.jpg',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Arbeitsablauf Kontraktartikel',
        description: 'Vertrieb, Kontrakt',
    })
</script>

<style lang="sass" scoped></style>