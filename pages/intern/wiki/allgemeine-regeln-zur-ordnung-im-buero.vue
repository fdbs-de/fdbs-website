
<template>
    <SectionHero title="Ordnung im Büro" image="/storage/media/wiki/generisch/fdbs_muster_rot.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Marketing</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <h3><strong><span style="color: var(--color-error)">Allgemeine Regeln zur Ordnung im Büro</span></strong></h3><ol><li><p>Jeder ist dazu angehalten, regelmäßig im Produktionsraum Ordnung zu halten – nicht nur Freitag kurz vor Feierabend! Sondern auch immer wieder zwischendurch.<br></p></li><li><p>Stifte, Cutter, Tacker, usw. – einfach alle Arbeitsmaterialen nach dem Gebrauch an ihren ursprünglichen Platz in den Kästen zurück legen.<br></p></li><li><p>Kartons unter dem Produktionstisch ordentlich verstauen und nicht nur hinwerfen. Oftmals liegen sie auch direkt an der Kante, so dass man sich gar nicht richtig an den Tisch stellen kann.<br></p></li><li><p>Den Produktionstisch nicht unnötig mit Dingen vollstellen. Kartons die länger liegen an die Seite stellen, so dass man vernünftig am Tisch arbeiten kann. (Dafür soll auch noch ein extra Regal folgen.)<br></p></li><li><p>Die Auffangschale der Handschneidemaschine regelmäßig leeren.<br></p></li><li><p>Den Arbeitsplatz/Schreibtisch und die Fensterbänke jeden Tag sauber hinterlassen zum Feierabend ohne Essensreste, Krümel, Papierkram, usw. - sollte das bis zur nächsten Abteilungsbesprechung nicht klappen wird es so laufen das jeder der im Büro ist sich bei BV melden muss bevor er geht und gemeinsam geschaut wird ob alles sauber und ordentlich ist. Vorher darf dann keiner mehr gehen.<br></p></li><li><p>Darauf achten, dass immer ausreichend Papiertücher und Toilettenpapier vorhanden ist – nicht nur auf den Toiletten selbst sondern auch als Reserve.<br></p></li><li><p>Angebrochenes Essen im Kühlschrank spätestens zum Ende der Woche mitnehmen und/oder entsorgen.<br></p></li><li><p>Der Mülleimer im Büro ist nach Bedarf mehrmals in der Woche zu leeren.<br></p></li><li><p>Obstschale kontrollieren und ggf. restliches Obst in den Kühlschrank legen. Aktuell ist kommuniziert das wir uns melden, sollten wir Obst haben wollen.<br></p></li><li><p>Arbeitsmaterialien wie der Laptop oder das Handy werden regelmäßig gereinigt und ordentlich in den Schränken verstaut, sollten sie im Büro bleiben.</p></li></ol>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Ordnung im Büro',
        description: 'Marketing, -',
        category: 'Marketing',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Ordnung im Büro',
        description: 'Marketing, -',
    })
</script>

<style lang="sass" scoped></style>