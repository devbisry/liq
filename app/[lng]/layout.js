import { dir } from "i18next";
import { languages } from "../i18n/settings";
import ThemeProvider from "../theme";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}