
<template>
    <SectionHero title="Workflow Newsletter" image="/storage/media/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Marketing</b><br>
            Tags: <b>Workflow, Newsletter</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Die Berechtigung zum Versand und zur Bearbeitung des Newsletters liegt bei FBR und BV.</p><ol><li><p>Sobald ein neues Angebot fertig ist, im Adminbereich nach neuen Anmeldungen für den Newsletter schauen.</p></li><li><p>Dazu im Adminbereich auf "Benutzer" klicken und am Seitenende auf "Newsletter".</p></li><li><p>Im Popup Fenster nun den gewünschten Newsletter auswählen und die angezeigten Mailadressen in den Verteiler "Newsletter" kopieren.</p><p></p></li></ol>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Workflow Newsletter',
        description: 'Marketing, Workflow, Newsletter',
        category: 'Marketing',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Workflow Newsletter',
        description: 'Marketing, Workflow, Newsletter',
    })
</script>

<style lang="sass" scoped></style>