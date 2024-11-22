
<template>
    <SectionHero title="Workflow Postversand" image="/storage/media/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Marketing</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p>Ab dem 26.06.2023 verschickt das Marketing alle Umschläge mit der Post. Folgender Workflow muss zukünftig eingehalten werden:</p><p>1. Die Post wird immer <strong>Dienstag, Donnerstag und Freitag um 13.00 Uhr</strong> abgeholt.</p><p>2. Für den Postversand werden ausschließlich die Versandkartons verwendet.</p><p>3. Die Ware wird als Warenpost versendet.<br><br>4. Die Zugangsdaten liegen unter:<br>Werbung_intern/Passwoerter/Zugangsdaten_Allgemein/<br>https://geschaeftskunden.dhl.de/<br><br>5. Die entsprechende Artikelnummer ist in Navision als 33 02 011 angelegt.</p><p>6. Die Ware wird nur in Ausnahmefällen mit der Tour verschickt. Kunden werden darauf hingewiesen, dass Ware, die nicht ankommt, auf ihre Kosten wieder versendet wird.</p><p>7. Kunden werden darauf hingewiesen, dass dieser neue Workflow aufgrund interner Strukturänderungen im Unternehmen zustande kommt und sie bitte zukünftig mehr Zeit für ihre Bestellungen einplanen. Sollten Kunden nicht aufhören zu meckern oder zu aufdringlich werden, können diese zur Not an BV, FBR oder AGO weitergeleitet werden.</p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Workflow Postversand',
        description: 'Marketing, -',
        category: 'Marketing',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Workflow Postversand',
        description: 'Marketing, -',
    })
</script>

<style lang="sass" scoped></style>