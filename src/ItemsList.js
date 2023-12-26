import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const ItemsList = ({items,handleCheck,handleDel}) => {
  return (
    <ul>
    {items.map((item)=>(
      <li className='item' key={item.id}>
          <input
           type="checkbox"
           onChange={()=>handleCheck(item.id)}
           checked={item.checked}
           />
 
           <label
                style={(item.checked) ?  {textDecoration: 'line-through'}: null}
                onDoubleClick={()=>handleCheck(item.id)} > 
                {item.item}
                </label>
 
           <FaTrashAlt 
             role ="button"
             onClick={()=>handleDel(item.id)}
             tabIndex="0"
             aria-label={`Delete ${item.item}`}
           />
 
      </li>
    ))}
 </ul>
  )
}

export default ItemsList