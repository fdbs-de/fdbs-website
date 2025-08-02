
<template>
    <SectionHero title="Vorbestellartikel" image="/images/content/wiki/generisch/streifen.jpg" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Vertrieb</b><br>
            Tags: <b>Vorbestellen, Vorbesteller, Bestellzeiten</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p><strong><u class="content-underline"><span style="color: black">Prozessbeschreibung Vorbestellartikel </span></u></strong><span style="color: black">(Artikel sind in System GROß geschrieben)</span></p><p><span style="color: black">handelt es sich bei dem Vorbestellartikel um eine Artikelnummer aus Warengruppe 40-60?</span></p><p><em><span style="color: black">WENN "JA": Nicht ausdrucken! Außer in Beschreibung steht VB 2T!</span></em></p><p><em><span style="color: var(--color-text)">außer: </span><span style="color: black">Obst/ Gemüse-&gt; ausdrucken</span></em></p><p><span style="color: black">WENN "NEIN"</span></p><ol><li><p><span style="color: black">Möglichkeit: Artikel unter Beachtung der </span><strong><em><span style="color: red">Bestellzeiten</span></em></strong><em><span style="color: red"> (siehe Daten/Bestellzeiten Dispo)</span></em><span style="color: black"> und des </span><strong><span style="color: black">Lieferanten</span></strong><span style="color: black"> in einen separaten Auftrag schreiben und entsprechend terminieren -&gt; Auftrag ist zwingend auszudrucken (AD lässt den Auftrag offen im System stehen – welche dann durch die Spätschicht gedruckt werden)</span></p><p></p></li></ol><p></p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Vorbestellartikel',
        description: 'Vertrieb, Vorbestellen, Vorbesteller, Bestellzeiten',
        category: 'Vertrieb',
        image: '/images/content/wiki/generisch/streifen.jpg',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Vorbestellartikel',
        description: 'Vertrieb, Vorbestellen, Vorbesteller, Bestellzeiten',
    })
</script>

<style lang="sass" scoped></style>