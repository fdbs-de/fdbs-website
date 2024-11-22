
<template>
    <SectionHero title="Schriftgrößen und Informationen auf Dosenbanderolen" image="/storage/media/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Marketing</b><br>
            Tags: <b>Schriftgrößen, Darstellung, Etiketten, Banderolen</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <h3>Allgemeine Informationen</h3><ul><li><p>Bezeichnung des <strong>Lebensmittels</strong>, <strong>Nettofüllmenge</strong> und <strong>Alkoholgehalt</strong> im selben Sichtfeld</p></li><li><p>Allergieauslösende Stoffe hervorheben</p></li><li><p>Nährwerte: <strong>Reihenfolge und Tabellenform beachten</strong></p></li></ul><h3>Zur Schriftgröße</h3><ul><li><p>Der Buchstabe "x" muss <strong>mindestens 1,2mm</strong> hoch sein;<br>Bei einer Oberfläche der Verpackung von <strong>weniger als 80cm²</strong> sind <strong>0,9mm</strong> ausreichend</p></li><li><p>Die Schriftgröße der Nettofüllmenge je nach Packungsgröße:</p><ul><li><p>5 - 50ml/mg → <strong>2mm</strong></p></li><li><p>50 - 200ml/mg → <strong>3mm</strong></p></li><li><p>200 - 1000ml/mg → <strong>4mm</strong></p></li><li><p>mehr als 1000ml/mg → <strong>6mm</strong></p></li></ul></li></ul>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Schriftgrößen und Informationen auf Dosenbanderolen',
        description: 'Marketing, Schriftgrößen, Darstellung, Etiketten, Banderolen',
        category: 'Marketing',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Schriftgrößen und Informationen auf Dosenbanderolen',
        description: 'Marketing, Schriftgrößen, Darstellung, Etiketten, Banderolen',
    })
</script>

<style lang="sass" scoped></style>