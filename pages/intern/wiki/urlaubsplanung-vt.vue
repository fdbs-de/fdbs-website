
<template>
    <SectionHero title="Urlaubsplanung VT" image="/storage/media/wiki/generisch/fdbs_muster_grau.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Vertrieb</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p><strong><u class="content-underline">Ablauf Urlaubsplanung</u></strong></p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Urlaubskalender im Outlook zur Einsicht für alle ID/AD</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Urlaubswünsche 1. Novemberwoche einholen</p><p>o&nbsp;&nbsp; Aufruf per Mail ID/AD mit dem Hinweis sich untereinander abzusprechen</p><p>o&nbsp;&nbsp; und mit dem Hinweis auf „Urlaubssperre“ Vertriebstagung/ggf. Messe/Dezember</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Urlaubswünsche zeitnah in den Kalender eintragen/ggf. Excel Schichtplan nutzen</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Urlaubsüberschneidungen entsprechend ansprechen</p><p>o&nbsp;&nbsp; AD/ID-Team nicht zusammen, habe zu viele AD’s/ID’s Urlaub, dann mit Abteilung besprechen</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Urlaubsschein komplett für AD ausfüllen</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ID füllt selbst aus</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; beide Seiten haben unterschrieben, dann einscannen und dann jeweiligen Mitarbeiter (und CC zugehöriger ID/AD) per Mail senden</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Urlaub hinterlegen in</p><p>o&nbsp;&nbsp; TempVision Zeitwirtschaft/Planung und Verarbeitung/Personalplanung</p><img class="content-image" src="/storage/media/wiki/vertrieb/Urlaub Navision.png" alt=""><p></p><img class="content-image" src="/storage/media/wiki/vertrieb/Urlaub Navision 2.png" alt="">
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Urlaubsplanung VT',
        description: 'Vertrieb, -',
        category: 'Vertrieb',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Urlaubsplanung VT',
        description: 'Vertrieb, -',
    })
</script>

<style lang="sass" scoped></style>