import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: '2rem',
      }}
    >
      <Box>
        <Image
          src="/images/seedlit-icon.png"
          alt="SeedLit"
          width={200}
          height={200}
        />
        <Typography variant="h1" sx={{ color: 'var(--sl-leafy-green)' }}>
          SeedLit
        </Typography>
        <Typography variant="subtitle1">
          Planting Seeds for Lifelong Learning through Storytelling
        </Typography>
      </Box>
    </Box>
  )
}
