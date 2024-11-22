
<template>
    <SectionHero title="Aufschläge für externe Produktionen" image="/images/content/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Marketing</b><br>
            Tags: <b>externe Produktionen, Aufschläge</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Bei neuen Angeboten für externe Produktionen wird zukünftig maximal folgender Aufschlag berechnet:</p><ul><li><p><strong><span style="color: var(--color-text)">bis 50 € netto EK maximal +70 %</span></strong></p></li><li><p><strong><span style="color: var(--color-text)">bis 100 € netto EK maximal +60 %</span></strong></p></li><li><p><strong><span style="color: var(--color-text)">bis 250 € netto EK maximal +50 %</span></strong></p></li><li><p><strong><span style="color: var(--color-text)">bis 500 € netto EK maximal +40 %</span></strong></p></li><li><p><strong><span style="color: var(--color-text)">bis 1.000 € netto EK maximal +25 %</span></strong></p></li><li><p><strong><span style="color: var(--color-text)">ab 1.000 € netto EK maximal +20 %</span></strong></p></li></ul><p>Bei den Genossenschaften (Zentrag, Fleiga, MEGEM etc.) gilt aufgrund Ihres Stellenwertes folgender Aufschlag:</p><ul><li><p><strong><span style="color: var(--color-text)">bis 50 € netto EK maximal +60 %</span></strong></p></li><li><p><strong><span style="color: var(--color-text)">bis 100 € netto EK maximal +50 %</span></strong></p></li><li><p><strong><span style="color: var(--color-text)">bis 250 € netto EK maximal +40 %</span></strong></p></li><li><p><strong><span style="color: var(--color-text)">bis 500 € netto EK maximal +30 %</span></strong></p></li><li><p><strong><span style="color: var(--color-text)">bis 1.000 € netto EK maximal +20 %</span></strong></p></li><li><p><strong><span style="color: var(--color-text)">ab 1.000 € netto EK maximal +10 %</span></strong></p></li></ul>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Aufschläge für externe Produktionen',
        description: 'Marketing, externe Produktionen, Aufschläge',
        category: 'Marketing',
        image: '/images/content/wiki/generisch/fdbs_muster_rot.png',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Aufschläge für externe Produktionen',
        description: 'Marketing, externe Produktionen, Aufschläge',
    })
</script>

<style lang="sass" scoped></style>