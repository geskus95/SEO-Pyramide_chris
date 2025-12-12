# 🚀 Next.js SSG Deployment Pipeline - Vollständige Anleitung

Diese Anleitung erklärt, wie man eine automatische Deployment-Pipeline für Next.js Static Site Generation (SSG) mit SFTP-Upload einrichtet.

## 📋 Inhaltsverzeichnis

1. [Übersicht](#übersicht)
2. [Voraussetzungen](#voraussetzungen)
3. [Next.js Konfiguration](#nextjs-konfiguration)
4. [GitHub Actions Workflow](#github-actions-workflow)
5. [Secrets Konfiguration](#secrets-konfiguration)
6. [Branch-Konventionen](#branch-konventionen)
7. [Deployment-Prozess](#deployment-prozess)
8. [Troubleshooting](#troubleshooting)

---

## Übersicht

### Was macht diese Pipeline?

1. **Build**: Next.js App als statische Website kompilieren
2. **Export**: HTML/CSS/JS Dateien generieren (`/out` Ordner)
3. **Deploy**: Via SFTP auf Webserver hochladen (z.B. Netcup, Strato, etc.)

### Architektur

```
GitHub Push → GitHub Actions → Next.js Build → Static Export → SFTP Upload → Live Website
```

---

## Voraussetzungen

### 1. Server-Zugang
- ✅ SFTP/SSH-Zugang zu Webserver
- ✅ Server-Hostname (z.B. `ssh.example.com`)
- ✅ SSH-Port (Standard: 22)
- ✅ Benutzername & Passwort ODER SSH Private Key
- ✅ Zielverzeichnis auf Server (z.B. `/html/subdomain/`)

### 2. GitHub Repository
- ✅ GitHub Repository mit Admin-Rechten
- ✅ Zugriff auf Repository Settings → Secrets

### 3. Next.js Projekt
- ✅ Next.js Version 13+ (App Router oder Pages Router)
- ✅ Node.js 18+

---

## Next.js Konfiguration

### 1. `next.config.js` erstellen/anpassen

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // WICHTIG: Static Export aktivieren
  output: 'export',

  // Wenn die Website in einem Unterverzeichnis läuft (z.B. example.com/home/)
  basePath: '/home',  // ANPASSEN oder entfernen falls Root-Domain

  // Trailing Slashes für saubere URLs
  trailingSlash: true,

  // Bilder-Optimierung (bei externen Bildern)
  images: {
    unoptimized: true,  // Notwendig für Static Export
    domains: [
      'fluxie.de',
      'images.unsplash.com',
      // Weitere Domains hier hinzufügen
    ],
  },

  // Optional: Distraction Free Mode für Build
  typescript: {
    ignoreBuildErrors: false,  // true nur für Testing
  },
  eslint: {
    ignoreDuringBuilds: false,  // true nur für Testing
  },
}

module.exports = nextConfig
```

### 2. `package.json` - Scripts prüfen

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

**Wichtig**: Der `build` Command muss mit `output: 'export'` automatisch auch exportieren!

### 3. `.gitignore` erweitern

```gitignore
# Next.js Build Output
/.next/
/out/

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel
```

---

## GitHub Actions Workflow

### 1. Workflow-Datei erstellen

**Pfad**: `.github/workflows/deploy.yml`

```yaml
name: Deploy Next.js SSG to Server

on:
  push:
    branches:
      - 'claude/**'  # Alle Branches die mit claude/ beginnen
      # ANPASSEN: Weitere Branches hinzufügen falls gewünscht
      # - 'main'
      # - 'production'
      # - 'staging'

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      # 1. Code auschecken
      - name: Checkout code
        uses: actions/checkout@v4

      # 2. Node.js Setup
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'  # ANPASSEN falls andere Version benötigt
          cache: 'npm'
          cache-dependency-path: 'demo-site/package-lock.json'  # ANPASSEN zu deinem Pfad

      # 3. Dependencies installieren
      - name: Install dependencies
        working-directory: ./demo-site  # ANPASSEN zu deinem Projektordner
        run: npm ci

      # 4. Next.js Build + Export
      - name: Build Next.js app
        working-directory: ./demo-site  # ANPASSEN
        run: npm run build
        env:
          NODE_ENV: production

      # 5. Build-Output verifizieren
      - name: Verify build output
        working-directory: ./demo-site  # ANPASSEN
        run: |
          echo "Checking /out directory..."
          ls -la out/
          echo "Total files:"
          find out/ -type f | wc -l

      # 6. SFTP Upload zum Server
      - name: Deploy to server via SFTP
        uses: wlixcc/SFTP-Deploy-Action@v1.2.4
        with:
          username: ${{ secrets.SFTP_USERNAME }}
          server: ${{ secrets.SFTP_SERVER }}
          port: ${{ secrets.SFTP_PORT }}
          password: ${{ secrets.SFTP_PASSWORD }}
          # Alternativ: SSH Private Key (siehe unten)
          # ssh_private_key: ${{ secrets.SFTP_SSH_KEY }}

          local_path: './demo-site/out/*'  # ANPASSEN: Pfad zu /out Ordner
          remote_path: '/html/subdomain/'  # ANPASSEN: Zielverzeichnis auf Server

          sftp_only: true
          delete_remote_files: false  # true = Alte Dateien löschen vor Upload
```

### 2. Alternative: SSH Private Key statt Passwort

Falls SSH Key statt Passwort verwendet wird:

```yaml
      - name: Deploy to server via SFTP
        uses: wlixcc/SFTP-Deploy-Action@v1.2.4
        with:
          username: ${{ secrets.SFTP_USERNAME }}
          server: ${{ secrets.SFTP_SERVER }}
          port: ${{ secrets.SFTP_PORT }}
          ssh_private_key: ${{ secrets.SFTP_SSH_KEY }}  # Statt password
          local_path: './demo-site/out/*'
          remote_path: '/html/subdomain/'
          sftp_only: true
```

---

## Secrets Konfiguration

### 1. GitHub Secrets erstellen

**Navigation**: `GitHub Repository → Settings → Secrets and variables → Actions → New repository secret`

Folgende Secrets anlegen:

#### `SFTP_SERVER`
```
ssh.strato.de
```
*Beispiele: `ssh.netcup.de`, `ftp.example.com`, `123.456.789.0`*

#### `SFTP_USERNAME`
```
web123456
```
*Dein Webhosting-Benutzername*

#### `SFTP_PASSWORD`
```
deinSicheresPasswort123!
```
*SSH/SFTP Passwort (NICHT das Webhosting-Control-Panel Passwort!)*

#### `SFTP_PORT`
```
22
```
*Standard SSH-Port. Bei manchen Hostern: 2222 oder anders*

#### Optional: `SFTP_SSH_KEY` (statt Passwort)
```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABlwAAAA
... (vollständiger Private Key)
-----END OPENSSH PRIVATE KEY-----
```

### 2. Secrets testen

Erstelle einen Test-Branch und pushe:

```bash
git checkout -b claude/test-deployment-$(date +%s)
git commit --allow-empty -m "test: Trigger deployment"
git push -u origin HEAD
```

Dann: `GitHub → Actions Tab` → Workflow-Lauf beobachten

---

## Branch-Konventionen

### Automatisches Deployment auslösen

Die Pipeline triggert bei Push auf Branches die mit `claude/` beginnen:

```bash
# Beispiel 1: Feature Branch
git checkout -b claude/add-new-feature
git add .
git commit -m "feat: Add new feature"
git push -u origin claude/add-new-feature

# Beispiel 2: Fix Branch
git checkout -b claude/fix-mobile-layout
git add .
git commit -m "fix: Fix mobile layout"
git push -u origin claude/fix-mobile-layout

# Beispiel 3: Mit Session-ID (empfohlen für Claude Code)
git checkout -b claude/implement-search-01UTjZ8NYDykqCy9HpiNtrGv
```

### Branch-Muster anpassen

In `.github/workflows/deploy.yml`:

```yaml
on:
  push:
    branches:
      - 'claude/**'      # Alle claude/* Branches
      - 'main'           # Production
      - 'staging'        # Staging-Environment
      - 'develop'        # Development
```

### Branch-Schutz (Optional aber empfohlen)

`Settings → Branches → Add branch protection rule`:

- Branch name pattern: `main`
- ✅ Require pull request reviews before merging
- ✅ Require status checks to pass (Build muss erfolgreich sein)

---

## Deployment-Prozess

### End-to-End Workflow

```
1. Developer schreibt Code lokal
   ↓
2. Commit + Push zu GitHub (claude/* Branch)
   ↓
3. GitHub Actions erkennt Push
   ↓
4. Workflow startet:
   ├─ Code checkout
   ├─ Node.js installieren
   ├─ npm ci (Dependencies)
   ├─ npm run build (Next.js Build)
   ├─ /out Ordner generiert
   └─ SFTP Upload zum Server
   ↓
5. Website ist live! 🎉
```

### Typische Build-Dauer

- **Dependencies Install**: 30-60s
- **Next.js Build**: 1-3min (je nach Projektgröße)
- **SFTP Upload**: 30-60s
- **Total**: ~3-5 Minuten

### Deployment überwachen

1. **GitHub Actions Tab**: Echtzeit-Logs
2. **Email-Benachrichtigungen**: Bei Fehlern automatisch
3. **Commit-Status**: Grüner Haken bei Erfolg

---

## Troubleshooting

### Problem 1: Build schlägt fehl - TypeScript Errors

**Symptom**:
```
Type error: JSX elements cannot have multiple attributes with the same name.
```

**Lösung**:
```bash
# Lokal bauen und Fehler fixen
npm run build

# Dann erst pushen
git add .
git commit -m "fix: TypeScript errors"
git push
```

### Problem 2: SFTP-Verbindung schlägt fehl

**Symptom**:
```
Error: Connection timeout
Error: Authentication failed
```

**Checkliste**:
- ✅ SFTP_SERVER korrekt? (ohne `sftp://` Prefix!)
- ✅ SFTP_PORT korrekt? (Standard: 22)
- ✅ SFTP_USERNAME korrekt?
- ✅ SFTP_PASSWORD korrekt? (SSH-Passwort, nicht Control-Panel!)
- ✅ Server erlaubt SFTP? (manche nur FTP)
- ✅ Firewall-Regeln auf Server?

**Test via Terminal**:
```bash
sftp -P 22 username@ssh.example.com
# Passwort eingeben
# Wenn erfolgreich: Secrets sind korrekt!
```

### Problem 3: 404 Fehler nach Deployment

**Symptom**: Website zeigt 404 oder leere Seite

**Ursachen & Lösungen**:

#### a) Falscher `basePath`
```javascript
// next.config.js
basePath: '/home',  // Muss zu URL passen!
```
Bei `example.com/home/` → `basePath: '/home'`
Bei `example.com/` → `basePath: ''` (leer oder entfernen)

#### b) Falsches Remote-Path
```yaml
# .github/workflows/deploy.yml
remote_path: '/html/'  # Prüfen ob korrekt!
```

**Testen**:
```bash
# Via SFTP zum Server verbinden
sftp username@server
cd /html/subdomain/
ls -la
# Sollte index.html, _next/, etc. zeigen
```

#### c) Server-Konfiguration (.htaccess)

Für Apache Server `.htaccess` im Upload-Verzeichnis:

```apache
# .htaccess für Next.js SSG
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /home/

  # Trailing Slash erzwingen
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_URI} !(.*)/$
  RewriteRule ^(.*)$ $1/ [L,R=301]

  # Falls 404, dann 404.html
  ErrorDocument 404 /home/404.html
</IfModule>

# Kompression aktivieren
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### Problem 4: Bilder werden nicht geladen

**Symptom**: Bilder zeigen 404 oder Broken Image

**Lösung 1**: `next.config.js` prüfen
```javascript
images: {
  unoptimized: true,  // MUSS bei Static Export true sein!
}
```

**Lösung 2**: Externe Bilder-Domains
```javascript
images: {
  unoptimized: true,
  domains: [
    'images.unsplash.com',
    'fluxie.de',
    // Alle externen Domains hier!
  ],
}
```

**Lösung 3**: Image-Pfade prüfen
```tsx
// FALSCH (bei basePath: '/home')
<img src="/images/logo.png" />

// RICHTIG
<img src="/home/images/logo.png" />

// ODER: Next.js Image
import Image from 'next/image'
<Image src="/images/logo.png" width={200} height={100} />
// Next.js fügt basePath automatisch hinzu!
```

### Problem 5: CSS/Styles fehlen

**Symptom**: Website hat kein Styling, nur HTML

**Ursache**: `_next/` Ordner nicht hochgeladen oder falsche Pfade

**Lösung**:
```yaml
# Prüfen in deploy.yml
local_path: './demo-site/out/*'  # MIT /* am Ende!
```

**Verifizieren auf Server**:
```bash
sftp username@server
cd /html/subdomain/
ls -la _next/
# Sollte 'static' Ordner enthalten
```

### Problem 6: Umgebungsvariablen fehlen

**Symptom**: API-Keys oder Config-Werte undefined

**Lösung**: Umgebungsvariablen als GitHub Secrets

```yaml
# .github/workflows/deploy.yml
      - name: Build Next.js app
        working-directory: ./demo-site
        run: npm run build
        env:
          NODE_ENV: production
          NEXT_PUBLIC_API_KEY: ${{ secrets.NEXT_PUBLIC_API_KEY }}
          NEXT_PUBLIC_BASE_URL: ${{ secrets.NEXT_PUBLIC_BASE_URL }}
```

**Wichtig**: Prefix `NEXT_PUBLIC_` für Client-Side Variablen!

---

## Erweiterte Konfiguration

### Multi-Environment Setup

Verschiedene Server für Staging/Production:

```yaml
# .github/workflows/deploy-staging.yml
on:
  push:
    branches:
      - 'staging'
      - 'develop'

jobs:
  deploy-staging:
    # ... gleicher Workflow
    - name: Deploy to STAGING server
      uses: wlixcc/SFTP-Deploy-Action@v1.2.4
      with:
        username: ${{ secrets.STAGING_SFTP_USERNAME }}
        server: ${{ secrets.STAGING_SFTP_SERVER }}
        # ...
        remote_path: '/html/staging/'
```

```yaml
# .github/workflows/deploy-production.yml
on:
  push:
    branches:
      - 'main'
      - 'production'

jobs:
  deploy-production:
    # ... gleicher Workflow
    - name: Deploy to PRODUCTION server
      uses: wlixcc/SFTP-Deploy-Action@v1.2.4
      with:
        username: ${{ secrets.PROD_SFTP_USERNAME }}
        server: ${{ secrets.PROD_SFTP_SERVER }}
        # ...
        remote_path: '/html/production/'
```

### Deployment-Benachrichtigungen (Slack/Discord)

```yaml
      - name: Notify on success
        if: success()
        uses: 8398a7/action-slack@v3
        with:
          status: custom
          custom_payload: |
            {
              text: "✅ Deployment erfolgreich!",
              attachments: [{
                color: 'good',
                text: `Branch: ${{ github.ref }}\nCommit: ${{ github.sha }}`
              }]
            }
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}
```

### Backup vor Deployment

```yaml
      - name: Backup old version
        run: |
          TIMESTAMP=$(date +%Y%m%d_%H%M%S)
          sshpass -p "${{ secrets.SFTP_PASSWORD }}" \
            ssh -p ${{ secrets.SFTP_PORT }} \
            ${{ secrets.SFTP_USERNAME }}@${{ secrets.SFTP_SERVER }} \
            "cd /html && tar -czf backup_${TIMESTAMP}.tar.gz subdomain/"
```

---

## Checkliste für neues Projekt

### Setup-Schritte:

- [ ] 1. Next.js Projekt mit `output: 'export'` konfigurieren
- [ ] 2. `basePath` in `next.config.js` setzen (falls Subdirectory)
- [ ] 3. Lokal testen: `npm run build` → `/out` Ordner prüfen
- [ ] 4. `.github/workflows/deploy.yml` erstellen
- [ ] 5. Pfade in `deploy.yml` anpassen (working-directory, local_path)
- [ ] 6. GitHub Secrets anlegen (SFTP_*)
- [ ] 7. Test-Branch pushen und Deployment beobachten
- [ ] 8. Website auf Server testen
- [ ] 9. `.htaccess` konfigurieren (falls Apache)
- [ ] 10. DNS/Subdomain auf Server-Verzeichnis zeigen lassen

### Erfolgskriterien:

✅ Build läuft grün in GitHub Actions
✅ `/out` Ordner wird generiert (100+ Dateien)
✅ SFTP Upload erfolgreich
✅ Website im Browser erreichbar
✅ Navigation funktioniert (interne Links)
✅ Bilder laden korrekt
✅ CSS/Styles werden angewendet

---

## Weitere Ressourcen

### Dokumentation
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [SFTP Deploy Action](https://github.com/wlixcc/SFTP-Deploy-Action)

### Hilfreiche Commands

```bash
# Lokal builden und testen
npm run build
npx serve out -p 3000

# Out-Verzeichnis analysieren
du -sh out/
find out/ -type f | wc -l

# Git Branch Management
git branch -a  # Alle Branches anzeigen
git checkout -b claude/feature-name
git push -u origin claude/feature-name

# SFTP manuell testen
sftp -P 22 username@server
> cd /html/subdomain/
> ls -la
> put -r out/* .
> quit
```

---

## Support & Kontakt

Bei Problemen:

1. **GitHub Actions Logs prüfen**: Detaillierte Fehler-Infos
2. **Server-Logs prüfen**: SSH auf Server → Error-Logs checken
3. **Issue erstellen**: GitHub Issues mit Log-Output

---

**Version**: 1.0
**Letzte Aktualisierung**: Januar 2025
**Getestet mit**: Next.js 16.0.7, Node.js 20, Ubuntu Latest (GitHub Actions)
