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
    <div className="exercise-guide-page">
      <h1 className="exercise-guide-heading">Exercise Guide</h1>
      <h3 className="exercise-guide-subheading">
        Learn the proper technique for:
      </h3>
      <h2>{exercise.name}</h2>
      <img
        className="exercise-guide-img"
        src={exercise.image}
        alt={exercise.name}
      />
      <h3 className="instructions-heading">Instructions:</h3>
      <p className="instructions-p">{exercise.instructions}</p>
    </div>
  )
}

export default ExerciseInstructions
