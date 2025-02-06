<template>
    <SectionHero title="Übertragung von Kontakten ins iPhone"
        image="/images/content/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>IT</b><br>
            Tags: <b>Kontakte, Smartphone</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Die Übertragung von Kontakten auf ein Smartphone kann schnell und einfach erfolgen. In diesem
                Artikel erklären wir eine unkomplizierte Methode, mit der Kontakte problemlos auf ein mobiles
                Gerät übertragen werden können. Dabei ist zu beachten, dass diese Methode die Kontaktdaten lediglich
                einmalig überträgt. </p>
            <div icon="star" class="key-fact"><span class="icon" data-icon="star" contenteditable="false"></span>
                <div class="content">
                    <p>Bei Problemen oder Unklarheiten, wende dich gerne an die IT.</p>
                </div>
            </div>
            <p></p>
            <h2>Kontakte im Outlook importieren</h2>
            <p>Im Outlook wird das allgemeine Adressbuch aufgerufen. Die Informationen darin werden systemseitig
                automatisch gepflegt und sind zu 99% korrekt. Das Adressbuch-Symbol ist im Outlook in der Registerkarte
                Start zu finden (hier gelb markiert):</p>
            <p></p><img class="content-image"
                src="/images/content/wiki/IT/Uebertragung-von-Kontakten-ins-iPhone/contacts-1.png" alt="">
            <p></p>
            <p>Alle Kontakte, die auf dem iPhone ebenfalls zur Verfügung stellen sollen, werden nun markiert:</p><img
                class="content-image" src="/images/content/wiki/IT/Uebertragung-von-Kontakten-ins-iPhone/contacts-2.png"
                alt="">
            <p></p>
            <p>Die Besprechungsräume sowie Team-Postfächer sollten dabei nicht ausgewählt werden. Die Daten sind meist
                irrelevant.</p><img class="content-image"
                src="/images/content/wiki/IT/Uebertragung-von-Kontakten-ins-iPhone/contacts-3.png" alt="">
            <p></p>
            <p>Per Rechtsklick wird nun "Zu den Kontakten hinzufügen" ausgewählt:</p><img class="content-image"
                src="/images/content/wiki/IT/Uebertragung-von-Kontakten-ins-iPhone/contacts-4.png" alt="">
            <p></p>
            <p>Nun sind die Kontakte bei den eigenen Outlook Kontakten zu finden:</p><img class="content-image"
                src="/images/content/wiki/IT/Uebertragung-von-Kontakten-ins-iPhone/contacts-5.png" alt="">
            <p></p>
            <h2>Übertragen der Kontakte ins iPhone</h2>
            <p>Die Übertragung von den eigenen Outlook Kontakten ins iPhone passiert automatisch. Der Vorgang könnte
                allerdings 1-2 Minuten dauern. Anschließend tauchen die Kontakte bei allen Kontakten auf:</p><img
                class="content-image" src="/images/content/wiki/IT/Uebertragung-von-Kontakten-ins-iPhone/contacts-6.png"
                alt="">
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
definePageMeta({
    title: 'Übertragung von Kontakten ins iPhone',
    description: 'IT, Kontakte, Smartphone',
    category: 'IT',
    image: '/images/content/wiki/generisch/fdbs_muster_rot.png',
    middleware: ['auth', 'personal'],
    layout: 'auth',
})

useSeoMeta({
    title: 'Übertragung von Kontakten ins iPhone',
    description: 'IT, Kontakte, Smartphone',
})
</script>

<style lang="sass" scoped></style>