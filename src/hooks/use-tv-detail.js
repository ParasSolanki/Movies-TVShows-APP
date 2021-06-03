import { useState, useEffect } from "react";
import fetchDeatil from "../services/fetch-detail";

export default function useTVDetail(name) {
  const [content, setContent] = useState([]);
  useEffect(() => {
    async function getTVDeatail() {
      const result = await fetchDeatil(name, "tv");
      setContent(result);
    }
    getTVDeatail();
  }, [name]);

  return { details: content };
}
