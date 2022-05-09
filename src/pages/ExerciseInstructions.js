import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const ExerciseInstructions = () => {
  let { id } = useParams()
  const [exercise, setExercise] = useState({})

  const getExerciseById = async () => {
    const response = await axios.get(`${BASE_URL}/exercises/${id}`)
    setExercise(response.data)
  }

  useEffect(() => {
    getExerciseById()
  }, [])

  return (
    <div className="exercise-instructions-page">
      <h3>{exercise.name} Exercise Guide</h3>
      <p>
        <b>Instructions</b>: <em>{exercise.instructions}</em>
      </p>
    </div>
  )
}

export default ExerciseInstructions
