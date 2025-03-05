<template>
    <SectionHero title="Top Aktuelles vom technischen Kundendienst"
        image="/images/content/banner/service_425530867_425530980_436047070_425530651_425530924_425530335.webp" />
    <SectionText>
        <h2>Reinigungs- und Wasserstrahltechnik von Hako</h2>
        <p>
            Hier wird ein Text stehen!
        </p>
        <img src="/images/content/customerservice/hako_flyer.png" alt="HAKO-Angebote" class="rounded-lg">

        <h2>Neugierig geworden?</h2>
        <div class="formatted-content">
            <p>Für mehr Informationen, ein persönliches Gespräch oder Ihr individuelles Angebot, melden Sie sich
                gerne
                unter <a target="_self" rel="noopener noreferrer nofollow" href="tel:05312105541">0531-210
                    55 - 41</a> oder schreiben Sie eine Mail an <a target="_self" rel="noopener noreferrer nofollow"
                    href="mailto:service@fdbs.de">service@fdbs.de</a>
            </p>
        </div>

        <div class="max-w-80 flex gap-6">
            <Card :is="NuxtLink" class="flex-1" aspect-ratio="16/9" target="_blank" name="HAKO Flyer"
                image="/images/content/customerservice/hako_flyer.png" to="/downloads/haccp_flyer.pdf" />
        </div>


    </SectionText>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Top Aktuelles vom technischen Kundendienst',
        description: '',
    })

    const NuxtLink = defineNuxtLink({})
</script>

<style lang="sass" scoped></style>
