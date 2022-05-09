const AddExerciseForm = ({ newExercise, handleExerciseInputChange, createExercise }) => {
  return (
    <div className="form-container">
      <h2>Add Exercise Movement</h2>
      <form onSubmit={createExercise}>
        <div className="form-field">
          <label><b>Name</b>:</label>
          <input name="name" type="text" onChange={handleExerciseInputChange} placeholder="Enter an exercise movement..." value={newExercise.name} required />
        </div>
        <div className="form-field">
          <label><b>Instructions</b>:</label>
          <textarea name="instructions" onChange={handleExerciseInputChange} placeholder="Enter instructions for performing exercise..." value={newExercise.instructions} required />
        </div>
        <div className="form-field">
          <label><b>Sets</b>:</label>
          <input name="sets" type="number" onChange={handleExerciseInputChange} placeholder="Enter number of sets..." value={newExercise.sets} required />
        </div>
        <div className="form-field">
          <label><b>Reps</b>:</label>
          <input name="reps" type="number" onChange={handleExerciseInputChange} placeholder="Enter number of reps.." value={newExercise.reps} required />
        </div>
        <div className="form-field">
          <label><b>Image</b>:</label>
          <input name="image" type="text" onChange={handleExerciseInputChange} placeholder="Enter image path..." value={newExercise.image} required />
        </div>
        <div className="button-wrapper">
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default AddExerciseForm