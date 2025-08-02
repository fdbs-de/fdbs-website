<template>
    <footer>
        <HeLimiter class="certificate-row">
            <h3>Zertifiziert durch</h3>
            <div class="wrapper">
                <a class="cert-wrapper" href="/downloads/certs/crefo.pdf" target="_blank">
                    <img src="/images/certs/crefo.jpg" alt="CreFo Zertifizierung">
                </a>
                <a class="cert-wrapper" href="/downloads/certs/qs.pdf" target="_blank">
                    <img src="/images/certs/qs.webp" alt="QS Zertifizierung">
                </a>
                <a class="cert-wrapper" href="/downloads/certs/orgainvent.pdf" target="_blank">
                    <img src="/images/certs/orgainvent.webp" alt="Orgainvent Zertifizierung">
                </a>
                <a class="cert-wrapper" href="/downloads/certs/bio.pdf" target="_blank">
                    <img src="/images/certs/bio.webp" alt="Bio Zertifizierung">
                </a>
                <a class="cert-wrapper" href="/downloads/certs/ifs.pdf" target="_blank">
                    <img src="/images/certs/ifs.webp" alt="IFS Wholesale Zertifizierung">
                </a>
                <div class="cert-wrapper">
                    <img src="/images/certs/lucid.webp" alt="LUCID Registrierungsnummer: DE3379292435101">
                </div>
                <a class="cert-wrapper" href="/downloads/certs/itw.pdf" target="_blank">
                    <img src="/images/certs/itw.webp" alt="Initiative Tierwohl Zertifizierung">
                </a>
            </div>
        </HeLimiter>

        <HeLimiter class="link-row">
            <div class="block">
                <h3 class="headline primary">Abholmarkt</h3>
                <div class="content">
                    <b>Öffnungszeiten:</b><br>
                    Mo - Do: 06:00 - 15:00<br>
                    Fr: 06:00 - 12:00<br>
                    <br>
                    <b>Bestellhotline:</b><br>
                    0531 - 210 55-23<br>
                    auftrag@fdbs.de<br>
                </div>
            </div>
            <div class="block">
                <h3 class="headline primary">Produkte & Services</h3>
                <nav class="navigation">
                    <NuxtLink class="link" v-for="item in productsMenu" :key="item.id" :to="item.href">{{ item.label }}
                    </NuxtLink>
                </nav>
            </div>
            <div class="block">
                <h3 class="headline primary">Über Uns</h3>
                <nav class="navigation">
                    <NuxtLink class="link" v-for="item in aboutMenu" :key="item.id" :to="item.href">{{ item.label }}
                    </NuxtLink>
                </nav>
            </div>
            <div class="block">
                <h3 class="headline primary">Rechtliches</h3>
                <nav class="navigation">
                    <NuxtLink class="link" v-for="item in legalMenu" :key="item.id" :to="item.href">{{ item.label }}
                    </NuxtLink>
                    <a class="link" href="#" @click.prevent="cookieBanner.open()">Cookie Einstellungen</a>
                </nav>
            </div>
        </HeLimiter>

        <HeLimiter class="copyright-row">
            <div class="row">
                <div class="copyright">
                    <img src="/images/branding/logo_sloganless_black.svg" alt="FDBS Logo">
                </div>
                <div class="spacer"></div>
                <div class="social-wrapper">
                    <a href="https://www.instagram.com/fdbs_foodservice/" target="_blank" rel="opener"
                        title="Instagram">
                        <img src="/images/social-icons/icon_instagram.svg" alt="Instagram">
                    </a>
                    <a href="https://www.xing.com/pages/fleischer-dienst-braunschweig-eg" target="_blank" rel="opener"
                        title="Xing">
                        <img src="/images/social-icons/icon_xing.svg" alt="Xing">
                    </a>
                    <a href="https://g.page/r/CWfKbNs4inYXEAg/review" target="_blank" rel="opener"
                        title="Bewerten Sie uns auf Google">
                        <img src="/images/social-icons/icon_google.svg" alt="Bewerten Sie uns auf Google">
                    </a>
                    <a href="https://www.facebook.com/FleischerDienstBraunschweig" target="_blank" rel="opener"
                        title="Facebook">
                        <img src="/images/social-icons/icon_facebook.svg" alt="Facebook">
                    </a>
                    <a href="https://www.linkedin.com/company/fdbsfoodservice" target="_blank" rel="opener"
                        title="LinkedIn">
                        <img src="/images/social-icons/icon_linkedin.svg" alt="LinkedIn">
                    </a>
                </div>
            </div>
        </HeLimiter>
    </footer>

    <AppCookieBanner ref="cookieBanner" />
