
<template>
    <SectionHero title="Ablauf Explosivstoffe" image="/images/content/wiki/generisch/streifen.jpg" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Vertrieb</b><br>
            Tags: <b>Kundenbefragung, Befragung, Kunden, Feedback</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <ol><li><p><span style="color: var(--color-heading)">Welche Artikel möchte der Kunde kaufen?</span></p><ul><li><p><span style="color: var(--color-heading)">1825040 Alureiniger/ Fettlöser sauer</span></p></li><li><p><span style="color: var(--color-heading)">1825050 Schaumreiniger sauer für Alu</span></p></li><li><p><span style="color: var(--color-heading)">1825230 Pökelspritzmaschinenreiniger</span></p></li><li><p><span style="color: var(--color-heading)">1830110 Entkalker</span></p></li></ul><p></p></li><li><p><span style="color: var(--color-heading)">Kunde füllt Formular aus. (zu finden unter V:\ERKLÄRUNG_Explosivstoffe)</span></p><ul><li><p><span style="color: var(--color-heading)">Erstantrag: Formular inkl. Handels/- Vereinsregister und Kopie des Personalausweises</span></p></li><li><p><span style="color: var(--color-heading)">Zweitantrag: reicht aktuelles Formular (sofern sich keine Daten geändert haben</span></p></li><li><p><span style="color: var(--color-heading)">Ggf. bei Unterschrift einer anderen Person (neue Kopie des Personalausweises anfordern)</span></p><p></p></li></ul></li><li><p><span style="color: var(--color-heading)"> Unterlagen komplett: Freigabe im System</span></p><ul><li><p><strong><span style="color: var(--color-heading)">Navision</span></strong><span style="color: var(--color-heading)">-&gt; Debitor-&gt; Debitorennr. Eingeben-&gt; Zertifizierungen-&gt; Daten der Artikel ändern (1 Jahr ab Unterzeichnung des Formulares)</span></p></li><li><p><strong><span style="color: var(--color-heading)">Unter</span></strong><span style="color: var(--color-heading)"> V:\ERKLÄRUNG_Explosivstoffe „1 ERKLÄRUNG Kundenliste“<br>Debitor abändern/ einfügen mit Laufzeit der Gültigkeit (ab Unterzeichnung des Formulars: 1 Jahr)</span></p><p></p></li></ul></li><li><p><span style="color: var(--color-heading)">Unterlagen drucken und abheften</span></p></li></ol><p><span style="color: var(--color-heading)">&nbsp;</span></p><p><span style="color: var(--color-heading)">&nbsp;</span></p><p><strong><span style="color: var(--color-heading)">1x mtl. Liste an zugeordneten ID/AD versenden (ID/AD kontaktiert dann seine Kunden entsprechend)</span></strong></p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Ablauf Explosivstoffe',
        description: 'Vertrieb, Kundenbefragung, Befragung, Kunden, Feedback',
        category: 'Vertrieb',
        image: '/images/content/wiki/generisch/streifen.jpg',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Ablauf Explosivstoffe',
        description: 'Vertrieb, Kundenbefragung, Befragung, Kunden, Feedback',
    })
</script>

<style lang="sass" scoped></style>