import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

function FilteredResultsPage() {
  const { filteredData } = useSelector((state) => {
    return state.homeReducer;
  });

  return (
    <>
      {filteredData.length > 0 ? (
        <div className="filter-card-container">
          {filteredData.map((warehouse, index) => (
            <Card warehouse={warehouse} key={index} />
          ))}
        </div>
      ) : (
        <div className="error-card">
          <h2>No Filter Data found. Kindly filter relevant data...</h2>
        </div>
      )}
    </>
  );
}

export default FilteredResultsPage;
