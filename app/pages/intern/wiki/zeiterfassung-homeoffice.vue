
<template>
    <SectionHero title="Zeiterfassung im Navision (+Homeoffice)" image="/images/content/wiki/allgemein/Zeiterfassung-im-Navision/Banner.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Allgemeines</b><br>
            Tags: <b>Zeiterfassung, Personal, Navision</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <h1>Zeiterfassung im Navision</h1><p>Im Navision gibt es die Möglichkeit, die Arbeitszeit zu erfassen. Dafür gibt es im Navision das Menü "Soft-Terminal".</p><p>Dies ist zu finden unter Abteilungen &gt; TempVision Talent Management &gt; Dialog &gt; Soft-Terminal</p><img class="content-image" src="/images/content/wiki/allgemein/Zeiterfassung-im-Navision/NAV-1.png" alt=""><p></p><p></p><p></p><h2>Reguläre Zeiterfassung (im Büro)</h2><h3>Arbeitsbeginn</h3><p>Der Arbeitsbeginn wird über "Kommen" angegeben. Alle Informationen werden nun automatisch eingetragen, sodass nur noch mit "OK" bestätigt werden muss:</p><img class="content-image" src="/images/content/wiki/allgemein/Zeiterfassung-im-Navision/NAV-2.png" alt=""><p></p><h3>Pause</h3><p>Für Pausenanfang und -ende wird auf die gleiche Art und Weise gestempelt. Nach dem Klicken auf Pause werden ebenfalls alle Informationen automatisch ausgefüllt. Lediglich "OK" muss noch angeklickt werden:</p><img class="content-image" src="/images/content/wiki/allgemein/Zeiterfassung-im-Navision/NAV-3.png" alt=""><p></p><h3>Arbeitsende</h3><p>Das Arbeitsende wird über "Gehen" angegeben. Alle Informationen werden nun automatisch eingetragen, sodass nur noch mit "OK" bestätigt werden muss:</p><img class="content-image" src="/images/content/wiki/allgemein/Zeiterfassung-im-Navision/NAV-4.png" alt=""><p></p><p></p><p></p><p></p><p></p><p></p><h2>Zeiterfassung bei Homeoffice</h2><h3>Arbeitsbeginn</h3><p>Als Erstes wird normal gestempelt als wäre man im Büro, also "Kommen" und "OK" auswählen:</p><img class="content-image" src="/images/content/wiki/allgemein/Zeiterfassung-im-Navision/NAV-2.png" alt=""><p>&nbsp;</p><p>Dann wird "Abwesend" ausgewählt. Hier muss das untere Feld mit dem Pfeil auf der rechten Seite aufgeklappt werden und "3300" eingegeben werden.<br>Anschließend wird das mit "OK" bestätigt:</p><img class="content-image" src="/images/content/wiki/allgemein/Zeiterfassung-im-Navision/NAV-5.png" alt=""><p></p><h3>Pause</h3><p>Die Pause wird wie gewohnt gestempelt:</p><img class="content-image" src="/images/content/wiki/allgemein/Zeiterfassung-im-Navision/NAV-3.png" alt=""><p></p><h3>Arbeitsende</h3><p>Hier ist es im Gegensatz zum Arbeitsbeginn genau andersherum.<br>Zuerst wird auf "Abwesend" geklickt und der Abwesenheitscode "3300" eingetragen:</p><img class="content-image" src="/images/content/wiki/allgemein/Zeiterfassung-im-Navision/NAV-5.png" alt=""><p></p><p>Anschließend wird über "Gehen" ausgestempelt:</p><img class="content-image" src="/images/content/wiki/allgemein/Zeiterfassung-im-Navision/NAV-4.png" alt=""><p></p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Zeiterfassung im Navision (+Homeoffice)',
        description: 'Allgemeines, Zeiterfassung, Personal, Navision',
        category: 'Allgemeines',
        image: '/images/content/wiki/allgemein/Zeiterfassung-im-Navision/Banner.png',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Zeiterfassung im Navision (+Homeoffice)',
        description: 'Allgemeines, Zeiterfassung, Personal, Navision',
    })
</script>

<style lang="sass" scoped></style>