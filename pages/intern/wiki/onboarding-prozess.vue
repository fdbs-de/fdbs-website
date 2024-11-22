<template>
    <SectionHero title="Onboarding Prozess" image="/images/content/wiki/generisch/muster_2.jpg" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>HR / Buchhaltung</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <h3><span style="color: var(--color-error)">ONBOARDING - WILLKOMMEN BEI FDBS</span></h3>
            <p><span style="color: rgb(51, 51, 51)">„Welcome on board!“ – mit einem herzlichen Willkommen sollte jeder
                    neue Job beginnen. Unter „Onboarding“ ist im Personalmanagement der strukturierte und systematische
                    Prozess bekannt, der das ermöglicht. Neue Mitarbeiter sollen sich vom ersten Tag an wohlfühlen. Denn
                    zufriedene Mitarbeiter sind motivierter, engagierter, produktiver. Und sie bleiben dem Unternehmen
                    länger erhalten – was gerade angesichts des Fachkräftemangels immer wichtiger ist.</span></p>
            <p><strong><span style="color: rgb(51, 51, 51)">Ziel ist, den Neuzugang fachlich einzuarbeiten und zügig ins
                        Team und in die Unternehmenskultur einzugliedern. </span></strong><span
                    style="color: rgb(51, 51, 51)">Gutes Onboarding schafft eine Wohlfühlatmosphäre, um die
                    Arbeitsabläufe und Zusammenarbeit zu harmonisieren. Das verhindert zugleich, dass der neue
                    Mitarbeiter noch während der Probezeit wieder kündigt. Kurz: Der oder die Mitarbeiter*in soll sich
                    von Beginn an als vollwertiges Mitglied der Organisation wohlfühlen.</span></p>
            <p><span style="color: var(--color-heading)">Der Fachbereich HR ist im Onboarding Prozess federführend. Das
                    heißt, dort liegt der konzeptionell-strategische Part und auch das Sicherstellen einer qualitativ
                    guten Durchführung und Umsetzung. Das bedeutet aber eben auch, dass der HR-Bereich nicht allein für
                    die operative Umsetzung des Onboardings verantwortlich ist, sondern für die Prozessvorgaben und die
                    Evaluation. Für ein gelungenes Onboarding liegt die Verantwortung auch bei der direkten
                    Führungskraft, da sie die für die Position wichtigsten Rahmenbedingungen kennt, am passgenauesten
                    berücksichtigen kann und nah an Newcomer dran ist. </span><strong><span
                        style="color: var(--color-heading)">Um das dafür erforderliche Vertrauen aufzubauen, sollte sich
                        vom ersten Kontakt an darum bemüht werden, als hilfsbereit, serviceorientiert und offen
                        wahrgenommen zu werden. </span></strong><span style="color: var(--color-heading)">Dies gilt
                    natürlich nicht insbesondere für den Onboarding Prozess, sondern für die gesamte
                    Zusammenarbeit.</span></p>
            <p><span style="color: var(--color-heading)">Das Team ist für jedes Teammitglied der Bereich, in dem
                    Zusammenarbeit sowie fachlicher Austausch stattfindet, in dem </span><strong><span
                        style="color: var(--color-heading)">gegenseitiger Support erforderlich ist und in dem sich – im
                        Idealfall – alle wohlfühlen.</span></strong><span style="color: var(--color-heading)"> Nur wenn
                    diese Bedingungen für alle Teammitglieder erfüllt sind, kann das Team eine wirklich effiziente
                    Arbeit leisten und herausfordernde Ziele erreichen. </span></p>
            <p><span style="color: var(--color-heading)">Durch jede Veränderung im Team muss sich das Teamgefüge
                    allerdings neu finden, sich den neuen Gegebenheiten und Persönlichkeiten anpassen, um das optimale
                    Zusammenspiel wiederzufinden.</span></p>
            <p style="text-align: start"><span style="color: var(--color-heading)">Das ist für jedes einzelne
                    Teammitglied wichtig.</span><strong><span style="color: var(--color-heading)"> Daher ist auch das
                        Engagement für die neue Person durch jedes Teammitglied im Onboarding Prozess
                        wichtig.&nbsp;</span></strong></p>
            <p style="text-align: start"><span style="color: var(--color-heading)">Die </span><strong><span
                        style="color: var(--color-heading)">Teammitglieder</span></strong><span
                    style="color: var(--color-heading)"> sollten den Neueinstellungen also mit Hilfsbereitschaft, einem
                    regen Austausch und gemeinschaftlichen Aktionen den Start in das neue Team erleichtern und dadurch
                    das</span><strong><span style="color: var(--color-heading)"> Miteinander aktiv
                        fördern</span></strong><span style="color: var(--color-heading)">. So nehmen alle ihre Rolle auf
                    der Suche nach einem gemeinsamen Teamspirit in der Einarbeitungsphase wahr.</span></p>
            <h3><strong><span style="color: var(--color-heading)">Das Wichtigste zusammengefasst:</span></strong></h3>
            <ul>
                <li>
                    <p><span style="color: var(--color-heading)">Ein optimaler Onboarding-Prozess umfasst drei Phasen:
                            die Vorbereitung, Orientierung und Integration.</span></p>
                </li>
                <li>
                    <p><span style="color: var(--color-heading)">Die Dauer eines Onboarding hängt von der Komplexität
                            der Stelle und den Prozessen im Unternehmen ab. Die Einführungsphase beginnt mit der
                            Vertragsunterschrift und endet nach der Probezeit.</span></p>
                </li>
                <li>
                    <p><span style="color: var(--color-heading)">Im Onboarding geht es darum, neue Mitarbeiter
                            strukturiert mit ihren Aufgaben sowie gängigen Prozessen vertraut zu machen, ihnen die
                            Unternehmenskultur näher zu bringen und sie Kollegen vertraut zu machen</span></p>
                </li>
            </ul>
            <p><strong><span style="color: var(--color-error)">Seht den Onboarding Prozess als eine feste Aufgabe an und
                        räumt dieser Aufgabe entsprechende Zeit ein, damit die Mitarbeitenden es im Stress des Alltags
                        nicht nach hinten priorisieren.</span></strong></p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
definePageMeta({
    title: 'Onboarding Prozess',
    description: 'HR / Buchhaltung, -',
    category: 'HR / Buchhaltung',
    image: '/images/content/wiki/generisch/muster_2.jpg',
    middleware: ['auth', 'personal'],
    layout: 'auth',
})

useSeoMeta({
    title: 'Onboarding Prozess',
    description: 'HR / Buchhaltung, -',
})
</script>

<style lang="sass" scoped></style>