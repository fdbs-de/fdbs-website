
<template>
    <SectionHero title="Leitfaden 'einfrieren'" image="/storage/media/wiki/generisch/streifen.jpg" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Lager</b><br>
            Tags: <b>einfrieren, Bizerba, Waage, Etiketten, auszeichnen, PLU, Tiefklühl, Frische</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p><strong><u class="content-underline">Leitfaden zum Einfrieren an der "Bizerba-Waage" in der Frischeabteilung</u></strong></p><ul><li><p><span>PLU auswählen = Artikelnummer</span></p></li><li><p><span>Etikettenparameter auswählen: 1 = Fleisch, 2 = Käse, 3 = Tiefkühl,</span></p><p><span>   4 = Scherbeneis</span></p></li><li><p><span>TARA = 0,01 kg für Verpackungsfolie (außer bei Festgewichten)</span></p></li><li><p><span>Chargennummer eingeben</span></p></li><li><p><span>Eingefroren am… eingeben</span></p></li><li><p><span>MHD bis… eingeben</span></p></li><li><p><span>Bei Fleischartikel P2 auswählen, Herkunftsländer auswählen und ES + EZ eingeben</span></p></li><li><p><span>Stückvorwahl = muss immer auf 0 stehen. Die Stückvorwahl erzeugt ein Etikett für die gesamte eingefrorene Menge einer Charge. Pro Charge muss ein Gesamtetikett gedruckt werden. Soll ein Gesamtetikett gedruckt werden, muss die Stückvorwahl auf 1 umgestellt werden. Anschließend wird das Etikett gedruckt. Die Stückvorwahl muss dann wieder auf 0 zurückgesetzt werden. Die Gesamtmenge der nächsten Charge wird nun wieder neu gerechnet. Die Gesamtetiketten müssen in der Dispo abgegeben werden, damit die Artikel vom Frischeartikel auf den TK-Artikel umgebucht werden können.</span></p></li><li><p><span>Gewicht = Der Artikel muss gewogen werden.</span></p></li><li><p><span>Festgewicht = Der Artikel hat immer das gleiche Gewicht z.B. Scherbeneis (10 kg) und Zwiebeln (5 kg).</span></p></li><li><p><span>Festwert = Diese Auswahl muss aktiviert werden, wenn der Artikel ein Festgewicht hat.</span></p></li><li><p><span>Automatisch = Artikel wird auf die Waage gelegt, somit gewogen. Bei Erreichen des Gewichts wird das Etikett automatisch gedruckt. Die Waage muss anschließend schnellstmöglich entlastet werden.</span></p></li><li><p><span>Hand = Artikel wird auf die Waage gelegt, somit gewogen. Bei Erreichen des Gewichts muss das Etikett durch Betätigen eines Knopfes manuell gedruckt werden.</span></p></li><li><p><span>ETC = wechselt zur nächsten Seite</span></p></li><li><p><span>WICHTIG: Die kleinste Verkaufseinheit muss ausgezeichnet werden!</span></p></li></ul><p></p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Leitfaden "einfrieren"',
        description: 'Lager, einfrieren, Bizerba, Waage, Etiketten, auszeichnen, PLU, Tiefklühl, Frische',
        category: 'Lager',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Leitfaden "einfrieren"',
        description: 'Lager, einfrieren, Bizerba, Waage, Etiketten, auszeichnen, PLU, Tiefklühl, Frische',
    })
</script>

<style lang="sass" scoped></style>