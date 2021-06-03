import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetail from "../hooks/use-movie-detail";
import dataFilter from "../utils/data-filter";
import ItemContainer from "../containers/item";

export default function SingleMovie() {
  const { id } = useParams();
  const { details } = useMovieDetail(id);
  const data = dataFilter({ details });

  return <ItemContainer data={data} />;
}
