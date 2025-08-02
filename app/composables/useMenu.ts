export const useMenu = (menu: 'main'|'legal'|'about'|'auth') => {
    const auth = useAuthStore()

    const menus = ref({
        'main': [
            { id: '1000', label: "Home", href: "/" },
            // { id: "2000", href: "/blog", label: "Blog" },
            { id: "3000", label: "Philosophie", href: "/philosophie", children: [
                { id: "3100", label: "Nachhaltigkeit", href: "/nachhaltigkeit" },
            ]},
            { id: "4000", label: "Produkte & Services", href: "/produkte-und-services", children: [
                { id: "4100", label: "Aktuelle Angebote", href: "/angebote" },
                { id: "4200", label: "Foodservice", href: "/foodservice", children: [
                    { id: "4210", label: "Unsere Rezeptideen", href: "/foodservice/rezepte" },
                    { id: "4220", label: "Tierhaltungskennzeichnung", href: "/foodservice/tierhaltungskennzeichnung" },
                    { id: "4230", label: "Mehrwegpflicht", href: "/foodservice/mehrwegpflicht" },
                ]},
                { id: "4300", label: "Eigenmarke: Maxi France", href: "/eigenmarke-maxi-france"},
                { id: "4400", label: "Marketing & Kommunikation", href: "/mkbs", children: [
                    //{ id: "4410", label: "Web Entwicklung", href: "/mkbs/web" },
                    { id: "4420", label: "Social Media Marketing", href: "/mkbs/social-media" },
                    { id: "4430", label: "Print Design", href: "/mkbs/print" },
                    { id: "4440", label: "Crossmedia Marketing", href: "/mkbs/crossmedia" },
                ]},
                { id: "4500", label: "Technischer Kundendienst", href: "/technischer-kundendienst", children: [
                    { id: "4510", label: "NEU: MAGA Fleischpresse", href: "/technischer-kundendienst/maga-fleischpresse" },
                    { id: "4530", label: "Digitales HACCP", href: "/technischer-kundendienst/digitales-haccp" },
                ]},
            ]},
            { id: "5000", label: "Karriere", href: "/karriere" },
            { id: "6000", label: "Kontakt", href: "/kontakt" },
        ],
        'legal': [
            { id: '1000', label: "Impressum", href: "/impressum" },
            { id: '2000', label: "Datenschutz", href: "/datenschutz" },
            { id: '3000', label: "AGBs", href: "/agbs" },
            { id: '4000', label: "Info Videoüberwachung", href: "/video-info" },
            // { id: '5000', label: "Gewinnspiel Teilnahmebedingungen", href: "/gewinnspiel/teilnahmebedingungen" },
        ],
        'about': [
            { id: '1000', label: "Philosophie", href: "/philosophie" },
            { id: '2000', label: "Karriere", href: "/karriere" },
            { id: '3000', label: "Kontakt", href: "/kontakt" },
        ],
        'auth': (() => {
            let m = [{ id: '1000', label: "Übersicht", href: "/intern" }]

            if (auth.isAdmin() || auth.hasAnyRole(['Personal', 'Kunde']))   m.push({ id: '3000', label: "Angebote", href: "/intern/angebote" })
            if (auth.isAdmin() || auth.hasAnyRole(['Personal']))            m.push({ id: '4000', label: "Firmenwiki", href: "/intern/wiki" })
            if (auth.isAdmin() || auth.hasAnyRole(['Personal']))            m.push({ id: '4000', label: "Dokumente", href: "/intern/dokumente" })
            if (auth.isAdmin() || auth.hasAnyRole(['Personal', 'Kunde']))   m.push({ id: '5000', label: "Spezifikationen", href: "/intern/spezifikationen" })
            if (auth.isAdmin() || auth.hasAdminPanelAccess())               m.push({ id: '6000', label: "Adminverwaltung", href: auth.adminPanelUrl() })

            m.push({ id: '7000', label: "Profil", href: "/intern/profil" })

            return m
        })(),
    })

    return menus.value[menu]
}
