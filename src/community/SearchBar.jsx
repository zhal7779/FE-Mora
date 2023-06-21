import Input from '../components/Input';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  return <Input width="100%" onChange={handleChange} value={searchTerm} />;
};

export default SearchBar;
