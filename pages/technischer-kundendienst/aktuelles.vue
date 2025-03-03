<template>
    <SectionHero title="Top Aktuelles vom technischen Kundendienst"
        image="/images/content/banner/service_425530867_425530980_436047070_425530651_425530924_425530335.webp" />
    <SectionText>
        <h2>Digitale HACCP-Dokumentation</h2>
        <p>
            Die digitale CHECK HACCP-Lösung optimiert die Lebensmittelsicherheit durch
            automatisierte Dokumentation und Echtzeit-Überwachung.
            Sie ersetzt Papieraufzeichnungen, bietet Checklisten für Hygiene und Reinigung,
            und meldet automatisch bei Gerätestörungen.
            Dies spart Zeit und Kosten und gewährleistet volle HACCP-Konformität.
        </p>
        <h2>Funktionen</h2>
        <ul class="list-disc pl-6">
            <li>
                <b>Mobile CHECK:</b> Manuelle Temperaturmessung mittels bluetoothfähigem Kerntemperaturfühler oder
                Infrarot-Temperatursensor
            </li>
            <li>
                <b>Auto CHECK:</b> Automatische Raumtemperaturerfassung mittels Sensoren, stationär und in mobilen
                Geräten
            </li>
            <li>
                <b>Hygiene CHECK:</b> Einfaches Hygiene- und Servicemanagement mit flexibel individuell erstellbaren
                Checklisten und zusätzlicher Foto- und Textfuntkion über die CHECK App
            </li>
        </ul>
        <h2>Ihre Vorteile</h2>
        <ul class="list-disc pl-6">
            <li>
                <b>100% Papiereinsparung</b>
            </li>
            <li>
                <b>80% Zeitersparnis</b>
            </li>
            <li>
                Digital,sparente HACCP-Listen mit Echtzeit-Daten
            </li>
            <li>
                24/7 Alarmierungsfunktion
            </li>
            <li>
                Einfache Nutzer-, Rechteverwaltung und Konfiguration
            </li>
            <li>
                Nachrüstbar in bestehende Infrastruktur
            </li>
            <li>
                Bedienerfreundliche und intuitive Anwendung
            </li>
            <li>
                Reduzierung von Personal-, Kosten-, und Zeitaufwand
            </li>
        </ul>

        <div class="max-w-80 flex gap-6">
            <Card :is="NuxtLink" class="flex-1" aspect-ratio="16/9" target="_blank" name="HACCP Broschüre"
                image="/images/content/customerservice/checkhaccp.png" to="/downloads/haccp_flyer.pdf" />
        </div>

        <h2>Neugierig geworden?</h2>
        <div class="formatted-content">
            <p>Für mehr Informationen, ein persönliches Gespräch oder Ihr individuelles Angebot, melden Sie sich
                gerne
                unter <a target="_self" rel="noopener noreferrer nofollow" href="tel:05312105541">0531-210
                    55 - 41</a> oder schreiben Sie eine Mail an <a target="_self" rel="noopener noreferrer nofollow"
                    href="mailto:service@fdbs.de">service@fdbs.de</a>
            </p>
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
