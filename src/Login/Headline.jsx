import styled from 'styled-components';

const StyledHeadline = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  line-height: 3rem;
  font-family: 'Noto Sans KR';
  margin-bottom: 4rem;
`;

const Headline = ({ title }) => {
  return <StyledHeadline>{title}</StyledHeadline>;
};

export default Headline;
