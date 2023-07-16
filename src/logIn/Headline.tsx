import styled from 'styled-components';

interface HeadlineProps {
  title: string;
}

const StyledHeadline = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  line-height: 3rem;
  margin-bottom: 3rem;
`;

const Headline = ({ title }: HeadlineProps) => {
  return <StyledHeadline>{title}</StyledHeadline>;
};

export default Headline;
