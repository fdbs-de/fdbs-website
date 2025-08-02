<template>
    <Transition name="slide">
        <div ref="cookieBanner" id="cookie-banner" class="small-scrollbar" v-show="isOpen">
            <div class="page" v-if="page === 'overview'">
                <h4 class="px-2 m-0 text-lg">Wir verwenden Cookies!</h4>
                <span class="px-2">
                    Diese Seite nutzt Website Tracking-Technologien von Dritten, um ihre Dienste anzubieten, stetig zu verbessern.
                    Ich bin damit einverstanden und kann meine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen oder ändern.
                </span>
                <div class="flex flex-col gap-4 my-2">
                    <IodButton type="button" corner="l" size="m" color-preset="primary" variant="contained" label="Optionale ablehnen" @click="denyAll"/>
                    <IodButton type="button" corner="l" size="l" color-preset="primary" variant="filled" label="Alle akzeptieren" @click="acceptAll"/>
                </div>
                <span class="flex flex-wrap items-center gap-2 px-2">
                    <a href="#" @click.prevent="setPage('settings')">Mehr erfahren</a>
                    <span>·</span>
                    <NuxtLink to="/impressum">Impressum</NuxtLink>
                    <span>·</span>
                    <NuxtLink to="/datenschutz">Datenschutz</NuxtLink>
                </span>
            </div>

            <div class="page" v-if="page === 'settings'">
                <h4 class="px-2 m-0 text-lg">Cookie Info</h4>
                <span class="px-2" v-for="service in services">
                    {{ service.name }} ({{ service.type }} Cookie)<br>
                    <a v-if="service.privacyPolicy" target="_blank" :href="service.privacyPolicy">Datenschutzerklärung</a>
                </span>
                <!-- <IodButton type="button" corner="l" size="m" color-preset="primary" variant="filled" label="Auswahl akzeptieren" @click="acceptAll"/> -->
                <span class="flex flex-wrap items-center gap-2 px-2">
                    <a href="#" @click.prevent="setPage('overview')">Zur Übersicht</a>
                    <span>·</span>
                    <NuxtLink to="/impressum">Impressum</NuxtLink>
                    <span>·</span>
                    <NuxtLink to="/datenschutz">Datenschutz</NuxtLink>
                </span>
            </div>
        </div>
    </Transition>
</template>

<script lang="ts" setup>
    const cookieBanner = ref()
    const services = useCookieServices()

    const isOpen = ref(false)
    const page = ref('overview')

    function open() {
        isOpen.value = true
    }

    function close() {
        isOpen.value = false
        localStorage.setItem('has_seen_cookie_banner', 'yes')
    }

    function setPage(p: 'overview' | 'settings') {
        page.value = p
    }

    function acceptAll() {
        for (const service of services.value) {
            service.setConsent('yes')
        }

        close()
    }

    function denyAll() {
        for (const service of services.value) {
            service.setConsent('no')
        }

        close()
    }

    onMounted(() => {
        if (!localStorage.getItem('has_seen_cookie_banner')) {
            open()
        }
    })

    defineExpose({
        open,
        close,
        setPage,
        acceptAll,
        denyAll,
    })
</script>

<style lang="sass" scoped>
    .slide-enter-active,
    .slide-leave-active
        transition: all 300ms ease-in-out !important

    .slide-enter-from,
    .slide-leave-to
        transform: translateY(2rem)
        opacity: 0

    #cookie-banner
        position: fixed
        z-index: 9000
        bottom: .5rem
        left: .5rem
        display: flex
        flex-direction: column
        width: calc(100% - 1rem)
        max-width: 26rem
        max-height: calc(100vh - 1rem)
        border-radius: var(--radius-xl)
        overflow-y: scroll
        background: rgba(255, 255, 255, 0.85)
        backdrop-filter: blur(20px)
        border: 1px solid var(--color-background-soft)
        box-shadow: var(--shadow-s)

        &::after
            content: ''
            position: absolute
            top: -2rem
            left: -2rem
            width: 50%
            aspect-ratio: 1
            background-image: url(/images/app/cookie.svg)
            background-size: 100%
            background-repeat: no-repeat
            z-index: 0
            opacity: .03
            pointer-events: none

        .page
            position: relative
            z-index: 2
            display: flex
            flex-direction: column
            gap: 1rem
            padding: 1.5rem 1rem
            line-height: 1.5

            a
                color: var(--color-text)

            a:hover
                text-decoration: underline
</style>