'use client'

import { Box, CircularProgress, Typography } from '@mui/material'

const Loader: React.FC = () => (
  <Box
    sx={{
      minHeight: '85vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      p: '2rem',
    }}
  >
    <CircularProgress sx={{ color: 'black' }} />
  </Box>
)

export default Loader
