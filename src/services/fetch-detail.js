import * as PATH from "../constants/path";

export default async function fetchDeatil(id, category) {
  let BASE_URL = "";
  if (category === "movie") {
    BASE_URL = PATH.BASE_MOVIE_URL;
  } else if (category === "tv") {
    BASE_URL = PATH.BASE_TV_URL;
  }
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `${BASE_URL}/${id}?api_key=${API_KEY}&language=en-US`;

  const data = await fetch(URL);
  const result = await data.json();
  return result;
}
