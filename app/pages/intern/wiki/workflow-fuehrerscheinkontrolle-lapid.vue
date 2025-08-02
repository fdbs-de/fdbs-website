
<template>
    <SectionHero title="Workflow Führerscheinkontrolle LAPID" image="/images/content/wiki/generisch/fdbs_muster_grau.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Allgemeines</b><br>
            Tags: <b>Führerscheinkontrolle, Stationsfinder, LAPID, Führerschein, Shell</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Liebe Kolleg*innen,</p><p>&nbsp;</p><p>die monatliche Überprüfung der Führerscheine ist selbstständig und ohne zusätzliche Aufforderung durch den Fuhrpark durchzuführen. Hierfür erhält jede*r entsprechende und regelmäßige E-Mails zur Erinnerung.</p><p>Sollte es euch einmal nicht möglich sein, die Überprüfung bei uns im Haus durchführen zu lassen, könnt ihr dies z.B. auch an jeder Shell-Tankstelle. Ebenfalls gibt es weitere Anbieter, die ein entsprechendes Gerät bei sich aufgestellt haben und ihr diese für die Überprüfung auf euren Wegen anfahren könnt. Hierfür könnt ihr den nachfolgenden Link nutzen und eine entsprechende Station suchen:</p><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://stationsfinder.lapid.de/de/">Stationsfinder (</a><a target="_blank" rel="noopener noreferrer nofollow" href="http://lapid.de">lapid.de</a><a target="_blank" rel="noopener noreferrer nofollow" href="https://stationsfinder.lapid.de/de/">)</a></p><p>Wenn das Auslesen der Karte am Gerät nicht möglich ist, wendet euch bitte an den Fuhrpark, um einen neuen LAPID-Code zu verkleben.</p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Workflow Führerscheinkontrolle LAPID',
        description: 'Allgemeines, Führerscheinkontrolle, Stationsfinder, LAPID, Führerschein, Shell',
        category: 'Allgemeines',
        image: '/images/content/wiki/generisch/fdbs_muster_grau.png',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Workflow Führerscheinkontrolle LAPID',
        description: 'Allgemeines, Führerscheinkontrolle, Stationsfinder, LAPID, Führerschein, Shell',
    })
</script>

<style lang="sass" scoped></style>