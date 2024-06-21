<template>
    <section class="pt-4">
        <HeLimiter>
            <ProfileCard
                class="rounded-xl border border-solid border-zinc-100"
                :banner="auth.user.profile_banner"
                :image="auth.user.profile_image"
                :title="auth.user.name"
                :subtitle="auth.user.email"
                :allow-image-upload="auth.domain.policy_allow_profile_image_upload"
                :allow-banner-upload="auth.domain.policy_allow_profile_banner_upload"
            />
        </HeLimiter>
    </section>
    <SectionText>
        <div class="mb-12 flex items-center gap-4">
            <IodButtonGroup class="flex-1">
                <IodButton type="button" label="Allgemeines" @click="tab = 'general'" :variant="tab === 'general' ? 'filled' : 'contained'" />
                <IodButton type="button" label="Passwort" @click="tab = 'password'" :variant="tab === 'password' ? 'filled' : 'contained'" />
                <IodButton type="button" label="2FA" @click="tab = '2fa'" :variant="tab === '2fa' ? 'filled' : 'contained'" />
            </IodButtonGroup>
            
            <IodButton type="button" label="Abmelden" icon-right="logout" color-preset="error" @click="auth.logout()" />
        </div>

        <form class="flex flex-col gap-4" v-show="tab === 'general'" @submit.prevent>
            <h3 class="m-0">Allgemeines</h3>
            <IodInput label="Email" v-model="auth.user.email" :disabled="!auth.domain.policy_allow_email_change"/>
            <IodInput label="Username" v-model="auth.user.username" :disabled="!auth.domain.policy_allow_username_change"/>
            <IodInput label="Vorname" v-model="auth.user.firstname"/>
            <IodInput label="Nachname" v-model="auth.user.lastname"/>
            <IodInput label="Firma" v-model="auth.user.company"/>
            <IodButton label="Speichern" />
        </form>

        <form class="flex flex-col gap-4" v-show="tab === 'password'" @submit.prevent>
            <h3 class="m-0">Passwort</h3>
            <IodInput type="passwort" label="Altes Passwort"/>
            <IodInput type="passwort" label="Neues Passwort"/>
            <IodButton label="Passwort ändern" />
        </form>

        <form class="flex flex-col gap-4" v-show="tab === '2fa'" @submit.prevent>
            <h3 class="m-0">Zwei Faktor Authentifizierung</h3>
            <IodButton label="Zwei Faktor Authentifizierung überprüfen" />
        </form>
    </SectionText>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Profil',
        description: '',
    })

    definePageMeta({
        middleware: 'auth',
        layout: 'auth',
    })

    const auth = useAuthStore()
    const tab = ref('general')
</script>

<style lang="sass" scoped></style>
