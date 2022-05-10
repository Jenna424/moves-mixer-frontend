const AddEquipmentForm = ({ newEquipment, handleEquipmentInputChange, createEquipment, toggleIsAddEquipmentFormHidden }) => {
  return (
    <div className="form-container">
      <button onClick={toggleIsAddEquipmentFormHidden} className='close-modal'>X</button>
      <h2>Add Equipment</h2>
      <form onSubmit={createEquipment}>
        <div className="form-field">
          <label><b>Name</b>:</label>
          <input name="name" type="text" onChange={handleEquipmentInputChange} placeholder="Enter piece of equipment..." value={newEquipment.name} required />
        </div>
        <div className="form-field">
          <label><b>Specifications</b>:</label>
          <input name="specifications" type="text" onChange={handleEquipmentInputChange} placeholder="Enter specifications..." value={newEquipment.specifications} required />
        </div>
        <div className="form-field">
          <label><b>Image</b>:</label>
          <input name="image" type="text" onChange={handleEquipmentInputChange} placeholder="Enter image path..." value={newEquipment.image} required />
        </div>
        <div className="button-wrapper">
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default AddEquipmentForm