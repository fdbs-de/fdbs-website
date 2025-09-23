<template>
    <SectionCta id="hero" color="var(--color-primary)" src="/images/content/online-shop/online-shop-cover.jpg">
        <h1>Ein Klick. Alles da.</h1>
        <div>
            <p>
                Entdecken Sie unsere große Auswahl an<br>
                frischen und hochwertigen Lebensmitteln -<br>
                einfach, schnell und zuverlässig bestellt.<br><br>
            </p>
            <b>👉 Jetzt den neuen Online-Shop testen und<br>
                bequem einkaufen!</b><br>
        </div>
        <IodButton is="a" href="/downloads/online-shop-flyer.pdf" size="l" corner="pill" label="Jetzt informieren"
            background="var(--color-on-primary)" color="var(--color-primary)" target="_blank" />
    </SectionCta>

    <SectionText>
        <h2 class="my-0">Einfach online bestellen - mit ChefsList</h2>
        <p class="mt-4">
            Ab sofort können Sie Ihre Bestellungen bei uns ganz einfach und bequem über Chefslist tätigen. Mit dem
            digitalen Webshop haben Sie unser komplettes Sortiment jederzeit im Blick – inklusive Ihrer
            individuellen Preise und aktuellen Verfügbarkeiten. So bestellen Sie rund um die Uhr, flexibel und
            unabhängig von Öffnungszeiten.
        </p>
        <p class="mt-4">
            Ob per Smartphone, Tablet oder Computer: Mit Chefslist erledigen Sie Ihre Bestellungen schnell,
            übersichtlich und effizient, ohne lange Telefonate oder Papierkram. Einfach einloggen, auswählen und
            bestellen – so leicht geht Einkauf heute.
        </p>
    </SectionText>
    <SectionText class="tilt-clip bg-slate-100">
        <h2 class="my-0">So bequem wie nie zuvor:</h2>
        <ul class="mt-6 flex flex-col gap-2 font-bold leading-6">
            <li class="flex items-center gap-2">
                <IodIcon icon="check_circle" class="w-10 h-10 rounded-lg bg-rose-700/10 text-rose-700" /> Rund um die
                Uhr einkaufen - unabhängig von Öffnungszeiten
            </li>
            <li class="flex items-center gap-2">
                <IodIcon icon="check_circle" class="w-10 h-10 rounded-lg bg-rose-700/10 text-rose-700" /> Große
                Produktauswahl - alles von Frische bis Feinkost
            </li>
            <li class="flex items-center gap-2">
                <IodIcon icon="check_circle" class="w-10 h-10 rounded-lg bg-rose-700/10 text-rose-700" /> Einfache
                Bedienung - übersichtlich, schnell und sicher
            </li>
            <li class="flex items-center gap-2">
                <IodIcon icon="check_circle" class="w-10 h-10 rounded-lg bg-rose-700/10 text-rose-700" /> Zuverlässige
                Lieferung - direkt zu Ihnen ins Unternehmen
            </li>
        </ul>
        <p><br></p>
        <IodButton is="a" label="Jetzt informieren" href="/downloads/online-shop-flyer.pdf" target="_blank" size="xl"
            shadow="l" corner="l" background="var(--color-primary)" color="var(--color-on-primary)"
            class="mt-1 w-full" />
    </SectionText>
    <SectionText class="overview">
        <div class="grid">
            <div class="flex-1">
                <img src="/images/content/online-shop/online-shop-2.png" alt="Online-Shop" class="rounded-lg mt-12">
            </div>
            <p class="flex-1">
                Die Implementierung des Online-Shops ist ein wichtiger Schritt in die digitale Zukunft unseres
                Unternehmens – mit einem klaren Ziel: <br><br><b>Unseren Kunden den bestmöglichen Service zu bieten und
                    gleichzeitig interne Abläufe nachhaltig zu optimieren.</b>
            </p>
        </div>
        <p class="text-center mt-20">
            Wollen Sie sich für den Online-Shop registrieren lassen?<br>
            Kontakieren Sie Ihren Außendienstler oder rufen <br>
            Sie uns an unter
            <a target="_self" rel="noopener noreferrer nofollow" href="tel:05312105523"
                style="color:var(--color-primary)">0531-210 55 - 23</a>
        </p>
    </SectionText>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Online-Shop',
        description: '',
    })

    const NuxtLink = defineNuxtLink({})
</script>

<style lang="sass" scoped>
    .tilt-clip
        --cut: 5vw    
        clip-path: polygon(0 var(--cut), 100% 0, 100% calc(100% - var(--cut)), 0 100%)
        padding-block: 9rem    

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
    .overview
        .grid
            display: flex
            gap: 2rem
            align-items: center
            
            div
                display: block
                border-radius: 1rem
                overflow: hidden

            img
                border-radius: 1rem 1rem 0 0
                width: 100%
                display: flex
</style>
