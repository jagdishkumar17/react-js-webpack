import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom';
import Instance from "./app/components/App.jsx";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import localeData from "./i18n/locales/messages.json";

addLocaleData([...en, ...es]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language =
    (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
const messages =
    localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;

ReactDOM.render(
    <IntlProvider locale={language} messages={messages}>
        <HashRouter>
            <Instance />
        </HashRouter>
    </IntlProvider>,
    document.getElementById("root")
);
