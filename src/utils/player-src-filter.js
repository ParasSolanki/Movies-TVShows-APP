export default function playerSrcFilter(results) {
  if (results === undefined || results.videos === undefined) return [];
  const item = results.videos.results.filter(
    (item) => item.type === "Trailer" || item.type === "Teaser"
  );
  return item;
}
