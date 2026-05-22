export const truncateText = (text, maxLength) => {
  if (!text) return "";

  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + "...";
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
