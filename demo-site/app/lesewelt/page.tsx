export default function LeseweltPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <a href="/home/" className="hover:opacity-80 transition text-fluxie-orange">Home</a>
          <span className="mx-2">›</span>
          <span>Lesewelt</span>
        </nav>

        {/* Hero */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-fluxie-orange break-words">
          📚 Lesewelt – Entdecke unsere Geschichten
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Tauche ein in die wunderbare Welt der Geschichten! Hier findest du spannende Abenteuer,
          berührende Gutenachtgeschichten und vieles mehr.
        </p>

        {/* Kategorien-Grid */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Kategorien</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <a href="/home/lesewelt/gutenachtgeschichten/" className="group">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-5xl mb-3">🌙</div>
              <h3 className="text-xl font-bold mb-2 group-hover:opacity-80 text-fluxie-orange">
                Gutenachtgeschichten
              </h3>
              <p className="text-gray-600">
                Sanfte Geschichten zum Einschlafen und Träumen
              </p>
            </div>
          </a>

          <a href="/home/lesewelt/abenteuergeschichten/" className="group">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-5xl mb-3">⚔️</div>
              <h3 className="text-xl font-bold mb-2 group-hover:opacity-80 text-fluxie-orange">
                Abenteuergeschichten
              </h3>
              <p className="text-gray-600">
                Spannende Geschichten für mutige Entdecker und kleine Helden
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
