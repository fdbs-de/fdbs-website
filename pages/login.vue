<template>
    <SectionHero title="Anmelden im FDBS Loginbereich" image="/images/content/banner/foodservice_365702048_356901877_454625888.webp" />
    <SectionText>
        <div class="flex flex-wrap items-center gap-6">
            <div class="p-4 min-w-72 flex-1 flex flex-col gap-4 bg-zinc-100 rounded-lg">
                <h2 class="m-0 text-center">Anmelden</h2>
                <IodButton label="Zur Anmeldung" corner="pill" size="l" @click="auth.navigateToLogin('/intern')"/>
            </div>
            <div class="p-4 min-w-72 flex-1 flex flex-col gap-4 bg-zinc-100 rounded-lg">
                <h2 class="m-0 text-center">Registrieren</h2>
                <IodButton label="Zur Registrierung" corner="pill" size="l" @click="auth.navigateToRegister('/intern')"/>
            </div>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Anmelden im FDBS Loginbereich',
        description: '',
    })

    definePageMeta({
        middleware: 'guest',
    })

    const auth = useAuthStore()
</script>

<style lang="sass" scoped></style>
