
<template>
    <SectionHero title="Workflow Tourenplan Lager" image="/storage/media/wiki/generisch/fdbs_muster_grau.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Allgemeines</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Für eine vereinfachte Übersicht der einzelnen Touren, welche wöchentlich und wiederkehrend durch unsere Berufskraftfahrer angefahren werden, gibt es eine übersichtliche Darstellung.</p><p>Auf dieser ist neben der Region auch der entsprechende Tourencode zu entnehmen. Dieser kann den Kolleg*innen in den jeweiligen Abteilungen zur Unterstützung bereitstehen, wenn Unklarheiten herrschen.</p><p><strong><span style="color: red">!!!</span></strong><span style="color: red"> </span><strong>Ein Tourencode darf lediglich von den Mitarbeitenden des Fuhrparks geändert werden </strong>oder nach ausdrücklicher Anweisung von den zugehörigen Mitarbeitern durchgeführt werden <strong><span style="color: red">!!!</span></strong></p><p>Zu beachten ist des Weiteren, dass es sich hierbei lediglich um eine grobe Darstellung handelt und keine Garantie für die tatsächliche Zugehörigkeit auf die Tour gewährleistet wird. Da es im Einzelfall auf tourenspezifische Einzelheiten ankommt, welche durch den Fuhrpark bestimmt werden.</p><img class="content-image" src="/storage/media/wiki/allgemein/Tourenplan Lager.JPG" alt="">
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Workflow Tourenplan Lager',
        description: 'Allgemeines, -',
        category: 'Allgemeines',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Workflow Tourenplan Lager',
        description: 'Allgemeines, -',
    })
</script>

<style lang="sass" scoped></style>