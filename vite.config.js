export default {
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "[name].[ext]",
        chunkFileNames: "[name].[hash].js",
        entryFileNames: "[name].[hash].js",
      },
    },
  },
};
