<template>
    <SectionHero title="Eigenmarke: Maxi France" image="/images/content/banner/marken_509487561.webp" />
    
    <SectionText>
        <div class="py-12 flex items-center justify-center bg-rose-700 rounded-lg">
            <img class="w-40" src="/images/content/maxi-france/mf_logo_2019.webp" alt="Maxi France">
        </div>
        <p class="mt-6">
            Mit Maxi France erhalten Sie ein hochwertiges, französisches
            Marken-Jungbullenfleisch. Die Marke ist leicht verständlich und lässt die Herkunft des Fleisches sofort
            erkennen. Der Name ist für jedermann gut auszusprechen und vermittelt dem Endverbraucher französisches
            Flair. Die drei Sterne im Logo stehen zudem für höchste Qualität. Dadurch bedingt entsteht ein maximaler
            Wiedererkennungswert von Maxi France. Maxi France Erzeugnisse stammen zu 100 Prozent aus Frankreich – von
            der Geburt der Tiere über die Aufzucht bis hin zur Schlachtung und Herstellung. Schon die Auswahl der
            Lieferanten erfolgt nach strengen Vorgaben. Das Fleisch für die Maxi France Produkte kommt ausnahmslos von
            vorab geprüften familiengeführten Bauernhöfen. Artgerechte Aufzucht, natürliche Haltungsbedingungen und
            kurze Transportwege werden großgeschrieben. Maxi France unterliegt strengsten Kontrollen und sichert durch
            ein umfassendes Qualitäts-Sicherungsprogramm lückenlose Rückverfolgbarkeit – vom landwirtschaftlichen
            Betrieb bis zum POS. Dabei werden alle Prozesse von der Aufzucht bis zum POS unabhängig überwacht und
            kontrolliert.
        </p>


        <div class="mt-16 bg-slate-100 rounded-2xl p-4">
            <img class="rounded-lg" src="/images/content/maxi-france/mf_trennbild_1.webp" alt="Bullenherde auf einer Wiese">
            <h2 class="my-0 mt-6">Die Rassenvielfalt von Maxi France</h2>
            <ul class="mt-4 flex flex-col gap-2 font-bold leading-6">
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
                <li class="flex items-center gap-2">
                    <IodIcon icon="check_circle" class="w-10 h-10 rounded-lg bg-orange-600/10 text-orange-600"/> Race Normande – Zweinutzungsrasse
                </li>
                <li class="flex items-center gap-2">
                    <IodIcon icon="check_circle" class="w-10 h-10 rounded-lg bg-orange-600/10 text-orange-600"/> Montbéliarde – Zweinutzungsrasse
                </li>
            </ul>
        </div>
    </SectionText>
    
    <SectionCta id="usps" color="var(--color-primary)" src="/images/content/maxi-france/mf_trennbild_2.webp">
        <h2 class="text-white">Ihre Maxi France Vorteile:</h2>
        <ul class="flex flex-col gap-2 font-bold leading-6 max-w-2xl">
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
    </SectionCta>

    
    <SectionText>
        <div class="mt-16 bg-slate-100 rounded-2xl p-4">
            <h2 class="my-0">Maxi France – Unser Sortiment</h2>
            <HeCarousel dots infinite arrows :interval="7500" overlay class="mt-6 w-full aspect-video rounded-lg border">
                <template #1><img src="/images/content/maxi-france/products/4990310_frz_jungbullen_semerrolle.webp" alt="Französisches Jungbullen Semerrolle" class="aspect-video object-contain"></template>
                <template #2><img src="/images/content/maxi-france/products/4990311_frz_jungbullen_cote_de_boeuf.webp" alt="Französisches Jungbullen Côte de Boeuf" class="aspect-video object-contain"></template>
                <template #3><img src="/images/content/maxi-france/products/4990313_frz_jungbullen_brust_mit_knochen_01.webp" alt="Französisches Jungbullen Brust mit Knochen 01" class="aspect-video object-contain"></template>
                <template #4><img src="/images/content/maxi-france/products/4990313_frz_jungbullen_brust_mit_knochen_02.webp" alt="Französisches Jungbullen Brust mit Knochen 02" class="aspect-video object-contain"></template>
                <template #5><img src="/images/content/maxi-france/products/4990314_frz_jungbullen_brust_mit_knochen.webp" alt="Französisches Jungbullen Brust mit Knochen" class="aspect-video object-contain"></template>
                <template #6><img src="/images/content/maxi-france/products/4990315_frz_jungbullen_onglet.webp" alt="Französisches Jungbullen Onglet" class="aspect-video object-contain"></template>
                <template #7><img src="/images/content/maxi-france/products/4990316_frz_jungbullen_inside_skirt.webp" alt="Französisches Jungbullen Inside Skirt" class="aspect-video object-contain"></template>
                <template #8><img src="/images/content/maxi-france/products/4990317_frz_jungbullen_beef_hammer.webp" alt="Französisches Jungbullen Beef Hammer" class="aspect-video object-contain"></template>
                <template #9><img src="/images/content/maxi-france/products/4990320_frz_jungbullen_flat_iron_steak.webp" alt="Französisches Jungbullen Flat Iron Steak" class="aspect-video object-contain"></template>
                <template #10><img src="/images/content/maxi-france/products/4990330_frz_jungbullen_querrippe_01.webp" alt="Französisches Jungbullen Querrippe 01" class="aspect-video object-contain"></template>
                <template #11><img src="/images/content/maxi-france/products/4990330_frz_jungbullen_querrippe_02.webp" alt="Französisches Jungbullen Querrippe 02" class="aspect-video object-contain"></template>
                <template #12><img src="/images/content/maxi-france/products/4990330_frz_jungbullen_querrippe_03.webp" alt="Französisches Jungbullen Querrippe 03" class="aspect-video object-contain"></template>
                <template #13><img src="/images/content/maxi-france/products/4990330_frz_jungbullen_querrippe_04.webp" alt="Französisches Jungbullen Querrippe 04" class="aspect-video object-contain"></template>
                <template #14><img src="/images/content/maxi-france/products/24990314_frz_jungbullen_brust_ohne_knochen_02.webp" alt="Französisches Jungbullen Brust ohne Knochen 02" class="aspect-video object-contain"></template>
                <template #15><img src="/images/content/maxi-france/products/24990314_frz_jungbullen_brust_ohne_knochen.webp" alt="Französisches Jungbullen Brust ohne Knochen" class="aspect-video object-contain"></template>
            </HeCarousel>
        </div>


        <div class="mt-16 bg-slate-100 rounded-2xl p-4">
            <h2 class="my-0">Maxi France – Downloads</h2>
            <div class="mt-6 grid grid-cols-2 gap-4">
                <Card :is="NuxtLink" class="flex-1" aspect-ratio="16/9" target="_blank" name="Bullenschnitt" image="/images/content/maxi-france/mf_bullenschnitt.webp" to="/downloads/maxi-france/mf_bullenschnitt.pdf" />
                <Card :is="NuxtLink" class="flex-1" aspect-ratio="16/9" target="_blank" name="Rezeptflyer" image="/images/content/maxi-france/mf_rezeptflyer.webp" to="/downloads/maxi-france/mf_rezeptflyer.pdf" />
                <Card :is="NuxtLink" class="flex-1" aspect-ratio="16/9" target="_blank" name="Salesfolder" image="/images/content/maxi-france/mf_salesfolder.webp" to="/downloads/maxi-france/mf_salesfolder.pdf" />
            </div>
        </div>
        

        <div class="mt-16 p-6 flex flex-col bg-rose-700 rounded-lg">
            <p class="m-0 text-rose-100">Jetzt bestellen:</p>
            <h3 class="m-0 text-rose-50">0531 210 55 23</h3>
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
    #usps
        clip-path: polygon(0 0, 100% 5vw, 100% 100%, 0 calc(100% - 5vw))
        padding-block: 8rem 11rem
</style>
