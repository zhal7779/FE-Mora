import { SearchBarBlock, SearchBarInput } from '../styledComponents/SearchBarStyle';
import { fetchReadNotificationInfo } from '../apis/postApi';

const SearchBar = ({ placeholder, setSearchResult, keyword, setKeyword }) => {
  const handleKeyDown = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchReadNotificationInfo(0, 12, keyword);
    setSearchResult(() => [...data.objArr]);
  };

  return (
    <SearchBarBlock onSubmit={handleSubmit}>
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'>
        <path
          fill='#94A3B8'
          d='M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 12.606 4.192l5.101 5.1a1 1 0 0 1-1.414 1.415l-5.1-5.1A7 7 0 0 1 3 10Z'
          clipRule='evenodd'
        />
      </svg>
      <SearchBarInput
        type='text'
        placeholder={placeholder}
        value={keyword}
        onChange={handleKeyDown}
      />
    </SearchBarBlock>
  );
};

export default SearchBar;
