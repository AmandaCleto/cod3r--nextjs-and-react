/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Here you can create your env
  // You can call this env by using: {process.env.dbPath}
  env: {
    bdPath:'...',
  }
}

module.exports = nextConfig
