import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Der kleinste Ritter aller Zeiten - Abenteuergeschichte für Kinder | Fluxie',
  description: 'Eine zauberhafte Abenteuergeschichte über Ritter Kunibert, den kleinsten Ritter des Königreichs, der beweist, dass wahre Größe von innen kommt. Perfekt zum Vorlesen für Kinder ab 5 Jahren.',
  keywords: 'Rittergeschichte, Abenteuergeschichte Kinder, Vorlesegeschichte Ritter, Mutgeschichte, Selbstbewusstsein Kinder, Geschichte über Größe, Fluxie Lesekarten',
  authors: [{ name: 'Fluxie Team' }],
  openGraph: {
    title: 'Der kleinste Ritter aller Zeiten - Abenteuergeschichte | Fluxie',
    description: 'Ritter Kunibert ist der kleinste Ritter im ganzen Königreich. Doch als das Schloss in Gefahr gerät, beweist er, dass wahre Größe von innen kommt.',
    type: 'article',
    url: 'https://wunschturm.de/home/lesewelt/abenteuergeschichten/der-kleinste-ritter-aller-zeiten/',
    images: [
      {
        url: 'https://fluxie.de/wp-content/uploads/2025/08/fluxietopleft.png',
        width: 1200,
        height: 630,
        alt: 'Der kleinste Ritter aller Zeiten - Fluxie Abenteuergeschichte',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Der kleinste Ritter aller Zeiten - Abenteuergeschichte',
    description: 'Eine zauberhafte Geschichte über Mut, Selbstbewusstsein und wahre Größe.',
  },
  alternates: {
    canonical: 'https://wunschturm.de/home/lesewelt/abenteuergeschichten/der-kleinste-ritter-aller-zeiten/',
  },
}

export default function DerKleinsteRitterPage() {
  return (
    <>
      {/* Schema.org JSON-LD für SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Der kleinste Ritter aller Zeiten',
            description: 'Eine Abenteuergeschichte über Ritter Kunibert, der beweist, dass wahre Größe von innen kommt.',
            author: {
              '@type': 'Organization',
              name: 'Fluxie',
              url: 'https://fluxie.de',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Fluxie',
              logo: {
                '@type': 'ImageObject',
                url: 'https://fluxie.de/wp-content/uploads/2025/08/fluxietopleft.png',
              },
            },
            datePublished: '2025-01-10',
            dateModified: '2025-01-10',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://wunschturm.de/home/lesewelt/abenteuergeschichten/der-kleinste-ritter-aller-zeiten/',
            },
            keywords: 'Rittergeschichte, Abenteuergeschichte, Mutgeschichte, Selbstbewusstsein, Vorlesen',
            articleSection: 'Abenteuergeschichten',
            inLanguage: 'de-DE',
          }),
        }}
      />

      {/* Breadcrumb Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://wunschturm.de/home/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Lesewelt',
                item: 'https://wunschturm.de/home/lesewelt/',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Abenteuergeschichten',
                item: 'https://wunschturm.de/home/lesewelt/abenteuergeschichten/',
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: 'Der kleinste Ritter aller Zeiten',
                item: 'https://wunschturm.de/home/lesewelt/abenteuergeschichten/der-kleinste-ritter-aller-zeiten/',
              },
            ],
          }),
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Fluxie',
            url: 'https://fluxie.de',
            logo: 'https://fluxie.de/wp-content/uploads/2025/08/fluxietopleft.png',
            description: 'Interaktive Lesekarten für Kinder - Wie Tonies, aber fürs Lesen',
            sameAs: ['https://wunschturm.de/home/'],
          }),
        }}
      />

      {/* FAQ Schema für Featured Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Ab welchem Alter ist die Geschichte vom kleinsten Ritter geeignet?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Die Geschichte ist ideal für Kinder ab 5 Jahren. Sie vermittelt wichtige Werte wie Mut, Selbstbewusstsein und dass wahre Größe von innen kommt - Themen, die Kinder in diesem Alter besonders beschäftigen.',
                },
              },
              {
                '@type': 'Question',
                name: 'Wie lange dauert das Vorlesen der Rittergeschichte?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Die Vorlesezeit beträgt etwa 8-10 Minuten. Die Geschichte hat die perfekte Länge für eine abendliche Vorleseroutine oder als spannende Geschichte für zwischendurch.',
                },
              },
              {
                '@type': 'Question',
                name: 'Welche Werte vermittelt die Geschichte vom kleinsten Ritter?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Die Geschichte zeigt, dass körperliche Größe nicht über den Wert eines Menschen entscheidet. Sie vermittelt Mut, Kreativität, Problemlösungskompetenz und Selbstvertrauen - und dass jeder besondere Talente hat.',
                },
              },
              {
                '@type': 'Question',
                name: 'Ist die Geschichte spannend genug für abenteuerlustige Kinder?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ja! Die Geschichte bietet echte Abenteuer-Spannung mit einem bedrohlichen Drachen und einem cleveren Helden. Sie ist aufregend genug, um Kinder zu fesseln, aber nicht zu gruselig für sensible Gemüter.',
                },
              },
              {
                '@type': 'Question',
                name: 'Hilft die Geschichte Kindern, die sich zu klein oder schwach fühlen?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Definitiv! Ritter Kunibert ist eine wunderbare Identifikationsfigur für Kinder, die sich manchmal klein oder unsicher fühlen. Die Geschichte zeigt, dass jeder auf seine Weise stark sein kann.',
                },
              },
              {
                '@type': 'Question',
                name: 'Kann ich die Geschichte auch mit Fluxie-Lesekarten nutzen?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ja! Diese Geschichte passt perfekt zum Fluxie-Produkt "Krümelbrandt", das speziell für Abenteuergeschichten entwickelt wurde. So können Kinder die Geschichte selbst lesen und erleben.',
                },
              },
            ],
          }),
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8 text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <a href="/home/" className="hover:text-fluxie-orange">
                  Home
                </a>
              </li>
              <li>
                <span className="mx-2">›</span>
              </li>
              <li>
                <a href="/home/lesewelt/" className="hover:text-fluxie-orange">
                  Lesewelt
                </a>
              </li>
              <li>
                <span className="mx-2">›</span>
              </li>
              <li>
                <a
                  href="/home/lesewelt/abenteuergeschichten/"
                  className="hover:text-fluxie-orange"
                >
                  Abenteuergeschichten
                </a>
              </li>
              <li>
                <span className="mx-2">›</span>
              </li>
              <li>
                <span className="text-gray-800">Der kleinste Ritter aller Zeiten</span>
              </li>
            </ol>
          </nav>

          {/* Story Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-fluxie-orange">
              🏰 Der kleinste Ritter aller Zeiten
            </h1>
            <div className="flex flex-wrap gap-4 text-gray-600">
              <span className="flex items-center gap-2">
                <span className="text-xl">⏱️</span>
                <span>8-10 Min. Lesezeit</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-xl">👶</span>
                <span>Ab 5 Jahren</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-xl">🎯</span>
                <span>Mut & Selbstbewusstsein</span>
              </span>
            </div>
          </header>

          {/* Teaser Box */}
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-6 mb-8 border-l-4 border-fluxie-orange">
            <p className="text-lg text-gray-800 italic">
              Ritter Kunibert ist der kleinste Ritter im ganzen Königreich. Seine Rüstung muss
              extra angefertigt werden, und sein Pferd ist eher ein großes Pony. Alle anderen
              Ritter lachen über ihn – bis eines Tages ein gefährlicher Drache auftaucht und
              ausgerechnet der kleinste Ritter zur größten Hoffnung wird...
            </p>
          </div>

          {/* Story Illustration */}
          <div className="mb-8 text-center">
            <div className="inline-block bg-gradient-to-br from-orange-200 to-amber-200 rounded-2xl p-8">
              <div className="text-9xl">🛡️</div>
            </div>
            <p className="text-sm text-gray-500 mt-2 italic">
              Ritter Kunibert - klein, aber oho!
            </p>
          </div>

          {/* Main Story Content */}
          <article className="prose prose-lg max-w-none mb-12">
            <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
              <h2 className="text-2xl font-bold text-fluxie-orange mb-4">
                Die Geschichte beginnt...
              </h2>
              <p className="mb-4">
                Auf der Burg Hochenstein lebte einst der kleinste Ritter des ganzen
                Königreichs. Sein Name war Kunibert, und er war gerade mal so groß wie ein
                Besenstiel. Seine Rüstung musste der Schmied aus Puppenrüstungsteilen
                zusammenbauen, und sein treues Ross hieß Flöckchen – ein Pony, das eher wie
                ein großer Hund aussah.
              </p>
              <p className="mb-4">
                Die anderen Ritter der Burg lachten oft über Kunibert. „Schau dir den
                Knirps an!", riefen sie. „Der ist ja kleiner als mein Schwert!" Doch
                Kunibert ließ sich davon nicht unterkriegen. Er übte jeden Tag fleißig mit
                seinem kleinen Schwert und las alle Bücher über Drachenkämpfe und
                Heldentaten, die er in der Burgbibliothek finden konnte.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
              <h2 className="text-2xl font-bold text-fluxie-orange mb-4">
                Der Drache kommt!
              </h2>
              <p className="mb-4">
                Eines Morgens wurde die Burg von einem lauten Gebrüll geweckt. Am Horizont
                erschien eine riesige Gestalt mit gewaltigen Flügeln – ein Drache! Und nicht
                irgendein Drache, sondern Glutzahn, der gefürchtetste Drache der sieben
                Königreiche.
              </p>
              <p className="mb-4">
                „Ich will den königlichen Schatz!", donnerte Glutzahn und spuckte Feuer in
                die Luft. „Sonst verwandle ich eure Burg in einen Haufen Asche!"
              </p>
              <p className="mb-4">
                Alle großen, starken Ritter zitterten vor Angst. Ritter Rüdiger versteckte
                sich unter seinem Bett. Ritter Ruprecht tat so, als hätte er plötzlich
                Bauchschmerzen. Und Ritter Roland... nun, Roland war so schnell weggerannt,
                dass man nur noch eine Staubwolke sah.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
              <h2 className="text-2xl font-bold text-fluxie-orange mb-4">
                Kuniberts großer Plan
              </h2>
              <p className="mb-4">
                Kunibert hingegen hatte eine Idee. In all den Büchern, die er gelesen hatte,
                stand: „Drachen sind groß und stark, aber nicht besonders schlau. Sie können
                nicht durch enge Spalten oder kleine Türen."
              </p>
              <p className="mb-4">
                Der kleine Ritter kletterte auf sein Pony Flöckchen und ritt zum Drachen
                hinaus. „Hey, Glutzahn!", rief er mit piepsiger Stimme. „Ich bin der
                stärkste Ritter dieser Burg! Wenn du mich besiegen willst, musst du mir in
                die Burg folgen!"
              </p>
              <p className="mb-4">
                Der Drache lachte so laut, dass die Fensterscheiben klirrten. „DU? So ein
                Zwerg will mich herausfordern? Das wird der kürzeste Kampf aller Zeiten!"
              </p>
              <p className="mb-4">
                Kunibert galoppierte zurück zur Burg, und der Drache folgte ihm – genau wie
                geplant. Der kleine Ritter führte Glutzahn durch das große Burgtor, dann
                durch die Halle, dann durch einen Korridor, und schließlich zu einer ganz
                besonderen Tür: der Geheimtür zur Schatzkammer.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
              <h2 className="text-2xl font-bold text-fluxie-orange mb-4">
                Die Wendung
              </h2>
              <p className="mb-4">
                Diese Tür war winzig – gerade groß genug für Kunibert, aber viel zu klein
                für einen Drachen. Glutzahn versuchte mit aller Kraft, sich hindurchzuquetschen.
                Er drückte und schubste, aber er steckte fest – mit dem Kopf in der
                Schatzkammer und dem riesigen Körper im Gang!
              </p>
              <p className="mb-4">
                „Hilfe!", brüllte der Drache. „Ich stecke fest! Ich kann mich nicht
                bewegen!"
              </p>
              <p className="mb-4">
                Kunibert marschierte mutig vor den festsitzenden Drachenkopf. „Nun, Glutzahn",
                sagte er mit fester Stimme, „du hast zwei Möglichkeiten: Entweder du
                versprichst, diese Burg nie wieder anzugreifen, oder ich hole die Burgwache,
                und wir bauen die Tür um dich herum zu. Dann sitzt du hier für immer fest!"
              </p>
              <p className="mb-4">
                Der Drache überlegte nicht lange. „Ich verspreche es! Ich verspreche es!
                Lasst mich nur hier raus!"
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
              <h2 className="text-2xl font-bold text-fluxie-orange mb-4">
                Das glückliche Ende
              </h2>
              <p className="mb-4">
                Mit vereinten Kräften zogen alle Burgbewohner den Drachen wieder aus der Tür
                heraus. Glutzahn schüttelte sich, schaute beschämt zu Boden und flog davon –
                und er hat die Burg Hochenstein nie wieder belästigt.
              </p>
              <p className="mb-4">
                Von diesem Tag an lachte niemand mehr über den kleinen Ritter Kunibert. Der
                König ernannte ihn zum „Ritter der Cleverness" und gab ihm eine besondere
                Auszeichnung: einen goldenen Schild mit der Aufschrift „Wahre Größe kommt von
                innen".
              </p>
              <p className="mb-4">
                Und wenn die anderen Ritter jetzt Geschichten von ihren Heldentaten erzählten,
                hörten alle am liebsten Kuniberts Geschichte zu – die Geschichte vom kleinsten
                Ritter aller Zeiten, der mit Köpfchen statt Muskeln einen Drachen besiegte.
              </p>
              <p className="text-center italic text-lg mt-6 text-fluxie-orange">
                🏰 Ende 🏰
              </p>
            </div>
          </article>

          {/* Fluxie Product Box - Krümelbrandt */}
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-6 mb-12 border-2 border-fluxie-orange">
            <div className="flex items-start gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md flex-shrink-0">
                <div className="text-6xl">🎴</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-fluxie-orange">
                  Noch mehr Abenteuer mit Krümelbrandt!
                </h3>
                <p className="text-gray-700 mb-4">
                  Diese Geschichte und viele weitere spannende Abenteuer findest du auf
                  unseren Fluxie-Lesekarten. Mit Krümelbrandt tauchen Kinder in mutige
                  Ritter- und Abenteuerwelten ein – perfekt für kleine Helden!
                </p>
                <a
                  href="https://fluxie.de/produkt/kruemelbrandt/"
                  className="inline-block bg-fluxie-orange text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition font-medium"
                >
                  Krümelbrandt entdecken →
                </a>
              </div>
            </div>
          </div>

          {/* Outro: Warum diese Geschichte funktioniert */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              💡 Warum Abenteuergeschichten mit cleveren Helden so wertvoll sind
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong className="text-fluxie-orange">Stärkt das Selbstbewusstsein:</strong>{' '}
                Kinder, die sich manchmal klein oder unsicher fühlen, finden in Kunibert
                eine wunderbare Identifikationsfigur. Die Geschichte zeigt: Jeder hat
                besondere Stärken!
              </p>
              <p>
                <strong className="text-fluxie-orange">Fördert kreatives Denken:</strong>{' '}
                Kunibert löst das Problem nicht mit Kraft, sondern mit Cleverness. Das
                inspiriert Kinder, selbst kreativ nach Lösungen zu suchen.
              </p>
              <p>
                <strong className="text-fluxie-orange">Vermittelt wichtige Werte:</strong>{' '}
                Die Geschichte lehrt, dass äußere Merkmale (Größe, Aussehen) nicht über den
                Wert eines Menschen entscheiden – eine wichtige Lektion gegen Mobbing.
              </p>
              <p>
                <strong className="text-fluxie-orange">Perfekte Mischung aus Spannung und Humor:</strong>{' '}
                Die Drachen-Bedrohung sorgt für echte Abenteuer-Spannung, während Kuniberts
                cleverer Plan und die Situation des festsitzenden Drachen für humorvolle
                Momente sorgen.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              ❓ Häufig gestellte Fragen
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2 text-fluxie-orange">
                  Ab welchem Alter ist die Geschichte vom kleinsten Ritter geeignet?
                </h3>
                <p className="text-gray-700">
                  Die Geschichte ist ideal für Kinder ab 5 Jahren. Sie vermittelt wichtige
                  Werte wie Mut, Selbstbewusstsein und dass wahre Größe von innen kommt –
                  Themen, die Kinder in diesem Alter besonders beschäftigen.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 text-fluxie-orange">
                  Wie lange dauert das Vorlesen der Rittergeschichte?
                </h3>
                <p className="text-gray-700">
                  Die Vorlesezeit beträgt etwa 8-10 Minuten. Die Geschichte hat die perfekte
                  Länge für eine abendliche Vorleseroutine oder als spannende Geschichte für
                  zwischendurch.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 text-fluxie-orange">
                  Welche Werte vermittelt die Geschichte vom kleinsten Ritter?
                </h3>
                <p className="text-gray-700">
                  Die Geschichte zeigt, dass körperliche Größe nicht über den Wert eines
                  Menschen entscheidet. Sie vermittelt Mut, Kreativität,
                  Problemlösungskompetenz und Selbstvertrauen – und dass jeder besondere
                  Talente hat.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 text-fluxie-orange">
                  Ist die Geschichte spannend genug für abenteuerlustige Kinder?
                </h3>
                <p className="text-gray-700">
                  Ja! Die Geschichte bietet echte Abenteuer-Spannung mit einem bedrohlichen
                  Drachen und einem cleveren Helden. Sie ist aufregend genug, um Kinder zu
                  fesseln, aber nicht zu gruselig für sensible Gemüter.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 text-fluxie-orange">
                  Hilft die Geschichte Kindern, die sich zu klein oder schwach fühlen?
                </h3>
                <p className="text-gray-700">
                  Definitiv! Ritter Kunibert ist eine wunderbare Identifikationsfigur für
                  Kinder, die sich manchmal klein oder unsicher fühlen. Die Geschichte zeigt,
                  dass jeder auf seine Weise stark sein kann.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 text-fluxie-orange">
                  Kann ich die Geschichte auch mit Fluxie-Lesekarten nutzen?
                </h3>
                <p className="text-gray-700">
                  Ja! Diese Geschichte passt perfekt zum Fluxie-Produkt „Krümelbrandt", das
                  speziell für Abenteuergeschichten entwickelt wurde. So können Kinder die
                  Geschichte selbst lesen und erleben.
                </p>
              </div>
            </div>
          </div>

          {/* Related Stories */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              📚 Weitere Abenteuergeschichten
            </h2>
            <div className="space-y-4">
              <a
                href="/home/lesewelt/abenteuergeschichten/pete-der-lachende-piraten-papagei/"
                className="block bg-white rounded-lg p-4 hover:shadow-md transition group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🦜</div>
                  <div>
                    <h3 className="font-bold text-lg text-fluxie-orange group-hover:text-amber-600">
                      Pete der lachende Piraten-Papagei
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Ein lustiges Piraten-Abenteuer mit einem Papagei, der nicht aufhören
                      kann zu lachen!
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="/home/lesewelt/abenteuergeschichten/piraten-abenteuer/"
                className="block bg-white rounded-lg p-4 hover:shadow-md transition group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🏴‍☠️</div>
                  <div>
                    <h3 className="font-bold text-lg text-fluxie-orange group-hover:text-amber-600">
                      Piraten-Abenteuer auf hoher See
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Spannende Geschichten von mutigen Piraten und versteckten Schätzen!
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="/home/lesewelt/abenteuergeschichten/"
                className="block bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg p-4 hover:shadow-md transition group border-2 border-fluxie-orange"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">⚔️</div>
                    <span className="font-bold text-fluxie-orange">
                      Alle Abenteuergeschichten entdecken
                    </span>
                  </div>
                  <span className="text-fluxie-orange text-xl">→</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
