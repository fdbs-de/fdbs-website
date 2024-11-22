
<template>
    <SectionHero title="Guidelines zum Webdesign" image="/storage/media/wiki/generisch/fdbs_muster_grau.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>Entwicklung</b><br>
            Tags: <b>-</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <h2>Abstandregeln</h2><p>Im Web werden nach modernen Standards die Einheiten "EM" bzw. "REM" verwendet. Ferner wird empfohlen ein 8-Pixel basiertes Spacing System einzusetzen. Diesem System zufolge werden Größen und Abstände in Achterschritten definiert.</p><div class="table-wrapper"><table><tbody><tr><th colspan="1" rowspan="1"><p><span style="color: var(--color-error)">❌ Anstatt</span></p></th><th colspan="1" rowspan="1"><p><span style="color: var(--color-success)">✅ Lieber</span></p></th></tr><tr><td colspan="1" rowspan="1"><p><code>15px</code></p></td><td colspan="1" rowspan="1"><p><code>16px (1rem)</code></p></td></tr><tr><td colspan="1" rowspan="1"><p><code>7px</code></p></td><td colspan="1" rowspan="1"><p><code>8px (0,5rem)</code></p></td></tr><tr><td colspan="1" rowspan="1"><p><code>50px</code></p></td><td colspan="1" rowspan="1"><p><code>48px (3rem)</code></p></td></tr></tbody></table></div><p></p><h3>Limiter Element</h3><p>Viele unserer Webdesigns basieren auf dem <em>Limiter-Design-Pattern</em>. Mit der Einführung von Ultra-Widescreen Monitoren ist es nicht zu empfehlen, Inhalte (Bilder, Texte etc.) über die gesamte Breite des Monitors laufen zu lassen (wenn dies nicht ausdrücklich gewünscht ist).</p><p>Somit verwenden wir ein Element, welches versucht, 100% der Bildschirmbreite einzunehmen, aber auf <strong>1200px Maximalbreite</strong> limitiert ist. Dieses enthält meist auch einen <strong>Seitenabstand von 1rem</strong>.<br><em>(Siehe Bild)</em></p><img class="content-image" src="/storage/media/wiki/marketing/web-design/limiter.png" alt=""><p></p><h3>Text Limiter Element</h3><p>Ähnlich wie der Limiter gibt es den Text-Limiter. Dieser funktioniert gleich wie der Limiter, nur ist er auf <strong>650px</strong> limitiert.</p><p>Dieser wird verwendet um Texte oder Bilder für Artikel (Hero-Bilder ausgenommen) darzustellen. Besonders für Texte ist es wichtig, eine Maximalbreite zu setzen, da Textblöcke, welche über die gesamte Bildschirmbreite verlaufen, unangenehm zu lesen sind.</p><img class="content-image" src="/storage/media/wiki/marketing/web-design/text_limiter.png" alt=""><p></p><h2>Canvasgrößen</h2><p>Je nach Zielgerät kann der Canvas wie folgt angelegt werden:</p><div class="table-wrapper"><table><tbody><tr><th colspan="1" rowspan="1"><p>Gerät</p></th><th colspan="1" rowspan="1"><p>Seitenverhältnis</p></th><th colspan="1" rowspan="1"><p>Breite</p></th></tr><tr><td colspan="1" rowspan="1"><p>Desktop</p></td><td colspan="1" rowspan="1"><p><code>16/9</code></p></td><td colspan="1" rowspan="1"><p><code>1920px</code></p></td></tr><tr><td colspan="1" rowspan="1"><p>Mobile</p></td><td colspan="1" rowspan="1"><p><code>9/21</code></p></td><td colspan="1" rowspan="1"><p><code>395px</code></p></td></tr></tbody></table></div><p></p><h2>UI-Prototypen</h2><p>Für ein Webdesign empfiehlt es sich <strong>Figma</strong> und/oder <strong>Adobe XD</strong> zu verwenden.</p><p>Da die Funktionen innerhalb dieser Softwares auf die Möglichkeiten im Web angepasst sind, kann ein erstelltes Design meist ohne weitere Probleme in Quelltext umgesetzt werden: <strong>eine bare Zeitersparnis!</strong></p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
    definePageMeta({
        title: 'Guidelines zum Webdesign',
        description: 'Entwicklung, -',
        category: 'Entwicklung',
        middleware: ['auth', 'personal'],
        layout: 'auth',
    })

    useSeoMeta({
        title: 'Guidelines zum Webdesign',
        description: 'Entwicklung, -',
    })
</script>

<style lang="sass" scoped></style>