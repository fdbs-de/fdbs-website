
<template>
    <SectionHero title="Workflow Abholungen Touren" image="/images/content/wiki/generisch/fdbs_muster_grau.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Allgemeines</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Durch unsere Einkaufsabteilung kommt es regelmäßig zu Abholungen von Produkten, welche z.B. für unsere Kunden bestellt wurden oder wir für den Weiterverkauf benötigen. Diese werden im Fuhrpark rechtzeitig angekündigt und übermittelt. Die Informationen werden dann der jeweiligen Tour und dem Berufskraftfahrer mitgeteilt, damit die Ware abgeholt und in unser Lager transportiert werden kann.</p><p>Für die regelmäßigen Touren gibt es auch einen Abholungen-Tourenplan. Dieser dient ebenfalls der groben Orientierung und ist ohne Gewähr zu betrachten, da es z.B. in Feiertagswochen zu Abweichungen kommen kann. Bei individuell zu betrachtenden Fällen erfolgt die Rücksprache zwischen der Fuhrparkleitung und der Einkaufsleitung.</p><img class="content-image" src="/images/content/wiki/allgemein/Tourenplan Abholung.JPG" alt="">
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Workflow Abholungen Touren',
        description: 'Allgemeines, -',
        category: 'Allgemeines',
        image: '/images/content/wiki/generisch/fdbs_muster_grau.png',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Workflow Abholungen Touren',
        description: 'Allgemeines, -',
    })
</script>

<style lang="sass" scoped></style>