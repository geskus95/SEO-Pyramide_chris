import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fluxie - Blog & Lesewelt',
  description: 'Geschichten und Tipps zur Leseförderung',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="bg-fluxie-cream">
        {/* Header mit Fluxie Branding */}
        <nav className="bg-fluxie-blue text-white shadow-lg">
          <div className="container mx-auto px-4 py-3 sm:py-4">
            <div className="flex items-center justify-between gap-4">
              {/* Fluxie Logo */}
              <a href="/home/" className="flex items-center hover:opacity-80 transition flex-shrink-0">
                <img
                  src="https://fluxie.de/wp-content/uploads/2025/08/fluxietopleft.png"
                  alt="Fluxie Logo"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </a>

              {/* Navigation Links */}
              <div className="flex gap-3 sm:gap-6 text-sm sm:text-base">
                <a
                  href="/home/lesewelt/"
                  className="hover:opacity-80 transition font-medium text-white flex items-center gap-1 sm:gap-2"
                >
                  <span className="text-lg sm:text-xl">📚</span>
                  <span className="hidden xs:inline">Lesewelt</span>
                </a>
                <a
                  href="/home/blog/"
                  className="hover:opacity-80 transition font-medium text-white flex items-center gap-1 sm:gap-2"
                >
                  <span className="text-lg sm:text-xl">✍️</span>
                  <span className="hidden xs:inline">Blog</span>
                </a>
                <a
                  href="https://fluxie.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition font-medium text-white flex items-center gap-1 sm:gap-2"
                >
                  <span className="text-lg sm:text-xl">🛒</span>
                  <span className="hidden xs:inline">Shop</span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content mit Custom Background */}
        <main className="min-h-screen bg-fluxie-cream">
          {children}
        </main>

        {/* Footer mit Fluxie Branding */}
        <footer className="bg-fluxie-blue text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="mb-2 font-medium">© 2025 Fluxie - Interaktive Lesekarten für Kinder</p>
              <p className="text-sm opacity-80">Wie Tonies, aber fürs Lesen</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
