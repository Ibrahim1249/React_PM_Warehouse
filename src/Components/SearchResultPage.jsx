import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
function SearchResultPage() {
  const { searchData } = useSelector((state) => {
    return state.homeReducer;
  });
  console.log(searchData);
  return (
    <>
        {searchData.length > 0 ? (
          <div className="search-card-container">
            {searchData.map((warehouse, index) => (
              <Card warehouse={warehouse} key={index} />
            ))}
          </div>
        ) : (
          <div className="error-card">
            <h2>No search Data ....</h2>
          </div>
        )}
    </>
  );
}

export default SearchResultPage;
