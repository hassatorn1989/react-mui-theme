import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom'

const defaultTheme = createTheme({
  // noto sans thai
  typography: {
    fontFamily: [
      'Noto Sans Thai',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#00838f',
    },
    secondary: {
      main: '#00acc1',
    },
  },
  
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
