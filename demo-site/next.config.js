/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/lesewelt', // Erforderlich für Deployment in Unterverzeichnis
  images: {
    unoptimized: true, // Erforderlich für statischen Export
  },
}

module.exports = nextConfig
