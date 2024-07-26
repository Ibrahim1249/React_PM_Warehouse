import CardComponent from "./CardComponent"
import FilterComponents from "./FilterComponents"
import { useDispatch, useSelector } from 'react-redux'
import { resetFilter } from "../Redux/slice"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"


function Home() {
  const {likedData} = useSelector((state)=>{return state.homeReducer})
  const location = useLocation()
  const dispatch = useDispatch()
   useEffect(()=>{
      if(location.pathname === "/"){
        dispatch(resetFilter())
      }
   },[location.pathname])
  return (
    <>
      <FilterComponents />
      <CardComponent />
    </>
  )
}

export default Home