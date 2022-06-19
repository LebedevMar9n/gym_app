import { Box, Stack, Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import React, { useEffect, useState } from 'react'

import { bodyPartervice, exerciseService } from '../services'
import { ExerciseCard } from './ExerciseCard'

function Exercises({
  bodyPart,
  exercises,
  setExercises
}) {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9
  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }

  const indexOfTheLastExercise = currentPage * exercisesPerPage
  const indexOfTheFirstExercise = indexOfTheLastExercise - exercisesPerPage
  const currentExercise = exercises.slice(indexOfTheFirstExercise, indexOfTheLastExercise)


  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === 'all') {
        exercisesData = await exerciseService.getAll().then(({ data }) => data)
      } else {
        exercisesData = await bodyPartervice.getByPart(bodyPart).then(({ data }) => data)
      }
      setExercises(exercisesData)
    }
    fetchExercisesData()
  }, [bodyPart])


  return (
    <Box
      id='exercises'
      sx={{ mt: { lg: '110px' } }}
      mt='50px'
      p='20px'
    >
      <Typography variant='h4' mb='46px'>
        Showing results
      </Typography>
      <Stack direction={'row'} sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap='wrap' justifyContent={'center'}>
        {currentExercise.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export { Exercises }