
<template>
    <SectionHero title="Einstellen der Bildschirme" image="/images/content/wiki/IT/Einstellen-der-Bildschirme/Bildschirme-Header.jpg" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>IT</b><br>
            Tags: <b>Bildschirme</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <div icon="star" class="key-fact"><span class="icon" data-icon="star" contenteditable="false"></span><div class="content"><p>Bei Problemen oder Unklarheiten, wende dich gerne an die IT.</p></div></div><p></p><h1>Anzeigeeinstellungen</h1><p>In die entsprechenden Einstellungen für Bildschirme gelangt man am Einfachsten mithilfe von Rechtsklick auf den Desktop und anschließend "Anzeigeeinstellungen" auswählen:</p><img class="content-image" src="/images/content/wiki/IT/Einstellen-der-Bildschirme/Anzeigeeinstellungen.png" alt=""><p></p><p></p><p></p><h2>Bildschirmanzeigen erweitern</h2><p>Es ist wichtig zu beachten, dass die Einstellungen unten (also Hauptanzeige etc.) sich immer auf den ausgewählten Bildschirm bezieht, dies wird in dem Bild blau dargestellt.</p><p>Nun wird jeder einzelne Monitor ausgewählt und geprüft, ob überall "Diese Anzeige erweitern" ausgewählt ist. Das wird benötigt, um auf z.B. drei unterschiedlichen Bildschirmen drei unterschiedliche Programme ausführen zu können:</p><img class="content-image" src="/images/content/wiki/IT/Einstellen-der-Bildschirme/Bildschirme-1.png" alt=""><p></p><p></p><p></p><h2>Reihenfolge der Bildschirme einstellen</h2><p>Als Nächstes wird geschaut, in welcher Reihenfolge die Bildschirme aktuell angeordnet sind.<br>Dafür wird auf "Identifizieren" geklickt. Das bewirkt, dass für ca. 5 Sekunden bei jedem Monitor unten links eine Zahl angezeigt wird. Diese Zahlen entsprechen den zahlen in unseren Einstellungen.</p><img class="content-image" src="/images/content/wiki/IT/Einstellen-der-Bildschirme/Bildschirme-2.png" alt=""><p>Sollte nun auf dem linken Bildschirm eine 2 angezeigt werden und bei dem rechten Bildschirm eine 1, dann wäre die Reihenfolge in den Einstellungen (oben im Bild zu sehen) falsch. <br>Das bedeutet, dass wenn die Maus von dem linken Bildschirm auf den rechten Bildschirm verschoben werden soll, sich nichts tut und die Maus auf dem linken Bildschirm bleibt.</p><p>Um nun die richtige Reihenfolge zu erhalten, können die Bildschirme in den Einstellungen per Drag-and-Drop so verschoben werden, dass es passt:</p><img class="content-image" src="/images/content/wiki/IT/Einstellen-der-Bildschirme/Bildschirme-3.png" alt=""><p></p><p></p><p></p><h2>Hauptanzeige</h2><p>Mit der Auswahl der Hauptanzeige wird festgelegt, auf welchem Bildschirm die Programme etc. abgelegt werden sollen:</p><img class="content-image" src="/images/content/wiki/IT/Einstellen-der-Bildschirme/Bildschirme-4.png" alt=""><p></p><p></p><p></p><h2>Auflösung und Skalierung</h2><p>Nun kann es sein, dass trotz vorheriger Einstellungen die Auflösung komisch aussieht.</p><p>Beim Runterscrollen in den Anzeigeeinstellungen sieht man weitere Einstellungen für den ausgewählten Bildschirm.<br>Hier sollten erstmal die empfohlenen Werte ausgewählt werden.<br>Sollte das nicht passen, können einfach andere Werte ausgewählt werden bis es passt.</p><img class="content-image" src="/images/content/wiki/IT/Einstellen-der-Bildschirme/Bildschirme-5.png" alt="">
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Einstellen der Bildschirme',
        description: 'IT, Bildschirme',
        category: 'IT',
        image: '/images/content/wiki/IT/Einstellen-der-Bildschirme/Bildschirme-Header.jpg',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Einstellen der Bildschirme',
        description: 'IT, Bildschirme',
    })
</script>

<style lang="sass" scoped></style>