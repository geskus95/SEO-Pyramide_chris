import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Der kleinste Ritter aller Zeiten - Abenteuergeschichte für Kinder | Fluxie',
  description: 'Eine zauberhafte Abenteuergeschichte über Rittermaus Kunibert, die kleinste Rittermaus des Königreichs, die beweist, dass wahre Größe von innen kommt. Perfekt zum Vorlesen für Kinder ab 5 Jahren.',
  keywords: 'Rittergeschichte, Mausgeschichte, Abenteuergeschichte Kinder, Vorlesegeschichte Ritter, Mutgeschichte, Selbstbewusstsein Kinder, Geschichte über Größe, Fluxie Lesekarten',
  authors: [{ name: 'Fluxie Team' }],
  openGraph: {
    title: 'Der kleinste Ritter aller Zeiten - Abenteuergeschichte | Fluxie',
    description: 'Rittermaus Kunibert ist die kleinste Rittermaus im ganzen Königreich. Doch als das Schloss in Gefahr gerät, beweist sie mit Cleverness und Käse-Kenntnis, dass wahre Größe von innen kommt.',
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
            description: 'Eine Abenteuergeschichte über Rittermaus Kunibert, die beweist, dass wahre Größe von innen kommt.',
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
              🐭🛡️ Der kleinste Ritter aller Zeiten
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
              Rittermaus Kunibert ist die kleinste Rittermaus im ganzen Königreich. Mit seiner
              blauen Ritterrüstung, dem roten Umhang und seinem Käseschatz wohnt sie auf Burg
              Hochenstein. Alle großen Ritter lachen über die winzige Maus – bis eines Tages ein
              bunter Drache auftaucht und ausgerechnet die kleinste Rittermaus zur größten Hoffnung wird...
            </p>
          </div>

          {/* Story Illustration */}
          <div className="mb-8 text-center">
            <div className="inline-block bg-gradient-to-br from-orange-200 to-amber-200 rounded-2xl p-8">
              <div className="text-9xl">🐭🛡️</div>
            </div>
            <p className="text-sm text-gray-500 mt-2 italic">
              Rittermaus Kunibert - klein, aber oho!
            </p>
          </div>

          {/* Main Story Content */}
          <article className="prose prose-lg max-w-none mb-12">
            <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
              <h2 className="text-2xl font-bold text-fluxie-orange mb-4">
                Die Geschichte beginnt...
              </h2>
              <p className="mb-4">
                Auf der Burg Hochenstein lebte einst die kleinste Rittermaus des ganzen
                Königreichs. Ihr Name war Kunibert, und sie hatte wunderschönes blaues Fell,
                das unter ihrer winzigen Ritterrüstung hervorlugte. Ihr roter Umhang wehte
                stolz im Wind, wenn sie über die Burgmauern spazierte. Der Schmied hatte ihre
                Rüstung aus glänzendem Silber extra für sie angefertigt – kaum größer als
                eine Nussschale!
              </p>
              <p className="mb-4">
                Die anderen großen Ritter der Burg lachten oft über die kleine Maus. „Schau
                dir die winzige Rittermaus an!", riefen sie. „Die ist ja kleiner als mein
                Schwertknauf!" Doch Kunibert ließ sich davon nicht unterkriegen. Sie übte jeden
                Tag fleißig mit ihrem mausegroßen Schwert und las alle Bücher über
                Drachenkämpfe und Heldentaten in der Burgbibliothek. Und abends naschte sie
                von ihrem geheimen Käsevorrat – dem besten Käse des ganzen Landes!
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
              <h2 className="text-2xl font-bold text-fluxie-orange mb-4">
                Der bunte Drache kommt!
              </h2>
              <p className="mb-4">
                Eines Morgens wurde die Burg von einem lauten Gebrüll geweckt. Am Horizont
                erschien eine riesige Gestalt mit gewaltigen, schillernden Flügeln – ein Drache!
                Und was für einer: Seine Schuppen leuchteten in allen Farben des Regenbogens –
                lila, türkis, grün und pink! Es war Regenbogenflügel, der hungrigste Drache
                der sieben Königreiche.
              </p>
              <p className="mb-4">
                „Ich habe einen riesigen Hunger!", brüllte Regenbogenflügel und schnaubte
                kleine Rauchwölkchen. „Man sagt, in dieser Burg gibt es den besten Käse weit
                und breit! Bringt mir euren Käse, oder ich... ich... werde sehr ungemütlich!"
              </p>
              <p className="mb-4">
                Alle großen, starken Ritter gerieten in Panik. Ritter Rüdiger versteckte
                sich unter seinem Bett. Ritter Ruprecht tat so, als hätte er plötzlich
                Bauchschmerzen. Und Ritter Roland... nun, Roland war so schnell weggerannt,
                dass man nur noch eine Staubwolke sah. Keiner wollte dem hungrigen Drachen
                begegnen!
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
              <h2 className="text-2xl font-bold text-fluxie-orange mb-4">
                Kuniberts käsiger Plan
              </h2>
              <p className="mb-4">
                Rittermaus Kunibert hingegen hatte eine clevere Idee! Sie kannte sich mit
                Käse aus wie keine andere – schließlich war sie eine Maus! Und sie wusste genau,
                dass Drachen Käse zwar liebten, aber nicht wussten, wie man ihn richtig genießt.
              </p>
              <p className="mb-4">
                Die kleine Rittermaus schnappte sich ein großes Stück ihres besten goldgelben
                Käses und kletterte auf die Burgzinne. „Hey, Regenbogenflügel!", quiekte sie
                mit ihrer piepsigen Mausstimme. „Ich habe den leckersten Käse des Königreichs!
                Aber nur wer schlau genug ist, kann ihn bekommen. Folge mir, wenn du dich traust!"
              </p>
              <p className="mb-4">
                Der Drache schnupperte mit seiner großen Nase. Mmmmh! Der Käse duftete herrlich!
                „Eine winzige Maus will mir zeigen, wo der Käse ist?", lachte er. „Na gut,
                kleine Rittermaus, zeig mir den Weg!"
              </p>
              <p className="mb-4">
                Kunibert huschte flink zurück in die Burg, den Käse fest im Arm. Der riesige
                Drache folgte dem verlockenden Duft – genau wie geplant! Die kleine Maus führte
                Regenbogenflügel durch das große Burgtor, dann durch die Halle, dann durch einen
                engen Korridor, und schließlich zu einer ganz besonderen Tür: der winzigen Tür
                zur Käsekammer!
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
              <h2 className="text-2xl font-bold text-fluxie-orange mb-4">
                Die clevere Lösung
              </h2>
              <p className="mb-4">
                Die Tür zur Käsekammer war winzig – gerade groß genug für eine Maus, aber
                viel zu klein für einen Drachen! Regenbogenflügel versuchte verzweifelt, seinen
                großen Kopf durch die Tür zu stecken, aber es ging einfach nicht. Er schnaubte
                frustriert kleine Rauchwölkchen.
              </p>
              <p className="mb-4">
                „Das ist unfair!", jammerte der Drache mit Tränen in den Augen. „Ich kann
                doch nichts dafür, dass ich so groß bin! Ich wollte doch nur ein bisschen
                Käse probieren..."
              </p>
              <p className="mb-4">
                Da hatte Rittermaus Kunibert eine wunderbare Idee. Sie huschte durch die kleine
                Tür in die Käsekammer und kam mit einem riesigen, goldgelben Käselaib wieder
                heraus – fast so groß wie sie selbst! Mit vereinten Kräften (und ein bisschen
                Magie-Muskelkraft) rollte sie den Käse zu Regenbogenflügel.
              </p>
              <p className="mb-4">
                „Weißt du", piepste Kunibert freundlich, „man muss nicht durch jede Tür passen,
                um glücklich zu sein. Manchmal ist es viel besser, wenn jemand Kleines einem
                Großen hilft! So, hier ist dein Käse – der beste im ganzen Königreich!"
              </p>
              <p className="mb-4">
                Der Drache strahlte über sein ganzes buntes Gesicht. „Du... du gibst mir
                wirklich den Käse? Obwohl ich so laut gebrüllt habe?"
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
              <h2 className="text-2xl font-bold text-fluxie-orange mb-4">
                Das glückliche Ende
              </h2>
              <p className="mb-4">
                „Natürlich!", antwortete Kunibert mit einem Lächeln. „Teilen macht nämlich
                doppelt so viel Spaß!" Regenbogenflügel knabberte glücklich an dem köstlichen
                Käse und seine bunten Schuppen glitzerten vor Freude im Sonnenlicht.
              </p>
              <p className="mb-4">
                Von diesem Tag an wurde Regenbogenflügel der beste Freund der Burg. Er kam
                jeden Monat vorbei, um mit Kunibert Käse zu essen und Geschichten auszutauschen.
                Und niemand lachte mehr über die kleine Rittermaus – im Gegenteil!
              </p>
              <p className="mb-4">
                Der König ernannte Kunibert zur „Rittermaus der Freundschaft und Cleverness"
                und gab ihr eine besondere Auszeichnung: einen winzigen goldenen Käse-Orden
                mit der Aufschrift „Wahre Größe kommt von innen – und teilen macht stark!"
              </p>
              <p className="mb-4">
                Wenn die anderen Ritter jetzt von ihren Heldentaten erzählten, hörten alle
                am liebsten Kuniberts Geschichte zu – die Geschichte von der kleinsten Rittermaus
                aller Zeiten, die mit Freundlichkeit, Käse und Köpfchen einen riesigen Drachen
                zum Freund gewann.
              </p>
              <p className="mb-4">
                Und wenn du ganz genau hinschaust, kannst du Rittermaus Kunibert noch heute
                auf Burg Hochenstein sehen: mit ihrem blauen Fell, der glänzenden Rüstung und
                dem wehenden roten Umhang – immer bereit für ein neues Abenteuer!
              </p>
              <p className="text-center italic text-lg mt-6 text-fluxie-orange">
                🐭🏰🧀 Ende 🧀🏰🐭
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
              💡 Warum Geschichten über Freundschaft und Teilen so wertvoll sind
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong className="text-fluxie-orange">Stärkt das Selbstbewusstsein:</strong>{' '}
                Kinder, die sich manchmal klein oder unsicher fühlen, finden in Rittermaus Kunibert
                eine wunderbare Identifikationsfigur. Die Geschichte zeigt: Jeder hat besondere
                Stärken – egal wie groß oder klein man ist!
              </p>
              <p>
                <strong className="text-fluxie-orange">Lehrt Freundlichkeit statt Gewalt:</strong>{' '}
                Kunibert löst das Problem nicht durch Kampf, sondern durch Teilen und Freundlichkeit.
                Das zeigt Kindern, dass Empathie und Großzügigkeit oft bessere Lösungen sind als Konfrontation.
              </p>
              <p>
                <strong className="text-fluxie-orange">Vermittelt wichtige Werte:</strong>{' '}
                Die Geschichte lehrt, dass Teilen Freude bringt und dass man durch Freundlichkeit
                sogar aus vermeintlichen Feinden Freunde machen kann. Eine wichtige Lektion gegen
                Vorurteile und für Toleranz.
              </p>
              <p>
                <strong className="text-fluxie-orange">Perfekte Mischung aus Spannung und Herz:</strong>{' '}
                Der bunte Drache Regenbogenflügel sorgt zunächst für Spannung, die liebevolle
                Lösung mit dem Käse für herzerwärmende Momente. Kinder lernen, dass oft Verständnis
                hinter scheinbarer Bedrohung steckt.
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
                  Die Geschichte zeigt, dass körperliche Größe nicht über den Wert entscheidet.
                  Sie vermittelt Freundlichkeit, Teilen, Empathie und Mut – und dass man durch
                  Freundschaft mehr erreicht als durch Konfrontation. Rittermaus Kunibert zeigt,
                  dass jeder besondere Talente hat!
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 text-fluxie-orange">
                  Ist die Geschichte spannend genug für abenteuerlustige Kinder?
                </h3>
                <p className="text-gray-700">
                  Ja! Die Geschichte bietet echte Abenteuer-Spannung mit dem bunten Drachen
                  Regenbogenflügel und der cleveren Rittermaus. Sie ist aufregend genug, um
                  Kinder zu fesseln, aber endet friedlich und herzerwärmend – perfekt auch für
                  sensible Gemüter.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 text-fluxie-orange">
                  Hilft die Geschichte Kindern, die sich zu klein oder schwach fühlen?
                </h3>
                <p className="text-gray-700">
                  Definitiv! Rittermaus Kunibert ist eine wunderbare Identifikationsfigur für
                  Kinder, die sich manchmal klein oder unsicher fühlen. Die Geschichte zeigt,
                  dass man nicht groß und stark sein muss, um ein Held zu sein – Freundlichkeit
                  und Cleverness sind viel wichtiger!
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
