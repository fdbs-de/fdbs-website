<template>
    <SectionHero title="Kontakt" image="/images/content/banner/kontakt_360006987.webp" />
    <SectionText size="page">
        <div class="flex flex-wrap items-center gap-6">
            <div class="p-6 min-w-72 flex-1 flex flex-col gap-4 border-2 border-solid border-zinc-200 rounded-lg">
                <h2 class="m-0">Anfahrt</h2>
                <p class="m-0">
                    Christian-Pommer-Straße 31/33<br>
                    38112 Braunschweig<br>
                    Deutschland
                </p>
            </div>
            <div class="p-6 min-w-72 flex-1 flex flex-col gap-4 border-2 border-solid border-zinc-200 rounded-lg">
                <h2 class="m-0">Kontakt</h2>
                <p class="m-0">
                    Email: <NuxtLink to="mailto:info@fdbs.de"><b>info@fdbs.de</b></NuxtLink><br>
                    Tel.: <NuxtLink to="tel:0531210550"><b>0531 210 55 0</b></NuxtLink><br>
                    Fax: 0531 210 55 50
                </p>
            </div>
            <div class="p-6 min-w-72 flex-1 flex flex-col gap-4 border-2 border-solid border-zinc-200 rounded-lg">
                <h2 class="m-0">Bestellhotline</h2>
                <p class="m-0">
                    Email: <NuxtLink to="mailto:auftrag@fdbs.de"><b>auftrag@fdbs.de</b></NuxtLink><br>
                    Tel.: <NuxtLink to="tel:05312105523"><b>0531 210 55 23</b></NuxtLink><br>
                    Fax: 0531 210 55 39
                </p>
            </div>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Kontakt',
        description: '',
    })
</script>

<style lang="sass" scoped></style>
