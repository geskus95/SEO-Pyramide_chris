/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/lesewelt', // Erforderlich für Deployment in Unterverzeichnis
  trailingSlash: true, // Generiert /page/index.html statt /page.html
  images: {
    unoptimized: true, // Erforderlich für statischen Export
  },
}

module.exports = nextConfig
