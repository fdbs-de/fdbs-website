
<template>
    <SectionHero title="MHH Wartung (Oktober)" image="/storage/media/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Werkstatt</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <ul><li><p>ca. im August schickt Herr Ziembinski (MHH) eine Mail</p></li></ul><img class="content-image" src="/storage/media/wiki/Werkstatt/Bild1.png" alt=""><ul><li><p>Termin vereinbaren, mit den in der Mail angegebenen Personen</p><p></p></li><li><p>Alle Unterlagen sind im Laufwerk <u class="content-underline">O: \MHH Hannover</u></p></li><li><p>Die Wartungsprotokolle (zu finden in <u class="content-underline">O:\MHH Hannover\MHH - Wartung neu\Originale</u>) müssen vor dem Termin auf Geschäftspapier ausgedruckt und in den blauen MHH Ordner geheftet werden (diese werden von den Technikern bei der Wartung ausgefüllt)</p></li><li><p>Aufträge für die Techniker erstellen</p></li><li><p>Nach erfolgter Wartung erhalten wir die Protokolle und VDE-Prüfungen von den Techniker, diese werden zusammen mit den Lieferscheinen (Serviceaufträge) unter <u class="content-underline">O:\MHH Hannover\MHH - Wartung neu</u>&nbsp; in den jeweiligen Ordner abgelegt und per Mail an Herrn Ziembinski geschickt <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:wartungsdisposition.elektro@mh-hannover.de">wartungsdisposition.elektro@mh-hannover.de</a></p></li><li><p>Beim Abrechnen der Serviceaufträge ist darauf zu achten, dass die Vertragsnummer und Auftragsnummer vom MHH auf der Rechnung vermerkt ist. Diese wird Anfang jeden Jahres per Mail geschickt (abgelegt im MHH Ordner)</p><p></p></li></ul>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'MHH Wartung (Oktober)',
        description: 'Werkstatt, -',
        category: 'Werkstatt',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'MHH Wartung (Oktober)',
        description: 'Werkstatt, -',
    })
</script>

<style lang="sass" scoped></style>