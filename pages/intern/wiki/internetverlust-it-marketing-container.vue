
<template>
    <SectionHero title="Internetverlust IT-Marketing-Container" image="/images/content/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>IT</b><br>
            Tags: <b>Internet, Quickfix</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Bei Internetausfällen im Container ist zu 95% die Richtfunkantenne Schuld. </p><p>Da die IT nicht immer sofort reagieren kann, hier eine Möglichkeit, wie das Problem möglicherweise auch im Container selbst gelöst werden kann:</p><ol><li><p>An den <strong>Netzwerkschrank</strong> auf der Marketing Seite gehen</p></li><li><p>An <strong>Port 1</strong> von dem Switch (links oben) ist die Richtfunkantenne angeschlossen</p></li><li><p>Kabel auf <strong>Port 1</strong> kurz (5-10 Sek.) vom Switch <strong>abstecken</strong> und <strong>wieder einstecken</strong></p></li></ol><img class="content-image" src="/images/content/wiki/IT/Internetverlust%20IT-Marketing-Container/Container-Switch-Port-1.jpg" alt="">
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Internetverlust IT-Marketing-Container',
        description: 'IT, Internet, Quickfix',
        category: 'IT',
        image: '/images/content/wiki/generisch/fdbs_muster_rot.png',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Internetverlust IT-Marketing-Container',
        description: 'IT, Internet, Quickfix',
    })
</script>

<style lang="sass" scoped></style>