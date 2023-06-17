import { createI18n } from "vue-i18n";


const messages = {
    en: {
        message: {
            mainSite: "Home",
            shopList: "Shop list",
            bought: "Bought",
            toBuy: "To buy",
            boughtList: "List products bought",
            toBuyList: "List products to buy",
            addProduct: "Add product",
            addNewProduct: "    Add new product",
            golden: "GOLDEY",
            homeGolden: ""

        }
    },
    pl: {
        message: {
            mainSite: "Strona główna",
            shopList: "Lista zakupów",
            bought: "Kupione",
            toBuy: "Do kupienia",
            boughtList: "Lista kupionych produktów",
            toBuyList: "Lista produktów do kupienia",
            addProduct: "Dodaj produkt",
            addNewProduct: "    Dodaj nowy produkt",
            golden: "GOLDEN",
            homeGolden: "<p>Golden Retriever to jedna z najpopularniejszych ras psów na świecie. Są to duże, silne i\n" +
                "                            inteligentne psy, które charakteryzują się przyjacielskim i łagodnym usposobieniem. Oto\n" +
                "                            kilka cech charakterystycznych dla tej rasy:</p>\n" +
                "\n" +
                "                        <h1 class=\"sum-title\">Wygląd</h1>\n" +
                "                        <ul>\n" +
                "                            <li>Golden Retriever to pies średniej wielkości, o proporcjonalnej budowie ciała.</li>\n" +
                "                            <li>Mają mocne, muskularne nogi i dobrze umięśnione ciało.</li>\n" +
                "                            <li>Ich sierść jest gęsta, długa i jedwabista, z charakterystycznym pięknym złocistym lub\n" +
                "                                kremowym umaszczeniem.\n" +
                "                            </li>\n" +
                "                            <li>Mają charakterystyczne uszy w kształcie płatka.</li>\n" +
                "                        </ul>\n" +
                "\n" +
                "                        <h1 class=\"sum-title\">Temperament</h1>\n" +
                "                        <ul>\n" +
                "                            <li>Golden Retriever jest znany ze swojego przyjacielskiego i łagodnego charakteru.</li>\n" +
                "                            <li>Są bardzo towarzyscy, kochają kontakt z ludźmi i dobrze dogadują się z dziećmi i innymi\n" +
                "                                zwierzętami.\n" +
                "                            </li>\n" +
                "                            <li>Są inteligentne i łatwo szkolące się, co sprawia, że są popularnym wyborem jako psy\n" +
                "                                przewodniki, terapeutyczne czy do pracy w służbach ratowniczych.\n" +
                "                            </li>\n" +
                "                        </ul>\n" +
                "\n" +
                "                        <h1 class=\"sum-title\">Aktywność</h1>\n" +
                "                        <ul>\n" +
                "                            <li>Golden Retriever to rasa o umiarkowanym poziomie aktywności.</li>\n" +
                "                            <li>Są energicznymi psami, które potrzebują regularnej dawki ruchu i aktywności fizycznej.\n" +
                "                            </li>\n" +
                "                            <li>Chętnie uczestniczą w różnych zajęciach, takich jak długie spacery, biegi, a także\n" +
                "                                pływanie, ponieważ mają naturalną skłonność do wody.\n" +
                "                            </li>\n" +
                "                        </ul>\n" +
                "\n" +
                "                        <h1 class=\"sum-title\">Rodzina</h1>\n" +
                "                        <ul>\n" +
                "                            <li>Golden Retriever to wspaniałe psy rodzinne.</li>\n" +
                "                            <li>Są oddane i przywiązane do swoich właścicieli, co sprawia, że są wspaniałymi\n" +
                "                                towarzyszami dla całej rodziny.\n" +
                "                            </li>\n" +
                "                            <li>Są cierpliwe i łagodne, co czyni je również odpowiednimi dla rodzin z małymi dziećmi.\n" +
                "                            </li>\n" +
                "                        </ul>\n" +
                "\n" +
                "                        <h1 class=\"sum-title\">Troska o sierść</h1>\n" +
                "                        <ul>\n" +
                "                            <li>Ze względu na długą i gęstą sierść, Golden Retriever wymaga regularnego czesania, aby\n" +
                "                                utrzymać ją w dobrym stanie.\n" +
                "                            </li>\n" +
                "                            <li>Wymagają szczególnej uwagi podczas linienia, które występuje dwa razy w roku.</li>\n" +
                "                            <li>Częste czesanie pozwoli zminimalizować gromadzenie się sierści w domu.</li>\n" +
                "                        </ul>\n" +
                "\n" +
                "                        <h1 class=\"sum-title\">Zdrowie</h1>\n" +
                "                        <ul>\n" +
                "                            <li>Golden Retriever to rasa podatna na pewne problemy zdrowotne, takie jak dysplazja\n" +
                "                                stawów, choroba oczu czy skłonność do otyłości.\n" +
                "                            </li>\n" +
                "                            <li>Ważne jest regularne odwiedzanie weterynarza, prawidłowe żywienie oraz zapewnienie\n" +
                "                                odpowiedniej ilości aktywności fizycznej, aby utrzymać ich w dobrej kondycji.\n" +
                "                            </li>\n" +
                "                        </ul>\n" +
                "                        <br>\n" +
                "                        <br>\n" +
                "                        <p>Golden Retriever to wspaniała rasa psów, która jest ceniona za swoją inteligencję, łagodność\n" +
                "                            i przyjacielskie usposobienie.</p>\n" +
                "                        <p>Są to wierni i oddani towarzysze, idealni dla rodzin i osób aktywnych, które cenią sobie\n" +
                "                            interakcję i ruch na świeżym powietrzu.</p>\n" +
                "\n",
        }
    }
}

const i18n = createI18n({
    locale: 'pl',
    fallbackLocale: 'en',
    messages
})

export default i18n;