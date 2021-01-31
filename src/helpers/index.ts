export const convertSecondsToHHMMSS = (SECONDS: number) => {
  return new Date(SECONDS * 1000).toISOString().substr(11, 8);
};
