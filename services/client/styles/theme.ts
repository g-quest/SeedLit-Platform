'use client'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    background: {
      default: '#f5f3f0',
    },
  },
  typography: {
    h1: {
      // XL
      fontFamily: 'var(--font-lilita-one), Arial, Helvetica, sans-serif',
      fontSize: '4.5rem', // 72px
      lineHeight: '110%', // 79.2px
      textTransform: 'uppercase',
      letterSpacing: '0.063rem',
    },
    h2: {
      // L
      fontFamily: 'var(--font-lilita-one), Arial, Helvetica, sans-serif',
      fontSize: '3.5rem', // 56px
      lineHeight: '110%', // 61.6px
      textTransform: 'uppercase',
      letterSpacing: '0.063rem',
    },
    h3: {
      // M
      fontFamily: 'var(--font-lilita-one), Arial, Helvetica, sans-serif',
      fontSize: '2.5rem', // 40px
      lineHeight: '100%', // 40px
      textTransform: 'uppercase',
      letterSpacing: '0.063rem',
    },
    h4: {
      // S
      fontFamily: 'var(--font-lilita-one), Arial, Helvetica, sans-serif',
      fontSize: '2rem', // 32px
      lineHeight: '124%', // 39.68px
      textTransform: 'uppercase',
      letterSpacing: '0.063rem',
    },
    h5: {
      // XS
      fontFamily: 'var(--font-lilita-one), Arial, Helvetica, sans-serif',
      fontSize: '1.5rem', // 24px
      lineHeight: '124%', // 29.76px
      textTransform: 'uppercase',
      letterSpacing: '0.063rem',
    },
    h6: {
      // XXS
      fontFamily: 'var(--font-lilita-one), Arial, Helvetica, sans-serif',
      fontSize: '1rem', // 16px
      lineHeight: '124%', // 19.84px
      textTransform: 'uppercase',
      letterSpacing: '0.063rem',
    },
    subtitle1: {
      // Body - XL
      fontFamily: 'var(--font-nunito-sans), Arial, Helvetica, sans-serif',
      fontSize: '1.25rem', // 20px
      lineHeight: '140%', // 28px
    },
    body1: {
      // Body - L
      fontFamily: 'var(--font-nunito-sans), Arial, Helvetica, sans-serif',
      fontSize: '1rem', // 16px
      lineHeight: '140%', // 22.4px
    },
    body2: {
      // Body - M
      fontFamily: 'var(--font-nunito-sans), Arial, Helvetica, sans-serif',
      fontSize: '0.875rem', // 14px
      lineHeight: '140%', // 19.6px
    },
    caption: {
      // Body - S
      fontFamily: 'var(--font-nunito-sans), Arial, Helvetica, sans-serif',
      fontSize: '0.625rem', // 10px
      lineHeight: '150%', // 15px
    },
  },
  components: {
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: '#27ae60',
        },
      },
    },
  },
})

export default theme
