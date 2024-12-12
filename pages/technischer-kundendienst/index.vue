<template>
    <SectionHero title="Technischer Kundendienst" image="/images/content/banner/service_425530867_425530980_436047070_425530651_425530924_425530335.webp" />
    <SectionKeyfacts :keyfacts="keyfacts" title="Unsere Leistungen im Überblick"/>
    <SectionText>
        <img src="/images/content/customerservice/service_393833200.png" alt="Service" class="mb-12 rounded-lg">
        <h2>Service</h2>
        <ul class="list-disc pl-6">
            <li>
                <b>Reparatur und Wartung</b> von Fleischereimaschinen,
                Gewerbespülmaschinen, Kombidämpfer, Herden,
                Kippbratpfannen und weitere thermische Geräte,
                Vakuumgeräte
            </li>
            <li><b>Geräteprüfung nach DGUV V3</b></li>
            <li>
                <b>Schleifarbeiten:</b> Kuttermesser, Wolfscheiben,
                Aufschnittmaschinenmesser, Hand-Messer, usw
            </li>
            <li><b>Begradigungen</b> von Hackblock und Schneidbrett</li>
            <li><b>Schweißarbeiten</b></li>
            <li><b>Kältedichtungen,</b> auch im Sondermaß</li>
            <li><b>Herstellerunabhängig!</b></li>
        </ul>
        <br><br><br>

        <img src="/images/content/customerservice/chemie_408353537.png" alt="Chemie" class="mb-12 rounded-lg">
        <h2>Chemie</h2>
        <ul class="list-disc pl-6">
            <li>
                <b>Reinigung</b> ihrer Kombidämpfer;
                automatisch oder manuell
            </li>
            <li>
                <b>Reinigerchemie</b> für ihre Spülmaschine: Immer die
                richtige Chemie für ihr perfektes Spülergebnis;
                egal ob Porzellan, Kunststoff, Besteck oder Gläser
            </li>
            <li>
                <b>Wir beraten Sie</b> vor Ort und stellen bei Bedarf
                ihre Geräte auf die benötigten Reiniger ein
            </li>
            <li>
                <b>Hygienisches Spülergebnis</b> und <b>Kostenersparnis</b>
                durch die richtige Dosierung
            </li>
        </ul>
        <br><br><br>
        
        <img src="/images/content/customerservice/verkauf_253708394.png" alt="Verkauf & Planung" class="mb-12 rounded-lg">
        <h2>Verkauf & Planung</h2>
        <ul class="list-disc pl-6">
            <li>
                Verkauf von Fleischerei- und Großküchenbedarf – vom Schneidebrett bis zum maßgeplanten Küchenblock
            </li>
            <li>Küchenplanung für Gewerbeküchen</li>
            <li>
                Edelstahlarbeiten nach Aufmaß vor Ort für Regale, Tische, Schränke, Abzugshauben, Eckschutzschienen, usw.
            </li>
            <li>Kühlraum- und Betriebsraumtüren mit Aufmaß vor Ort</li>
        </ul>
        <p>
            Sie haben ein besonderes Anliegen?<br>
            Sprechen Sie uns an!<br><br><br>
        </p>

        <img src="/images/content/customerservice/wasseraufbereitung_604959639.png" alt="Wasseraufbereitung" class="mb-12 rounded-lg">
        <h2>Wasseraufbereitung</h2>
        <ul class="list-disc pl-6">
            <li>
                <b>Perfektes Wasser</b> für jede Gelegenheit!
                Egal ob Kaffee, Kochen oder Spülen, wir ermitteln
                ihren Bedarf und finden für sie die richtige
                Wasseraufbereitung
            </li>
            <li><b>Prüfen</b> ihrer Wasserqualität</li>
        </ul>
    </SectionText>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Technischer Kundendienst',
        description: '',
    })

    const keyfacts = ref([
        { name: "Service", icon: "support_agent" },
        { name: "Chemie", icon: "science" },
        { name: "Verkauf & Planung", icon: "sell" },
        { name: "Wasseraufbereitung", icon: "local_drink" },
        { name: "Maschinen", icon: "blender" },
    ])
</script>

<style lang="sass" scoped></style>
