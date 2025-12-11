/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/home', // Deployment in /home Unterverzeichnis
  trailingSlash: true, // Generiert /page/index.html statt /page.html
  images: {
    unoptimized: true, // Erforderlich für statischen Export
  },
}

module.exports = nextConfig
