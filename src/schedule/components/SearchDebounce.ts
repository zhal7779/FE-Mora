type SearchDebounceFunction = (
  callback: (inputValue: string) => void
) => (inputValue: string) => void;
let timer: number | undefined;

export const SearchDebounce: SearchDebounceFunction = (callback) => {
  return (inputValue) => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      callback(inputValue);
      timer = undefined;
    }, 300);
  };
};
