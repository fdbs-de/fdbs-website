<template>
    <SectionHero title="Zurücksetzen des Passwortes"
        image="/images/content/wiki/IT/Zur%C3%BCcksetzen%20des%20Passworts/Login-Header.png" />
    <SectionText>
        <HeDivider />
        <span>
            Kategorie: <b>IT</b><br>
            Tags: <b>Passwort, Anmeldung</b>
        </span>
        <HeDivider />
        <div class="formatted-content">
            <p></p>
            <div icon="star" class="key-fact"><span class="icon" data-icon="star" contenteditable="false"></span>
                <div class="content">
                    <p><span style="color: rgb(104, 111, 111)">Bei Problemen oder Unklarheiten, wende dich gerne an die
                            IT.</span></p>
                </div>
            </div>
            <p></p>
            <p></p>
            <h1>Windows/Microsoft 365-Anmeldung</h1>
            <p><span style="color: var(--color-text-soft)">Wenn das Kennwort für das Windows-Gerät vergessen oder
                    verloren wurde, kann es geändert oder zurücksetzt werden.</span></p>
            <p><span style="color: var(--color-text-soft)">Hier geht es um die Anmeldung am Windows-PC/-Notebook,
                    Outlook, OneDrive, Sharepoint, Word oder Ähnliches.</span></p>
            <p><strong><span style="color: var(--color-text-soft)">Besonderheit</span></strong><span
                    style="color: var(--color-text-soft)">: Außendienstler haben nicht die Möglichkeit, die Passwörter
                    selbst zurückzusetzen/zu ändern. Dafür bitte an die IT wenden.</span></p>
            <h2>Passwortvorgaben</h2>
            <p>Folgende Vorgaben gibt es an das neue Passwort:</p>
            <ul class="list-disc pl-6">
                <li>
                    Kennwort muss mindestens 12 Zeichen lang sein.
                </li>
                <li>
                    das Kennwort muss Zeichen aus drei der folgenden Kategorien enthalten: Großbuchstaben,
                    Kleinbuchstaben, Ziffern der Basis 10 (0-9) sowie Sonderzeichen.
                </li>
                <li>
                    Kennwort darf nicht den Kontonamen des Benutzers oder mehr als zwei Zeichen enthalten, die
                    nacheinander im vollständigen Namen des Benutzers vorkommen.
                </li>
                <li>
                    Kennwort darf nicht den letzten 24 Kennwörtern entsprechen.
                </li>
            </ul>
            <p></p>
            <h2>Methode #1 - Tastenkombination</h2>
            <p>Sofern man bereits am Windows-Gerät angemeldet ist, kann eine Tastenkombination gedrückt werden, um das
                Passwort zu ändern:</p>
            <p>[Strg] + [Alt] + [Entf]</p><img class="content-image"
                src="/images/content/wiki/IT/Zur%C3%BCcksetzen%20des%20Passworts/Strg_Alt_Entf.png" alt="">
            <p></p>
            <p>Mit der sich öffnenden Maske kann "Kennwort ändern" ausgewählt werden und das Kennwort wird geändert.</p>
            <p></p>
            <h2>Methode #2 - Online</h2>
            <p>Die Kennwort-Zurücksetzung geschieht über den folgenden Link:</p>
            <p><a target="_blank" rel="noopener noreferrer nofollow"
                    href="https://passwordreset.microsoftonline.com/">Microsoft Online-Kennwortzurücksetzung</a></p>
            <p></p>
            <p>Nach Eingabe der E-Mail-Adresse wird eine weitere Kontaktmethode überprüft, um das Passwort zurücksetzen
                zu können.</p>
            <p>In den meisten Fällen wird bei der Account-Erstellung als zweite E-Mail <a target="_blank"
                    rel="noopener noreferrer nofollow" href="mailto:administrator@fdbs.de">administrator@fdbs.de</a>
                angegeben, also ein Postfach der IT.</p>
            <p>Wenn ein Diensthandy vorhanden sein sollte, kann SMS ebenfalls als Kontaktmethode ausgewählt werden.</p>
            <p></p>
            <p>Über den ausgewählten Kontaktweg kann das Passwort zurückgesetzt werden.</p>
            <p></p>
            <hr>
            <p></p>
            <p>Die Kontaktmethoden können von der IT oder von jedem selbst überprüft und angepasst werden. Dies
                funktioniert unter folgendem Link (sofern das aktuelle Passwort bekannt ist):</p>
            <p><a target="_blank" rel="noopener noreferrer nofollow"
                    href="https://mysignins.microsoft.com/security-info">Security Info | </a><a target="_blank"
                    rel="noopener noreferrer nofollow" href="http://Microsoft.com">Microsoft.com</a></p>
            <p></p>
            <p></p>
            <p></p>
            <h1>UWEB</h1>
            <p><a target="_blank" rel="noopener noreferrer nofollow"
                    href="https://fleischer-dienst.uweb2000.de/login/index.php?forceLoginLang=de">UWEB2000</a> stellt
                über die "Kennwort vergessen"-Option die Möglichkeit bereit, das Passwort zurückzusetzen:</p><img
                class="content-image" src="/images/content/wiki/IT/Zur%C3%BCcksetzen%20des%20Passworts/UWEB-1.png"
                alt="">
            <p></p>
            <p>Hier werden die Informationen zu Anmeldename und E-Mail abgefragt.<br>Der Anmeldename entspricht der
                Personalnummer.<br>Die E-Mail-Adresse ist teilweise die private E-Mail-Adresse, teilweise die
                Firmen-E-Mail-Adresse.</p>
            <p>Sollte die E-Mail-Adresse nicht bekannt sein, wende dich gerne an die IT.</p><img class="content-image"
                src="/images/content/wiki/IT/Zur%C3%BCcksetzen%20des%20Passworts/UWEB-2.png" alt="">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    </SectionText>
</template>

<script lang="ts" setup>
definePageMeta({
    title: 'Zurücksetzen des Passwortes',
    description: 'IT, Passwort, Anmeldung',
    category: 'IT',
    image: '/images/content/wiki/IT/Zur%C3%BCcksetzen%20des%20Passworts/Login-Header.png',
    middleware: ['auth', 'personal'],
    layout: 'auth',
})

useSeoMeta({
    title: 'Zurücksetzen des Passwortes',
    description: 'IT, Passwort, Anmeldung',
})
</script>

<style lang="sass" scoped></style>