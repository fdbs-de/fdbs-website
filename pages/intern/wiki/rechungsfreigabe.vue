
<template>
    <SectionHero title="Rechungsfreigabe" image="/storage/media/wiki/generisch/muster_1.jpg" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Einkauf</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Im Outlook unter Dispo@FDBS ist der Rechnungsordner, hier werden die Rechnungen von der Buchhaltung abgelegt.</p><img class="content-image" src="/storage/media/Einkauf/Screenshot 2023-08-31 071612 Rechnung1.png" alt=""><p></p><img class="content-image" src="/storage/media/Einkauf/Screenshot 2023-08-31 071816 Rechnung2.png" alt=""><p>Zu der Ausgewählten Rechnung muss die passende gelieferte Bestellung zugeordnet werden, diese kann man auf unterschiedliche Arten finden, unter dem Reiter Bestellungen im Navison kann man nach Lieferscheinnummer, Bestellnummer oder Kreditor suchen.</p><img class="content-image" src="/storage/media/Einkauf/Screenshot 2023-08-31 071923 Rechnung3.png" alt=""><p></p><img class="content-image" src="/storage/media/Einkauf/Screenshot 2023-08-31 072020 Rechnung4.png" alt=""><p></p><img class="content-image" src="/storage/media/Einkauf/Screenshot 2023-08-31 072049 Rechnung5.png" alt=""><p>Jetzt werden die Einkaufspreise und die Menge der Rechnung mit dem Wareneingang verglichen und auf Richtigkeit geprüft.</p><img class="content-image" src="/storage/media/Einkauf/Screenshot 2023-08-31 072117 Rechnung6.png" alt=""><p>Wenn alle Faktoren der Rechnung und der Bestellung übereinstimmen, können wir diese zur Bezahlung freigeben. (shortcut F9)</p><img class="content-image" src="/storage/media/Einkauf/Screenshot 2023-08-31 072202 Rechnung7.png" alt=""><img class="content-image" src="/storage/media/Einkauf/Screenshot 2023-08-31 072255 Rechnung8.png" alt=""><p>Nun erfolgt die Ablage des Dokuments.</p><img class="content-image" src="/storage/media/Einkauf/Screenshot 2023-08-31 072419 Rechnung9.png" alt=""><img class="content-image" src="/storage/media/Einkauf/Screenshot 2023-08-31 072510 Rechnung10.png" alt=""><p>In dieser Maske erfolgt die Ablage der PDF Datei aus dem Rechnungsordner in die Dropbox.</p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Rechungsfreigabe',
        description: 'Einkauf, -',
        category: 'Einkauf',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Rechungsfreigabe',
        description: 'Einkauf, -',
    })
</script>

<style lang="sass" scoped></style>