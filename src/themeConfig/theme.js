import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    ochre: {
      main: '#e45858',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#fffe', 
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#fffe', 
          '&:hover': {
            backgroundColor: '#fffe', 
          },
          '&.Mui-focused': {
            backgroundColor: '#fffe', 
          },
        },
      },
    },
  },
});