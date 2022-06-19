import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Detail, ExerciseVideo, SimilarExercises } from '../components'
import { equipmentService, exerciseService, targetMuscleService, youTubeService } from '../services'

function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const { id } = useParams()
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetExercises, setTargetExercises] = useState([])
  const [equipmentExercise, setEquipmentExercise] = useState([])
  useEffect(() => {
    const getData = async () => {

      const exerciseData = await exerciseService.getById(id).then(({ data }) => data)
      setExerciseDetail(exerciseData)
      const exerciseVideoData = await youTubeService.get('https://youtube-search-and-download.p.rapidapi.com/search', { params: { query: `${exerciseData.name}` } }).then(({ data }) => data)
      setExerciseVideos(exerciseVideoData.contents)
      const targetExerciseData = await targetMuscleService.getByMuscle(exerciseData.target).then(({ data }) => data)
      setTargetExercises(targetExerciseData)
      const equipmentExerciseData = await equipmentService.getByEquipment(exerciseData.equipment).then(({ data }) => data)
      setEquipmentExercise(equipmentExerciseData)

    }
    getData()
  }, [id]);



  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises  targetExercises={targetExercises} equipmentExercise={equipmentExercise}/>
    </Box>
  )
}

export { ExerciseDetail }