import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/globalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />

    </ThemeProvider>
  </React.StrictMode>,
)