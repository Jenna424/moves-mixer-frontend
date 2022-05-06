const WorkoutCard = ({ title, trainingType, targetArea, duration, image }) => {
  return (
    <div className="workout-card">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p><b>Training Type</b>: {trainingType}</p>
      <p><b>Target Area</b>: {targetArea}</p>
      <p><b>Duration</b>: {duration} minutes</p>
    </div>
  )
}

export default WorkoutCard