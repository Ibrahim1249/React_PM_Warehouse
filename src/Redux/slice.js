import { createSlice } from "@reduxjs/toolkit";
import {data} from "../../data.js"


const homeSlice = createSlice({
  initialState: {
    originalData: [...data],
    filteredData: [...data],
    likedData: [],
    filterCriteria: {
      city: "",
      cluster: "",
      space: ""
    }
  },
    name:"homeSlice",
    reducers:{
   
       handleLikedData: (state, action) => {
        const warehouse = action.payload;
        const index = state.likedData.findIndex(item => item.id === warehouse.id);
        if (index > -1) {
          state.likedData.splice(index, 1);
        } else {
          state.likedData.push(warehouse);
        }
      },
      setFilterCriteria :(state,action)=>{
         state.filterCriteria = {...state.filterCriteria , ...action.payload}
      },
      setFilterData : (state)=>{
         state.filteredData = state.originalData.filter((warehouse)=>{
            return (
              (state.filterCriteria.city === "" || warehouse.city === state.filterCriteria.city) &&
              (state.filterCriteria.cluster === "" || warehouse.cluster === state.filterCriteria.cluster) &&
              (state.filterCriteria.space === "" || warehouse.space_available === parseInt(state.filterCriteria.space))
            );
         })
      },
      resetFilter: (state) => {
        state.filteredData = [...state.originalData];
        state.filterCriteria = { city: "", cluster: "", space: "" };
      }
    }
})

export const homeReducer = homeSlice.reducer;
export const { handleLikedData , setFilterCriteria ,setFilterData , resetFilter} = homeSlice.actions