import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import { ThemeProvider } from 'next-themes';
import Provider from "./provider";
import "./globals.css";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  applicationName: "AppName",
  title: "AppName",
  description: "Description.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "AppName",
  },
  keywords: ["nextjs", "next", "app", "appname", "app name", "app name"],
  authors: [
    {
      name: "Author",
      url: "https://github.com/author",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "assets/icons/icon-128x128.png" },
    { rel: "icon", url: "assets/icons/icon-128x128.png" },
  ],
};

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string
  }
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${albertSans.className} bg-[#ffffff] dark:bg-[#111827]`}>
        <Provider locale={params.locale}>
          <ThemeProvider attribute="class" defaultTheme='system' enableSystem>{children}</ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
