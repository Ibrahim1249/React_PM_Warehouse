
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import warehouseImg from "../assets/warehouseImg.png"
import {updateWarehouseData} from "../Redux/slice"



function DetailPage() {
    const {id} = useParams();
    const {originalData} = useSelector((state)=>{return state.homeReducer})
    const dispatch = useDispatch();
    const [isEditing , setIsEditing] = useState(false);
    const [editWarehouse, setEditWarehouse] = useState(null)

    const warehouse = originalData.find((data) => data?.id == id);
   
  function handleChange(e){
    const {name , value} = e.target;
    setEditWarehouse((prev)=> (
        {...prev , [name] : value}
    ))

  }
  function handleEditClick(){
        if(isEditing){
            dispatch(updateWarehouseData(editWarehouse))
          setIsEditing(false)
        }else{
            setEditWarehouse({...warehouse});
            setIsEditing(true)
        }
  }
  if (!warehouse) return null;
  const currentWarehouse = isEditing ? editWarehouse : warehouse;

  return (
   <>
    <div className="detail-container">
         <div className="detail">
             <div className="left">
                <img src={warehouseImg} alt="" />
             </div>
             <div className="right">

                <div className="heading">
                  <h2>{warehouse?.name}</h2>
                 <p onClick={handleEditClick}>{isEditing ? "Save" : "Edit"} </p>
                </div>

                <div className="register">
                    <p>{warehouse?.is_registered ? "Registered" : "Not Registered"}</p>
                    <p>{warehouse?.is_live ? "Live" : "Not Live"}</p>
                </div>

                <div className="change">
                    <p><span>City :</span>
                     {isEditing ? <input type="text" name='city' value={currentWarehouse?.city} onChange={handleChange}/> : <span>{warehouse?.city}</span>}
                    </p>
                    <p><span>Space Available : </span>
                    {isEditing ? <input type="text" name='space_available' value={currentWarehouse?.space_available} onChange={handleChange}/> : <span>{warehouse?.space_available}</span>}
                    </p>
                    <p><span>Cluster :</span>
                    {isEditing ? <input type="text" name='cluster' value={currentWarehouse?.cluster} onChange={handleChange}/> : <span>{warehouse?.cluster}</span>}
                    </p>
                    <p><span>Type :</span>
                    {isEditing ? <input type="text" name='type' value={currentWarehouse?.type} onChange={handleChange}/> : <span>{warehouse?.type}</span>}
                    </p>
                </div>
             </div>
         </div>
     </div>

   </>
  )
}

export default DetailPage