module.exports = {
  async rewrites() {
    return [
      // Hutch Rail train sim: static Vite build in public/trains (rebuild with `npm run build:site` in Hutch-Train-Sim)
      { source: '/trains', destination: '/trains/index.html' },
      { source: '/trains/', destination: '/trains/index.html' },
    ];
  },
};
