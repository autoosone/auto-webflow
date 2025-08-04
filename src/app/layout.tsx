import './globals.css'
import '../../devlink/global.css'
import { DevLinkProvider } from '../../devlink/DevLinkProvider'

export const metadata = {
  title: 'Millennium Auto',
  description: 'Premium automotive experience powered by Webflow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <DevLinkProvider>
          {children}
        </DevLinkProvider>
      </body>
    </html>
  )
}
