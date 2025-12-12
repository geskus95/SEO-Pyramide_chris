import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ritter Abenteuergeschichten – Spannende Rittergeschichten für Kinder | Fluxie',
  description: 'Aufregende Ritter Abenteuergeschichten ✓ Perfekt zum Vorlesen ✓ Mit mutigen Rittern & Drachen ✓ Kostenlose Rittergeschichten ➤ Jetzt entdecken!',
  openGraph: {
    title: 'Ritter Abenteuergeschichten – Spannende Rittergeschichten für Kinder | Fluxie',
    description: 'Aufregende Ritter Abenteuergeschichten ✓ Perfekt zum Vorlesen ✓ Mit mutigen Rittern & Drachen ✓ Kostenlose Rittergeschichten',
    url: 'https://wunschturm.de/home/lesewelt/abenteuergeschichten/ritter-abenteuer',
    siteName: 'Fluxie',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://fluxie.de/wp-content/uploads/2025/12/RitterKunibert_002.webp',
        width: 1200,
        height: 630,
        alt: 'Ritter Abenteuergeschichten für Kinder'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ritter Abenteuergeschichten – Spannende Rittergeschichten für Kinder',
    description: 'Aufregende Ritter Abenteuergeschichten ✓ Perfekt zum Vorlesen ✓ Mit mutigen Rittern & Drachen',
    images: ['https://fluxie.de/wp-content/uploads/2025/12/RitterKunibert_002.webp']
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://wunschturm.de/home/lesewelt/abenteuergeschichten/ritter-abenteuer'
  }
}

