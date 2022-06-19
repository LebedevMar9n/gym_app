import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import { HorizontalScrollBar } from './HorizontalScrollBar'
import { Loader } from './Loader'

function SimilarExercises({ equipmentExercise, targetExercises }) {
  return (
    <Box sx={{ my: { lg: '100px', xs: '0' } }}>
      <Typography variant='h3' mb={'5'}>
        Exercise that target the same muscle group
      </Typography>
      <Stack direction={'row'} sx={{ p: '2', position: 'relative' }}>
        {
          targetExercises.length
            ? <HorizontalScrollBar data={targetExercises} />
            : <Loader />
        }
      </Stack>
      <Typography variant='h3' mb={'5'}>
        Exercise that use the same equipment
      </Typography>
      <Stack direction={'row'} sx={{ p: '2', position: 'relative' }}>
        {
          equipmentExercise.length
            ? <HorizontalScrollBar data={equipmentExercise} />
            : <Loader />
        }
      </Stack>
    </Box>
  )
}

export { SimilarExercises }