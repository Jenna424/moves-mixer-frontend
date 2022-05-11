import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
import AddExerciseForm from '../components/AddExerciseForm'
import AddEquipmentForm from '../components/AddEquipmentForm'
import ExerciseCard from '../components/ExerciseCard'
import EquipmentCard from '../components/EquipmentCard'

const WorkoutDetails = () => {
  let { id } = useParams()
  const [isAddExerciseFormHidden, setIsAddExerciseFormHidden] = useState(true)
  const [newExercise, setNewExercise] = useState({
    name: '',
    instructions: '',
    sets: null,
    reps: null,
    image: '',
    workout: id
  })
  const [exercises, setExercises] = useState([])
  const [isAddEquipmentFormHidden, setIsAddEquipmentFormHidden] = useState(true)
  const [newEquipment, setNewEquipment] = useState({
    name: '',
    specifications: '',
    image: '',
    workout: id
  })
  const [equipment, setEquipment] = useState([])

  const getExercisesByWorkoutId = async () => {
    const response = await axios.get(`${BASE_URL}/workouts/${id}/exercises`)
    setExercises(response.data)
  }

  const getEquipmentByWorkoutId = async () => {
    const response = await axios.get(`${BASE_URL}/workouts/${id}/equipment`)
    setEquipment(response.data)
  }

  useEffect(() => {
    getExercisesByWorkoutId()
    getEquipmentByWorkoutId()
  }, [])

  const handleExerciseInputChange = (event) => {
    setNewExercise({
      ...newExercise,
      [event.target.name]: event.target.value
    })
  }

  const handleEquipmentInputChange = (event) => {
    setNewEquipment({
      ...newEquipment,
      [event.target.name]: event.target.value
    })
  }

  const createExercise = async (event) => {
    event.preventDefault()
    await axios
      .post(`${BASE_URL}/exercises`, newExercise)
      .then(function (response) {
        getExercisesByWorkoutId()
      })
      .catch(function (error) {
        console.log(error)
      })
    setNewExercise({
      name: '',
      instructions: '',
      sets: '',
      reps: '',
      image: '',
      workout: id
    })
    toggleIsAddExerciseFormHidden()
  }

  const createEquipment = async (event) => {
    event.preventDefault()
    await axios
      .post(`${BASE_URL}/equipment`, newEquipment)
      .then(function (response) {
        getEquipmentByWorkoutId()
      })
      .catch(function (error) {
        console.log(error)
      })
    setNewEquipment({
      name: '',
      specifications: '',
      image: '',
      workout: id
    })
    toggleIsAddEquipmentFormHidden()
  }

  const toggleIsAddExerciseFormHidden = () => {
    setIsAddExerciseFormHidden((prevState) => !prevState)
  }

  const toggleIsAddEquipmentFormHidden = () => {
    setIsAddEquipmentFormHidden((prevState) => !prevState)
  }

  // Marks the exercise as completed
  const updateExercise = async (id) => {
    await axios
      .put(`${BASE_URL}/exercises/${id}`, { completed: true })
      .then(function (response) {
        getExercisesByWorkoutId()
      })
  }

  const deleteExercise = async (id) => {
    await axios.delete(`${BASE_URL}/exercises/${id}`).then(function (response) {
      getExercisesByWorkoutId()
    })
  }

  return (
    <div className="workout-details-page">
      <button
        className="add-exercise-form-btn"
        onClick={toggleIsAddExerciseFormHidden}
      >
        {isAddExerciseFormHidden ? 'Add Exercise' : 'Close Form'}
      </button>
      {!isAddExerciseFormHidden && (
        <div className="form-wrapper">
          <AddExerciseForm
            newExercise={newExercise}
            handleExerciseInputChange={handleExerciseInputChange}
            createExercise={createExercise}
            toggleIsAddExerciseFormHidden={toggleIsAddExerciseFormHidden}
          />
        </div>
      )}
      <h2>Exercise Movements</h2>
      <div className="exercise-cards-container">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise._id}
            {...exercise}
            updateExercise={updateExercise}
            deleteExercise={deleteExercise}
          />
        ))}
      </div>
      <button
        className="add-equipment-form-btn"
        onClick={toggleIsAddEquipmentFormHidden}
      >
        {isAddEquipmentFormHidden ? 'Add Equipment' : 'Close Form'}
      </button>
      {!isAddEquipmentFormHidden && (
        <div className="form-wrapper">
          <AddEquipmentForm
            newEquipment={newEquipment}
            handleEquipmentInputChange={handleEquipmentInputChange}
            createEquipment={createEquipment}
            toggleIsAddEquipmentFormHidden={toggleIsAddEquipmentFormHidden}
          />
        </div>
      )}
      <h2>Equipment Requirements</h2>
      <div className="equipment-cards-container">
        {equipment.map((pieceOfEquipment) => (
          <EquipmentCard key={pieceOfEquipment._id} {...pieceOfEquipment} />
        ))}
      </div>
    </div>
  )
}

export default WorkoutDetails
