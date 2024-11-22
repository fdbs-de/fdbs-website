
<template>
    <SectionHero title="Berechnung Produktion für Handzettel und Etiketten" image="/images/content/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Marketing</b><br>
            Tags: <b>Produktion, Handzettel, Etiketten</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <ul><li><p>Für Handzettel wird erstmal standardmäßig 1 AW Produktion abgerechnet. <br>Sollte das nicht kostendeckend sein, wird im Einzelfall nochmal <br>mit Caro und Benny kommuniziert.<br></p></li><li><p>Bei Banderolen wird sich an der Anzahl der verschiedenen <br>Sorten orientiert: 1 Sorte = 1 AW<br></p></li><li><p>Bei größeren Aufträgen wie z.B. Flyern, die noch gefalzt werden müssen, bleibt der Auftrag zunächst offen und wird anschließend von der Produktion um die benötigte Zeit ergänzt.</p></li></ul>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Berechnung Produktion für Handzettel und Etiketten',
        description: 'Marketing, Produktion, Handzettel, Etiketten',
        category: 'Marketing',
        image: '/images/content/wiki/generisch/fdbs_muster_rot.png',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Berechnung Produktion für Handzettel und Etiketten',
        description: 'Marketing, Produktion, Handzettel, Etiketten',
    })
</script>

<style lang="sass" scoped></style>