import Input from '../components/Input';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBar = ({ setSearchInput }) => {
  // 사용자가 게시글을 검색하는 로직 작성
  const [searchKeyword, setSearchKeyword] = useState('');

  const getValue = e => {
    setSearchInput(e.target.value);
  };

  return <Input width="100%" onChange={getValue} value={searchKeyword} />;
};

export default SearchBar;
