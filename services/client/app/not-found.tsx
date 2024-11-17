// 404

import Link from 'next/link'
import { Box, Typography } from '@mui/material'

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 86.4px - 69.025px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{
            color: 'var(--ag-black)',
          }}
        >
          404 😅
        </Typography>
        <Typography
          variant="body1"
          sx={{
            m: '1rem auto 2rem',
            color: 'var(--ag-light-black)',
          }}
        >
          You stumbled upon a page that doesn't exist.
        </Typography>
        <Link href="/">
          <Typography
            variant="body1"
            sx={{
              cursor: 'pointer',
              color: 'var(--ag-white)',
              background: 'var(--ag-black)',
              borderRadius: '25px',
              boxShadow: '0 0 1rem rgba(255, 255, 255, 0.25)',
              padding: '0.75rem 1rem',
              display: 'table',
              m: '0 auto 5rem',
            }}
          >
            Return Home
          </Typography>
        </Link>
      </Box>
    </Box>
  )
}
