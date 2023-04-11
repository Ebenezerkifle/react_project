import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MovieForm from "./movieForm";

const MovieDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  return (
    <MovieForm
      data={params.id === "new" ? {} : location.state.data ?? {}}
      onSave={() => navigate("/")}
    />
  );
};

export default MovieDetails;
