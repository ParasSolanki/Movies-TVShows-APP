import useContent from "../hooks/use-content";
import { movieURLs, tvShowsURLs } from "../fixtures/data";
import BrowseContainer from "../containers/Browse";
import selectionFilter from "../utils/selection-filter";

export default function Home() {
  const { tvShows } = useContent(tvShowsURLs, "tvShows");
  const { movies } = useContent(movieURLs, "movies");

  const slides = selectionFilter({ movies, tvShows });

  return <BrowseContainer slides={slides} />;
}
