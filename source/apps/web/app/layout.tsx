import type { ReactNode } from "react";
import { cookies } from "next/headers";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Interview Studio — Practice the interview out loud",
    template: "%s · Interview Studio",
  },
  description:
    "Self-hosted interview practice with preparation, mock interviews, feedback, and optional live voice providers.",
  applicationName: "Interview Studio",
  openGraph: {
    title: "Interview Studio — Practice the interview out loud",
    description:
      "Open-source, voice-first AI mock interviews — practice out loud, then pass the real one.",
    url: "/",
    siteName: "Interview Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interview Studio — Practice the interview out loud",
    description:
      "Open-source, voice-first AI mock interviews — practice out loud, then pass the real one.",
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Screen readers pick pronunciation from `lang` — resolve it from the same
  // `locale` cookie the LanguageToggle writes (EN default).
  const store = await cookies();
  const lang = store.get("locale")?.value === "vi" ? "vi" : "en";
  return (
    <html
      lang={lang}
      className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans">
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: ".reveal{opacity:1!important;transform:none!important}",
            }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
