export default function playerSrcFilter({ results } = []) {
  const item = results?.filter((item) => item.type === "Trailer");
  return item;
}
