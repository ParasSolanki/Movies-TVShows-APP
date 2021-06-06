import { useState, useEffect } from "react";
import fetchDeatil from "../services/fetch-detail";

export default function useMovieDetail(id) {
  const [content, setContent] = useState([]);
  useEffect(() => {
    async function getMovieDetail() {
      const result = await fetchDeatil(id, "movie");
      setContent(result);
    }
    getMovieDetail();
  }, [id]);
  return { details: content };
}
