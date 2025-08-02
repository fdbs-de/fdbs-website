
<template>
    <SectionHero title="Produktionszeiten - Kommunikation gegenüber Kunden" image="/images/content/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Marketing</b><br>
            Tags: <b>Produktionszeiten, telefonische Bestellung, Kommunikation gegenüber Kunden</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <h2>Produktionszeiten für Auslieferungen zum Folgetag</h2><p>Richtwert für die Tage von <strong><span style="color: var(--color-primary)">Montag bis Donnerstag ist 15:00 Uhr und am Freitag 11:00 Uhr</span></strong>. Für alle Standardproduktionen wie Etiketten, Banderolen, Handzettel, usw.<br>Das bedeutet, für alle (telefonischen) Bestellungen, die nach 15:00/11:00 Uhr eingehen, können wir nicht mehr gewährleisten, dass die Ware am Folgetag ausgeliefert wird.</p><p>Individuelle Rücksprachen mit der Person, die an dem Tag für die Produktion zuständig ist, können natürlich getroffen werden. Ebenso sind alle Mitarbeiter im Homeoffice dazu angehalten, eng mit der Person die vor Ort im Büro ist in Kontakt zu stehen, wenn Aufträge von Kunden eingehen.</p><p>Bei <strong><span style="color: var(--color-primary)">großen/umfangreichen Produktionsaufträgen die nach 14 Uhr eingehen</span></strong>, wird Rücksprache mit der Produktion und dem Kunden gehalten, inwiefern die Produktion zum Folgetag gewährleistet werden kann oder erst zu einem späteren Zeitpunkt.</p><h3>Argumentationen gegenüber dem Kunden</h3><p>Gehen Bestellungen (z. B. Etiketten) nach den oben genannten Uhrzeiten ein, kann dem Kunden gegenüber wie folgt argumentiert werden, sofern er Einwände oder kein Verständnis zeigt.</p><ul><li><p>Unsere Produktion ist heute bereits stark ausgelastet und ich kann nicht dafür garantieren, dass der Auftrag heute noch abgewickelt werden kann. Wann bekommen Sie das nächste Mal Ware oder soll es eventuell per Post verschickt werden?</p></li><li><p>Aufgrund interner Arbeitsabläufe in den verschiedenen Abteilungen (Marketing, Lager, Fuhrpark) wäre es gut, wenn Sie Ihre Produktionsaufträge bis spätestens 15:00/11:00 Uhr durchgeben, da wir sonst leider keine Garantie dafür geben können, dass die Ware am Folgetag/Montag ausgeliefert wird.</p></li></ul><h3>Sonstiges</h3><ul><li><p>Stammkunden wie Göthe, Neubauer und Hanke sind in der Regel davon ausgeschlossen aufgrund ihres Standes im Unternehmen. Natürlich auch abhängig von der jeweiligen Bestellung.</p></li><li><p>Wer gerade für die Produktion zuständig ist, bearbeitet die Aufträge nach seinem eigenen Ermessen.</p></li></ul>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Produktionszeiten - Kommunikation gegenüber Kunden',
        description: 'Marketing, Produktionszeiten, telefonische Bestellung, Kommunikation gegenüber Kunden',
        category: 'Marketing',
        image: '/images/content/wiki/generisch/fdbs_muster_rot.png',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Produktionszeiten - Kommunikation gegenüber Kunden',
        description: 'Marketing, Produktionszeiten, telefonische Bestellung, Kommunikation gegenüber Kunden',
    })
</script>

<style lang="sass" scoped></style>