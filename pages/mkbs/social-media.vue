<template>
    <SectionHero image="/images/content/mkbs/banner/header_some.png" large-hero />
    <SectionKeyfacts :keyfacts="keyfacts" title="Unsere Leistungen im Überblick" color="#4b7bec" accent-color="#4b7bec30"/>
    <SectionText>
        <h1>Unsere Leistungen im Social Media Marketing</h1>
        <p>
            Die sozialen Medien sind für viele Unternehmen noch immer Neuland. Sie sind aber auch ein Ort voller Möglichkeiten.
            Besonders junge Menschen lassen sich über Social-Media deutlich besser erreichen als auf herkömmlichem Wege. Und nicht
            nur das: Es gibt Ihnen als Unternehmen die Möglichkeit, sich neuen Kunden auf Augenhöhe vorzustellen und so Sympathien
            zu wecken. Neuigkeiten, wie Änderungen Ihres Sortiments lassen sich durch Posts viel schneller kommunizieren. Ihre
            Kunden, genauso wie zukünftige Angestellte, können auf Plattformen wie Instagram oder LinkedIn außerdem mit sehr
            geringem Aufwand direkt mit Ihnen in Kontakt treten.
        </p>
        <p>
            Dazu kommt, dass in den sozialen Medien Nutzer viel gezielter auf Ihr Unternehmen aufmerksam gemacht werden können.
            Beiträge lassen sich hier ganz einfach an eine spezifische, relevante Zielgruppe richten.
            <br><br><br>
        </p>

        <h2>Inhalte und Pflege</h2>
        <img src="/images/content/mkbs/leistungen/social_media_marketing/content.png" alt="" class="rounded-lg mb-8">
        <p>
            Aber die Erstellung und Pflege solcher Social-Media-Accounts bedarf natürlich Zeit. Deshalb möchten wir Ihnen den
            Einstieg in die Welt der sozialen Medien erleichtern. Unser engagiertes Team übernimmt die Konzeption, Erstellung und
            Pflege der Social-Media-Präsenz Ihres Unternehmens, ganz nach Ihren Vorgaben und Ideen. Diese können wir dann Dank
            unserer Erfahrung und mit Blick auf die neuesten Entwicklungen und Trends in die Tat umsetzen. Auf den Plattformen
            Facebook, Instagram, LinkedIn, Xing und Google MyBusiness können wir für Sie Konten und anschließend auch Beiträge gemäß
            Ihrer Vorstellung erstellen, sowie mit der darauf ansprechenden Community interagieren.
            <br><br><br>
        </p>

        <h2>Datenschutz</h2>
        <img src="/images/content/mkbs/leistungen/social_media_marketing/privacy.png" alt="" class="rounded-lg mb-8">
        <p>
            Insbesondere beim Thema Datenschutz bieten wir Ihnen zudem ein Zusatzpaket an, welches Ihre Seite entsprechend der DSGVO
            absichert. Hierbei besteht für die Rechtstexte eine anwaltliche Haftung, sodass Sie sich an dieser Stelle ebenfalls
            keine Sorgen machen müssen.
            <br><br><br>
        </p>

        <h2>Werbeanzeigen</h2>
        <img src="/images/content/mkbs/leistungen/social_media_marketing/ads.png" alt="" class="rounded-lg mb-8">
        <p>
            Um über den so entstehenden Content und das generierte Image hinaus weitere Nutzer anzusprechen, gibt es weitere
            Möglichkeiten: Anzeigen auf den jeweiligen Plattformen, gerne auch in Kombination mit dem von uns angebotenen Offline
            Marketing. Anzeigen sind selbstverständlich auch unabhängig von der Erstellung eigener Konten möglich.
        </p>
    </SectionText>
</template>


<script lang="ts" setup>
    useSeoMeta({
        title: 'Social Media Marketing',
        description: '',
    })
        
    const keyfacts = ref([
        { icon: 'design_services', name: 'Grundgestaltung oder Überarbeitung der Kanäle' },
        { icon: 'insights', name: 'Ziel- und Zielgruppendefinition' },
        { icon: 'build', name: 'Einrichtung von Accounts' },
        { icon: 'edit_note', name: 'Planung, Erstellung und Verwaltung' },
        { icon: 'query_stats', name: 'Performanceanalyse' },
        { icon: 'gavel', name: 'DSGVO Prüfung und Absicherung' },
    ])
</script>

<style lang="sass" scoped></style>
