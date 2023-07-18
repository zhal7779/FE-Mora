import Input from '../../components/Input';
import { communityProps } from '../types/types';

const SearchBar = ({
  searchTerm,
  setSearchTerm
}: Pick<communityProps, 'searchTerm' | 'setSearchTerm'>) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return <Input width="100%" onChange={handleChange} value={searchTerm} />;
};

export default SearchBar;
