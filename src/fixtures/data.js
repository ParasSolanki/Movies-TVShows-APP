const api_key = process.env.REACT_APP_API_KEY;

export const movieURLs = [
  {
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US`,
    category: "Popular",
  },
  {
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US`,
    category: "Top Rated",
  },
  {
    url: `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}&language=en-US`,
    category: "Trending",
  },
  {
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&with_genres=878`,
    category: "Sci-Fi",
  },
  {
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&with_genres=28`,
    category: "Action",
  },
  {
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&with_genres=27`,
    category: "Horror",
  },
  {
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&with_genres=99`,
    category: "Documentary",
  },
  {
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&with_genres=80`,
    category: "Crime",
  },
  {
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&with_genres=53`,
    category: "Thriller",
  },
  {
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&with_genres=9648`,
    category: "Mystery",
  },
  {
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&with_genres=16`,
    category: "Animation",
  },
];

export const tvShowsURLs = [
  {
    url: `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US`,
    category: "Top Rated",
  },
  {
    url: `https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}&language=en-US`,
    category: "Trending",
  },
  {
    url: `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US`,
    category: "Popular",
  },
  {
    url: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&with_genres=878`,
    category: "Sci-Fi & Fantasy",
  },
  {
    url: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&with_genres=10759`,
    category: "Action & Adventure",
  },
  {
    url: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&with_genres=99`,
    category: "Documentary",
  },
  {
    url: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&with_genres=16`,
    category: "Animation",
  },
  {
    url: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&with_genres=80`,
    category: "Crime",
  },
  {
    url: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&with_genres=9648`,
    category: "Mystery",
  },
  {
    url: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&with_genres=37`,
    category: "Western",
  },
];
