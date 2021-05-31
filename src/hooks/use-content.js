import { useState, useEffect } from "react";
import { fetchData } from "../services/fetch-data";

export default function useContent(urls, target) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function getURLsData() {
      const results = await fetchData(urls);
      setContent(results);
    }

    getURLsData();
  }, [urls]);

  return { [target]: content };
}
