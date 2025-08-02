<template>
    <SectionCta id="hero" color="#0069B1"
        src="/images/content/customerservice/dueker-rex/maga-fleischpresse-banner.jpg">
        <h1>Fleisch in Bestform.</h1>
        <div>
            <p>
                Ob Rouladen, Schnitzel, Koteletts oder Burger:<br>
                Die halbautomatische MAGA Fleischpresse <br>
                übernimmt das manuelle Plattieren von Fleisch – <br>
                gleichmäßig, schonend und zeitsparend. <br><br>
            </p>
            <b>Für eine evtl. Finanzierung - Leasing oder Mietkauf<br>
                Sprechen Sie uns gerne an!</b><br>
        </div>
        <IodButton is="a" href="/downloads/flyer-fleischpresse-2025.pdf" size="l" corner="pill" label="Zum Flyer"
            background="var(--color-on-primary)" color="#0069B1" target="_blank" />
    </SectionCta>

    <SectionText>
        <h2 class="my-0">MAGA Fleischpresse</h2>
        <p class="mt-4">
            Die halbautomatische MAGA Fleischpresse revolutioniert den Arbeitsprozess in Fleischverarbeitung und
            Gastronomie. Sie übernimmt das manuelle Plattieren von Fleisch für Rouladen, Koteletts, Schnitzel oder
            Burger – gleichmäßig, sanft und exakt.
        </p>
        <p class="mt-4">
            Auch vegetarische Burger oder Pizzateig-Bälle lassen sich mühelos formen. Die integrierte 4-stufige
            Sensorschaltung sorgt für maximale Sicherheit im Betrieb. Dank kompakter Bauweise ist die Presse schnell auf
            Arbeitstischen oder Untergestellen installiert und sofort einsatzbereit. Die Pressplatte ist
            spülmaschinengeeignet und damit besonders pflegeleicht.
        </p>

        <img src="/images/content/customerservice/dueker-rex/maga-fleischpresse-1.jpg" alt="MAGA Fleischpresse"
            class="rounded-lg mt-12">

        <h3 class="my-0 mt-10">Geräteeigenschaften</h3>
        <ul class="list-disc pl-6 mt-4">
            <li>
                bis zu 800 Portionen pro Stunde
            </li>
            <li>
                Stufenlos einstellbare Portionsstärke (0,5 mm bis 30 mm)
            </li>
            <li>
                Sensorgesteuerte 4-stufige Sicherheitsautomatik
            </li>
            <li>
                Schnelles Aufstellen auf Arbeitsplatten oder Untergestellen
            </li>
            <li>
                Spülmaschinenfeste Pressplatte
            </li>
        </ul>

        <h3 class="my-0 mt-10">Gerätespezifikationen</h3>
        <ul class="list-disc pl-6 mt-4">
            <li>
                Maße: 700 x 460 x 600 mm
            </li>
            <li>
                Gewicht: 120 kg
            </li>
            <li>
                Spannung: 400 V
            </li>
            <li>
                Motorleistung: 1,5 kW
            </li>
            <li>
                Teller-Durchmesser: 300 mmm
            </li>
        </ul>

        <img src="/images/content/customerservice/dueker-rex/maga-fleischpresse-2.jpg" alt="MAGA Fleischpresse"
            class="rounded-lg mt-12">

        <p class="text-center mt-10">
            Für eine evtl. Finanzierung, Leasing oder Mietkauf melden Sie sich gerne<br>
            unter
            <a target="_self" rel="noopener noreferrer nofollow" href="tel:05312105541"
                style="color:var(--color-primary)">0531-210 55 - 41</a>
            oder schreiben Sie eine Mail an
            <a target="_self" rel="noopener noreferrer nofollow" href="mailto:service@fdbs.de"
                style="color:var(--color-primary)">service@fdbs.de</a>
        </p>
    </SectionText>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Top Aktuelles vom technischen Kundendienst',
        description: '',
    })

    const NuxtLink = defineNuxtLink({})
</script>

<style lang="sass" scoped>
    #hero
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))
        padding-block: 8rem 13rem
        margin-bottom: 3rem

        h1
            font-size: clamp(2rem, 10vw, 3.5rem)
            font-weight: 600
            margin-block: 0
            color: inherit
            max-width: 700px

        .iod-button
            max-width: 400px
</style>