</template>

<script setup>
const aboutMenu = useMenu('about')
const legalMenu = useMenu('legal')
const productsMenu = computed(() => {
    return useMenu('main').find(e => e.id === '4000')?.children || []
})

const cookieBanner = ref()
</script>

<style lang="sass" scoped>
    footer
        background: var(--color-background-soft)
        color: var(--color-text-soft)
        border-top: 5px solid var(--color-primary)
        display: flex
        flex-direction: column
        gap: 3rem
        padding-top: 3rem

        .certificate-row
            display: flex !important
            flex-direction: column
            gap: 1.5rem
            border: 1px solid var(--color-background-soft)

            h3
                text-align: center
                margin: 0
                font-weight: 600
                font-family: var(--font-heading)
                color: var(--color-text)
                font-size: 1.5rem

            .wrapper
                display: flex
                flex-wrap: wrap
                align-items: center
                justify-content: space-between
                gap: 1.5rem
                padding-bottom: 3rem
                border-bottom: 2px solid rgba(0,0,0,.1)

                .cert-wrapper
                    height: 6rem
                    border-radius: var(--radius-m)
                    background: var(--color-background)
                    box-shadow: var(--shadow-s)
                    filter: saturate(0)
                    padding: .5rem

                    img
                        height: 100%
                        width: 100%
                        max-width: 100%
                        object-fit: contain

                    &:hover,
                    &:focus
                        filter: saturate(1)

        .link-row
            display: grid !important
            grid-template-columns: repeat(4,minmax(200px,1fr))

            .block
                display: flex
                flex-direction: column

                h3
                    margin-block: 0 1rem
                    font-weight: 600
                    font-size: 1.5rem
                    color: var(--color-text)

                .navigation
                    display: flex
                    flex-direction: column

                    .link
                        background-image: url('/images/app/li_dot.svg')
                        background-repeat: no-repeat
                        background-size: .7rem
                        background-position: 0 center
                        padding-left: 1.5rem
                        transition: all 100ms
                        color: var(--color-primary)
                        filter: saturate(0)

                        &:hover,
                        &:focus
                            filter: saturate(1)
                            background-position: .3rem center

        .copyright-row
            display: flex !important

            .row
                border-top: 2px solid rgba(0,0,0,.1)
                flex: 1
                display: flex
                align-items: center
                height: 5rem
                gap: 1rem

            .copyright
                height: 2rem
                display: flex
                align-items: center
                gap: 1rem
                line-height: 1

                img
                    height: 2rem
                    width: auto
                    opacity: .6

                span
                    font-weight: 400

            .spacer
                flex: 1

            .social-wrapper
                display: flex
                gap: 1rem
                flex-wrap: wrap
                align-items: center

                > a
                    display: flex

                    &:hover
                        img
                            opacity: 1

                    img
                        height: 1.75rem
                        opacity: .8



    @media only screen and (max-width: 1000px)
        footer
            .link-row
                grid-template-columns: repeat(2,minmax(200px,1fr))
                gap: 3rem

    @media only screen and (max-width: 700px)
        footer
            gap: 0

            .certificate-row
                .wrapper
                    border-bottom: none
                    padding-bottom: 0

            .link-row
                grid-template-columns: 1fr
                gap: 0

                .block
                    margin-top: 1.5rem
                    border-top: 2px solid rgba(0,0,0,.1)

                    h3
                        margin-block: 1.5rem 1rem

            .copyright-row
                .row
                    flex-direction: column
                    height: auto
                    gap: 0
                    margin-top: 1.5rem

                    .spacer
                        display: none

                    .social-wrapper
                        width: 100%
                        order: 1
                        justify-content: center
                        border-bottom: 2px solid rgba(0,0,0,.1)
                        padding-block: 1.5rem

                    .copyright
                        order: 2
                        margin-block: 1.5rem
</style>