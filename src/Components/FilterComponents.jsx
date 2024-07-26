

import { useDispatch, useSelector } from "react-redux";
import {data} from "../../data.js"
import { setFilterCriteria, setFilterData } from "../Redux/slice";
import { useNavigate } from "react-router-dom";


function FilterComponents() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {filterCriteria} = useSelector((state)=>{return state.homeReducer})

    const cities = [...new Set(data.map((warehouse)=> warehouse.city))]
    const cluster = [...new Set(data.map((warehouse)=> warehouse.cluster))]
    const spaces = [...new Set(data.map((warehouse)=> warehouse.space_available))]
     

    function handleFilterChange (e){
        dispatch(setFilterCriteria({[e.target.name] : e.target.value}))
    }
    function onSubmitButton(){
        dispatch(setFilterData());
        navigate("/filter")
    }

  return (
    <>
      <div className="filter-container">
         <div className="filter">
            <label>Enter City</label>
            <select name="city" value={filterCriteria.city} onChange={handleFilterChange}>
                {cities.map((city,index)=>{
                    return <option key={index} value={city}>{city}</option>
                })}
            </select>
         </div>

         <div className="filter">
            <label>Cluster</label>
            <select name="cluster" value={filterCriteria.cluster} onChange={handleFilterChange}>
                <option value="">All Clusters</option>
                {cluster.map((cluster , index)=>{
                    return <option key={index} value={cluster}>{cluster}</option>
                })}
            </select>
         </div>

         <div className="filter">
            <label>Space Available</label>
            <select name="space" value={filterCriteria.space} onChange={handleFilterChange}>
                <option value="">All Spaces</option>
                {spaces.map((space , index)=>{
                    return <option key={index} value={space}>{space}</option>
                })}
            </select>
         </div>
         <button className="button button-green " onClick={onSubmitButton}>Filter</button>
      </div>
    </>
  )
}

export default FilterComponents