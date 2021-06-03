export default async function fetchPlayerSrc(id, category) {
  let BASE_PATH = "";
  if (category === "movies") {
    BASE_PATH = "https:api.themoviedb.org/3/movie/";
  } else if (category === "tv") {
    BASE_PATH = "https:api.themoviedb.org/3/tv/";
  }
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `${BASE_PATH}/${id}/videos?api_key=${API_KEY}&language=en-US`;
  const content = await fetch(URL);
  const result = await content.json();

  return result;
}
