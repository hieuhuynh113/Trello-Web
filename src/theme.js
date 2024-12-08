import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`

// Create theme instance
const theme = extendTheme({
  // Theme variables, used in components
  trello: {
    appBarHeight: APP_BAR_HEIGHT, // App bar height
    boardBarHeight: BOARD_BAR_HEIGHT, // Board bar height
    boardContentHeight: BOARD_CONTENT_HEIGHT // Board content height
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
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': {
            fontSize: '0.875rem' // Label font size
          }
        }
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