export const formatDate = (date) => {
  if (date === undefined) return;
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formatedDate = new Date(date).toLocaleDateString("en-US", options);
  return formatedDate;
};

export const truncate = (overview) => {
  const CHARACTERS_LIMIT = 210;
  return overview.length > CHARACTERS_LIMIT
    ? overview.substring(0, CHARACTERS_LIMIT) + "..."
    : overview;
};

export const getTime = (time) => {
  if (time === undefined) return;
  if (isNaN(time)) return;

  const hours = time / 60;
  const rHours = Math.floor(hours);
  const minutes = (hours - rHours) * 60;
  const rMinutes = Math.floor(minutes);

  const hourTime = rHours > 1 ? `${rHours} Hours` : `${rHours} Hour`;
  const minuteTime =
    rMinutes > 1 ? `${rMinutes} Minutes` : `${rMinutes} Minute`;

  return `${hourTime} & ${minuteTime}`;
};
