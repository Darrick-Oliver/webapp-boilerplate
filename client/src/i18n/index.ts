import { initReactI18next } from "react-i18next";
import { z } from "zod";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import i18n from "i18next";

import { globalErrorMap } from "./global-map";

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en-US",
    supportedLngs: ["en-US"],
    backend: {
      loadPath: `${import.meta.env.VITE_BASE}locales/{{lng}}/{{ns}}.json`,
    },
  });

z.setErrorMap(globalErrorMap);

export default i18n;
