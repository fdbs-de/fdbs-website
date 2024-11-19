<template>
    <SectionText class="!pt-4">
        <ProfileCard
            class="rounded-xl border border-solid border-zinc-100"
            :banner="(auth.user?.banner as string)"
            :image="(auth.user?.avatar as string)"
            :title="(auth.user?.name as string)"
            :subtitle="(auth.user?.email as string)"
        />
        <div class="flex flex-col gap-4 pt-16">
            <IodButton type="button" size="l" label="Profil verwalten" corner="pill" icon-right="account_circle" @click="auth.navigateToProfile('/intern/profil')" />
            <IodButton type="button" size="l" label="Abmelden" corner="pill" icon-right="logout" color-preset="error" @click="auth.logout()" />
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    const auth = useAuthStore()

    useSeoMeta({
        title: 'Profil',
        description: '',
    })

    definePageMeta({
        middleware: 'auth',
        layout: 'auth',
    })
</script>

<style lang="sass" scoped></style>
