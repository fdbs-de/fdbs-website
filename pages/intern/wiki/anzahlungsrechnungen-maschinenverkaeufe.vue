
<template>
    <SectionHero title="Anzahlungsrechnungen Maschinenverkäufe" image="/storage/media/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Werkstatt</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p><strong><u class="content-underline">Anzahlungsrechnungen Maschinenverkäufe</u></strong></p><p style="text-align: center"><strong><u class="content-underline"><span>&nbsp;</span></u></strong></p><p>Zuerst wird im NAV ein Angebot erstellt, nach Freigabe durch den Kunden wird hieraus ein Auftrag generiert.</p><p>&nbsp;</p><p>-Im Reiter FoodVision muss der Haken bei Sammelrechnung entfernt werden</p><p>-Buchungsdatum = heute</p><p>-der Zahlungsformcode muss ggf. geändert werden</p><p>-Im Reiter Vorauszahlung muss die vereinbarte Vorauszahlung in % eingetragen werden</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p></p><p>&nbsp;</p><p>&nbsp;</p><p>Unter der Maske Aktionen im Menüband auf Buchung =&gt; Vorauszahlung buchen und drucken</p><p></p><p>Der Status des Auftrags ändert sich dann auf Vorauszahlung ausstehend. Solange die Vorauszahlung nicht eingegangen ist, kann der Auftrag nicht geliefert werden. Die Info über den Zahlungseingang erfolgt von der Buchhaltung.</p><p>&nbsp;</p><p>Bevor der Auftrag geliefert wird muss die Vorauszahlungsrechnung storniert werden.</p><p>&nbsp;</p><p>WICHTIG: das Buchungsdatum muss auf den aktuellen Tag geändert werden!!!</p><p>&nbsp;</p><p></p><p>&nbsp;</p><p>Sobald die Gutschrift gebucht ist, kann der Auftrag geliefert werden. Nach der Lieferung erfolgt die Info an die Buchhaltung, welche die Rechnung erstellt.</p><p></p><p>&nbsp;</p><p></p><p>&nbsp;</p><p>Der Textbaustein muss um die korrekten Daten ergänzt werden, danach kann aus dem Auftrag heraus fakturiert werden:</p><p></p><p>&nbsp;</p><p>Es erfolgt ein Auswahlfeld, hier nur fakturieren auswählen.</p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Anzahlungsrechnungen Maschinenverkäufe',
        description: 'Werkstatt, -',
        category: 'Werkstatt',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Anzahlungsrechnungen Maschinenverkäufe',
        description: 'Werkstatt, -',
    })
</script>

<style lang="sass" scoped></style>