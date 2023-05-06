import './global.css'

import { dir } from 'i18next'
import { languages } from '../../i18n/settings'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <div>
          <h1>Root Layout</h1>
        </div>
        {children}
      </body>
    </html>
  )
}
