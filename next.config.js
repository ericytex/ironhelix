/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/saas', destination: '/', permanent: true },
      { source: '/saas/project-alpha', destination: '/', permanent: true },
      { source: '/saas/ai-storyshorts', destination: '/', permanent: true },
      { source: '/saas/project-beta', destination: '/', permanent: true },
      { source: '/saas/adsflow', destination: '/', permanent: true },
      { source: '/saas/whatsapp-ecomm', destination: '/', permanent: true },
      { source: '/saas/turboscribe', destination: '/', permanent: true },
      { source: '/saas/content-repurposer', destination: '/', permanent: true },
      { source: '/saas/scepter', destination: '/', permanent: true },
      { source: '/saas/habitstack', destination: '/', permanent: true },
    ]
  },
}

module.exports = nextConfig

