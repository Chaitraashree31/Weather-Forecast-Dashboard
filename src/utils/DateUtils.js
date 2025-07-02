export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

export const getDayName = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleDateString("en-US", {
    weekday: "short",
  });
};
