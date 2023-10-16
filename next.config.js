/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  [withTM, {
    transpileModules: ['@react-markdown', 'react-syntax-highlighter']
  }],
  {
    reactStrictMode: true,
    env: {
      BASE_API_URL: process.env.BASE_API_URL || 'http://localhost:8080',
    },
    publicRuntimeConfig: {
      BASE_API_URL: process.env.BASE_API_URL || 'https://masonictemple4.app',
    },
    images: {
      domains: [
        'cdn.sanity.io',
        'flowbite.s3.amazonaws.com',
        'storage.googleapis.com',
      ],
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false
      }
      return config
    }
  }
])
