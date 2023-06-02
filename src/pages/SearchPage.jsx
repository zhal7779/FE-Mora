import Footer from '../components/Footer';
import Header from '../components/Header';
import styled from 'styled-components';
import SearchResultBar from '../search/SearchResultBar';

const SearchPage = () => {
  return (
    <Wrapper>
      <SearchContent>
        <Header />
        <SearchResultBar />
      </SearchContent>
      <Footer />
    </Wrapper>
  );
};
export default SearchPage;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #f0f1f3;
`;
const SearchContent = styled.div``;
