
<template>
    <SectionHero title="Zentrale Anlaufstelle IT-Service und -Support" image="/images/content/wiki/IT/ITS.jpg" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>IT</b><br>
            Tags: <b>Support</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Ab sofort gibt es die zentrale E-Mailadresse <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:it@fdbs.de">it@fdbs.de</a>, an die samtliche it-relevanten Themen zu richten sind (also Anforderungen, Fragen oder auch Probleme/Fehlermeldungen, die relevante Betriebsabläufe <u class="content-underline">nicht</u> stören oder unterbrechen).</p><p><span style="color: var(--color-error)">Eine direkte telefonische Kontaktaufnahme zur IT-Abteilung sollte nur noch zu Anliegen erfolgen, die relevante Betriebsabläufe stören oder unterbrechen oder sonstigen dringlichen Charakter haben.</span></p><p>Damit ergeben sich folgende Vorteile/Möglichkeiten:</p><ul><li><p>eine zentrale Erfassung aller IT-relevanten Themen,</p></li><li><p>eine automatische Priorisierung nach Eingang der Nachricht, </p></li><li><p>die Möglichkeit einer zusätzlichen manuellen Priorisierung nach Dringlichkeit sowie</p></li><li><p>die IT-interne Zuweisung nach Themengebieten/Fachbereichen</p></li></ul>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Zentrale Anlaufstelle IT-Service und -Support',
        description: 'IT, Support',
        category: 'IT',
        image: '/images/content/wiki/IT/ITS.jpg',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Zentrale Anlaufstelle IT-Service und -Support',
        description: 'IT, Support',
    })
</script>

<style lang="sass" scoped></style>