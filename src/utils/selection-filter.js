export default function selectionFilter({ movies, tvShows } = []) {
  return {
    movies: [
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
        title: "Sci-Fi Movies",
        data: movies.filter((item) => item.category === "Sci-Fi"),
        category: "movies",
      },
      {
        title: "Action Movies",
        data: movies.filter((item) => item.category === "Action"),
        category: "movies",
      },
      {
        title: "Horror Movies",
        data: movies.filter((item) => item.category === "Horror"),
        category: "movies",
      },
    ],
    tvShows: [
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
        title: "Sci-Fi & Fantasy TV Shows",
        data: tvShows.filter((item) => item.category === "Sci-Fi & Fantasy"),
        category: "tv",
      },
      {
        title: "Action & Adventure TV Shows",
        data: tvShows.filter((item) => item.category === "Action & Adventure"),
        category: "tv",
      },
      {
        title: "Documentary TV Shows",
        data: tvShows.filter((item) => item.category === "Documentary"),
        category: "tv",
      },
    ],
  };
}
