<template>
    <SectionHero title="ChefsList - Implementierung von Kunden"
        image="/images/content/wiki/generisch/fdbs_muster_grau.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>IT</b><br>
            Tags: <b>Online-Shop, ChefsList</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Die Bestell-App/das Portal ChefsList stellt das Artikelsortiment zur Verfügung und ermöglicht
                registrierten Kunden eigenständig Bestellungen vorzunehmen.
                Über die in Dynamics NAV integrierte Schnittstelle werden die Stammdaten (Kunden, Artikel, Preise,
                Kunden/Artikel-Listen etc.) von Navision an ChefsList übermittelt und in ChefsList getätigte
                Bestellungen an NAV übergeben und als Verkaufsauftrag erstellt.
            </p>
            <div icon="star" class="key-fact"><span class="icon" data-icon="star" contenteditable="false"></span>
                <div class="content">
                    <p>Bei Problemen oder Unklarheiten, wende dich gerne an die IT.</p>
                </div>
            </div>
            <p></p>
            <h2>Voraussetzungen</h2>
            <p>Um Kunden in das ChefsList zu integrieren, sind folgende Voraussetzungen notwendig:</p>
            <ul class="list-disc pl-6">
                <li>
                    <b>Zuordnung eines Angebotes:</b> Dem Debitor muss ein Angebot mit mindestens einem enthaltenen
                    Artikel zugeordnet sein. Das muss nicht zwingend ein Standardangebot sein.
                </li>
                <li>
                    <b>Kundenkontakt mit Mail + Telefon:</b> Beim Debitor muss ein Kontakt mit Mail-Adresse und
                    Telefonnummer hinterlegt sein, der ins ChefsList übertragen werden kann.<br>
                    <b>Wichtig:</b> Diese Mail-Adresse muss vom Kunden zur Anmeldung genutzt werden. Hier also vorher
                    mit dem Kunden sprechen, welche Mail-Adresse dieser nutzen möchte. Sonst kommt es zu Problemen.
                </li>
                <li>
                    <b>Lieferadressen:</b> Bei Debitoren mit mehreren Lieferadressen gibt es mehrere Möglichkeiten.
                    <ul class="list-disc pl-6">
                        <li>
                            Wenn der Kunde eine übereinstimmende Liefer- und Rechnungsadresse hat, braucht nichts
                            beachtet zu werden.
                        </li>
                        <li>
                            Der Kunde hat eine Rechnungsadresse, die von der Lieferadresse abweicht. Hier muss lediglich
                            die IT vor der Übertragung des Kunden informiert werden, dass alle Lieferungen immer an die
                            Lieferadresse gebrahct werden sollen.
                        </li>
                        <li>
                            Mehrere Filialen eines Kunden sollen selbstständig bestellen. Hier müssen entsprechende
                            Einzelkontakte pro Filiale festgelegt sein. Nach Rücksprache mit dem Kunden ist hier die IT
                            über die Kontakte (Name, Mail und Telefonnummer) pro Filiale zu informieren.
                        </li>
                        <li>
                            Für alle Filialen eines Kunden wird zentral bestellt. Der jeweilige Kontakt sowie alle
                            Filialen bzw. Lieferadressen, für die bestellt werden können soll, müssen festgelegt sein.
                            Nach Rücksprache mit dem Kunden ist hier die IT über den Kontakt (Name, Mail und
                            Telefonnummer) zu informieren.
                        </li>
                    </ul>
                </li>
            </ul>
            <p>Wenn die Voraussetzungen erfüllt sind und der Kunde ins ChefsList übertragen werden soll, muss die
                IT-Abteilung informiert werden. <br>Bitte nennt da gleich auch die Mail-Adresse, mit dem sich der Kunde
                anmelden möchte und ggf. Infos zu den Lieferadressen.</p>

            <h2>Weiterer Ablauf</h2>
            <p>Sofern alle Informationen vollständig vorhanden sind, kann die IT-Abteilung den Kunden ins ChefsList
                übertragen. Das dauert meistens einen Tag.</p>
            <p>
                Nach der Übertragung schickt die IT-Abteilung die Einladungsmail an den Kunden, inklusive Magic Code.
            </p>
            <img class="content-image" src="/images/content/wiki/IT/ChefsList-Implementierung-von-Kunden/magic-code.png"
                alt="">
            <p></p>
            <p>Der Kunde registriert sich bei ChefsList selbstständig und kann anschließend über ChefsList Aufträge erstellen.</p>
            <p></p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
definePageMeta({
    title: 'ChefsList - Implementierung von Kunden',
    description: 'IT, Online-Shop, ChefsList',
    category: 'IT',
    image: '/images/content/wiki/generisch/fdbs_muster_grau.png',
    middleware: ['auth', 'personal'],
    layout: 'auth',
})

useSeoMeta({
    title: 'ChefsList - Implementierung von Kunden',
    description: 'IT, Online-Shop, ChefsList',
})
</script>

<style lang="sass" scoped></style>