export default function RitterAbenteuerPage() {
  // Schema.org JSON-LD Strukturierte Daten
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Ritter Abenteuergeschichten",
    "description": "Sammlung spannender Ritter Abenteuergeschichten zum Vorlesen für Kinder ab 5 Jahren.",
    "url": "https://wunschturm.de/home/lesewelt/abenteuergeschichten/ritter-abenteuer",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Der kleinste Ritter aller Zeiten",
          "url": "https://wunschturm.de/home/lesewelt/abenteuergeschichten/der-kleinste-ritter-aller-zeiten"
        }
      ]
    },
    "audience": {
      "@type": "PeopleAudience",
      "suggestedMinAge": 5,
      "suggestedMaxAge": 10
    },
    "inLanguage": "de-DE",
    "isPartOf": {
      "@type": "WebPage",
      "name": "Abenteuergeschichten",
      "url": "https://wunschturm.de/home/lesewelt/abenteuergeschichten"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://wunschturm.de/home/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Lesewelt",
        "item": "https://wunschturm.de/home/lesewelt"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Abenteuergeschichten",
        "item": "https://wunschturm.de/home/lesewelt/abenteuergeschichten"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Ritter Abenteuer",
        "item": "https://wunschturm.de/home/lesewelt/abenteuergeschichten/ritter-abenteuer"
      }
    ]
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fluxie",
    "url": "https://fluxie.de",
    "logo": "https://fluxie.de/logo.png",
    "description": "Interaktive Lesekarten für Kinder – wie Tonies, aber fürs Lesen",
    "sameAs": [
      "https://www.instagram.com/fluxie.de",
      "https://www.facebook.com/fluxie.de"
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Warum sind Rittergeschichten gut für Kinder?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rittergeschichten fördern Mut, Ehrgefühl und Selbstvertrauen bei Kindern. Sie vermitteln wichtige Werte wie Tapferkeit, Fairness und Hilfsbereitschaft. Die spannenden Geschichten regen die Fantasie an und helfen Kindern, über sich hinauszuwachsen."
        }
      },
      {
        "@type": "Question",
        "name": "Ab welchem Alter sind Rittergeschichten geeignet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unsere Ritter Abenteuergeschichten sind für Kinder ab 5 Jahren konzipiert. Die Geschichten sind altersgerecht spannend gestaltet und können bis ins Grundschulalter (ca. 10 Jahre) vorgelesen werden. Jüngere Kinder profitieren besonders vom gemeinsamen Vorlesen und der aufregenden Atmosphäre."
        }
      },
      {
        "@type": "Question",
        "name": "Wie lange dauert das Vorlesen einer Rittergeschichte?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die meisten unserer Rittergeschichten haben eine Vorlesedauer von etwa 8-10 Minuten. Diese Länge ist ideal für das Vorlesen am Nachmittag oder als Abendritual, da sie spannend genug ist für ein Abenteuer, aber nicht zu lang für die Aufmerksamkeitsspanne von Kindern."
        }
      }
    ]
  }

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <a href="/home/" className="hover:opacity-80 transition text-fluxie-orange">Home</a>
              </li>
              <li aria-hidden="true">
                <span className="mx-2">›</span>
              </li>
              <li>
                <a href="/home/lesewelt/" className="hover:opacity-80 transition text-fluxie-orange">Lesewelt</a>
              </li>
              <li aria-hidden="true">
                <span className="mx-2">›</span>
              </li>
              <li>
                <a href="/home/lesewelt/abenteuergeschichten/" className="hover:opacity-80 transition text-fluxie-orange">
                  Abenteuergeschichten
                </a>
              </li>
              <li aria-hidden="true">
                <span className="mx-2">›</span>
              </li>
              <li aria-current="page">
                <span className="text-gray-900">Ritter Abenteuer</span>
              </li>
            </ol>
          </nav>

          {/* Header mit Intro */}
          <header className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-fluxie-orange break-words">
              🏰 Ritter Abenteuergeschichten für Kinder
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-4">
                Entdecke aufregende <strong>Ritter Abenteuergeschichten</strong>, die kleine Helden
                in die Welt von Burgen, Drachen und tapferen Rittern entführen. Mutige Ritter, geheimnisvolle
                Drachen und spannende Abenteuer – hier finden Kinder die perfekten Rittergeschichten
                zum Vorlesen und Selberlesen.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Rittergeschichten für Kinder sind besonders beliebt bei kleinen Abenteurern, die Mut und
                Ehrgefühl bewundern. Die Geschichten vermitteln wichtige Werte wie Tapferkeit, Fairness
                und Hilfsbereitschaft – perfekt für das Vorlesen am Nachmittag oder als spannendes Abendritual.
              </p>
            </div>
          </header>

          {/* Story Grid */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Unsere Ritter Abenteuergeschichten
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Story 1 - Knight */}
              <a
                href="/home/lesewelt/abenteuergeschichten/der-kleinste-ritter-aller-zeiten/"
                className="block group"
              >
                <article className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all h-full">
                  <div className="flex flex-col h-full">
                    <div className="text-6xl mb-4 text-center">🛡️🏰</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:opacity-80 transition text-fluxie-orange">
                      Der kleinste Ritter aller Zeiten
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      Rittermaus Kunibert ist klein, aber mit Cleverness und Mut beweist er,
                      dass wahre Größe von innen kommt. Ein Abenteuer über Selbstvertrauen!
                    </p>
                    <div className="space-y-2 text-sm text-gray-500 mb-4">
                      <div>👶 Ab 5 Jahren</div>
                      <div>⏱️ 8-10 Min. Lesezeit</div>
                      <div>🏰 Mutig & Inspirierend</div>
                    </div>
                    <span className="font-medium group-hover:underline text-fluxie-orange">
                      Jetzt lesen →
                    </span>
                  </div>
                </article>
              </a>

              {/* Story 2 - Placeholder */}
              <div className="block">
                <article className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md p-6 h-full border-2 border-dashed border-gray-300">
                  <div className="flex flex-col h-full">
                    <div className="text-6xl mb-4 text-center opacity-50">🐉⚔️</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-500">
                      Der Drache vom Silberberg
                    </h3>
                    <p className="text-gray-500 mb-4 flex-grow">
                      Ein mutiger Ritter begegnet einem einsamen Drachen und lernt,
                      dass Freundschaft stärker ist als jedes Schwert.
                    </p>
                    <div className="space-y-2 text-sm text-gray-400 mb-4">
                      <div>👶 Ab 5 Jahren</div>
                      <div>⏱️ 10 Min. Lesezeit</div>
                    </div>
                    <span className="text-gray-400 font-medium italic">
                      Bald verfügbar
                    </span>
                  </div>
                </article>
              </div>

              {/* Story 3 - Placeholder */}
              <div className="block">
                <article className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md p-6 h-full border-2 border-dashed border-gray-300">
                  <div className="flex flex-col h-full">
                    <div className="text-6xl mb-4 text-center opacity-50">👑🏰</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-500">
                      Das verzauberte Schloss
                    </h3>
                    <p className="text-gray-500 mb-4 flex-grow">
                      Ein tapferer Ritter muss drei Rätsel lösen, um den Zauber
                      eines verzauberten Schlosses zu brechen.
                    </p>
                    <div className="space-y-2 text-sm text-gray-400 mb-4">
                      <div>👶 Ab 6 Jahren</div>
                      <div>⏱️ 12 Min. Lesezeit</div>
                    </div>
                    <span className="text-gray-400 font-medium italic">
                      Bald verfügbar
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Krümmelbrandt Produktbox */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 mb-12 border-2 shadow-lg border-fluxie-orange">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <a
                  href="https://fluxie.de/produkt/kruemelbrandt-der-backdrache/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="https://fluxie.de/wp-content/uploads/2025/08/6-768x768.png"
                    alt="Krümmelbrandt der Backdrache - Fluxie Lesekarte"
                    className="w-48 h-48 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-fluxie-orange">
                  Noch mehr Abenteuer mit Krümmelbrandt
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Krümmelbrandt der Backdrache erlebt ebenfalls spannende Abenteuer! Eine zauberhafte Geschichte
                  über einen kleinen Drachen, der lieber backt als Feuer speit. Perfekt für alle kleinen Ritter und Drachenfans!
                </p>
                <a
                  href="https://fluxie.de/produkt/kruemelbrandt-der-backdrache/"
                  className="inline-block bg-fluxie-orange hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Krümmelbrandt entdecken →
                </a>
              </div>
            </div>
          </div>

          {/* Content-Block mit H3-Subsections */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Rittergeschichten für Kinder – Mehr als nur Unterhaltung
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              {/* H3: Warum Rittergeschichten Kinder faszinieren */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Warum Rittergeschichten Kinder faszinieren
                </h3>
                <p className="leading-relaxed">
                  Ritter Abenteuergeschichten haben eine besondere Anziehungskraft auf Kinder. Die Vorstellung
                  von mutigen Rittern in glänzenden Rüstungen, geheimnisvollen Burgen und feuerspeienden Drachen
                  weckt die Abenteuerlust in jedem Kind. Rittergeschichten kombinieren Spannung mit wichtigen
                  Lebenslektionen und vermitteln dabei Werte wie Mut, Ehrgefühl und Hilfsbereitschaft. Die
                  faszinierenden Charaktere, von tapferen Rittern bis zu weisen Königen, machen jede Geschichte
                  zu einem einzigartigen Erlebnis.
                </p>
              </div>

              {/* H3: Mut und Selbstvertrauen entwickeln */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Mut und Selbstvertrauen durch Rittergeschichten
                </h3>
                <p className="leading-relaxed">
                  Rittergeschichten für Kinder sind wertvolle Werkzeuge zur Entwicklung von Mut und Selbstvertrauen.
                  Durch die Identifikation mit tapferen Rittern lernen Kinder, dass Herausforderungen gemeistert
                  werden können. Die Geschichten zeigen, dass es normal ist, manchmal Angst zu haben, aber dass
                  wahre Tapferkeit darin besteht, trotzdem voranzuschreiten. Kinder sehen, wie Ritterhelden
                  Probleme kreativ lösen und dabei nie aufgeben – eine wichtige Lektion fürs Leben.
                </p>
              </div>

              {/* H3: Fairness und Ehrgefühl */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Fairness und Ehrgefühl im Rittertum
                </h3>
                <p className="leading-relaxed">
                  Ein wahrer Ritter kämpft fair und hilft den Schwachen. Ritter Abenteuergeschichten vermitteln
                  Kindern wichtige Werte wie Fairness, Gerechtigkeit und Ehrgefühl. Die Geschichten zeigen, dass
                  wahre Stärke nicht nur in körperlicher Kraft liegt, sondern auch in Charakterstärke und moralischer
                  Integrität. Kinder lernen, dass es wichtig ist, für das Richtige einzustehen und anderen zu helfen,
                  auch wenn es schwierig ist.
                </p>
              </div>

              {/* H3: Fantasie und Kreativität fördern */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Fantasie und Kreativität anregen
                </h3>
                <p className="leading-relaxed">
                  Die Welt der Ritter ist voller Möglichkeiten für kreatives Denken. Geheimnisvolle Burgen,
                  verzauberte Wälder, sprechende Drachen – Rittergeschichten für Kinder öffnen Türen zu
                  fantastischen Welten. Diese Geschichten regen die Vorstellungskraft an und ermutigen Kinder,
                  ihre eigenen Abenteuer zu erfinden. Das Nachspielen von Ritterabenteuern fördert zudem die
                  soziale Interaktion und das Rollenspiel.
                </p>
              </div>

              {/* H3: Problemlösungsfähigkeiten entwickeln */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Problemlösungsfähigkeiten entwickeln
                </h3>
                <p className="leading-relaxed">
                  Ritter müssen oft clevere Lösungen für knifflige Situationen finden. Ob es darum geht,
                  ein Rätsel zu lösen oder einen Drachen zu besänftigen – Ritter Abenteuergeschichten
                  zeigen Kindern, wie man kreativ denkt und Probleme löst. Diese Fähigkeiten sind nicht nur
                  in Geschichten wichtig, sondern auch im echten Leben. Kinder lernen, dass Intelligenz und
                  Cleverness oft mächtiger sind als rohe Gewalt.
                </p>
              </div>

              {/* H3: Historisches Interesse wecken */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Interesse an Geschichte wecken
                </h3>
                <p className="leading-relaxed">
                  Rittergeschichten können das Interesse an Geschichte wecken. Auch wenn unsere Geschichten
                  fantasievoll sind, vermitteln sie ein Gefühl für die Ritterzeit, Burgen und das Leben im
                  Mittelalter. Dies kann der erste Schritt sein, um Kinder für Geschichte zu begeistern und
                  ihre Neugier auf andere Zeiten und Kulturen zu wecken.
                </p>
              </div>

              {/* H3: Werte vermitteln */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Wichtige Werte durch Rittergeschichten vermitteln
                </h3>
                <p className="leading-relaxed">
                  Moderne Ritter Abenteuergeschichten für Kinder vermitteln zeitlose Werte. Tapferkeit,
                  Loyalität, Hilfsbereitschaft und Fairness stehen im Mittelpunkt vieler Rittergeschichten.
                  Kinder lernen, dass wahre Helden nicht nur stark sind, sondern auch gütig und gerecht.
                  Diese Botschaften prägen die Wertvorstellungen von Kindern und helfen ihnen, zu empathischen
                  und verantwortungsbewussten Menschen heranzuwachsen.
                </p>
              </div>

              {/* H3: Praktische Tipps für Eltern */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Tipps für das Vorlesen von Rittergeschichten
                </h3>
                <p className="leading-relaxed">
                  Machen Sie das Vorlesen zum Abenteuer! Verwenden Sie verschiedene Stimmen für Ritter,
                  Drachen und Könige. Bauen Sie Spannung auf, indem Sie in aufregenden Momenten langsamer
                  lesen. Lassen Sie Ihr Kind mitraten: "Was würde ein mutiger Ritter jetzt tun?" Verwenden
                  Sie Requisiten wie ein Spielzeugschwert oder eine selbstgebastelte Ritterrüstung. Nach der
                  Geschichte können Sie gemeinsam ein Ritterabenteuer nachspielen oder eine Burg malen. So
                  wird das Vorleseerlebnis noch intensiver und unvergesslicher.
                </p>
              </div>

              {/* Abschluss-Paragraph */}
              <div className="pt-4 border-t border-gray-200">
                <p className="leading-relaxed font-medium">
                  Ritter Abenteuergeschichten sind wertvolle Begleiter in der Kindheit. Sie unterhalten nicht
                  nur, sondern fördern auch wichtige Fähigkeiten und Werte. Das gemeinsame Vorlesen stärkt die
                  Bindung zwischen Eltern und Kindern und schafft schöne Erinnerungen. Die spannenden Geschichten
                  über tapfere Ritter, geheimnisvolle Drachen und heldenhafte Taten begleiten Kinder oft
                  ihr ganzes Leben lang und wecken vielleicht sogar eine lebenslange Liebe zum Lesen und zu
                  Abenteuern.
                </p>
              </div>
            </div>
          </section>

          {/* Tipps-Sektion */}
          <section className="mb-12 bg-orange-50 rounded-xl p-8 border-2 border-orange-100">
            <h2 className="text-2xl font-bold mb-4 text-fluxie-orange">
              💡 Tipps zum Vorlesen von Rittergeschichten
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Ritterstimme verwenden:</strong> Sprechen Sie mit tiefer, mutiger Stimme</li>
              <li>✓ <strong>Requisiten einsetzen:</strong> Eine Spielzeugrüstung oder Schwert machen das Vorlesen lebendiger</li>
              <li>✓ <strong>Spannung aufbauen:</strong> Lesen Sie in spannenden Momenten langsamer und machen Sie dramatische Pausen</li>
              <li>✓ <strong>Interaktiv gestalten:</strong> Lassen Sie Ihr Kind Drachengeräusche machen oder Schwertkämpfe nachahmen</li>
              <li>✓ <strong>Nachspielen:</strong> Nach der Geschichte können Sie gemeinsam Ritter spielen oder eine Burg bauen</li>
            </ul>
          </section>

          {/* FAQ-Sektion */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Häufig gestellte Fragen
            </h2>

            <div className="space-y-6">
              {/* Frage 1 */}
              <div className="border-l-4 pl-4 border-l-fluxie-orange">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Warum sind Rittergeschichten gut für Kinder?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Rittergeschichten fördern Mut, Ehrgefühl und Selbstvertrauen bei Kindern.
                  Sie vermitteln wichtige Werte wie Tapferkeit, Fairness und Hilfsbereitschaft. Die spannenden
                  Geschichten regen die Fantasie an und helfen Kindern, über sich hinauszuwachsen.
                </p>
              </div>

              {/* Frage 2 */}
              <div className="border-l-4 pl-4 border-l-fluxie-orange">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Ab welchem Alter sind Rittergeschichten geeignet?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Unsere Ritter Abenteuergeschichten sind für Kinder ab 5 Jahren konzipiert. Die Geschichten
                  sind altersgerecht spannend gestaltet und können bis ins Grundschulalter (ca. 10 Jahre)
                  vorgelesen werden. Jüngere Kinder profitieren besonders vom gemeinsamen Vorlesen und der
                  aufregenden Atmosphäre.
                </p>
              </div>

              {/* Frage 3 */}
              <div className="border-l-4 pl-4 border-l-fluxie-orange">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Wie lange dauert das Vorlesen einer Rittergeschichte?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Die meisten unserer Rittergeschichten haben eine Vorlesedauer von etwa 8-10 Minuten. Diese
                  Länge ist ideal für das Vorlesen am Nachmittag oder als Abendritual, da sie spannend genug
                  ist für ein Abenteuer, aber nicht zu lang für die Aufmerksamkeitsspanne von Kindern.
                </p>
              </div>
            </div>
          </section>

          {/* Verwandte Kategorien */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Das könnte dir auch gefallen
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="/home/lesewelt/abenteuergeschichten/piraten-abenteuer/"
                className="bg-orange-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-3">🏴‍☠️⚓</div>
                <h3 className="text-xl font-bold mb-2 text-fluxie-orange">Piraten-Abenteuer</h3>
                <p className="text-gray-600">Spannende Geschichten über mutige Seefahrer und geheimnisvolle Schätze</p>
              </a>

              <a
                href="/home/lesewelt/abenteuergeschichten/"
                className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-6 hover:shadow-lg transition-shadow border-2 border-fluxie-orange"
              >
                <div className="text-5xl mb-3">⚔️✨</div>
                <h3 className="text-xl font-bold mb-2 text-fluxie-orange">Alle Abenteuergeschichten</h3>
                <p className="text-gray-600">Entdecke noch mehr spannende Abenteuer</p>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
