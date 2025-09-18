<template>
    <SectionHero title="Aufbau einer VPN-Verbindung (neu)"
        image="/images/content/wiki/IT/Aufbau-einer-VPN-Verbindung-(neu)/VPN-Headline.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>IT</b><br>
            Tags: <b>VPN, HomeOffice</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Mit der Verwendung von VPN wird eine Verbindung zu einem anderen Netzwerk, in diesem Fall dem
                Firmennetzwerk, hergestellt. Dadurch ist es möglich, von einem anderen Ort aus zu arbeiten.</p>
            <div icon="star" class="key-fact"><span class="icon" data-icon="star" contenteditable="false"></span>
                <div class="content">
                    <p>Bei Problemen oder Unklarheiten, wende dich gerne an die IT.</p>
                </div>
            </div>
            <p></p>
            <h2>Schritt #0 - Internetverbindung herstellen</h2>
            <p>Das Notebook benötigt eine stabile Internetverbindung; entweder mit einem LAN-Kabel oder per WLAN
                (z.B. auch mit einem Hotspot des Smartphones).</p>
            <p></p>
            <p>Beispielhaft wird hier die Aktivierung eines Hotspots anhand eines iPhones erklärt:<br>In den
                Einstellungen ist im ersten Bereich "Persönlicher Hotspot zu finden":</p><img class="content-image"
                src="/images/content/wiki/IT/Aufbau-einer-VPN-Verbindung-(neu)/Hotspot-1.PNG" alt="">
            <p></p>
            <p>Hier kann nun der Zugriff für andere erlaubt werden und das WLAN-Passwort abgerufen werden:</p><img
                class="content-image" src="/images/content/wiki/IT/Aufbau-einer-VPN-Verbindung-(neu)/Hotspot-2.PNG"
                alt="">
            <p></p>
            <p>Am Notebook wird als Nächstes in den WLAN-Einstellungen unten rechts geschaut. Hier sollte nun der Name
                des iPhones auftauchen:</p><img class="content-image"
                src="/images/content/wiki/IT/Aufbau-einer-VPN-Verbindung-(neu)/Hotspot-4.png" alt="">
            <p>Anschließend wird das WLAN-Passwort vom iPhone am Notebook eingegeben. <br>Bei aufgebauter
                Internetverbindung kann also jetzt die VPN-Verbindung aufgebaut werden.</p>
            <p></p>

            <h2>Schritt #1 - Einmalige Registrierung</h2>
            <p>
                Um sich mit VPN verbinden zu können, muss einmalig der Benuter registriert werden.<br>Dafür wird
                folgende Seite aufgerufen: <a target="_blank" rel="noopener noreferrer nofollow"
                    href="https://vpn.fdbs.de">vpn.fdbs.de</a>
            </p><img class="content-image"
                src="/images/content/wiki/IT/Aufbau-einer-VPN-Verbindung-(neu)/vpn-portal.png" alt="">
            <p>
                Hier wird als Benutzername der bekannte Windows-Anmeldename verwendet, z.B. "ebeith"<br>Das Kennwort
                entspricht dem Kennwort, welches auch für die Anmeldung am Notebook/PC verwendet wird.
            </p>
            <p>
                Wer kein Dienstsmartphone besitzt, kann nach erfolgreicher Anmeldung die Webseite schließen und zu
                Schritt #2 übergehen.
            </p>
            <h3>Multi-Faktor-Authentifizierung</h3>
            <p>Bei Nutzung eines Dienstsmartphones muss nun Multi-Faktor-Authentifizierung eingerichtet werden.</p>
            <p>Für Multi-Faktor-Authentifizierung wird nun ein QR-Code angezeigt. Dieser wird mit einer
                Authentifizierungs-App auf dem Smartphone gescannt.</p><img class="content-image"
                src="/images/content/wiki/IT/Aufbau-einer-VPN-Verbindung-(neu)/vpn-portal-mfa.png" alt="">
            <p>Dafür wird auf dem Smartphone der Authenticator zur Verfügung gestellt.<br>Nachdem die App geöffnet
                wurde, befindet sich unten rechts der Button, um den QR-Code zu scannen:</p><img class="content-image"
                src="/images/content/wiki/IT/Aufbau-einer-VPN-Verbindung-(neu)/authenticator-1.png" alt="">
            <p>Sobald der QR-Code erfolgreich gescannt wurde, erscheint der Multi-Faktor-Authentifizierungscode in der
                Liste mit dem Titel "Sophos SFOS":</p><img class="content-image"
                src="/images/content/wiki/IT/Aufbau-einer-VPN-Verbindung-(neu)/authenticator-2.png" alt="">
            <p>Die Webseite kann nun geschlossen werden.</p>

            <h2>Schritt #2 - Sophos Connect-Verbidnung herstellen</h2>
            <p>Kicke unten rechts in der Windows-Taskleiste auf das Pfeil-Symbol. Dort befindet sich das Sophos
                Connect-Symbol.</p><img class="content-image"
                src="/images/content/wiki/IT/Aufbau-einer-VPN-Verbindung-(neu)/sophos-connect-1.png" alt="">
            <p>Mit einem Klick öffnet sich das Programm und es kann eine VPN-Verbindung hergestellt
                werden:</p><img class="content-image"
                src="/images/content/wiki/IT/Aufbau-einer-VPN-Verbindung-(neu)/sophos-connect-2.png" alt="">
            <p>Anschließend öffnet sich ein Login-Fenster, in denen Benutzername und Kennwort eingegeben werden muss.
            </p>
            <p>Hier wird als Benutzername der bekannte Windows-Anmeldename verwendet, z.B. "ebeith"<br>Das Passwort
                entpricht dem Kennwort, welches auch für die Anmeldung am Notebook/PC verwendet wird.<br>Screenshot
                kommt bald!</p>
            <p>Wenn Multi-Faktor-Authentifizierung konfiguriert wurde, ist Folgendes zu beachten:<br>Der
                Multi-Faktor-Authentifizierungscode aus der App ist notwendig, um sich mit dem VPN zu verbinden.
                Bei der Eingabe des Passwortes muss der Multi-Faktor-Authentifizierungscode gleichzeitig mit angegeben
                werden,
                also z.B. „passwort972748“<br>passwort steht dann für das Passwort, welches für die Anmeldung am
                Notebook/PC verwendet wird.
                <br>972748 steht für den Authentifizierungscode aus der App, der sich alle 30 Sekunden
                ändert.<br>Screenshot kommt bald!
            </p>
            <p>Bei erfolgreichem Verbindungsaufbau sieht man im Sophos Connect den Status "Connected"<br>Screenshot
                kommt bald!</p>
            <p></p>
            <h2>Schritt #3 - Optional: Terminalserver starten</h2>
            <p>Manchmal kann es trotz bestehender VPN-Verbindung zu Problemen verschiedener Arten kommen. Eine mögliche
                Lösung/alternative ist dann, zusätzlich eine Verbindung zum Terminalserver aufzubauen und von dort aus
                auf alle Ressourcen zuzugreifen. <br>Den Terminalserver findet man auf dem
                Desktop oder über die Suche:</p><img class="content-image"
                src="/images/content/wiki/IT/Aufbau-einer-VPN-Verbindung-(neu)/Terminalserver_Suche.png" alt="">
            <p>Nach der Anmeldung mit Benutzernamen und Kennwort können hier wie gewohnt alle Programme ausgeführt und
                genutzt werden.</p>
            <p>Der Benutzername entspricht dem ersten Buchstaben des Vornamens + dem Nachnamen, also z.B. ebeith für
                Enno Beith.<br>Das Kennwort ist das, was auch für die normale Anmeldung am Notebook genutzt wird.</p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
definePageMeta({
    title: 'Aufbau einer VPN-Verbindung (neu)',
    description: 'IT, VPN, HomeOffice',
    category: 'IT',
    image: '/images/content/wiki/IT/Aufbau%20einer%20VPN-Verbindung/VPN-Headline.png',
    middleware: ['auth', 'personal'],
    layout: 'auth',
})

useSeoMeta({
    title: 'Aufbau einer VPN-Verbindung (neu)',
    description: 'IT, VPN, HomeOffice',
})
</script>

<style lang="sass" scoped></style>