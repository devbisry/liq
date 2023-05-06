import { dir } from "i18next";
import { languages } from "../../i18n/settings";
import Header from "./components/header";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <Header lng={lng} path="/dashboard" >
          {children}
          </Header>
      </body>
    </html>
  );
}
