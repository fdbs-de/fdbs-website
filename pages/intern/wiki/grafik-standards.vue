
<template>
    <SectionHero title="Grafik-Standards" image="/images/content/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Marketing</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Einen Standard zu definieren sorgt für Struktur und schafft einen Rahmen, an dem man sich orientieren kann. Der Grafik-Standard soll den Aufbau von InDesign Dokumente unterstützen und somit eine einheitliche Ebene für Qualität schaffen. Arbeiten mehrere Personen an einem Dokument (durch Krankheit, Ausfall etc.) vereinfacht der Grafik-Standard das weitere Bearbeiten der Dokumente.</p><p></p><ul><li><p>Dateibenennung:<br>Produkt_(Gramm)_Format_Kunde.xxx<br><em>Beispiel:</em> Leberwurst_300g_105x48_Mueller.pdf</p></li><li><p>Bilddaten Benennung eindeutig</p></li><li><p>Bilder in den Produktbilder Ordner ablegen (<strong>NICHT</strong> im Download Ordner)</p></li><li><p>Layoutbilder verbleiben im Downloadordner, damit sie wahrgenommen werden und vor dem Veröffentlichen gegen lizenzierte Bilder getauscht werden</p></li><li><p>Dokument nach CD-Vorgaben aufbauen (Typo, Farben etc.)</p></li><li><p>Alle nicht verwendeten Farben löschen</p></li><li><p>Keine Objekte außerhalb der Zeichen Fläche</p></li><li><p>Bündigkeit Bild/Text</p></li></ul>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Grafik-Standards',
        description: 'Marketing, -',
        category: 'Marketing',
        image: '/images/content/wiki/generisch/fdbs_muster_rot.png',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Grafik-Standards',
        description: 'Marketing, -',
    })
</script>

<style lang="sass" scoped></style>