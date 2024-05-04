/** @type {import('tailwindcss').Config} */

// Importing the default Tailwind CSS theme for further extension
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // Specifying content paths for Tailwind to scan for classes
  content: [
    './layouts/*.html',
    './node_modules/@fortawesome/fontawesome-free/**/*.js',
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
      colors:{
        // Adding a custom primary color
        'primary':'#F1EAFF',
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
  // Specifying content configuration for Tailwind CSS
  purge: {
    // Specify content paths to be scanned for classes
    content: [
      './*.html'
    ],
    // Exclude specific files or directories from being purged
    options: {
      // Specify whitelist patterns to prevent specific classes from being purged
      whitelistPatterns: [],
    },
  },
  // Configuring Preflight styles
  preflight: {
    // Customize the default styles reset or normalize applied by Tailwind
  },
  // Configuring responsive design
  variants: {
    // You can customize responsive variants here
  },
}
