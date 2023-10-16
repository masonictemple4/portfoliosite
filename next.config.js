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
      NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'http://localhost:3000',
      BASE_API_URL: process.env.BASE_API_URL || 'http://localhost:8080',
      PDF_RESUME_URL: process.env.PDF_RESUME_URL || 'https://storage.googleapis.com/theswequarry-pub/users/masonictemple4-1/resumes/Mason-Resume-2023.pdf',
      MD_RESUME_URL: process.env.MD_RESUME_URL || 'https://storage.googleapis.com/theswequarry-pub/users/masonictemple4-1/resumes/RESUME.md',
    },
    publicRuntimeConfig: {
      NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'http://localhost:3000',
      BASE_API_URL: process.env.BASE_API_URL || 'https://test.masonictemple4.app',
      PDF_RESUME_URL: process.env.PDF_RESUME_URL || 'https://storage.googleapis.com/theswequarry-pub/users/masonictemple4-1/resumes/Mason-Resume-2023.pdf',
      MD_RESUME_URL: process.env.MD_RESUME_URL || 'https://storage.googleapis.com/theswequarry-pub/users/masonictemple4-1/resumes/RESUME.md',
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
