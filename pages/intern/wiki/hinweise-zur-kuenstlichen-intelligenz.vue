
<template>
    <SectionHero title="KI – Hinweise zur künstlichen Intelligenz" image="/images/content/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Marketing</b><br>
            Tags: <b>AI, Workflow, Hinweise</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <h2>Ausgewählte Anbieter</h2><p><strong>CopyAI</strong><br>Anwendung für Social Media, Kunden und Interna</p><p><strong>Open AI mit GPT Models</strong><br>Anwendung für Anwendungsnahe Einbindung (Programme, Software)</p><p></p><h2>Anwendung</h2><ul><li><p>Kunde will Website, hat aber keine Inhalte (Texte)</p></li><li><p>Inhaltstransformation (Texte besser formulieren)</p></li><li><p>Kunde SoMe (Texte)</p></li><li><p>FDBS Texte (Image, Kampagnen, Pressetexte, Blogbeiträge, Angebotstexte, SoMe)</p></li></ul><p></p><h2>Urheberrecht</h2><ul><li><p>aktuell noch keine rechtlichen Regelungen</p></li><li><p><strong><span style="color: var(--color-primary)">vorsorglich werden von AI generierte Inhalte von uns gekennzeichnet</span></strong></p></li><li><p>der Stand der Rechtsprechung muss im Blick behalten werden (Newsletter zum Thema abonnieren)</p></li></ul><p></p><h2>Datenschutz</h2><ul><li><p>Disclaimer: Daten werden in die USA / Andere Firma transferiert; bitte keine Personenbezogenen Daten angeben, wenn das für Kunde nicht okay ist.</p></li></ul>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'KI – Hinweise zur künstlichen Intelligenz',
        description: 'Marketing, AI, Workflow, Hinweise',
        category: 'Marketing',
        image: '/images/content/wiki/generisch/fdbs_muster_rot.png',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'KI – Hinweise zur künstlichen Intelligenz',
        description: 'Marketing, AI, Workflow, Hinweise',
    })
</script>

<style lang="sass" scoped></style>