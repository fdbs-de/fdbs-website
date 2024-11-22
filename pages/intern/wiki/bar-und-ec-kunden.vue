
<template>
    <SectionHero title="Bar und EC Kunden" image="/storage/media/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Vertrieb</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Bar und EC Kunden</p><p>Wenn der ID/ AD einen Auftrag erfasst, der einen Bar und/ oder EC Kunden beinhalten, dann...<br>-Info an Fuhrpark (telefonisch), dass der Fahrer das Kartenlesegerät mitnimmt-&gt; Tour, Anliefertag und Kunde nennen<br>-Externe Belegnummer: "EC Kunde"</p><p>Der Fuhrpark ist angehalten erst nach Bezahlung die Ware abzuladen.<br>Kann der Kunde nicht bezahlen wird die Ware wieder zum FDBS mitgenommen!</p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Bar und EC Kunden',
        description: 'Vertrieb, -',
        category: 'Vertrieb',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Bar und EC Kunden',
        description: 'Vertrieb, -',
    })
</script>

<style lang="sass" scoped></style>