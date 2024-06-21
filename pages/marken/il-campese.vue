<template>
    <SectionHero title="Il Campese" image="/images/content/banner/marken_509487561.webp" />
    <SectionText>
        <div class="mb-12 py-12 flex items-center justify-center bg-amber-500 rounded-lg">
            <img class="w-40" src="/images/content/marken/il-campese/ilcampese_logo.png" alt="Il Campese">
        </div>

        <p>
            Die Story des mediterranen Freilandhähnchens Amadori wurde 1969 in San
            Vittore di Cesena gegründet. Das Familienunternehmen, dass sich in der
            zweiten Generation befindet, verbindet Tradition und Innovation.<br><br>
        </p>

        <p>
            Das IFS zertifizierte Unternehmen profitiert von der langjährigen
            Erfahrung und Expertise seiner Mitarbeiter, die jeden Tag mit Leidenschaft
            daran arbeiten, ihren Endverbrauchern frische, gesunde und schmackhafte
            Produkte anbieten zu können. Zum Erfolgsrezept des Unternehmens gehört
            essenziell die Versorgungskette.<br>
            Denn Amadori ist ein echter
            Selbstversorger: Futterherstellung, Zuchtfarmen, Brütereien und Aufzucht
            der sowohl männlichen als auch weiblichen Tiere. So kann die Firma die
            angemessene Fütterung und Aufzucht der Tiere, die schnelle und sichere
            Zulieferung sowie die Qualität ihrer Produkte garantieren.<br><br>
        </p>

        <p>
            „Il Campese Hubbard JA57“ ist der Name der eigenen Rasse. Dabei werden
            stets hohe internationale Standards berücksichtigt: Die Tiere werden mit
            Freilandhaltung in der Region Apulien gehalten, mit einem sehr
            mediterranen Klima, mit 100% pflanzlicher Ernährung, davon 20 % Mais, was
            sich in Geschmack und Optik widerspiegelt.<br><br>
        </p>

        <p>
            Auf den Einsatz von Antibiotika und Gentechnik wird verzichtet. Tierwohl
            wird hier großgeschrieben. Die hohen Standards hat sich das Unternehmen
            selbst gesetzt und durch Zertifikate untermauert.<br><br>
        </p>

        <h2>Warum Il Campese-Hähnchen so gut ist:</h2>
        <ul class="list-disc pl-6">
            <li>Ohne Gentechnik (GVO)</li>
            <li>Keine Antibiotika</li>
            <li>100 % pflanzliche Fütterung, mit 20 % Maisanteil</li>
            <li>Tierwohl durch mehr Platz</li>
            <li>Kurze Transportwege</li>
        </ul>
        <br><br>

        <div class="mb-12 p-6 flex flex-col gap-6 border border-solid border-zinc-100 rounded-lg">
            <div>
                <h3 class="m-0">Herkunft</h3>
                <p class="m-0">Region Apulien in Süd-Italien</p>
            </div>
            <img class="max-w-40 mx-4" src="/images/content/marken/il-campese/italien_lage.png" alt="Herkunft">
        </div>

        <div class="mb-12 p-6 flex flex-col gap-6 border border-solid border-zinc-100 rounded-lg">
            <div>
                <h3 class="m-0">Die Il Campese-Produktvielfalt</h3>
                <p class="m-0">Für Bedienungs- und SB-Theken!</p>
            </div>
            <img class="rounded-lg" src="/images/content/marken/il-campese/campese_produkte.jpg" alt="Il Campese Produktauswahl"/>
        </div>



        <div class="mb-12 p-6 flex flex-col gap-6 bg-amber-500 rounded-lg">
            <div>
                <p class="m-0 text-amber-800">Jetzt bestellen:</p>
                <h3 class="m-0 text-amber-900">0531 210 55 23</h3>
            </div>
        </div>
        
        <div class="flex gap-6">
            <Card :is="NuxtLink" class="flex-1" aspect-ratio="16/9" target="_blank" name="Il Campese Broschüre" image="/images/content/marken/il-campese/italfino_amadori.jpg" to="/downloads/marken/ilcampese_imageflyer.pdf" />
            <Card :is="NuxtLink" class="flex-1" aspect-ratio="16/9" target="_blank" name="Il Campese Rezepte" image="/images/content/marken/il-campese/campese_rezepte.jpg" to="/downloads/marken/ilcampese_rezeptflyer.pdf" />
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Il Campese',
        description: '',
    })

    const NuxtLink = defineNuxtLink({})
</script>

<style lang="sass" scoped></style>
