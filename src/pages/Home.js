import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CreateWorkoutForm from '../components/CreateWorkoutForm'
import WorkoutCard from '../components/WorkoutCard'
import { BASE_URL } from '../globals'
const Home = () => {
  // By default, the form to create a new workout is hidden and will appear on button click
  const [isFormHidden, setIsFormHidden] = useState(true)
  const [newWorkout, setNewWorkout] = useState({
    title: '',
    trainingType: '',
    targetArea: '',
    duration: null,
    image: ''
  })
  const [workouts, setWorkouts] = useState([])

  const fetchWorkouts = async () => {
    const response = await axios.get(`${BASE_URL}/workouts`)
    setWorkouts(response.data.workouts)
  }

  useEffect(() => {
    fetchWorkouts()
  }, [])

  const toggleIsFormHidden = () => {
    setIsFormHidden((prevState) => !prevState)
  }

  const handleInputChange = (event) => {
    setNewWorkout({
      ...newWorkout,
      [event.target.name]: event.target.value
    })
  }

  const createWorkout = async (event) => {
    event.preventDefault()
    await axios
      .post(`${BASE_URL}/workouts`, newWorkout)
      .then(function (response) {
        fetchWorkouts()
      })
      .catch(function (error) {
        console.log(error)
      })
    setNewWorkout({
      title: '',
      trainingType: '',
      targetArea: '',
      duration: '',
      image: ''
    })
  }

  return (
    <div className="homepage">
      <button onClick={toggleIsFormHidden}>
        {isFormHidden ? 'Design Workout' : 'Close Form'}
      </button>
      {!isFormHidden && (
        <div className="form-wrapper">
          <CreateWorkoutForm
            newWorkout={newWorkout}
            handleInputChange={handleInputChange}
            createWorkout={createWorkout}
            toggleIsFormHidden={toggleIsFormHidden}
          />
        </div>
      )}
      <h1 className="workout-routines-heading">Workout Routines</h1>
      <div className="workouts-wrapper">
        {workouts.map((workout) => (
          <Link to={`/workouts/${workout._id}`} key={workout._id}>
            <WorkoutCard {...workout} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
