/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ps.w.org'
      }
    ]
  }
}

// https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745)

export default nextConfig
