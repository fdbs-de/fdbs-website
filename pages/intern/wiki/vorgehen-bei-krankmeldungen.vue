
<template>
    <SectionHero title="Basics – Vorgehen bei Krankmeldungen" image="/storage/media/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Allgemeines</b><br>
            Tags: <b>Basics, Krankmeldung</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <h2>Vorgehen bei Krankmeldungen</h2><ol><li><p>Melde Dich telefonisch, vor Arbeitsbeginn, bei Deinem <strong>Vorgesetzten (Abteilungs- oder Schichtleiter)</strong>, um Deine Arbeitsunfähigkeit mitzuteilen.</p></li><li><p>Gehe unverzüglich zum Arzt und lasse Dir Deine Krankheit <strong>ab dem 1. Tag</strong> ärztlich bescheinigen.</p></li><li><p><strong>Unmittelbar nach dem Arztbesuch</strong>: Anruf beim Abteilungsleiter oder in Vertretung bei Jessica Ackermann - <a target="_blank" rel="noopener noreferrer nofollow" href="tel:+495312105560">0531 210 55 100</a>, um den genauen Zeitraum mitzuteilen.</p></li><li><p>Stellt der Arzt noch ein Exemplar der Krankmeldung aus, sende ein Foto der AU-Bescheinigung (ohne Diagnose) per Mail an: <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:personal@fdbs.de">personal@fdbs.de</a>.</p></li><li><p>Am letzten Tag der Krankheit informiere Deinen <strong>Abteilungsleiter</strong>, ob die Erkrankung fortbesteht.</p></li></ol>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Basics – Vorgehen bei Krankmeldungen',
        description: 'Allgemeines, Basics, Krankmeldung',
        category: 'Allgemeines',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Basics – Vorgehen bei Krankmeldungen',
        description: 'Allgemeines, Basics, Krankmeldung',
    })
</script>

<style lang="sass" scoped></style>