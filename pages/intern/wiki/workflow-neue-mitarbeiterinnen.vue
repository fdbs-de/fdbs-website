
<template>
    <SectionHero title="Workflow neues Personal / Änderungen beim Personal" image="/storage/media/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Marketing</b><br>
            Tags: <b>Workflow</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p><strong>Interne Posts:</strong></p><ul><li><p>@FBR bekommt Infos von der HR-Abteilung als Email und erstellt dazu einen Post im Intranet</p></li><li><p>neue MA kommen <strong><u class="content-underline">nach bestandener Probezeit</u></strong> auf die HP</p><p></p></li><li><p>@FBR gibt Informationen an @MF weiter; benötigte Infos:</p><ul><li><p>Name</p></li><li><p>Unter welcher Teamleitung sollen die Infos eingebunden werden (z.B.: unter <em>Philipp Rost</em>)</p></li><li><p>Jobbezeichnung</p></li><li><p>Durchwahl (z.B.: 70)</p></li></ul></li></ul><p><strong>Kontakte und Ansprechpartner Seite:</strong></p><ul><li><p>@MF bekommt Infos von FBR als Teams Nachricht und bindet diese in die .json Datei ein.</p></li><li><p>@MF fordert Bilder bei*von @AGO ein.</p></li><li><p>@MF baut für production und pusht die Änderungen zeitig hoch.</p></li></ul><p>Bei Änderungen kommen die Informationen von FBR. Änderungen umfassen Abteilungswechsel, Ausscheiden, Telefonnummer-Änderung etc.</p><p>Wenn die Bilder (noch) nicht fertig sind, wird @AGO <strong>alle zwei Wochen</strong> erinnert</p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Workflow neues Personal / Änderungen beim Personal',
        description: 'Marketing, Workflow',
        category: 'Marketing',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Workflow neues Personal / Änderungen beim Personal',
        description: 'Marketing, Workflow',
    })
</script>

<style lang="sass" scoped></style>