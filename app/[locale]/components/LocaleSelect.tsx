"use client";

import { useCurrentLocale, useChangeLocale } from "@/locales/client";

export default function LocaleSelect() {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();


  return (
    <select
      value={locale}
      onChange={(e) => changeLocale(e.target.value as 'fr' | 'en')}
      className="bg-transparent border border-gray-300 dark:border-tertiary m-auto h-10 px-2 relative top-0.5 text-black dark:text-white rounded-lg cursor-pointer focus:outline-none"
    >
        <option value="en">EN</option>
        <option value="fr">FR</option>
    </select>
  );
}