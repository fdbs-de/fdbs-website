<template>
    <SectionHero image="/images/content/mkbs/banner/header_webentwicklung.png" large-hero />
    <SectionKeyfacts :keyfacts="keyfacts" title="Unsere Leistungen im Überblick" color="#eb3b5a" accent-color="#eb3b5a30"/>
    <SectionText>
        <h1>Unsere Leistungen in der Webentwicklung</h1>
        <p>
            Heutzutage ist eine Webpräsenz nicht nur ein wichtiger Unternehmensbestandteil, sie ist das Aushängeschild eines
            Unternehmens, das, was Kunden als Erstes auffällt. Um sich bereits hier von Ihrer Konkurrenz abheben zu können, bieten
            wir Ihnen die Konzeption ansprechender Webseiten maßgeschneidert auf Ihre Kunden, ebenso wie die Entwicklung dazu
            passender Online-Shops. Und nicht nur bei der Neugestaltung Ihrer Internetpräsenz kann Sie unser professionelles Team
            unterstützen, sondern auch die Webseiten-Pflege können wir für Sie übernehmen. Unsere jahrelange Erfahrung in den
            Bereichen des Gestaltens, Programmierens und Optimierens macht uns zu Ihrem idealen Ansprechpartner, um Ihr Unternehmen
            online nach vorne zu bringen.
            <br><br><br>
        </p>

        <h2>Konzeption</h2>
        <img src="/images/content/mkbs/leistungen/web/wireframe.png" alt="" class="rounded-lg mb-8">
        <p>
            Sie planen eine Webseite oder einen Online-Shop für Ihr Unternehmen, wissen aber nicht, wo Sie anfangen sollen? Dann
            sind Sie bei uns genau richtig. Sagen Sie uns einfach, worauf Sie Wert legen. So können wir nach Ihren Ideen und mit
            unserer Expertise gemeinsam ein individuelles Konzept entwickeln, das passgenau auf Ihre Zielgruppe abgestimmt sind.
            <br><br><br>
        </p>

        <h2>Gestaltung</h2>
        <img src="/images/content/mkbs/leistungen/web/design.png" alt="" class="rounded-lg mb-8">
        <p>
            Ein ansprechendes Design ist bei Ihrer Online-Präsenz natürlich ein Muss. Von der Fleischerei über die Gastronomie
            bis zur Kanzlei: Als erfahrene Mediengestalter wissen wir, wie wir auch für Ihr Unternehmen eine Webseite oder einen
            Online-Shop erstellen, der Ihre Kunden optimal an Ihre Produkte heranführt und durch einen attraktiven Aufbau glänzt.
            <br><br><br>
        </p>

        <h2>Entwicklung</h2>
        <img src="/images/content/mkbs/leistungen/web/development.png" alt="" class="rounded-lg mb-8">
        <p>
            Wir begleiten Sie von dem ersten Prototypen bis zur Entwicklung komplexer Web-Apps und verstehen uns darauf, auch
            kreative und innovative Ideen wie Animationen, visuelle Gags und umfassende Shopsysteme in die Tat umzusetzen. Außerdem
            stellen wir sicher, dass sich Ihre Kunden auf jedem Endgerät bei Ihnen zurechtfinden und alles reibungslos läuft.
            <br><br><br>
        </p>

        <h2>Optimierung</h2>
        <img src="/images/content/mkbs/leistungen/web/optimization.png" alt="" class="rounded-lg mb-8">
        <p>
            Durch langfristige und seriöse Suchmaschinenoptimierung und Suchmaschinenmarketing sorgen wir anschließend zudem
            dafür, dass Ihre Webseite in Zukunft auch von Ihrer Zielgruppe gefunden wird, indem sie an erster Stelle der
            Suchmaschinen auftaucht. So finden Sie Kunden, die genau das brauchen, was Sie anbieten.
            <br><br><br>
        </p>

        <h2>Support</h2>
        <img src="/images/content/mkbs/leistungen/web/support.png" alt="" class="rounded-lg mb-8">
        <p>
            Auch nach Fertigstellung Ihrer Internetpräsenz unterstützen wir Sie weiter bei der Pflege und Aktualisierung Ihrer
            Webseite. Durch regelmäßige Updates und Backups halten wir Ihre Webseite auf dem neuesten Stand von Technik und
            Sicherheit und bieten zudem Tech Support, ebenso wie die Aktualisierung von Inhalten. Und auch um den Schutz der Daten
            Ihrer Kunden brauchen Sie sich keine Sorgen zu machen, denn bei uns bekommen Sie darüber hinaus Datenschutzpakete mit
            anwaltlicher Haftung.
        </p>
    </SectionText>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Web Entwicklung',
        description: '',
        })
        
        const keyfacts = ref([
            { icon: 'data_object', name:'Von der Idee bis zur Programmierung' },
            { icon: 'design_services', name:'Konzeption und Gestaltung' },
            { icon: 'insights', name:'Zielgruppenanalyse' },
            { icon: 'build', name:'Pflege, Service und Wartung' },
            { icon: 'shopping_cart', name:'E-Commerce / Online Shops' },
            { icon: 'edit_note', name:'Content Marketing' },
            { icon: 'query_stats', name:'SEO - Suchmaschinenoptimierung' },
            { icon: 'verified', name:'SEA - Suchmaschinenwerbung' },
            { icon: 'gavel', name:'DSGVO Prüfung und Absicherung' },
        ])
</script>

<style lang="sass" scoped></style>
