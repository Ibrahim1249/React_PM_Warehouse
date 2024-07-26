import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

function LikedResultsPage() {
  const { likedData } = useSelector((state) => {
    return state.homeReducer;
  });

  return (
    <>
      {likedData.length > 0 ? (
        <div className="liked-card-container">
          {likedData.map((warehouse, index) => (
            <Card warehouse={warehouse} key={index} />
          ))}
        </div>
      ) : (
        <div className="error-card">
          <h2>No Liked Data ....</h2>
        </div>
      )}
    </>
  );
}

export default LikedResultsPage;
