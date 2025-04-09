module.exports = {
  plugins: {
    'postcss-nested': {},
    '@tailwindcss/postcss': {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};
