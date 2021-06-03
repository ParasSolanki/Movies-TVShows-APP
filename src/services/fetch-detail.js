export default async function fetchDeatil(name, category) {
  let BASE_URL = "";
  if (category === "movie") {
    BASE_URL = "https://api.themoviedb.org/3/search/movie";
  } else if (category === "tv") {
    BASE_URL = "https://api.themoviedb.org/3/search/tv";
  }
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `${BASE_URL}/?api_key=${API_KEY}&query=${name}`;

  const data = await fetch(URL);
  const result = await data.json();
  return result;
}
