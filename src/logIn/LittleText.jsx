import styled from 'styled-components';

const StyledLittleText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 350;
  font-size: 1.5rem;
  line-height: 1.8rem;
  margin-top: 5rem;
  &:hover {
    cursor: pointer;
  }
`;

const LittleText = ({ text, onClick }) => {
  return <StyledLittleText onClick={onClick}>{text}</StyledLittleText>;
};

export default LittleText;
