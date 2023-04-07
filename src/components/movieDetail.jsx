import React from "react";
import { useLocation } from "react-router-dom";
import MovieForm from "./movieForm";

const MovieDetails = () => {
  let location = useLocation();
  return (
    <MovieForm data={location.state.data} />
    // <main className="container">
    //   <h3>Movie Detail {param.id} </h3>
    //   <button onClick={() => navigate("/")} className="btn btn-primary btn-sm">
    //     Save
    //   </button>
    // </main>
  );
};

export default MovieDetails;
