import { useState, useEffect } from "react";
import fetchDeatil from "../services/fetch-detail";

export default function useTVDetail(id) {
  const [content, setContent] = useState([]);
  useEffect(() => {
    async function getTVDeatail() {
      const result = await fetchDeatil(id, "movie");
      setContent(result);
    }
    getTVDeatail();
  }, [id]);
  return { details: content };
}
