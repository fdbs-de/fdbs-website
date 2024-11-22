
<template>
    <SectionHero title="Krank- und Gesundmeldung + Urlaub" image="/images/content/wiki/generisch/fdbs_muster_grau.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Logistik</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Bei einer Erkrankung ist sich <strong>unverzüglich</strong> <strong>telefonisch</strong> bei der Fuhrparkleitung zu melden.</p><p>Nach dem unmittelbar zu erfolgenden Arzt-Besuch ist ein erneuter Anruf von Nöten, um die genaue Abwesenheit mitzuteilen.</p><p>Ebenfalls ist das Übersenden per E-Mail der Arbeitnehmer-Ansicht <strong><u class="content-underline">OHNE</u> Diagnose-Schlüssel</strong> an die Personalabteilung (<a target="_blank" rel="noopener noreferrer nofollow" href="mailto:rh@fdbs.de">rh@fdbs.de</a> oder <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:ak@fdbs.de">ak@fdbs.de</a>) zu erfolgen.</p><p>Am letzten Tag der Krankmeldung oder des Urlaubes ist sich <strong><u class="content-underline">bis</u> 12:00h</strong> bei der Fuhrparkleitung zu melden, um sich als wieder anwesend für die kommende Woche zu melden. Damit dann die Personalplanung erfolgen kann.</p><p>&nbsp;</p><p>Sollte die Fuhrparkleitung abwesend sein, ist sich an die Stellvertretung zu wenden.</p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Krank- und Gesundmeldung + Urlaub',
        description: 'Logistik, -',
        category: 'Logistik',
        image: '/images/content/wiki/generisch/fdbs_muster_grau.png',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Krank- und Gesundmeldung + Urlaub',
        description: 'Logistik, -',
    })
</script>

<style lang="sass" scoped></style>