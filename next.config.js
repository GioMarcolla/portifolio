/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/source',
        destination: 'https://github.com/GioMarcolla/portifolio',
        permanent: true
      },
    ]
  }
}
