import { Resource } from "i18next";
import { HebrewTranslations } from "./HebrewTranslations";
import { EnglishTranslations } from "./EnglishTranslations";

export const TranslationResources: Resource = {
  he: {
    translation: HebrewTranslations,
  },
  en: {
    translation: EnglishTranslations,
  },
};
