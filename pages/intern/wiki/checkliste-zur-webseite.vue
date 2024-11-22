
<template>
    <SectionHero title="Checkliste zur Webseite" image="/storage/media/wiki/generisch/fdbs_muster_grau.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Entwicklung</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Der folgende Eintrag befasst sich mit der Erstellung von Websites für Kunden. Es werden <strong>Workflows</strong> und <strong>rechtliche Vorgaben</strong> für alle Parteien aufgezeigt.</p><h3>Auswahl der Systeme</h3><p>Wir bieten unseren Kunden grundlegend zwei Systeme zur Auswahl an:</p><p><strong>Nuxt</strong> und <strong>WordPress + Oxygen</strong>. Hierbei ins im Groben und Ganzen zwischen statischen Seiten ohne Kunden-Eigeneingriff und dynamische Seiten mit Kunden-Eigeneingriff zu unterscheiden.</p><p><strong>Bevorzugt ist Nuxt</strong> da es durch seine Geschwindigkeit, Stabilität, schnelle Entwicklungszeit, einfache Wartbarkeit und hervorragender Developer-Experience eine ideale Lösung für die meisten Kunden und Entwickler*innen darstellt.</p><h5>Wann sollte auf WordPress anstelle von Nuxt gesetzt werden?</h5><ul><li><p>Wenn der Kunde es <u class="content-underline">explizit</u> fordert</p></li><li><p>Wenn der Kunde Eigeneingriff wünscht (evtl. verbunden mit einer Schulung)</p></li><li><p>Wenn ein Onlineshop aufgebaut werden soll</p></li><li><p>Wenn viele Anforderungen des Kunden ein Backend benötigen (ausgenommen Kontaktformulare)</p></li></ul><h3>Themencheckliste</h3><ul><li><p>Wer übernimmt die technische Wartung?</p><ul><li><p>Extended Support Package</p></li></ul></li><li><p>Datenschutz und Impressum</p><ul><li><p>Rechtsschutzpaket</p></li></ul></li><li><p>Eigeneingriff erwünscht?</p><ul><li><p>Schulung erwünscht?</p></li></ul></li><li><p>Kontaktformular erwünscht?</p></li><li><p>Maps-Einbindung erwünscht?</p></li><li><p>Blog erwünscht?</p><ul><li><p>Hinweis auf Langzeitbetrieb (siehe unten)</p></li></ul></li></ul><h3>Blog und Blogbeiträge</h3><p>Es wird empfohlen den Kunden über den hohen Aufwand eines Blogs zu informieren. Sollte ein Blog gewünscht sein, so sollten vor Veröffentlichung Inhalte vom Kunden geliefert werden.</p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Checkliste zur Webseite',
        description: 'Entwicklung, -',
        category: 'Entwicklung',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Checkliste zur Webseite',
        description: 'Entwicklung, -',
    })
</script>

<style lang="sass" scoped></style>