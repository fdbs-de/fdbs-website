<template>
    <SectionText size="page" class="arrow-clip-bottom bg-slate-100 text-center">
        <img class="w-40 mx-auto" src="/images/content/maxi-france/mf_logo_2019.webp" alt="Maxi France">
        <h1 class="my-0 flex flex-col">
            <span class="text-rose-700">Maxi France</span>
            <span class="text-rose-700/80 text-lg">– Unsere Eigenmarke –</span>
        </h1>
    </SectionText>
    
    <SectionText>
        <h2 class="my-0">Die Marke im Überblick</h2>
        <p class="mt-4">
            Mit Maxi France erhalten Sie ein hochwertiges, französisches
            Marken-Jungbullenfleisch. Die Marke ist leicht verständlich und lässt die Herkunft des Fleisches sofort
            erkennen. Der Name ist für jedermann gut auszusprechen und vermittelt dem Endverbraucher französisches
            Flair. Die drei Sterne im Logo stehen zudem für höchste Qualität. Dadurch bedingt entsteht ein maximaler
            Wiedererkennungswert von Maxi France.
        </p>
        <p class="mt-4">
            Maxi France Erzeugnisse stammen zu 100 Prozent aus Frankreich – von
            der Geburt der Tiere über die Aufzucht bis hin zur Schlachtung und Herstellung. Schon die Auswahl der
            Lieferanten erfolgt nach strengen Vorgaben. Das Fleisch für die Maxi France Produkte kommt ausnahmslos von
            vorab geprüften familiengeführten Bauernhöfen. Artgerechte Aufzucht, natürliche Haltungsbedingungen und
            kurze Transportwege werden großgeschrieben.
        </p>
        <p class="mt-4">
            Maxi France unterliegt strengsten Kontrollen und sichert durch
            ein umfassendes Qualitäts-Sicherungsprogramm lückenlose Rückverfolgbarkeit – vom landwirtschaftlichen
            Betrieb bis zum POS. Dabei werden alle Prozesse von der Aufzucht bis zum POS unabhängig überwacht und
            kontrolliert.
        </p>
    </SectionText>
    
    <SectionText class="tilt-clip bg-slate-100">
        <h2 class="my-0">Die Rassenvielfalt von Maxi France</h2>
        <ul class="mt-6 flex flex-col gap-2 font-bold leading-6">
            <li class="flex items-center gap-2">
                <IodIcon icon="check_circle" class="w-10 h-10 rounded-lg bg-rose-700/10 text-rose-700"/> Salers – Fleischrasse
            </li>
            <li class="flex items-center gap-2">
                <IodIcon icon="check_circle" class="w-10 h-10 rounded-lg bg-rose-700/10 text-rose-700"/> Charolais – Fleischrasse
            </li>
            <li class="flex items-center gap-2">
                <IodIcon icon="check_circle" class="w-10 h-10 rounded-lg bg-rose-700/10 text-rose-700"/> Limousin – Fleischrasse
            </li>
            <li class="flex items-center gap-2">
                <IodIcon icon="check_circle" class="w-10 h-10 rounded-lg bg-rose-700/10 text-rose-700"/> Blonde d‘Aquitaine – Fleischrasse
            </li>
        </ul>
        <HeDivider class="mt-4" />
        <ul class="mt-4 flex flex-col gap-2 font-bold leading-6">
            <li class="flex items-center gap-2">
                <IodIcon icon="check_circle" class="w-10 h-10 rounded-lg bg-rose-700/10 text-rose-700"/> Race Normande – Zweinutzungsrasse
            </li>
            <li class="flex items-center gap-2">
                <IodIcon icon="check_circle" class="w-10 h-10 rounded-lg bg-rose-700/10 text-rose-700"/> Montbéliarde – Zweinutzungsrasse
            </li>
        </ul>
    </SectionText>

    <SectionText>
        <h2 class="my-0">Unser Sortiment</h2>
        <HeCarousel dots infinite arrows :interval="6500" class="mt-4 aspect-video rounded-xl">
            <template #1>
                <img src="/images/content/maxi-france/products/4990310_frz_jungbullen_semerrolle.webp" alt="Französisches Jungbullen Semerrolle" class="slide-image">
                <div class="slide-description">
                    <b>Französisches Jungbullen Semerrolle</b>
                    <small>Artikel-Nr.: 4990310</small>
                </div>
            </template>
            <template #2>
                <img src="/images/content/maxi-france/products/4990311_frz_jungbullen_cote_de_boeuf.webp" alt="Französisches Jungbullen Côte de Boeuf" class="slide-image">
                <div class="slide-description">
                    <b>Französisches Jungbullen Côte de Boeuf</b>
                    <small>Artikel-Nr.: 4990311</small>
                </div>
            </template>
            <template #3>
                <img src="/images/content/maxi-france/products/4990313_frz_jungbullen_brust_mit_knochen_01.webp" alt="Französisches Jungbullen Brust mit Knochen 01" class="slide-image">
                <div class="slide-description">
                    <b>Französisches Jungbullen Brust mit Knochen</b>
                    <small>Artikel-Nr.: 4990313</small>
                </div>
            </template>
            <template #4>
                <img src="/images/content/maxi-france/products/4990313_frz_jungbullen_brust_mit_knochen_02.webp" alt="Französisches Jungbullen Brust mit Knochen 02" class="slide-image">
                <div class="slide-description">
                    <b>Französisches Jungbullen Brust mit Knochen</b>
                    <small>Artikel-Nr.: 4990313</small>
                </div>
            </template>
            <template #5>
                <img src="/images/content/maxi-france/products/4990314_frz_jungbullen_brust_mit_knochen.webp" alt="Französisches Jungbullen Brust mit Knochen" class="slide-image">
                <div class="slide-description">
                    <b>Französisches Jungbullen Brust mit Knochen</b>
                    <small>Artikel-Nr.: 4990314</small>
                </div>
            </template>
            <template #6>
                <img src="/images/content/maxi-france/products/4990315_frz_jungbullen_onglet.webp" alt="Französisches Jungbullen Onglet" class="slide-image">
                <div class="slide-description">
                    <b>Französisches Jungbullen Onglet</b>
                    <small>Artikel-Nr.: 4990315</small>
                </div>
            </template>
            <template #7>
                <img src="/images/content/maxi-france/products/4990316_frz_jungbullen_inside_skirt.webp" alt="Französisches Jungbullen Inside Skirt" class="slide-image">
                <div class="slide-description">
                    <b>Französisches Jungbullen Inside Skirt</b>
                    <small>Artikel-Nr.: 4990316</small>
                </div>
            </template>
            <template #8>
                <img src="/images/content/maxi-france/products/4990317_frz_jungbullen_beef_hammer.webp" alt="Französisches Jungbullen Beef Hammer" class="slide-image">
                <div class="slide-description">
                    <b>Französisches Jungbullen Beef Hammer</b>
                    <small>Artikel-Nr.: 4990317</small>
                </div>
            </template>
            <template #9>
                <img src="/images/content/maxi-france/products/4990320_frz_jungbullen_flat_iron_steak.webp" alt="Französisches Jungbullen Flat Iron Steak" class="slide-image">
                <div class="slide-description">
                    <b>Französisches Jungbullen Flat Iron Steak</b>
                    <small>Artikel-Nr.: 4990320</small>
                </div>
            </template>
            <template #10>
                <img src="/images/content/maxi-france/products/4990330_frz_jungbullen_querrippe_01.webp" alt="Französisches Jungbullen Querrippe 01" class="slide-image">
                <div class="slide-description">
                    <b>Französisches Jungbullen Querrippe</b>
                    <small>Artikel-Nr.: 4990330</small>
                </div>
            </template>
            <template #11>
                <img src="/images/content/maxi-france/products/4990330_frz_jungbullen_querrippe_02.webp" alt="Französisches Jungbullen Querrippe 02" class="slide-image">
                <div class="slide-description">
                    <b>Französisches Jungbullen Querrippe</b>
                    <small>Artikel-Nr.: 4990330</small>
                </div>
            </template>
            <template #12>
                <img src="/images/content/maxi-france/products/4990330_frz_jungbullen_querrippe_03.webp" alt="Französisches Jungbullen Querrippe 03" class="slide-image">
                <div class="slide-description">
                    <b>Französisches Jungbullen Querrippe</b>
                    <small>Artikel-Nr.: 4990330</small>
                </div>
            </template>
            <template #13>
                <img src="/images/content/maxi-france/products/4990330_frz_jungbullen_querrippe_04.webp" alt="Französisches Jungbullen Querrippe 04" class="slide-image">
                <div class="slide-description">
                    <b>Französisches Jungbullen Querrippe</b>
                    <small>Artikel-Nr.: 4990330</small>
                </div>
            </template>
            <template #14>
                <img src="/images/content/maxi-france/products/24990314_frz_jungbullen_brust_ohne_knochen_02.webp" alt="Französisches Jungbullen Brust ohne Knochen 02" class="slide-image">
                <div class="slide-description">
                    <b>Französisches Jungbullen Brust ohne Knochen</b>
                    <small>Artikel-Nr.: 24990314</small>
                </div>
            </template>
            <template #15>
                <img src="/images/content/maxi-france/products/24990314_frz_jungbullen_brust_ohne_knochen.webp" alt="Französisches Jungbullen Brust ohne Knochen" class="slide-image">
                <div class="slide-description">
                    <b>Französisches Jungbullen Brust ohne Knochen</b>
                    <small>Artikel-Nr.: 24990314</small>
                </div>
            </template>
        </HeCarousel>
        <IodButton is="a" icon-left="call" label="Jetzt bestellen – 0531 210 55 23" href="tel:05312105523" target="_blank" size="xl" shadow="l" corner="l" color-preset="primary" class="mt-1 w-full" />
    </SectionText>
    
    <SectionCta class="tilt-clip" color="#be123c" src="/images/content/maxi-france/mf_trennbild_2.webp">
        <h2 class="text-white">Ihre Maxi France Vorteile:</h2>
        <ul class="flex flex-col gap-3 font-bold leading-6 max-w-xl">
            <li class="flex items-center gap-2">
                <IodIcon icon="check_circle" class="w-10 h-10 rounded-lg bg-white/20 text-white"/>
                100% pflanzliche Ernährung der Jungbullen, mineral- und vitaminhaltig
            </li>
            <li class="flex items-center gap-2">
                <IodIcon icon="check_circle" class="w-10 h-10 rounded-lg bg-white/20 text-white"/>
                Ständige unabhängige Kontrollen
            </li>
            <li class="flex items-center gap-2">
                <IodIcon icon="check_circle" class="w-10 h-10 rounded-lg bg-white/20 text-white"/>
                In Frankreich geborene, gehaltene und geschlachtete Jungbullen
            </li>
            <li class="flex items-center gap-2">
                <IodIcon icon="check_circle" class="w-10 h-10 rounded-lg bg-white/20 text-white"/>
                Natürliche, artgerechte Aufzucht und Haltung der Rinder (Weide/offene Stallhaltung)
            </li>
            <li class="flex items-center gap-2">
                <IodIcon icon="check_circle" class="w-10 h-10 rounded-lg bg-white/20 text-white"/>
                Kleinere Bauernhöfe/Erzeugergemeinschaften, traditionelle Landwirtschaft
            </li>
            <li class="flex items-center gap-2">
                <IodIcon icon="check_circle" class="w-10 h-10 rounded-lg bg-white/20 text-white"/>
                Garantierte Rückverfolgbarkeit der Jungbullen von der Geburt bis zur Verkaufsstelle gemäß der Vorschriften
            </li>
            <li class="flex items-center gap-2">
                <IodIcon icon="check_circle" class="w-10 h-10 rounded-lg bg-white/20 text-white"/>
                Garantierte Reifedauer für Barbecues und Bratenteilstücke
            </li>
            <li class="flex items-center gap-2">
                <IodIcon icon="check_circle" class="w-10 h-10 rounded-lg bg-white/20 text-white"/>
                Ausgewählte Fleisch- und Zweinutzungsrassen, keine reinen Milchrassen
            </li>
        </ul>

        <IodButton is="a" icon-left="call" label="Jetzt bestellen – 0531 210 55 23" href="tel:05312105523" target="_blank" size="xl" shadow="l" corner="l" background="var(--color-background)" color="var(--color-primary)" class="mt-1 w-full" />
    </SectionCta>

    
    <SectionText>
        <h2 class="my-0">Downloads</h2>
        <div class="mt-6 grid grid-cols-2 gap-4">
            <Card :is="NuxtLink" class="flex-1" aspect-ratio="16/9" target="_blank" name="Bullenschnitt" image="/images/content/maxi-france/mf_bullenschnitt.webp" to="/downloads/maxi-france/mf_bullenschnitt.pdf" />
            <Card :is="NuxtLink" class="flex-1" aspect-ratio="16/9" target="_blank" name="Rezeptflyer" image="/images/content/maxi-france/mf_rezeptflyer.webp" to="/downloads/maxi-france/mf_rezeptflyer.pdf" />
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Maxi France – Eigenmarke',
        description: 'Maxi France bietet hochwertiges, französisches Marken-Jungbullenfleisch mit garantierter Rückverfolgbarkeit und höchsten Qualitätsstandards.',
    })

    const NuxtLink = defineNuxtLink({})
</script>

<style lang="sass" scoped>
    .tilt-clip
        clip-path: polygon(0 0, 100% 4vw, 100% 100%, 0 calc(100% - 4vw))
        padding-block: 9rem

    .arrow-clip-bottom
        clip-path: polygon(0 0, 100% 0, 100% calc(100% - 4vw), 50% 100%, 0 calc(100% - 4vw))
        padding-bottom: 7rem

    .slide-description
        position: absolute
        top: .5rem
        left: .5rem
        right: .5rem
        display: flex
        flex-direction: column
        line-height: 1.3
        color: white
        background-color: rgb(0, 0, 0, .4)
        padding: .75rem
        border-radius: .5rem
        backdrop-filter: blur(12px)

    .slide-image
        width: 100%
        height: 100%
        object-fit: contain
        padding: .5rem
        border-radius: .5rem
</style>
