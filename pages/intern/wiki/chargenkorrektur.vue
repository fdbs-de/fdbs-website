
<template>
    <SectionHero title="Chargenkorrektur" image="/storage/media/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Einkauf</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <img class="content-image" src="/storage/media/Chargenkorrektur_1.png" alt=""><img class="content-image" src="/storage/media/Einkauf/Chargenkorrektur_1.png" alt=""><p>Eine Chargenkorrektur ist immer dann notwendig, wenn auf der Charge nicht genug Gewicht vorhanden ist. Im Beispiel ist auf der Charge 341093 kein Gewicht.</p><img class="content-image" src="/storage/media/Chargenkorrektur_2.png" alt=""><img class="content-image" src="/storage/media/Einkauf/Chargenkorrektur_2.png" alt=""><p>Zuerst wird ein Zugang über das entsprechende Gewicht gebucht,</p><img class="content-image" src="/storage/media/Einkauf/Chargenkorrektur_3.png" alt=""><p>jetzt gehen wir mit dem Shortcut (Strg+Shift+I) in die Chargenverfolgung und geben die Charge und das Gewicht manuell ein. So zieht sich das System das MHD automatisch, welches der Charge zugeordnet ist.</p><img class="content-image" src="/storage/media/Einkauf/Chargenkorrektur_4.png" alt=""><p>zu jedem Zugang gehört ein Abgang, diesen tippen wir direkt unter den Zugang mit dem entsprechenden Gewicht.</p><img class="content-image" src="/storage/media/Einkauf/Chargenkorrektur_5.png" alt=""><p>jetzt gehen wir im Abgang wieder mit dem Shortcut die Chargenverfolgung, ziehen uns im Abgang die Charge aus dem System um Fehler zu minimieren. Im Anschluss bestätigen wir die Maske und Buchen mit dem Shortcut F9 den Vorgang.</p><p></p><p></p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Chargenkorrektur',
        description: 'Einkauf, -',
        category: 'Einkauf',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Chargenkorrektur',
        description: 'Einkauf, -',
    })
</script>

<style lang="sass" scoped></style>