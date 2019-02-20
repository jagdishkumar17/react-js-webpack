import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom';
import Instance from "./app/components/App.jsx";
import { IntlProvider, addLocaleData } from "react-intl";
import translations from "./i18n/locales";

// Split locales with a region code
const language = "en"//Default Language (en or es -> as of now)

addLocaleData(require(`react-intl/locale-data/${language}`));

const messages = translations[language];

ReactDOM.render(
    <IntlProvider locale={language} messages={messages}>
        <HashRouter>
            <Instance />
        </HashRouter>
    </IntlProvider>,
    document.getElementById("root")
);
