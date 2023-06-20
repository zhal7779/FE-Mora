export const SearchDebounce = (callback) => {
  let timer;
  return (...value) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...value), 300);
  };
};
