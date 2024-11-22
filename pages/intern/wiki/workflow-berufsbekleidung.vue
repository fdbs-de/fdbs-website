
<template>
    <SectionHero title="Workflow Berufsbekleidung" image="/storage/media/wiki/generisch/fdbs_muster_grau.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Allgemeines</b><br>
            Tags: <b>Workflow</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <h3>Bestellung der Kleidung für neue Mitarbeiter</h3><ol><li><p>Die Personalabteilung bekommt aus der Marketingabteilung Bestellformulare für die Firmenkleidung neuer Mitarbeiter.</p></li><li><p>Pro Abteilung gibt es ein extra Bestellformular.</p></li><li><p>Auf diesem ist vermerkt welche und wie viel Kleidung ein neuer Mitarbeiter bekommt.</p></li><li><p>Weiterhin befindet sich im Anhang die Übersicht der bestellbaren Kleidung und Schuhe.</p></li><li><p>Der neue Mitarbeiter muss in diesem Formular seine Größen eintragen.</p></li><li><p>Vor der Vertragsunterzeichnung verschickt die Personalabteilung neben dem Personalfragebogen auch das Bestellformular für die Berufsbekleidung.</p></li><li><p>Dieses soll der neue Mitarbeiter zur Vertragsunterzeichnung ausgefüllt mitbringen.</p></li><li><p>Nach der Vertragsunterzeichnung soll zusätzlich eine kurze Anprobe in der Marketingabteilung stattfinden. Hierfür wird ein Termin aus der Personalabteilung an die Marketingabteilung geschickt.</p></li><li><p>Sobald die Kleidung eingetroffen ist, erhält der Abteilungsleiter des Mitarbeiters eine Info und der Mitarbeiter kann seine Kleidung in der Marketingabteilung abholen. Die Lieferzeit beträg ca. 2-4 Wochen.</p></li><li><p>Die Marketing-Abteilung führt eine Liste über alle ausgegebenen Kleidungsstücke.</p></li></ol><h3>Nachbestellung von Kleidung</h3><ol><li><p>Sollten Kleidung oder Schuhe einmal kaputt gehen, ist der Ersatz nur über die Marketingabteilung zu bestellen.</p></li><li><p>Eine Nachbestellung erfolgt dabei nur, wenn die alten und kaputten Kleidungsstücke vorgezeigt werden.</p></li><li><p>Sobald die nachbestellte Kleidung eingetroffen ist, erhält der Abteilungsleiter des Mitarbeiters eine Info und der Mitarbeiter kann seine Kleidung in der Marketingabteilung abholen.</p></li></ol><h3>Rückgabe der Kleidung bei Ausscheiden des Mitarbeiters</h3><ol><li><p>Spätestens bei der Abgabe des Chips zum Ein- und Ausstempeln muss die benutze Kleidung in der Marketingabteilung zurückgegeben werden.</p></li><li><p>Hier wird überprüft ob alles vollzählig ist.</p></li><li><p>Der FDBS behält sich vor dem Mitarbeiter fehlende Kleidung in Rechnung zu stellen.</p></li></ol><p></p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Workflow Berufsbekleidung',
        description: 'Allgemeines, Workflow',
        category: 'Allgemeines',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Workflow Berufsbekleidung',
        description: 'Allgemeines, Workflow',
    })
</script>

<style lang="sass" scoped></style>