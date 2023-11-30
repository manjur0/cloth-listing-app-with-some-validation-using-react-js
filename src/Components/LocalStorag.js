export const localStorag = () => {
  const getData = localStorage.getItem("cloth");
  if (getData) {
    return JSON.parse(getData);
  }
  return [];
};
