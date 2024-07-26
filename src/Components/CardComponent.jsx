
import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

function CardComponent() {
    const {originalData , likedData} = useSelector((state)=>{return state.homeReducer})
  
  return (
   <>
     <div className="card-container">
        {originalData && originalData.map((warehouse , index)=>{
            return <Card warehouse={warehouse} key={index}/>
        })}
     </div>
   </>
  )
}

export default CardComponent