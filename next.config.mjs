/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.myanimelist.net',
                port: '',
                pathname: '/**',  // Mengizinkan akses ke seluruh path di placehold.co
            }
        ],
    }
};

export default nextConfig;
