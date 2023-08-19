/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  [withTM, {
    transpileModules: ['@react-markdown', 'react-syntax-highlighter']
  }],
  {
    reactStrictMode: true,
    images: {
      domains: ['cdn.sanity.io'],
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false
      }
      return config
    }
  }
])
