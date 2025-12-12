import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Abenteuergeschichte: Der kleinste Ritter aller Zeiten | Fluxie',
  description: 'Spannende Rittergeschichte für Kinder ✓ Rittermaus Kunibert und der Drache ✓ Abenteuergeschichte mit Mut ab 5 Jahren ✓ 8 Min. Vorlesegeschichte ➤ Jetzt kostenlos lesen!',
  openGraph: {
    title: 'Abenteuergeschichte: Der kleinste Ritter aller Zeiten',
    description: 'Spannende Rittergeschichte für Kinder zum Vorlesen. Rittermaus Kunibert beweist, dass wahre Größe von innen kommt. Perfekte Abenteuergeschichte ab 5 Jahren!',
    url: 'https://wunschturm.de/home/lesewelt/abenteuergeschichten/der-kleinste-ritter-aller-zeiten',
    siteName: 'Fluxie',
    locale: 'de_DE',
    type: 'article',
    images: [
      {
        url: 'https://fluxie.de/wp-content/uploads/2025/12/RitterKunibert_002.webp',
        width: 1200,
        height: 630,
        alt: 'Der kleinste Ritter aller Zeiten - Abenteuergeschichte'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abenteuergeschichte: Der kleinste Ritter aller Zeiten',
    description: 'Spannende Rittergeschichte für Kinder zum Vorlesen. Perfekte Abenteuergeschichte ab 5 Jahren!',
    images: ['https://fluxie.de/wp-content/uploads/2025/12/RitterKunibert_002.webp']
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://wunschturm.de/home/lesewelt/abenteuergeschichten/der-kleinste-ritter-aller-zeiten'
  }
}

export default function DerKleinsteRitterPage() {
  // Schema.org JSON-LD Strukturierte Daten
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Der kleinste Ritter aller Zeiten",
    "description": "Eine spannende Abenteuergeschichte über Rittermaus Kunibert, die beweist, dass wahre Größe von innen kommt und Freundschaft stärker ist als Gewalt.",
    "image": "https://fluxie.de/wp-content/uploads/2025/12/RitterKunibert_002.webp",
    "author": {
      "@type": "Organization",
      "name": "Fluxie"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fluxie",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fluxie.de/logo.png"
      }
    },
    "datePublished": "2025-01-12",
    "dateModified": "2025-01-12",
    "articleSection": "Abenteuergeschichten",
    "keywords": "Rittergeschichte für Kinder, Abenteuergeschichte mit Maus, Vorlesegeschichte Ritter, Mutgeschichte, Freundschaftsgeschichte Kinder, Kunibert der Ritter",
    "wordCount": 650,
    "timeRequired": "PT8M",
    "audience": {
      "@type": "PeopleAudience",
      "suggestedMinAge": 5,
      "suggestedMaxAge": 10
    },
    "inLanguage": "de-DE"
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://wunschturm.de/home"
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
        "name": "Der kleinste Ritter aller Zeiten",
        "item": "https://wunschturm.de/home/lesewelt/abenteuergeschichten/der-kleinste-ritter-aller-zeiten"
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
        "name": "Ab welchem Alter eignet sich diese Rittergeschichte für Kinder?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Diese Abenteuergeschichte mit Rittermaus ist perfekt für Kinder ab 5 Jahren geeignet. Die spannende Handlung, die Lesezeit von 8 Minuten und die bildliche Erzählweise machen sie ideal für Kindergarten- und Grundschulkinder. Ältere Kinder bis etwa 10 Jahre genießen die Rittergeschichte ebenfalls, besonders wenn sie Abenteuer und Tiere lieben."
        }
      },
      {
        "@type": "Question",
        "name": "Wie lange dauert es, diese Rittergeschichte vorzulesen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Vorlesegeschichte dauert etwa 8-10 Minuten in normalem Tempo. Das macht sie ideal für das nachmittägliche Vorlesen oder als spannende Geschichte für zwischendurch. Mit lebendiger Vorlesestimme und verschiedenen Charakterstimmen kann sie auch 12 Minuten dauern."
        }
      },
      {
        "@type": "Question",
        "name": "Warum sind Rittergeschichten gut für Kinder?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rittergeschichten für Kinder fördern Mut, Selbstbewusstsein und Problemlösungsfähigkeiten. Sie vermitteln wichtige Werte wie Freundlichkeit, Teilen und Empathie. Rittermaus Kunibert zeigt in dieser Geschichte, dass man Konflikte mit Cleverness und Freundlichkeit lösen kann statt mit Gewalt. Solche Geschichten regen die Fantasie an und helfen Kindern, selbstbewusster zu werden."
        }
      },
      {
        "@type": "Question",
        "name": "Ist die Geschichte zu spannend vor dem Schlafengehen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Geschichte ist spannend, aber endet friedlich und herzerwärmend. Der bunte Drache wird zum Freund, nicht besiegt. Das positive, beruhigende Ende macht sie auch für das Vorlesen am Abend geeignet. Für besonders sensible Kinder oder wenn das Kind zu Aufregung neigt, empfiehlt sich das Vorlesen am Nachmittag."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Botschaft vermittelt die Geschichte vom kleinsten Ritter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Geschichte vermittelt mehrere wichtige Botschaften: Körperliche Größe entscheidet nicht über den Wert. Freundlichkeit und Teilen sind stärker als Gewalt. Jeder hat besondere Talente, egal wie klein er ist. Durch Empathie kann man sogar aus Feinden Freunde machen. Diese Werte helfen Kindern, toleranter und selbstbewusster zu werden."
        }
      },
      {
        "@type": "Question",
        "name": "Gibt es weitere Abenteuergeschichten auf Fluxie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja! In unserer Rubrik Abenteuergeschichten finden Sie weitere spannende Geschichten für kleine Entdecker zum kostenlosen Vorlesen. Von Piratenabenteuern bis zu anderen mutigen Helden – die Sammlung wird regelmäßig um neue Abenteuergeschichten erweitert."
        }
      }
    ]
  }

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
        <article className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-xs sm:text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
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
                <span className="text-gray-900">Der kleinste Ritter aller Zeiten</span>
              </li>
            </ol>
          </nav>

          {/* Artikel-Header */}
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-fluxie-orange break-words">
              Der kleinste Ritter aller Zeiten 
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>Lesezeit: 8-10 Minuten</span>
              <span>•</span>
              <span>Ab 5 Jahren</span>
              <span>•</span>
              <span>Ritter-Abenteuer</span>
            </div>
          </header>

          {/* Teaser */}
          <div className="bg-orange-50 border-l-4 p-6 mb-8 rounded-r-lg border-l-fluxie-orange">
            <p className="text-lg text-gray-700 italic leading-relaxed">
              Rittermaus Kunibert ist die kleinste Rittermaus im ganzen Königreich. Mit ihrer blauen
              Ritterrüstung und dem roten Umhang wohnt sie auf Burg Hochenstein. Alle großen Ritter
              lachen über die winzige Maus – bis eines Tages ein bunter Drache auftaucht und
              ausgerechnet die kleinste Rittermaus zur größten Hoffnung wird...
            </p>
          </div>

          {/* Story-Bild */}
          <div className="mb-8">
            <img
              src="https://fluxie.de/wp-content/uploads/2025/12/RitterKunibert_002.webp"
              alt="Rittermaus Kunibert mit blauem Fell, Rüstung und rotem Umhang vor einer Burg mit buntem Drachen"
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          {/* Story-Text */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed mb-4">
              Auf der Burg Hochenstein lebte einst die kleinste Rittermaus des ganzen Königreichs.
              Ihr Name war Kunibert, und sie hatte wunderschönes blaues Fell, das unter ihrer
              winzigen Ritterrüstung hervorlugte. Ihr roter Umhang wehte stolz im Wind, wenn sie
              über die Burgmauern spazierte. Der Schmied hatte ihre Rüstung aus glänzendem Silber
              extra für sie angefertigt – kaum größer als eine Nussschale!
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die anderen großen Ritter der Burg lachten oft über die kleine Maus. „Schau dir die
              winzige Rittermaus an!", riefen sie. „Die ist ja kleiner als mein Schwertknauf!" Doch
              Kunibert ließ sich davon nicht unterkriegen. Sie übte jeden Tag fleißig mit ihrem
              mausegroßen Schwert und las alle Bücher über Drachenkämpfe und Heldentaten in der
              Burgbibliothek. Und abends naschte sie von ihrem geheimen Käsevorrat – dem besten
              Käse des ganzen Landes!
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Eines Morgens wurde die Burg von einem lauten Gebrüll geweckt. Am Horizont erschien
              eine riesige Gestalt mit gewaltigen, schillernden Flügeln – ein Drache! Und was für
              einer: Seine Schuppen leuchteten in allen Farben des Regenbogens – lila, türkis, grün
              und pink! Es war Regenbogenflügel, der hungrigste Drache der sieben Königreiche.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>„Ich habe einen riesigen Hunger!"</strong>, brüllte Regenbogenflügel und
              schnaubte kleine Rauchwölkchen. <strong>„Man sagt, in dieser Burg gibt es den besten
              Käse weit und breit! Bringt mir euren Käse, oder ich... ich... werde sehr ungemütlich!"</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Alle großen, starken Ritter gerieten in Panik. Ritter Rüdiger versteckte sich unter
              seinem Bett. Ritter Ruprecht tat so, als hätte er plötzlich Bauchschmerzen. Und Ritter
              Roland... nun, Roland war so schnell weggerannt, dass man nur noch eine Staubwolke sah.
              Keiner wollte dem hungrigen Drachen begegnen!
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Rittermaus Kunibert hingegen hatte eine clevere Idee! Sie kannte sich mit Käse aus wie
              keine andere – schließlich war sie eine Maus! Und sie wusste genau, dass Drachen Käse
              zwar liebten, aber nicht wussten, wie man ihn richtig genießt.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die kleine Rittermaus schnappte sich ein großes Stück ihres besten goldgelben Käses
              und kletterte auf die Burgzinne. <strong>„Hey, Regenbogenflügel!"</strong>, quiekte
              sie mit ihrer piepsigen Mausstimme. <strong>„Ich habe den leckersten Käse des
              Königreichs! Aber nur wer schlau genug ist, kann ihn bekommen. Folge mir, wenn du
              dich traust!"</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Drache schnupperte mit seiner großen Nase. Mmmmh! Der Käse duftete herrlich!
              <strong>„Eine winzige Maus will mir zeigen, wo der Käse ist?"</strong>, lachte er.
              <strong>„Na gut, kleine Rittermaus, zeig mir den Weg!"</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kunibert huschte flink zurück in die Burg, den Käse fest im Arm. Der riesige Drache
              folgte dem verlockenden Duft – genau wie geplant! Die kleine Maus führte
              Regenbogenflügel durch das große Burgtor, dann durch die Halle, dann durch einen engen
              Korridor, und schließlich zu einer ganz besonderen Tür: der winzigen Tür zur Käsekammer!
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Die Tür zur Käsekammer war winzig – gerade groß genug für eine Maus, aber viel zu
              klein für einen Drachen! Regenbogenflügel versuchte verzweifelt, seinen großen Kopf
              durch die Tür zu stecken, aber es ging einfach nicht. Er schnaubte frustriert kleine
              Rauchwölkchen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>„Das ist unfair!"</strong>, jammerte der Drache mit Tränen in den Augen.
              <strong>„Ich kann doch nichts dafür, dass ich so groß bin! Ich wollte doch nur ein
              bisschen Käse probieren..."</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Da hatte Rittermaus Kunibert eine wunderbare Idee. Sie huschte durch die kleine Tür
              in die Käsekammer und kam mit einem riesigen, goldgelben Käselaib wieder heraus –
              fast so groß wie sie selbst! Mit vereinten Kräften (und ein bisschen
              Magie-Muskelkraft) rollte sie den Käse zu Regenbogenflügel.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>„Weißt du"</strong>, piepste Kunibert freundlich, <strong>„man muss nicht
              durch jede Tür passen, um glücklich zu sein. Manchmal ist es viel besser, wenn jemand
              Kleines einem Großen hilft! So, hier ist dein Käse – der beste im ganzen Königreich!"</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>„Natürlich!"</strong>, antwortete Kunibert mit einem Lächeln.
              <strong>„Teilen macht nämlich doppelt so viel Spaß!"</strong> Regenbogenflügel
              knabberte glücklich an dem köstlichen Käse und seine bunten Schuppen glitzerten vor
              Freude im Sonnenlicht.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Von diesem Tag an wurde Regenbogenflügel der beste Freund der Burg. Er kam jeden Monat
              vorbei, um mit Kunibert Käse zu essen und Geschichten auszutauschen. Und niemand
              lachte mehr über die kleine Rittermaus – im Gegenteil!
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der König ernannte Kunibert zur „Rittermaus der Freundschaft und Cleverness" und gab
              ihr eine besondere Auszeichnung: einen winzigen goldenen Käse-Orden mit der Aufschrift
              „Wahre Größe kommt von innen – und teilen macht stark!"
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wenn die anderen Ritter jetzt von ihren Heldentaten erzählten, hörten alle am liebsten
              Kuniberts Geschichte zu – die Geschichte von der kleinsten Rittermaus aller Zeiten,
              die mit Freundlichkeit, Käse und Köpfchen einen riesigen Drachen zum Freund gewann.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Und wenn du ganz genau hinschaust, kannst du Rittermaus Kunibert noch heute auf Burg
              Hochenstein sehen: mit ihrem blauen Fell, der glänzenden Rüstung und dem wehenden
              roten Umhang – immer bereit für ein neues Abenteuer!
            </p>
          </div>

          {/* Krümmelbrandt Produktbox */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 mb-12 border-2 shadow-lg border-fluxie-orange">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <a
                  href="https://fluxie.de/produkt/kruemelbrandt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="https://fluxie.de/wp-content/uploads/2025/08/6-768x768.png"
                    alt="Krümmelbrandt - Fluxie Lesekarte"
                    className="w-56 h-56 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-fluxie-orange">
                  Noch mehr Abenteuer mit Krümmelbrandt
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Diese Geschichte und viele weitere spannende Abenteuer findest du auf unseren
                  Fluxie-Lesekarten. Mit Krümmelbrandt tauchen Kinder in mutige Ritter- und
                  Abenteuerwelten ein – perfekt für kleine Helden!
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>✓ Interaktive Lesekarte</span>
                  <span>•</span>
                  <span>✓ Mit Fluxie-Gerät nutzbar</span>
                </div>
                <a
                  href="https://fluxie.de/produkt/kruemelbrandt/"
                  className="inline-block bg-fluxie-orange hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Krümmelbrandt entdecken →
                </a>
              </div>
            </div>
          </div>

          {/* Outro: Warum Rittergeschichten perfekt für Kinder sind */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border-l-4 border-l-fluxie-orange">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Warum Rittergeschichten mit Freundschaft perfekt für Kinder sind
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Rittergeschichten für Kinder</strong> wie "Der kleinste Ritter aller Zeiten"
                sind besonders wertvoll, weil sie Mut, Selbstbewusstsein und soziale Kompetenzen fördern.
                Ritter verkörpern Mut und Ehre – aber diese Geschichte zeigt, dass wahre Stärke auch
                in Freundlichkeit und Empathie liegt.
              </p>
              <p>
                Diese <strong>Abenteuergeschichte mit Rittermaus</strong> (8-10 Minuten Lesezeit)
                kombiniert spannende Elemente mit einer wichtigen Botschaft: Wahre Größe kommt von
                innen, und Konflikte kann man mit Cleverness und Freundlichkeit lösen. Kunibert zeigt,
                dass Teilen und Empathie stärker sind als Gewalt.
              </p>
              <p>
                Als <strong>Vorlesegeschichte für Kinder ab 5 Jahren</strong> eignet sich diese
                Rittergeschichte besonders gut, weil:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Die Sprache lebendig und bildlich ist</li>
                <li>Der Spannungsbogen kindgerecht verläuft</li>
                <li>Freundlichkeit und Teilen im Mittelpunkt stehen</li>
                <li>Die Geschichte mit einem herzerwärmenden Ende endet</li>
                <li>Kinder sich mit der kleinen, mutigen Rittermaus identifizieren können</li>
              </ul>
              <p>
                <strong>Tipp für Eltern:</strong> Lesen Sie diese <strong>Rittergeschichte</strong> mit
                verschiedenen Stimmen vor – Kunibert mit hoher, piepsiger Mausstimme und Regenbogenflügel
                mit tiefer Drachenstimme. Das macht die Geschichte noch lebendiger! Sprechen Sie nach dem
                Vorlesen über die Botschaft: Wann hat Teilen eurem Kind schon mal geholfen?
              </p>
            </div>
          </div>

          {/* Zurück-Button */}
          <div className="mb-12">
            <a
              href="/home/lesewelt/abenteuergeschichten/"
              className="inline-flex items-center font-medium hover:opacity-80 transition text-fluxie-orange"
            >
              ← Zurück zu allen Abenteuergeschichten
            </a>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 mb-12 border border-gray-200">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Häufig gestellte Fragen zu Rittergeschichten
            </h2>
            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3 text-fluxie-orange">
                  Ab welchem Alter eignet sich diese Rittergeschichte für Kinder?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Diese <strong>Abenteuergeschichte mit Rittermaus</strong> ist perfekt für Kinder
                  <strong> ab 5 Jahren</strong> geeignet. Die spannende Handlung, die Lesezeit von
                  8 Minuten und die bildliche Erzählweise machen sie ideal für Kindergarten- und
                  Grundschulkinder. Ältere Kinder bis etwa 10 Jahre genießen die Rittergeschichte
                  ebenfalls, besonders wenn sie Abenteuer und Tiere lieben.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3 text-fluxie-orange">
                  Wie lange dauert es, diese Rittergeschichte vorzulesen?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Die <strong>Vorlesegeschichte</strong> dauert etwa <strong>8-10 Minuten</strong> in
                  normalem Tempo. Das macht sie ideal für das nachmittägliche Vorlesen oder als spannende
                  Geschichte für zwischendurch. Mit lebendiger Vorlesestimme, verschiedenen
                  Charakterstimmen und Betonung der spannenden Momente kann sie auch 12 Minuten dauern.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3 text-fluxie-orange">
                  Warum sind Rittergeschichten gut für Kinder?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Rittergeschichten für Kinder</strong> fördern Mut, Selbstbewusstsein und
                  Problemlösungsfähigkeiten. Sie vermitteln wichtige Werte wie Freundlichkeit, Teilen
                  und Empathie. Rittermaus Kunibert zeigt in dieser Geschichte, dass man Konflikte mit
                  Cleverness und Freundlichkeit lösen kann statt mit Gewalt. Solche Geschichten regen
                  die Fantasie an und helfen Kindern, selbstbewusster zu werden.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3 text-fluxie-orange">
                  Ist die Geschichte zu spannend vor dem Schlafengehen?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Die Geschichte ist spannend, aber endet friedlich und herzerwärmend. Der bunte Drache
                  wird zum Freund, nicht besiegt. Das positive, beruhigende Ende macht sie auch für das
                  Vorlesen am Abend geeignet. Für besonders sensible Kinder oder wenn das Kind zu
                  Aufregung neigt, empfiehlt sich das Vorlesen am Nachmittag. Das fröhliche Ende mit
                  Freundschaft hinterlässt ein positives Gefühl.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3 text-fluxie-orange">
                  Welche Botschaft vermittelt die Geschichte vom kleinsten Ritter?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Die Geschichte vermittelt mehrere wichtige Botschaften: <strong>Körperliche Größe
                  entscheidet nicht über den Wert.</strong> Freundlichkeit und Teilen sind stärker als
                  Gewalt. Jeder hat besondere Talente, egal wie klein er ist. Durch Empathie kann man
                  sogar aus Feinden Freunde machen. Die Geschichte lehrt Kinder, dass wahre Stärke in
                  Freundlichkeit liegt – eine wichtige Lektion gegen Mobbing und für Toleranz.
                </p>
              </div>

              {/* FAQ 6 */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-fluxie-orange">
                  Gibt es weitere Abenteuergeschichten auf Fluxie?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ja! In unserer Rubrik <a href="/home/lesewelt/abenteuergeschichten/" className="font-semibold hover:opacity-80 text-fluxie-orange">
                  "Abenteuergeschichten"</a> finden Sie weitere spannende Geschichten für kleine
                  Entdecker zum kostenlosen Vorlesen. Von Piratenabenteuern bis zu anderen mutigen
                  Helden – wir erweitern die Sammlung regelmäßig um neue <strong>Rittergeschichten</strong>
                  und andere Abenteuer, die speziell für das Alter 5-10 Jahre entwickelt wurden.
                  Schauen Sie gerne regelmäßig vorbei!
                </p>
              </div>
            </div>
          </div>

          {/* Verwandte Geschichten */}
          <div className="pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Das könnte dir auch gefallen
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="/home/lesewelt/abenteuergeschichten/ritter-abenteuer/"
                className="bg-orange-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <img
                  src="https://images.unsplash.com/photo-1571056233572-d9db3701408c?w=160&h=160&fit=crop&auto=format"
                  alt="Alle Ritter Abenteuer"
                  className="w-20 h-20 rounded-lg object-cover mb-3"
                />
                <h3 className="font-bold mb-2 text-fluxie-orange">Alle Ritter-Abenteuer</h3>
                <p className="text-sm text-gray-600">Entdecke noch mehr spannende Rittergeschichten</p>
              </a>

              <a
                href="/home/lesewelt/abenteuergeschichten/pete-der-lachende-piraten-papagei/"
                className="bg-orange-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <img
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=160&h=160&fit=crop&auto=format"
                  alt="Pete der lachende Piraten Papagei"
                  className="w-20 h-20 rounded-lg object-cover mb-3"
                />
                <h3 className="font-bold mb-2 text-fluxie-orange">Pete der lachende Piraten-Papagei</h3>
                <p className="text-sm text-gray-600">Ein lustiges Piraten-Abenteuer mit einem Papagei, der nicht aufhören kann zu lachen!</p>
              </a>

              <a
                href="/home/lesewelt/abenteuergeschichten/"
                className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-6 hover:shadow-lg transition-shadow border-2 border-fluxie-orange"
              >
                <img
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=160&h=160&fit=crop&auto=format"
                  alt="Alle Abenteuergeschichten"
                  className="w-20 h-20 rounded-lg object-cover mb-3"
                />
                <h3 className="font-bold mb-2 text-fluxie-orange">Alle Abenteuergeschichten</h3>
                <p className="text-sm text-gray-600">Entdecke noch mehr spannende Abenteuer</p>
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
