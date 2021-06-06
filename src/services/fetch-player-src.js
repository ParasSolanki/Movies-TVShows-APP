import * as PATH from "../constants/path";

export default async function fetchPlayerSrc(id, category) {
  let BASE_PATH = "";
  if (category === "movies") {
    BASE_PATH = PATH.BASE_MOVIE_URL;
  } else if (category === "tv") {
    BASE_PATH = PATH.BASE_TV_URL;
  }
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `${BASE_PATH}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,content_ratings`;
  const content = await fetch(URL);
  const result = await content.json();

  return result;
}
