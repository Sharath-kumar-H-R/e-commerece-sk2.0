/** @type {import('tailwindcss').Config} */

// Importing the default Tailwind CSS theme for further extension
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // Specifying content paths for Tailwind to scan for classes
  content: [
    './*.html',
    './node_modules/@fortawesome/fontawesome-free/**/*.js',
    // Add paths to all of the template files in your project
  ],
  theme: {
    // Extending the default theme with customizations
    extend: {
      // Customizing font families
      fontFamily: {
        // 'sans' is a key for sans-serif fonts
        'sans': ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
        // Example: Adding a custom serif font
        'serif': ['Georgia', ...defaultTheme.fontFamily.serif],
      },
      // Customizing colors
      colors: {
        // Adding a custom primary color
        'primary': '#F1EAFF',
        // Example: Adding secondary colors
        'secondary': {
          '100': '#E6F1F2',
          '200': '#C0DBDF',
          '300': '#99C5CB',
          // You can add more shades as needed
        },
      },
      // Customizing spacing
      spacing: {
        // Example: Adding a custom spacing value
        '72': '18rem',
      },
      // Customizing typography
      typography: {
        // Example: Customizing font sizes
        fontSize: {
          'xs': '.75rem',
          'sm': '.875rem',
          // You can add more custom font sizes
        },
        // Example: Customizing line heights
        lineHeight: {
          'tight': 1.25,
          'loose': 2,
        },
      },
      // Customizing border styles
      borderWidth: {
        // Example: Adding a custom border width
        '6': '6px',
      },
      borderRadius: {
        // Example: Adding a custom border radius
        'xl': '1rem',
      },
      // Customizing opacity values
      opacity: {
        // Example: Adding a custom opacity value
        '90': '0.9',
      },
      // Customizing screen breakpoints
      screens: {
        // Example: Adding a custom breakpoint
        '2xl': '1536px',
      },
      // Customizing z-index scale
      zIndex: {
        // Example: Adding a custom z-index value
        '100': 100,
      },
      // Customizing interactivity states
      states: {
        // Example: Adding a custom hover state
        'hover': {
          // Applying a custom background color on hover
          'bg-primary': '#AECFD3',
        },
      },
      // You can add more theme customizations here
    },
  },
  // Adding plugins to Tailwind CSS
  plugins: [
    // Adding typography plugin
    require('@tailwindcss/typography'),
    // You can add more plugins here (e.g., forms, aspect ratio, animations)
  ],
  // Removing deprecated purge option (content is used instead)
  // Specifying content configuration for Tailwind CSS is already done in `content`
};
