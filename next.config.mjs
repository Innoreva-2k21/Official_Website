// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: "https",
//           hostname: "cdn.sanity.io",
//         },
//       ],
//     },
//     experimental: {
//       taint: true,
//       serverMinification: false,
//     },
//     compress: false,
//     webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
//       if (!dev) {
//         // Ensure that other optimization settings are preserved
//         config.optimization = {
//           ...config.optimization,
//           config.optimization.minimizer: [],
//         };
//       }
//       // Important: return the modified config
//       return config;
//     },
//     swcMinify: false,
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  compress: false, // Disable built-in compression
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    if (!dev) {
      // Disable minification and other optimizations in production
      config.optimization.minimize = false;
      config.optimization.splitChunks = {
        chunks: 'async',
        minSize: 0,
        minChunks: 1,
        cacheGroups: {
          default: false,
          vendors: false,
        },
      };
      // Remove TerserPlugin to avoid JS minification
      config.optimization.minimizer = config.optimization.minimizer.filter(
        (plugin) => plugin.constructor.name !== 'TerserPlugin'
      );
    }
    // Important: return the modified config
    return config;
  },
};

export default nextConfig;
