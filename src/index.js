import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#0a0a0a',
        color: '#f5f0eb',
        fontFamily: "'DM Sans', sans-serif",
      },
    },
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'DM Sans', sans-serif",
  },
  colors: {
    brand: {
      orange: '#f97316',
      orangeLight: '#fb923c',
      cream: '#f5f0eb',
      dark: '#0a0a0a',
      card: '#111111',
      border: '#1e1e1e',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
