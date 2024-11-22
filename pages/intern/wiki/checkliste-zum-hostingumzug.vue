
<template>
    <SectionHero title="Checkliste zum Hostingumzug" image="/images/content/wiki/generisch/fdbs_muster_grau.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Entwicklung</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Diese Checkliste beinhaltet Aspekte eines Umzugs eine Website oder eines Onlineshops von einem bestehenden Webhostings auf einen neuen Hosting-Tarif oder Anbieter.</p><h2>Vorbereitung</h2><ul><li><p>Läuft die Seite fehlerfrei?</p></li><li><p>Sind alle Aufgaben und Kundenwünsche abgeschlossen?&nbsp;</p></li><li><p>Bisheriges Setup der Seite erfassen&nbsp;</p><ul><li><p>Emails&nbsp;</p></li><li><p>DNS Einträge&nbsp;</p></li><li><p>Datenbanken und Versionen Kompatibilität</p></li><li><p>PHP Version Kompatibilität</p></li><li><p>CRON Jobs&nbsp;</p></li><li><p>Potenzielle andere Seiten</p></li></ul></li><li><p>Extended Support und <strong>Datenschutzpacket</strong> anbieten</p></li><li><p>Befragung zum Cookie Consent</p><ul><li><p>Gibt es 3rd-Party Anbieter aus dem EU Ausland (Google, Adobe Fonts)&nbsp;</p></li><li><p>Befragung zu Cookies</p></li><li><p>Cookie Consent integrieren</p></li></ul></li><li><p>Besteht eine Freigabe zum Umzug?&nbsp;</p><ul><li><p>Ausgefülltes Formular für den Umzug liegt vor</p></li><li><p>Beachte Abschnitt "<strong>Anschreiben: Freigabe Umzug</strong>"</p></li></ul></li><li><p>Bei Wordpress und Joomla Seiten</p><ul><li><p>Backup mit Akeeba erstellen und herunterladen&nbsp;</p></li></ul></li><li><p>Wenn Mail Adressen existieren&nbsp;</p><ul><li><p>Emails sichern (IMAP / POP3)</p></li><li><p><strong>Unbedingt eigenartige Email-Setups beachten und ggf. erfragen</strong></p></li></ul></li></ul><h2>Umzug</h2><ul><li><p>Neues Setup aufsetzen&nbsp;</p><ul><li><p>Mail Adressen anlegen&nbsp;</p></li><li><p>Emails importieren&nbsp;</p></li><li><p>Domains umziehen&nbsp;</p></li></ul></li><li><p>Backup oder Quelldateien via FTP auf den neuen Server in ein eigenes Verzeichnis kopieren&nbsp;</p><ul><li><p>Akeeba Kickstart in den selben Ordner kopieren&nbsp;</p></li><li><p>Umzugsroutine ausführen&nbsp;</p></li><li><p>Absolute Pfade überprüfen und ggf. austauschen</p></li></ul></li><li><p>Einstellungen überprüfen&nbsp;</p><ul><li><p>HTTPS aktivieren und erzwingen&nbsp;</p></li></ul></li><li><p>Formulare Überprüfen</p><ul><li><p>Werden die Daten an die richtige Email gesendet?&nbsp;</p></li></ul></li></ul><h2>Nachbereitung</h2><ul><li><p>Seite auf Fehler überprüfen und zeitnah beheben&nbsp;</p></li><li><p>Zugangsdaten für intern hinterlegen bzw. aktualisieren</p></li></ul><h4></h4><blockquote class="content-blockquote"><h3><strong>Anschreiben: Freigabe Umzug</strong></h3><h4>Freigabe: Umzug Ihrer neuen Website</h4><p>Sehr geehrte Damen und Herren,</p><p>Wir freuen uns, dass Sie uns mit dem Umzug Ihrer Website beauftragt haben. Um einen reibungslosen Ablauf gewährleisten zu können, benötigen wir vorab noch einige Informationen von Ihnen. Wir möchten Sie bitten, uns diese zeitnahe zur Verfügung zu stellen.</p><p>Bitte lassen Sie uns folgende Informationen zukommen:</p><ul><li><p>Alle bisher registrierten und aktiven Domains</p></li><li><p>Alle Email Adressen, welche auf die Domains enden inklusive technischem Aufbau</p><ul><li><p>Wie werden die Mails verteilt?</p></li><li><p>Welches Verfahren wird verwendet? (IMAP / POP3)</p></li><li><p>Welche Gerate haben Zugriff auf welche Email? (alle angeben)</p></li></ul></li><li><p>Liegen zusätzliche Websites/Scripts/Daten auf dem Server, welche ebenfalls umgezogen werden sollen?</p></li><li><p>Liegen besondere DNS Records vor?</p><ul><li><p>Einträge für Domainbestätigungen für bspw. Google Analytics, Google Search Console, Outlook oder Microsoft Exchange</p></li></ul></li><li><p>Liegen CRON Jobs vor (bspw. für automatische Backups)?</p></li></ul></blockquote>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Checkliste zum Hostingumzug',
        description: 'Entwicklung, -',
        category: 'Entwicklung',
        image: '/images/content/wiki/generisch/fdbs_muster_grau.png',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Checkliste zum Hostingumzug',
        description: 'Entwicklung, -',
    })
</script>

<style lang="sass" scoped></style>