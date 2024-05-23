module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      process.env.NODE_ENV === 'production' &&
        require('@fullhuman/postcss-purgecss')({
          content: [
            './**/*.html',
            './**/*.js',
            './**/*.jsx', // Include other file types if necessary
            // Add paths to all of the template files in your project
          ],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        }),
    ],
  };