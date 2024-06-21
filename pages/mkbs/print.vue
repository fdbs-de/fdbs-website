<template>
    <SectionHero image="/images/content/mkbs/banner/header_print.png" large-hero />
    <SectionKeyfacts :keyfacts="keyfacts" title="Unsere Leistungen im Überblick" color="#f7b731" accent-color="#f7b73130"/>
    <SectionText>
        <h1>Unsere Leistungen im Print</h1>
        <p>
            Trotz aller Neuerungen, technologischen Entwicklungen und Innovationen im Bereich des Marketings, dürfen das klassische
            Marketing und insbesondere Printartikel nicht aus den Augen verloren werden. Denn nach wie vor erreicht man viele Kunden
            durch Plakate, Broschüren oder mit klassischen Anzeigen. Es ist trotz aller Erreichbarkeit online immer noch hilfreich,
            mit z.B. Handzetteln Kunden auf sich aufmerksam zu machen und in Erinnerung zu bleiben. Voraussetzung dafür ist ein
            attraktives Design, das die Menschen anspricht, die sie erreichen möchten.<br><br>
        </p>
        <p>
            Bei uns können Sie daher neben der Vielzahl an digitalen Optionen auch die Konzeption, die Gestaltung und den Druck
            solcher Printprodukte in Auftrag geben.
            <br><br><br>
        </p>

        <h2>Produktauswahl</h2>
        <img src="/images/content/mkbs/leistungen/print/products.png" alt="" class="rounded-lg mb-8">
        <p>
            Von den klassischen Produkten, wie Handzetteln, Plakaten oder Broschüren bis hin zu Etiketten, Fahnen oder Roll-Ups ist
            bei uns grundsätzlich alles möglich. Wir sind für Anfragen offen und finden Lösungen, auch ausgefallenere Ideen
            umzusetzen.
            <br><br><br>
        </p>

        <h2>Konzeption und Gestaltung</h2>
        <img src="/images/content/mkbs/leistungen/print/concept_and_design.png" alt="" class="rounded-lg mb-8">
        <p>
            Unser Service beginnt dabei mit einem Erstgespräch, der Ideenfindung und der Entwicklung eines ersten Layouts, wobei wir
            auch gleich Umfang und Produktion definieren. Bei Konzept und Layout besteht selbstverständlich auch die Möglichkeit,
            sich an Online-Marketingkampagnen zu orientieren und beides zu kombinieren.
        </p>
        <p>
            Die Konzeption, Gestaltung und Produktion der Printartikel geschieht dabei alles aus einer Hand bei uns im Haus.
            Zusätzlich arbeiten wir mit einem großen Netzwerk an Partnern zusammen, um Ihre Aufträge schnellstmöglich fertigstellen
            zu können.
        </p>
    </SectionText>
</template>


<script lang="ts" setup>
    useSeoMeta({
        title: 'Print Design',
        description: '',
    })
    
    const keyfacts = ref([
        { icon: 'diamond', name: 'Logoentwicklung' },
        { icon: 'web_stories', name: 'Flyer/Broschüren' },
        { icon: 'store', name: 'Geschäftsausstattung' },
        { icon: 'confirmation_number', name: 'Etiketten/Banderolen' },
        { icon: 'euro', name: 'Preisauszeichnung' },
        { icon: 'description', name: 'Handzettel' },
        { icon: 'photo_frame', name: 'Plakate' },
        { icon: 'sell', name: 'Thekenaufsteller' },
        { icon: 'flag', name: 'Rollups, Beachflags' },
    ])
</script>

<style lang="sass" scoped></style>
