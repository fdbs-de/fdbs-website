
<template>
    <SectionHero title="Aufträge für die Werkstatt" image="/storage/media/wiki/generisch/fdbs_muster_grau.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Allgemeines</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p></p><p>Bitte die Punkte beim Erstellen eines Auftrages beachten:</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Belegtypencode muss immer Werkstatt sein</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aufträge offen lassen</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sollte die Ware nicht auf Lager sein, bitte das Lieferdatum nicht verändern, ggf. eine kurze Info, damit wir rechtzeitig bestellen können</p><p></p><p>Ganz wichtig, wir schicken Ware nur raus, wenn Aufträge aus dem Lager oder Fleisch drin sind.</p><p></p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Aufträge für die Werkstatt',
        description: 'Allgemeines, -',
        category: 'Allgemeines',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Aufträge für die Werkstatt',
        description: 'Allgemeines, -',
    })
</script>

<style lang="sass" scoped></style>