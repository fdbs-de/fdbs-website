
<template>
    <SectionHero title="Ablauf Firmendruck" image="/storage/media/wiki/generisch/fdbs_muster_grau.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Vertrieb</b><br>
            Tags: <b>Firmendruck, Beutel, Dosen, Faltenbeutel</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <h1>Ablauf Firmendruck Artikel</h1><p>1. Der Einkauf schaut auf unsere aktuellen Lagerbestände der Artikel</p><p>• Wenn der Bestand niedrig ist, holt der EK ein Angebot ein</p><p>2. Nach Erhalt des Angebots leitet der EK das Angebot an den Vertrieb</p><p>• Gibt es Änderungen in der Aufmachung oder dem Format des Artikels muss diese Informationen vom EK an den AD weitergegeben werden!</p><p>3. Dieser fertigt Mithilfe des "Arbeitsprozesses 1" das Angebot an</p><p>4. Der Innendienst leitet das vorgefertigte Angebot an den AD</p><p>(VK- Preis errechnet sich aus EK x 1,4)</p><p>5. Der AD holt vom Kunden die Bestätigung des Angebots</p><p>6. Nach Bestätigung wird der EK informiert und die Ware bestellt</p><p>7. Der EK pflegt bei Anlieferung die neuen Preise (EK und VK) ein</p><p><strong>Arbeitsprozess 1</strong></p><p>Vorlage des Angebots zu finden unter</p><p>G:\Angebote Firmendruck\Angebote\Vordruck - Muster -</p><p>Nach dem Öffnen der Vorlage muss diese bearbeitet werden.</p><p>Wichtige Punkte: Kundenname, Datum, Lieferzeit der Ware, Angebot gültig bis, Außendienstler und Preis</p><p>Die ausgefüllte Vorlage dem AD zuschicken und auf Antwort warten.</p><p>Bei Unterschrift oder Bestätigung des Angebots per Mail vom Kunden wird dieses Angebot dem EK gegeben, damit dieser die Bestellung aufgeben kann. Bei Anlieferung pflegt der EK die Preise ein.</p><p></p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Ablauf Firmendruck',
        description: 'Vertrieb, Firmendruck, Beutel, Dosen, Faltenbeutel',
        category: 'Vertrieb',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Ablauf Firmendruck',
        description: 'Vertrieb, Firmendruck, Beutel, Dosen, Faltenbeutel',
    })
</script>

<style lang="sass" scoped></style>