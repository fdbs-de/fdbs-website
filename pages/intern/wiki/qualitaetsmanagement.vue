
<template>
    <SectionHero title="Qualitätsmanagement" image="/images/content/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Marketing</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <h1>Qualitätsmanagement</h1><h5>Was versteht man unter Qualitätsmanagement?</h5><p>Um dem Kunden ein hohes Maß an Qualität bieten zu können, ist es hilfreich, Standards für gewisse Workflows zu definieren, die dabei unterstützen sollen, Produkte bzw. Dienstleistungen zu verbessern oder auf einem gleichbleibend hohen Niveau zu halten. Das Qualitätsmanagement umfasst alle Maßnahmen die dazu notwendig sind, um diese Standards zu halten oder zu erreichen und damit die Kundenzufriedenheit zu verbessern.</p><p></p><h5>Was bedeutet das für uns?</h5><p>Wir müssen einen prozessoptimierten Workflow schaffen, bei dem wir ein hohes Maß an Qualität gewährleisten können. Produkte sollen möglichst fehlerfrei dem Kunden zur Verfügung gestellt werden, unabhängig davon, ob diese aus dem Print- oder digitalen Bereich stammen. Es ist von Vorteil, Grafik-Standards (siehe separaten Artikel) zu definieren, die bei der Layouterstellung angewendet werden.</p><p></p><h5>Welche Korrekturen beinhaltet das QM?</h5><p>Es werden <strong>ALLE</strong> Dokumente kontrolliert, welche <strong>KEINE </strong>Daueraufträge sind. Gibt es Unstimmigkeiten oder ist man sich nicht sicher: Absprache mit AGO.</p><p>Durch die Hinweisklausel in der E-Mail haben wir uns bezüglich Rechtschreibfehlern in gelieferten Texten vom Kunden bereits abgesichert. Es geht primär jedoch nicht nur um die Rechtschreibung. Richtige Zeichensetzung und sauberes Anordnen von Bildern gehören ebenso dazu.</p><p></p><h5>Wie sieht der Workflow des QM aus?</h5><p>Bevor Daten zur Freigabe zum Kunden gehen, werden diese durch das QM geprüft. Nach erteilter interner Freigabe gehen die Daten zum Kunden. Es wird eine Korrekturschleife geben.</p><ul><li><p>Bei Neukonzeptionen vorab den zeitlichen Aufwand mit BV, AGO oder FBR abstimmen (dient der realistischen Kosteneinschätzung für das Projekt)</p></li><li><p>Weicht die wirkliche Arbeitszeit von der Vorgabe ab: <br>zeitnahe Absprache mit BV, AGO oder FBR</p></li><li><p>Neukonzeptionen immer durch das interne QM kontrollieren lassen</p></li><li><p>Arbeitsaufwand, der in Rechnung gestellt werden soll von BV, AGO oder FBR freigeben lassen</p></li><li><p>Neukonzeptionen von Azubis immer vom Ausbilder freigeben lassen<br>(Kosten können nicht 1:1 abgerechnet werden. Es muss hier der vorher definierte zeitliche Aufwand in Rechnung gestellt werden. Ggf. noch mal mit BV, AGO oder FBR abstimmen)</p></li></ul><p></p><h5>Folge Punkte werden durch das QM geprüft:</h5><ul><li><p>Typo nach CD-Vorgaben - Anzahl der verwendeten Schriften<br>(Es soll darauf geachtet werden, das bereits verwendete Typo benutzt wird, damit am Ende nicht zu viele Schriften für einen Kunden verwendet werden)</p></li><li><p>Zeichensetzung - doppelte Leerzeichen, richtige Angabe von Maßeinheiten etc.</p></li><li><p>Bündigkeit Bilder</p></li><li><p>Bündigkeit Bild/Text</p></li><li><p>Rechtschreibung, wenn Fehler beim Lesen auffallen</p></li></ul>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Qualitätsmanagement',
        description: 'Marketing, -',
        category: 'Marketing',
        image: '/images/content/wiki/generisch/fdbs_muster_rot.png',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Qualitätsmanagement',
        description: 'Marketing, -',
    })
</script>

<style lang="sass" scoped></style>