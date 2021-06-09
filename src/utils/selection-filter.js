export default function selectionFilter({ movies, tvShows } = []) {
  return {
    movies: [
      {
        title: "Trending Movies",
        data: movies.filter((item) => item.category === "Trending"),
        category: "movies",
      },
      {
        title: "Top Rated Movies",
        data: movies.filter((item) => item.category === "Top Rated"),
        category: "movies",
      },
      {
        title: "Popular Movies",
        data: movies.filter((item) => item.category === "Popular"),
        category: "movies",
      },
      {
        title: "Sci-Fi",
        data: movies.filter((item) => item.category === "Sci-Fi"),
        category: "movies",
      },
      {
        title: "Action",
        data: movies.filter((item) => item.category === "Action"),
        category: "movies",
      },
      {
        title: "Documentary",
        data: movies.filter((item) => item.category === "Documentary"),
        category: "movies",
      },
      {
        title: "Crime",
        data: movies.filter((item) => item.category === "Crime"),
        category: "movies",
      },
      {
        title: "Thriller",
        data: movies.filter((item) => item.category === "Thriller"),
        category: "movies",
      },
      {
        title: "Mystery",
        data: movies.filter((item) => item.category === "Mystery"),
        category: "movies",
      },
      {
        title: "Animation Movies",
        data: movies.filter((item) => item.category === "Animation"),
        category: "movies",
      },
    ],
    tvShows: [
      {
        title: "Trending TV Shows",
        data: tvShows.filter((item) => item.category === "Trending"),
        category: "tv",
      },
      {
        title: "Top Rated TV Shows",
        data: tvShows.filter((item) => item.category === "Top Rated"),
        category: "tv",
      },
      {
        title: "Popular TV Shows",
        data: tvShows.filter((item) => item.category === "Popular"),
        category: "tv",
      },
      {
        title: "Sci-Fi & Fantasy",
        data: tvShows.filter((item) => item.category === "Sci-Fi & Fantasy"),
        category: "tv",
      },
      {
        title: "Action & Adventure",
        data: tvShows.filter((item) => item.category === "Action & Adventure"),
        category: "tv",
      },
      {
        title: "Documentary",
        data: tvShows.filter((item) => item.category === "Documentary"),
        category: "tv",
      },
      {
        title: "Animation",
        data: tvShows.filter((item) => item.category === "Animation"),
        category: "tv",
      },
      {
        title: "Crime",
        data: tvShows.filter((item) => item.category === "Crime"),
        category: "tv",
      },
      {
        title: "Mystery",
        data: tvShows.filter((item) => item.category === "Mystery"),
        category: "tv",
      },
      {
        title: "Western",
        data: tvShows.filter((item) => item.category === "Western"),
        category: "tv",
      },
    ],
  };
}
