export const getCurrentTime = (timezone = "Europe/Bucharest") => {
  const currentTime = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());

  return currentTime;
};
