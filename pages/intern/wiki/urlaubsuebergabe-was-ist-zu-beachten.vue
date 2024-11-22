
<template>
    <SectionHero title="Urlaubsübergabe – Was ist zu beachten?" image="/images/content/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Marketing</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <h4>Urlaubsübergabe: Wichtige Punkte</h4><ul><li><p>Dateipfad hinterlegen</p></li><li><p style="text-align: start">ggf. E-Mail-Verlauf im Ordner ablegen zum Nachvollziehen; <strong>dabei auf sinnvolle Benennung der Dateien achten</strong></p></li><li><p style="text-align: start">ToDo's: was war der letzte Schritt und was muss noch gemacht werden.</p></li><li><p style="text-align: start">Bei Aufträgen, die abgerechnet werden müssen, die Arbeitszeiten mit aufführen</p></li><li><p style="text-align: start">Kunde mit Auftrag genau definieren – gerne Vorlage aus dem Ordner: <strong>\OneDrive - Fleischer-Dienst Braunschweig eG\Werbung_intern\Uebergaben </strong>verwenden</p><img class="content-image" src="/images/content/wiki/marketing/urlaubsuebergabeprotokoll.png" alt=""></li></ul><p></p><h4>Beispiel ToDo's</h4><blockquote class="content-blockquote"><h4></h4><ul><li><p style="text-align: start">Visitenkarte an Kunden zur Freigabe gesendet am xx.xx.xx</p></li><li><p style="text-align: start">Nach Freigabe bei WmD 500 Stk. bestellen</p></li><li><p style="text-align: start">Arbeitszeit bisher: <strong>22 AW (8 mehr als im Angebot)</strong></p></li><li><p style="text-align: start">Dateipfad: <span style="color: var(--color-info)">W:\Kunden\Neubauer\Drucksachen\Handzettel</span></p></li></ul></blockquote>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Urlaubsübergabe – Was ist zu beachten?',
        description: 'Marketing, -',
        category: 'Marketing',
        image: '/images/content/wiki/generisch/fdbs_muster_rot.png',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Urlaubsübergabe – Was ist zu beachten?',
        description: 'Marketing, -',
    })
</script>

<style lang="sass" scoped></style>