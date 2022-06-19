import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Box mt={'40px'} bgcolor={'#fff3f4'}>
      <Stack  alignItems='center' >
        <Typography variant='h5' margin={'20px'}>
          Made by lebedevMar9n
        </Typography>
      </Stack>
    </Box>
  )
}

export { Footer }