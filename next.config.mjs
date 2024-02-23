/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ps.w.org'
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      }
    ]
  }
}

// https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745)
// https://avatars.githubusercontent.com/u/103478300?v=4

export default nextConfig
