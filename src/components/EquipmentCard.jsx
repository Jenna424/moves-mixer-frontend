const EquipmentCard = ({ name, image, specifications }) => {
  return (
    <div className="equipment-card">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p><b>Specifications</b>: {specifications}</p>
    </div>
  )
}

export default EquipmentCard