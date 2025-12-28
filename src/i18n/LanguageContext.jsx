import React, { createContext, useContext, useMemo, useState } from 'react';
import { strings } from './strings';

const LanguageContext = createContext({
  lang: 'bg',
  setLang: () => {},
  t: () => ({}),
});

const getByPath = (obj, path) => {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('bg');

  const value = useMemo(() => {
    const t = (path) => getByPath(strings[lang], path);
    return { lang, setLang, t, strings: strings[lang] };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}
