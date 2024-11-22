<template>
    <SectionHero title="Bearbeitung Mindermengenzuschlag" image="/images/content/wiki/generisch/streifen.jpg" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Vertrieb</b><br>
            Tags: <b>Mindermenge, Zuschlag, Fuhrpark</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p><span style="color: var(--color-heading)">Die Prüfung der Aufträge erfolgt von Montag bis Donnerstag um
                    13:30 Uhr und am Freitag um 12 Uhr.</span></p>
            <ol>
                <li>
                    <p><span style="color: var(--color-heading)">Schritt: Prüfung Fuhrpark anhand Liefertag
                        </span><strong><span style="color: var(--color-success)">(siehe Arbeitshilfe)</span></strong>
                    </p>
                </li>
                <li>
                    <p><span style="color: var(--color-heading)">Schritt: alle Kundenaufträge müssen über 300€ (netto)
                            betragen</span></p>
                </li>
                <li>
                    <p><span style="color: var(--color-heading)">Wenn Auftrag unter 300€ (netto), dann Info an den
                            Innendienst per Telefon oder per E-Mail</span></p>
                    <p><span style="color: var(--color-heading)">Entscheidung über:</span></p>
                    <ul>
                        <li>
                            <p><span style="color: var(--color-heading)">35€ Mindermengenzuschlag oder</span></p>
                        </li>
                        <li>
                            <p><span style="color: var(--color-heading)">Aufstockung des Auftrages oder</span></p>
                        </li>
                        <li>
                            <p><span style="color: var(--color-heading)">Verschiebung auf einen anderen Ausliefertag
                                    oder</span></p>
                        </li>
                        <li>
                            <p><span style="color: var(--color-heading)">einmalige Kulanzentscheidung</span></p>
                        </li>
                    </ul>
                </li>
            </ol>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
definePageMeta({
    title: 'Bearbeitung Mindermengenzuschlag',
    description: 'Vertrieb, Mindermenge, Zuschlag, Fuhrpark',
    category: 'Vertrieb',
    image: '/images/content/wiki/generisch/streifen.jpg',
    middleware: ['auth', 'personal'],
    layout: 'auth',
})

useSeoMeta({
    title: 'Bearbeitung Mindermengenzuschlag',
    description: 'Vertrieb, Mindermenge, Zuschlag, Fuhrpark',
})
</script>

<style lang="sass" scoped></style>