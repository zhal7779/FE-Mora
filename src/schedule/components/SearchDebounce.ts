type SearchDebounceFunction = (callback: (...args: any[]) => void) => (...args: any[]) => void;
let timer: number | undefined;

export const SearchDebounce: SearchDebounceFunction = (callback) => {
  console.log(callback);
  return (...args) => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      callback(...args);
      timer = undefined;
    }, 300);
  };
};
