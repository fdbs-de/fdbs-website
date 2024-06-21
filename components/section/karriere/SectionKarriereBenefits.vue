<template>
    <section class="benefits-section">
        <HeLimiter>
            <h2 class="text-center mb-12">Deine Vorteile bei uns</h2>
            <div class="grid">
                <div class="card-wrapper" v-for="benefit in benefits">
                    <IodIcon :icon="benefit.icon" />
                    <h3>{{benefit.title}}</h3>
                    <p>{{benefit.description}}</p>
                </div>
            </div>
        </HeLimiter>
    </section>
</template>

<script lang="ts" setup>
    const benefits = ref([
        { icon: 'spa', title: '30 Tage Urlaub', description: '30 Tage Jahresurlaub. Zeit für Familie, Freunde, Reisen und Freizeit.' },
        { icon: 'shopping_bag', title: 'Corporate Benefits', description: 'Geld sparen bei jedem Einkauf bei über 800 Partnern mit Corporate Shopping.' },
        { icon: 'favorite', title: 'Gesundheit', description: 'Einen ergonomischen Arbeitsplatz und freiwillige Gesundheitsmaßnahmen.' },
        { icon: 'local_bar', title: 'Teamevents', description: 'Gemeinsame Events stärken den Zusammenhalt.' },
        { icon: 'school', title: 'Weiterbildung', description: 'Seminare, Coachings und Online Trainings.' },
        { icon: 'percent', title: 'Mitarbeiterrabatt', description: 'Du bekommst unser gesamtes Sortiment zu günstigen Mitarbeiterpreisen.' },
        { icon: 'airport_shuttle', title: 'Verkehrsanbindung', description: 'Für deine entspannte Anreise: Exzellente Anbindung an die A2 sowie öffentliche Verkehrsmittel.' },
        { icon: 'groups', title: 'Flache Hierarchien', description: 'Mehr Spaß bei der Arbeit: eine kollegiale Arbeitsatmosphäre.' },
        { icon: 'reviews', title: 'Direkter Ansprechpartner', description: 'Einen festen Ansprechpartner und regelmäßige Feedbackgespräche.' },
        { icon: 'pedal_bike', title: 'Jobfahrrad', description: 'Ein umweltfreundlicher und gesunder Weg zur Arbeit.' },
        { icon: 'styler', title: 'Firmenkleidung', description: 'Hochwertige Kleidung für alle Mitarbeitenden.' },
        { icon: 'savings', title: 'Betriebliche Altersvorsorge', description: 'Im Alter abgesichert.' },
    ])
</script>

<style lang="sass" scoped>
    .benefits-section
        padding-block: 4rem

    .grid
        display: grid
        gap: 3rem
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))

    .card-wrapper
        display: flex
        flex-direction: column
        align-items: center
        text-align: center
        gap: 2rem
        padding: 2rem
        border-radius: .5rem
        border: 1px solid #e6e6e6

        h3
            font-size: 1.25rem
            font-weight: 500
            margin: 0

        p
            margin: 0

        .iod-icon
            font-family: var(--font-icon)
            font-size: 3rem
            line-height: 1
            display: flex
            justify-content: center
            align-items: center
            text-align: center
            color: var(--color-primary)
            position: relative
            height: 5rem
            width: 5rem
            border-radius: .5rem
            user-select: none

            &::before
                content: ''
                position: absolute
                top: 0
                left: 0
                width: 100%
                height: 100%
                border-radius: inherit
                background-color: currentColor
                opacity: 0.1
                z-index: -1
</style>