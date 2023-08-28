/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mediaim.expedia.com',
                port: '',
                pathname: '/cars/35/**',
            },
            {
                protocol: 'https',
                hostname: 'd2f9dw3b0opbul.cloudfront.net',
            },
            {
                protocol: 'https',
                hostname: 'www.sixt.de',
            },
            {
                protocol: 'https',
                hostname: 'platform.cstatic-images.com',
            },
        ],
    },
}

module.exports = nextConfig
