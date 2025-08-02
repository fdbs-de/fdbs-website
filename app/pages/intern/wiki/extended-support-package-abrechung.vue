
<template>
    <SectionHero title="Workflow ESP Abrechung" image="/images/content/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Marketing</b><br>
            Tags: <b>Workflow, ESP, Abrechnung</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <h2>Was sind ESPs</h2><p>ESPs (oder auch Extended Support Packages) sind Dienstleistungspakete welche das Updaten und Sichern (Backups) von Kundenwebsites gewährleisten.</p><p></p><h2>Abrechnungen nach Kunden</h2><div class="table-wrapper"><table><tbody><tr><th colspan="1" rowspan="1"><p>Kunde</p></th><th colspan="1" rowspan="1"><p>Zeitpunkt</p></th><th colspan="1" rowspan="1"><p>Notiz</p></th></tr><tr><td colspan="1" rowspan="1"><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.fleischerei-finke-osterloh.de/administrator">Finke</a></p></td><td colspan="1" rowspan="1"><p><strong><span style="color: var(--color-success)">Anfang des Monats</span></strong></p></td><td colspan="1" rowspan="1"><p>OpenStreetMaps-Plugins sind kaputt</p></td></tr><tr><td colspan="1" rowspan="1"><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://goethes.de/administrator">Göthe</a></p></td><td colspan="1" rowspan="1"><p><strong><span style="color: var(--color-success)">Anfang des Monats</span></strong></p></td><td colspan="1" rowspan="1"><p>Verringerter Preis bei Abrechnung</p></td></tr><tr><td colspan="1" rowspan="1"><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.emmerich-fleischerei.de/administrator">Emmerich</a></p></td><td colspan="1" rowspan="1"><p><strong><span style="color: var(--color-success)">Anfang des Monats</span></strong></p></td><td colspan="1" rowspan="1"><p></p></td></tr><tr><td colspan="1" rowspan="1"><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://leiste-lecker.de/administrator">Leiste</a></p></td><td colspan="1" rowspan="1"><p><strong><span style="color: var(--color-success)">Anfang des Monats</span></strong></p></td><td colspan="1" rowspan="1"><p>Virtuemart-Plugins sind kaputt</p></td></tr><tr><td colspan="1" rowspan="1"><p><a target="_blank" rel="noopener noreferrer nofollow" href="http://www.xn--bhrs-partyservice-qqb.de">Bähr</a></p></td><td colspan="1" rowspan="1"><p><strong><span style="color: var(--color-success)">Anfang des Monats</span></strong></p></td><td colspan="1" rowspan="1"><p>Hat kein Joomla 😉</p></td></tr><tr><td colspan="1" rowspan="1"><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://landschlachterei-hanke.de/admin">Hanke</a></p></td><td colspan="1" rowspan="1"><p><strong><span style="color: var(--color-success)">Anfang des Monats</span></strong></p></td><td colspan="1" rowspan="1"><p></p></td></tr><tr><td colspan="1" rowspan="1"><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://fleischerei-neubauer.de/admin">Neubauer</a></p></td><td colspan="1" rowspan="1"><p><strong><span style="color: var(--color-success)">Anfang des Monats</span></strong></p></td><td colspan="1" rowspan="1"><p></p></td></tr><tr><td colspan="1" rowspan="1"><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.steuerkanzlei-schreiber.net/administrator">Schreiber</a></p></td><td colspan="1" rowspan="1"><p><strong><span style="color: var(--color-warning)">Ende des Monats</span></strong></p></td><td colspan="1" rowspan="1"><p></p></td></tr></tbody></table></div><p></p><h3>* Benachrichtigungs Templates</h3><blockquote class="content-blockquote"><p>Betreff: <strong>Übersicht über Ihr Extended Support Package</strong></p><p>Guten Tag <em>[KUNDE]</em>,</p><p>Hier Ihre Übersicht über Ihr Extended Support Package:</p><ul><li><p>Die CMS Version wurde aktualisiert</p></li><li><p>1 Erweiterung wurde auf den neuesten Stand gebracht</p></li><li><p>Wöchentliche Backups wurden erstellt</p></li></ul></blockquote><p></p><h3>Workflow: Updates</h3><ol><li><p>Backup erstellen</p></li><li><p>Sicher gehen, dass das Backup verfügbar ist (FTP Server erreichbar)</p></li><li><p>CMS Version updaten</p></li><li><p>Erweiterungen updaten</p></li><li><p>Funktionalität überprüfen:</p><ol><li><p>Lassen sich Seiten/Beiträge noch bearbeiten?</p></li><li><p>Ist das Template/Layout heile?</p></li><li><p>Funktionieren die Formulare?</p></li></ol></li></ol><p>Sollte es bei einem Schritt oder bei der Überprüfung zu Problemen kommen, ist zu erst zu beobachten, ob das Problem sich ohne neu Aufspielen des Backups lösen lässt. Gibt die Seite hingegen schwerwiegende Fehler aus, wird das neuste Backup geladen.</p><p>Nachdem das Backup erfolgreich geladen wurde, wird eine Fehlerdiagnose erstellt um den Grund des Fehlupdates zu ermitteln und zu beheben.</p><h3>Workflow: Backups aufspielen</h3><ol><li><p>Neustes Backup vom Server herunterladen. Die Backupdateien befinden sich je nach Seite entweder in einem Ordner "backups" oder in den Akeeba Standardordner für das jeweilige CMS</p></li><li><p>Akeeba Kickstart herunterladen und entpacken</p></li><li><p>"<strong>kickstart.php</strong>" in "<strong>_kickstart.php</strong>" umbenennen</p></li><li><p>Backup zusammen mit den Akeeba Dateien in das CMS Installationsverzeichnis hochladen</p></li><li><p>Webseite unter "<strong>domain.com/_kickstart.php</strong>" besuchen und den Anweisungen folgen (die vorausgewählten Einstellungen sind in den meisten Fällen korrekt)</p></li><li><p>Nach Fertigstellung Seite auf Funktionalität überprüfen</p></li></ol>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Workflow ESP Abrechung',
        description: 'Marketing, Workflow, ESP, Abrechnung',
        category: 'Marketing',
        image: '/images/content/wiki/generisch/fdbs_muster_rot.png',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Workflow ESP Abrechung',
        description: 'Marketing, Workflow, ESP, Abrechnung',
    })
</script>

<style lang="sass" scoped></style>