import { Link } from 'react-router-dom'

const ExerciseCard = ({ _id, name, image, sets, reps, completed, updateExercise, deleteExercise }) => {
  return (
    <div className="exercise-card">
      <Link to={`/exercises/${_id}`}>
        <h3>{name}</h3>
      </Link>
      <img src={image} alt={name} />
      <p className="exercise-details"><b>Sets</b>: {sets}</p>
      <p className="exercise-details"><b>Reps</b>: {reps}</p>
      <button className="update-exercise-btn" disabled={completed === true} onClick={() => updateExercise(_id)}>Mark Complete</button>
      <button className="delete-exercise-btn" onClick={() => deleteExercise(_id)}>Remove Exercise</button>
    </div>
  )
}

export default ExerciseCard