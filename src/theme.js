import { cyan, deepOrange, teal } from '@mui/material/colors'
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
    light: {
      palette: {
        primary: teal, // Primary color, used for buttons, inputs, ...
        secondary: deepOrange // Secondary color, used for buttons, inputs, ...
      }
    },
    dark: {
      palette: {
        primary: cyan, // Primary color, used for buttons, inputs, ...
        secondary: deepOrange // Secondary color, used for buttons, inputs, ...
      }
    }
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
            backgroundColor: '#bdc3c7', // Scrollbar thumb color
            borderRadius: '8px' // Scrollbar thumb border radius
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#00b894' // Scrollbar thumb color on hover
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
        root: ({ theme }) => ({
          color: theme.palette.primary.main, // Label color
          fontSize: '0.875rem' // Label font size
        })
      }
    },
    // OutlinedInput, use style overrides
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main, // Input color
          fontSize: '0.875rem', // Input font size
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light // Input border color
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main // Input border color on hover
          }
        })
      }
    }
  }
})

export default theme