import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create theme instance
const theme = extendTheme({
  // Theme variables, used in components
  trello: {
    appBarHeight: '58px', // App bar height
    boardBarHeight: '60px' // Board bar height
  },
  // Color schemes used in theme
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: teal, // Primary color, used for buttons, inputs, ...
    //     secondary: deepOrange // Secondary color, used for buttons, inputs, ...
    //   }
    // },
    // dark: {
    //   palette: {
    //     primary: cyan, // Primary color, used for buttons, inputs, ...
    //     secondary: deepOrange // Secondary color, used for buttons, inputs, ...
    //   }
    // }
  },
  // MUI components, use style overrides
  components: {
    // Scrollbar, use style overrides
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px', // Scrollbar width
            height: '8px' // Scrollbar height
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1', // Scrollbar thumb color
            borderRadius: '8px' // Scrollbar thumb border radius
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white' // Scrollbar thumb color on hover
          }
        }
      }
    },
    // Button, use style overrides
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none' // Don't convert button text to uppercase
        }
      }
    },
    // InputLabel, use style overrides
    MuiInputLabel: {
      styleOverrides: {
        root: { fontSize: '0.875rem' } // Label font size
      }
    },
    // OutlinedInput, use style overrides
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem', // Input font size
          '& fieldset': { borderWidth: '0.5px !important' },
          '&:hover fieldset': { borderWidth: '1.6px !important' },
          '&:focus fieldset': { borderWidth: '1.6px !important' }
        }
      }
    }
  }
})

export default theme