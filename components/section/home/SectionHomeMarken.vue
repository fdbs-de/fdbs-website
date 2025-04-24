<template>
    <section class="fdbs-marken">
        <HeLimiter>
            <h2>Unsere Marken</h2>
            <div class="grid">
                <NuxtLink class="flex-1 shadow" to="/marken/eichenhof">
                    <img src="/images/content/marken/eichenhof/eichenhof_cover_1.png">
                </NuxtLink>
                <!--  
                <NuxtLink class="flex-1 highlight" to="/marken/il-campese">
                    <img src="/images/content/marken/il-campese/ilcampese_cover.png">
                </NuxtLink>
                -->
                <NuxtLink class="flex-1 shadow" to="/marken/maxi-france">
                    <img src="/images/content/marken/maxi-france/maxifrance_cover_1.png">
                </NuxtLink>
            </div>
        </HeLimiter>
    </section>
</template>

<style lang="sass" scoped>
    .fdbs-marken
        padding: 10rem 0

        h2
            font-size: clamp(2rem, 10vw, 3.5rem)
            text-align: center
            font-weight: 600
            margin-block: 0 4rem

        .grid
            display: flex
            gap: 4rem
            justify-content: center

            a
                display: block
                width: 100%
                border-radius: 1rem
                overflow: hidden
                border: 1px solid var(--color-background-soft)
                flex: 50
                max-width: 480px

                &.highlight
                    box-shadow: var(--shadow-l)
                    flex: 55

                &.shadow
                    box-shadow: var(--shadow-m)
                    flex: 55
            img
                width: 100%
                display: flex


    @media only screen and (max-width: 700px)
        .fdbs-marken
            .grid
                gap: 2rem


    
    @media only screen and (max-width: 500px)
        .fdbs-marken
            padding: 6rem 0
            
            h2
                margin-bottom: 2rem

            .grid
                gap: .5rem

                a
                    flex: 1 !important
                    border-radius: .5rem !important
                    box-shadow: none !important
</style>