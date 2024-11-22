
<template>
    <SectionHero title="Dateizugriff auf Sharepoint-Inhalte über OneDrive" image="/storage/media/wiki/IT/Dateizugriff Sharepoint-Inhalte-%C3%BCber-OneDrive/OneDrive-Banner.jpg" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>IT</b><br>
            Tags: <b>OneDrive, Sharepoint, Dateien</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Bei OneDrive handelt es sich um den persönlichen Online-Speicher. Das ist vergleichbar mit dem bisher bekannten H:/-Laufwerk, allerdings ist OneDrive zusätzlich von jedem Standort und Gerät abrufbar.</p><p>Sharepoint ist als organisationsweiter Online-Speicher anzusehen und damit ziemlich ähnlich zu den typischen Abteilungslaufwerken, wie z.B. V:/Verkauf.</p><p>Es wurden bereits einige Abteilungslaufwerke umgestellt, sodass die Abteilungs-Daten nun auf Sharepoint statt dem Abteilungslaufwerk zur Verfügung stehen.<br>Um auf die Abteilungsdaten (fast) wie gewohnt zugreifen zu können, kann eine Verknüpfung zwischen Sharepoint und OneDrive hergestellt werden.</p><div icon="star" class="key-fact"><span class="icon" data-icon="star" contenteditable="false"></span><div class="content"><p><span style="color: rgb(104, 111, 111)">Bei Problemen oder Unklarheiten, wende dich gerne an die IT.</span></p></div></div><p></p><h1>Schritt #0 - SharePoint-OneDrive-Verknüpfung herstellen</h1><p>Hier gibt es zwei Möglichkeiten, um auf die SharePoint-Daten zuzugreifen:</p><h2>Zugriff über Teams (<strong>Nur über Windows-PC möglich</strong>)</h2><p>In der Teams-App als Erstes links "Teams" und dann das entsprechende Team bzw. den entsprechenden Kanal auswählen.<br>Nun auf der rechten Seite "Dateien", die drei Punkte und "Verknüpfung zu OneDrive hinzufügen" auswählen.<br>Dann erscheint der Ordner direkt im OneDrive.</p><img class="content-image" src="/storage/media/wiki/IT/Dateizugriff Sharepoint-Inhalte-%C3%BCber-OneDrive/Sharepoint-Abruf-1.jpg" alt=""><p></p><h2>Zugriff über den Webbrowser</h2><p>SharePoint wird bei der Variante über den Browser geöffnet:<br><a target="_blank" rel="noopener noreferrer nofollow" href="https://fleischerdienstde.sharepoint.com/"><span style="color: var(--color-primary)">https://fleischerdienstde.sharepoint.com/</span></a><br></p><p>Der jeweilige SharePoint sowie der Menüpunkt Dokumente wird hier ausgewählt.<br>Hier wird das Menü "In Kanälen" aufgeklappt und die entsprechende Abteilung ausgewählt:</p><img class="content-image" src="/storage/media/wiki/IT/Dateizugriff Sharepoint-Inhalte-%C3%BCber-OneDrive/Sharepoint-Abruf-2.png" alt=""><p>Nun wird "Verknüpfung zu OneDrive hinzufügen" ausgewählt:</p><img class="content-image" src="/storage/media/wiki/IT/Dateizugriff Sharepoint-Inhalte-%C3%BCber-OneDrive/Sharepoint-Abruf-3.jpg" alt=""><p></p><p>Bei einem Apple-Gerät sieht das dann so aus:</p><img class="content-image" src="/storage/media/wiki/IT/Dateizugriff Sharepoint-Inhalte-%C3%BCber-OneDrive/Sharepoint-Abruf-4.png" alt=""><p></p><p></p><p></p><p></p><h1>Schritt #1 - Zugriff auf die Daten über OneDrive</h1><h2>Apple iOS</h2><p>Über die App "OneDrive" findet man jetzt unter "Dateien" die hinzugefügten SharePoint-Verknüpfungen:</p><img class="content-image" src="/storage/media/wiki/IT/Dateizugriff Sharepoint-Inhalte-%C3%BCber-OneDrive/iOS-OneDrive-1.jpg" alt=""><img class="content-image" src="/storage/media/wiki/IT/Dateizugriff Sharepoint-Inhalte-%C3%BCber-OneDrive/iOS-OneDrive-2.png" alt=""><p></p><h2>Windows</h2><p>Im Windows-Dateiexplorer findet man auf der linken Seite das OneDrive-Laufwerk und kann hierüber auf die SharePoint-Verknüpfungen zugreifen:</p><img class="content-image" src="/storage/media/wiki/IT/Dateizugriff Sharepoint-Inhalte-%C3%BCber-OneDrive/Windows-OneDrive-1.jpg" alt=""><p></p><p>Falls das OneDrive-Laufwerk nicht angezeigt werden sollte, dann prüfe das OneDrive-Symbol in der Taskleiste.<br>Hier handelt es sich meist um eine durchgestrichene Wolke.<br>Indem man auf diese dunkle Wolke draufklickt, wird eine erneute Anmeldung durchgeführt.</p><img class="content-image" src="/storage/media/wiki/IT/Dateizugriff Sharepoint-Inhalte-%C3%BCber-OneDrive/Windows-OneDrive-2.jpg" alt=""><p>Nach der erfolgreichen Anmeldung ist das OneDrive-Symbol blau und das OneDrive-Laufwerk ist sichtbar:</p><img class="content-image" src="/storage/media/wiki/IT/Dateizugriff Sharepoint-Inhalte-%C3%BCber-OneDrive/Windows-OneDrive-3.jpg" alt="">
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Dateizugriff auf Sharepoint-Inhalte über OneDrive',
        description: 'IT, OneDrive, Sharepoint, Dateien',
        category: 'IT',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Dateizugriff auf Sharepoint-Inhalte über OneDrive',
        description: 'IT, OneDrive, Sharepoint, Dateien',
    })
</script>

<style lang="sass" scoped></style>