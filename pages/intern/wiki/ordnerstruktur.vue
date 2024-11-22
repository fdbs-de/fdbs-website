
<template>
    <SectionHero title="Ordnerstruktur" image="/storage/media/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Marketing</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Eine einheitliche Ordnerstruktur für den Kunden-Ordner ermöglicht es, sich leichter in diesen Ordnern zurecht zu finden.</p><p>Auch wenn für Kunden vorerst nur ein Angebot geschrieben wird, muss die gesamte Ordnerstruktur in dessen Ordner übertragen werden.</p><p><br>Bei der Dateibenennung ist folgendes zu beachten:<br>Dateibenennung:<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Produkt_(Gramm)_Format_Kunde.xxx<br>Beispiel:<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Leberwurst_300g_105x48_Mueller.pdf</p><p>Link zur Vorlage: \\FDBS-FILE\Werbung\Werbung_intern\Ordnerstruktur</p><p>Die nachfolgende Grafik verdeutlicht die Ordnerstruktur.</p><img class="content-image" src="/storage/media/wiki/marketing/Ordnerstruktur_neu_2023.png" alt=""><p>&nbsp;</p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Ordnerstruktur',
        description: 'Marketing, -',
        category: 'Marketing',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Ordnerstruktur',
        description: 'Marketing, -',
    })
</script>

<style lang="sass" scoped></style>