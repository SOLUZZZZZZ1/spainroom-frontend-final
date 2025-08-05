import React from 'react'
import CardSpainRoom from '../components/CardSpainRoom'

const Listado = () => {
  return (
    <div>
      <CardSpainRoom title="Habitaciones disponibles">
        <p>Habitación en el centro de Madrid – 400€/mes</p>
        <p>Habitación luminosa en Barcelona – 380€/mes</p>
        <p>Habitación cerca de universidades en Valencia – 360€/mes</p>
      </CardSpainRoom>
    </div>
  )
}

export default Listado