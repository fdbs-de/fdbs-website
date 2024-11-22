
<template>
    <SectionHero title="Angebotspflege ohne Kundennummer" image="/storage/media/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Vertrieb</b><br>
            Tags: <b>Angebot, Kundennummer, Akquise, Neukunde</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Angebotspflege ohne Kundennummer für die Neukundenakquise</p><ol><li><p>im Rollencenter nach "Kontakte" suchen</p></li><li><p>Neuen Kontakt über "Neu" erstellen</p></li><li><p>Kundendaten ausfüllen und die Nr am Ende Kopieren um später danach zu suchen (Bsp.: M-Kont101936), dann auf OK bestätigen</p></li><li><p>In der Kontaktansicht die kopierte Nummer einfügen und den Kunden markieren</p></li><li><p>"Neues Verkaufsangebot" anklicken und wie gewohnt ein Angebot erstellen</p></li><li><p>Das Angebot kann abgespeichert, gedruckt oder versendet werden</p></li></ol>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Angebotspflege ohne Kundennummer',
        description: 'Vertrieb, Angebot, Kundennummer, Akquise, Neukunde',
        category: 'Vertrieb',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Angebotspflege ohne Kundennummer',
        description: 'Vertrieb, Angebot, Kundennummer, Akquise, Neukunde',
    })
</script>

<style lang="sass" scoped></style>