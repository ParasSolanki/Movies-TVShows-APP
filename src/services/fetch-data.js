export async function fetchData(urls) {
  const allContent = await Promise.all(
    urls.map(async (item) => {
      const data = await fetch(item.url);
      const result = await data.json();
      return { ...result, category: item.category };
    })
  );

  return allContent;
}
