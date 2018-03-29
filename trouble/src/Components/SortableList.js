import React from 'react'
import { SortableContainer } from 'react-sortable-hoc'
import '../App.css'
import '../Css/Imag.css'
import SortableItem from './SortableItem'

const SortableList = SortableContainer(({ mas, size }) => {
  return (
    <div className="block3">
      {mas.map((value, index) => (
        <SortableItem key={index} index={index} value={value} size={size} />
      ))}
    </div>
  )
})
export default SortableList
