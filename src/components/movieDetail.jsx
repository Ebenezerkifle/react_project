import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const param = useParams();
  let navigate = useNavigate();
  return (
    <main className="container">
      <h3>Movie Detail {param.id} </h3>
      <button onClick={() => navigate("/")} className="btn btn-primary btn-sm">
        Save
      </button>
    </main>
  );
};

export default MovieDetails;
