
<template>
    <SectionHero title="Aufbau einer VPN-Verbindung" image="/images/content/wiki/IT/Aufbau%20einer%20VPN-Verbindung/VPN-Headline.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>IT</b><br>
            Tags: <b>VPN, HomeOffice</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Mit der Verwendung von VPN wird eine Verbindung zu einem anderen Netzwerk, in diesem Fall dem Firmennetzwerk, hergestellt. Dadurch ist es möglich, von einem anderen Ort aus zu arbeiten.</p><div icon="star" class="key-fact"><span class="icon" data-icon="star" contenteditable="false"></span><div class="content"><p>Bei Problemen oder Unklarheiten, wende dich gerne an die IT.</p></div></div><p></p><h2>Schritt #0 - Internetverbindung herstellen</h2><p>Das Computersystem benötigt eine stabile Internetverbindung; entweder mit einem LAN-Kabel oder per WLAN (z.B. auch mit einem Hotspot des Smartphones).</p><p></p><p>Beispielhaft wird hier die Aktivierung eines Hotspots anhand eines iPhones erklärt:<br>In den Einstellungen ist im ersten Bereich "Persönlicher Hotspot zu finden":</p><img class="content-image" src="/images/content/wiki/IT/Aufbau%20einer%20VPN-Verbindung/Hotspot-1.PNG" alt=""><p></p><p>Hier kann nun der Zugriff für andere erlaubt werden und das WLAN-Passwort abgerufen werden:</p><img class="content-image" src="/images/content/wiki/IT/Aufbau%20einer%20VPN-Verbindung/Hotspot-2.PNG" alt=""><p></p><p>Am Notebook wird als Nächstes in den WLAN-Einstellungen unten rechts geschaut. Hier sollte nun der Name des iPhones auftauchen:</p><img class="content-image" src="/images/content/wiki/IT/Aufbau%20einer%20VPN-Verbindung/Hotspot-4.png" alt=""><p>Anschließend wird das WLAN-Passwort vom iPhone am Notebook eingegeben. <br>Bei aufgebauter Internetverbindung kann also jetzt die VPN-Verbindung aufgebaut werden.</p><p></p><h2>Schritt #1 - Global VPN-Client ausführen</h2><p>Auf jedem System befindet sich das Programm Global VPN Client, welches ausgeführt werden muss. Dies ist entweder auf dem Desktop oder in der Suche zu finden:</p><img class="content-image" src="/images/content/wiki/IT/Aufbau einer VPN-Verbindung/Sonicwall_Suche.png" alt=""><p>Nach Starten des VPN Clients wird das Programm automatisch die VPN-Verbindung aufbauen.</p><img class="content-image" src="/images/content/wiki/IT/Aufbau einer VPN-Verbindung/Sonicwall_Programm.png" alt=""><p></p><h2>Schritt #2 - Terminalserver starten</h2><p>Als Nächstes wird eine Verbindung zum Terminalserver hergestellt.<br>Diesen findet man ebenfalls auf dem Desktop oder über die Suche:</p><img class="content-image" src="/images/content/wiki/IT/Aufbau einer VPN-Verbindung/Terminalserver_Suche.png" alt=""><p>Nach der Anmeldung mit Benutzernamen und Kennwort können hier wie gewohnt alle Programme ausgeführt und genutzt werden.</p><p>Der Benutzername entspricht dem ersten Buchstaben des Vornamens + dem Nachnamen, also z.B. ebeith für Enno Beith.<br>Das Kennwort ist das, was auch für die normale Anmeldung am Notebook genutzt wird.</p><p>Nun bist du erfolgreich mit dem VPN verbunden!</p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Aufbau einer VPN-Verbindung',
        description: 'IT, VPN, HomeOffice',
        category: 'IT',
        image: '/images/content/wiki/IT/Aufbau%20einer%20VPN-Verbindung/VPN-Headline.png',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Aufbau einer VPN-Verbindung',
        description: 'IT, VPN, HomeOffice',
    })
</script>

<style lang="sass" scoped></style>