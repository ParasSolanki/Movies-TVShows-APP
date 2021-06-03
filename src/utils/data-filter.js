export default function dataFilter({ details } = [], name) {
  console.log(details);
  return {
    data:
      details !== undefined
        ? details.results?.filter(
            (item) =>
              item.original_title === name.replace(/\+/g, " ") ||
              item.original_name === name.replace(/\+/g, " ") ||
              item.name === name.replace(/\+/g, " ")
          )
        : null,
  };
}
