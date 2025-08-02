
<template>
    <SectionHero title="Workflow Anprobe und Abholung Firmenkleidung" image="/images/content/wiki/generisch/fdbs_muster_grau.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Allgemeines</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <h3><strong><span style="color: var(--color-error)">Anprobe</span></strong></h3><ol><li><p>Hauptverantwortlich für die Anprobe ist CG. Stellvertretung ist JK. Sollten beide gerade nicht im Büro sein, wird die Anprobe von der Person durchgeführt, die gerade anwesend ist.</p></li><li><p>In der Regel ruft RH oder MAK nach den Vorstellungsgesprächen an und gibt an, wann der jeweilige Mitarbeiter*in </p></li><li><p>zur Anprobe kommt. Generell sollen vor Anproben Termine abgestimmt werden bzw. eine Info kommen, wenn jemand zur Anprobe vorbei kommt.</p></li><li><p>Unter „C:\Users\cgoetzner\OneDrive - Fleischer-Dienst Braunschweig eG\FD_intern\Kleidung\Allgemein\Bestellliste\PDF\Bestellung_Firmenkleidung.pdf“ liegt das Formular, wo die Bestellung eingetragen wird. Dieses befindet sich auch im Ordner.</p></li><li><p>Menge und Artikel zur Anprobe liegen unter "C:\Users\cgoetzner\OneDrive - Fleischer-Dienst Braunschweig eG\FD_intern\Kleidung\Allgemein\Workflow\Workflow_Anprobe.pdf"</p></li><li><p>In den Schränken sind die Größen M - 2XL vorhanden.</p></li><li><p>Die Abteilungen haben die Wahl zwischen Bund- oder Latzhose.</p></li><li><p>Unter FD_Intern\Kleidung\Weitblick\Bestellformular liegt das Formular von Weitblick. </p><p>Hygienekleidung wird per Mail bei Herrn Friske bestellt.</p></li><li><p>Hygienejacken, Hosen und Kittel für die Fleischabteilung werden bei CWS bestellt, Pullover, Polos, T-Shirts und Fleece- oder Softshelljacken bei Weitblick.</p></li><li><p>Es wird nur die Hygienekleidung gewaschen (von CWS), die andere Arbeitskleidung wird privat gewaschen.</p></li><li><p>Neue Schuhe gibt es nur nach Vorlage der alten. Sehen die noch gut aus, werden keine neuen bestellt.</p></li><li><p>Neue Schuhe gibt es nur nach Vorlage der alten. Sehen die noch gut aus, werden keine neuen bestellt.</p></li></ol><h3><strong><span style="color: var(--color-error)">Abholung</span></strong></h3><ol><li><p>Sobald neue Kleidung da ist und sortiert wurde, schicken CG oder JK eine Mail an die Abteilungsleiter mit der Info, wessen Kleidung abholbereit ist.</p></li><li><p>Unter „C:\Users\cgoetzner\OneDrive - Fleischer-Dienst Braunschweig eG\FD_intern\Kleidung\Allgemein\Uebersicht_Mitarbeiter“ fügen CG oder JK die Mitarbeiter*innen hinzu bzw. aktualisieren den Stand bei Mitarbeiter*innen, die Kleidung nachbestellt haben oder noch unvollständig sind.</p></li><li><p>Anschließend wird der Zettel ausgedruckt und auf den Produktionstisch gelegt zwecks Unterschrift.</p></li><li><p>Die neuen Mitarbeiter*innen kommen anschließend - möglichst nach Absprache - ins Büro und holen ihre Kleidung ab.</p></li><li><p>Damit alles sauber dokumentiert wird, müssen die Mitarbeiter*innen den Zettel unterschreiben.</p></li><li><p>Zettel mit der Unterschrift nach Abholung einscannen und an CG oder JK senden und wir legen die dann im Ordner ab: FD_intern\Kleidung\Allgemein\Uebersicht_Mitarbeiter\Unterschriften.</p></li><li><p>Alle Mitarbeiter*innen holen ausschließlich ihre eigene Kleidung ab, es wird keine Kleidung für andere mitgenommen.</p></li><li><p>Diese Prozedur gilt auch für Mitarbeiter*innen, die neue Schuhe bestellt haben.</p></li></ol>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Workflow Anprobe und Abholung Firmenkleidung',
        description: 'Allgemeines, -',
        category: 'Allgemeines',
        image: '/images/content/wiki/generisch/fdbs_muster_grau.png',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Workflow Anprobe und Abholung Firmenkleidung',
        description: 'Allgemeines, -',
    })
</script>

<style lang="sass" scoped></style>