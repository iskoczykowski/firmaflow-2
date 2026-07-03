import { useEffect, useState } from 'react';
import { getLang, languages, setLang, type Lang } from '../lib/i18n';

export default function LanguageSwitcher() {
  const [current, setCurrent] = useState<Lang>(getLang());

  useEffect(() => {
    const handler = () => setCurrent(getLang());
    window.addEventListener('firmaflow-language-change', handler);
    return () => window.removeEventListener('firmaflow-language-change', handler);
  }, []);

  function change(lang: Lang) {
    setLang(lang);
    setCurrent(lang);
  }

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => change(lang.code)}
          className={
            current === lang.code
              ? 'rounded-xl bg-blue-600 px-4 py-2 font-bold text-white'
              : 'rounded-xl bg-white px-4 py-2 font-bold text-slate-700 border'
          }
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
