
<template>
    <SectionHero title="Rechtliche Aspekte" image="/images/content/wiki/generisch/fdbs_muster_grau.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Entwicklung</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Für Webapps - also Onlineshops, Websites, etc. - gelten einige wichtige Rechtliche Aspekte. Die wichtigsten sind in diesem Eintrag aufgeführt:</p><ul><li><p><strong>Google Fonts oder Adobe Fonts</strong> dürfen unter keinen Umständen als CDN Link eingebunden werden und müssen stattdessen heruntergeladen und via CSS lokal eingebunden werden. Die Lizenzen der jeweiligen Schriftarten werden auf einer eigenen Seite aufgelistet.</p></li><li><p><strong>Google Maps oder OpenStreetMaps</strong> dürfen nicht als CMS-Plugin und müssen als iFrame oder Bild mit Link zu einem Google Maps Ort eingebunden werden.</p></li><li><p><strong>Google reCapture</strong> darf nicht verwendet werden. Eine andere Form von Bot-Protection ist einzusetzen (bspw. ein Honeypot).</p></li><li><p><strong>Google Analytics</strong> darf in Deutschland unter keinen Umständen verwendet werden. Alternativ kann Matomo oder eTracker eingesetzt werden.</p></li><li><p><strong>Analytics Software</strong> muss in jedem Fall opt-in (bspw. über ein Cookie Banner) sein.</p></li></ul>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Rechtliche Aspekte',
        description: 'Entwicklung, -',
        category: 'Entwicklung',
        image: '/images/content/wiki/generisch/fdbs_muster_grau.png',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Rechtliche Aspekte',
        description: 'Entwicklung, -',
    })
</script>

<style lang="sass" scoped></style>