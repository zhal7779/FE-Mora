import Footer from '../components/Footer';
import Header from '../components/Header';
import styled from 'styled-components';
import SearchResultBar from '../search/components/SearchResultBar';
import { Wrapper } from '../search/styledComponents/pageCommonStyle';
import RankingContent from '../search/components/RankingContent';

const SearchPage = () => {
  return (
    <>
      <div style={{ position: 'fixed', top: '0' }}>
        <Header />
        <SearchResultBar />
      </div>
      <Wrapper style={{ marginTop: '26rem' }}>
        <RankingContent />
      </Wrapper>
      <Footer />
    </>
  );
};
export default SearchPage;
// const Wrapper = styled.div`
//   width: 100%;
//   height: 100vh;
//   background: #f0f1f3;
// `;
