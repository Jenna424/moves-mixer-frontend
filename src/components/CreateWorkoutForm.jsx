const CreateWorkoutForm = ({ newWorkout, handleInputChange, createWorkout, toggleIsFormHidden }) => {
  return (
    <div className="form-container">
       <button onClick={toggleIsFormHidden} className='close-modal'>X</button>
      <h2>Design a Workout Routine</h2>
      <form className="create-workout-form" onSubmit={createWorkout}>
        <div className="form-field">
          <label><b>Title</b>:</label>
          <input name="title" type="text" onChange={handleInputChange} placeholder="Enter title..." value={newWorkout.title} required />
        </div>
        <div className="form-field">
          <label><b>Training Type</b>:</label>
          <input name="trainingType" type="text" onChange={handleInputChange} placeholder="Enter training type..." value={newWorkout.trainingType} required />
        </div>
        <div className="form-field">
          <label><b>Target Area</b>:</label>
          <input name="targetArea" type="text" onChange={handleInputChange} placeholder="Enter target area..." value={newWorkout.targetArea} required />
        </div>
        <div className="form-field">
          <label><b>Duration</b>:</label>
          <input name="duration" type="number" onChange={handleInputChange} placeholder="Enter duration (in minutes)..." value={newWorkout.duration} required />
        </div>
        <div className="form-field">
          <label><b>Image</b>:</label>
          <input name="image" type="text" onChange={handleInputChange} placeholder="Enter image path..." value={newWorkout.image} required />
        </div>
        <div className="button-wrapper">
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default CreateWorkoutForm