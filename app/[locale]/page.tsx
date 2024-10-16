'use client';
import { useTheme } from "next-themes";
import { useScopedI18n } from "@/locales/client";
import LocaleSelect from "../[locale]/components/LocaleSelect";

export default function Home() {
  const {theme, setTheme} = useTheme();
  const navTrad = useScopedI18n("nav");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <button
        className="dark:text-white"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Toggle
      </button>

      <h1 className="text-5xl font-bold dark:text-white">{navTrad("accueil")}</h1>
      <LocaleSelect />
    </div>
  );
}
