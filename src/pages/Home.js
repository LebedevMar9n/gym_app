import { Box } from '@mui/material'
import React, { useState } from 'react'

import { Exercises, HeroBanner, SearchExercises } from '../components'

function Home() {
    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);



  return (
<Box>
    <HeroBanner/>
    <SearchExercises
    bodyPart={bodyPart}
    setBodyPart={setBodyPart}
    setExercises={setExercises}
    />
    <Exercises
      bodyPart={bodyPart}
      exercises={exercises}
      setExercises={setExercises}
      />
</Box>
    )
}

export  {Home}