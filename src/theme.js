
import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        main: deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        main: orange
      }
    }
  }
})

export default theme