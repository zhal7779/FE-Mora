import styled, { keyframes, css } from 'styled-components';

const StyledLittleText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 350;
  font-size: 1.7rem;
  line-height: 1.8rem;
  margin: 1.5rem 0;
  ${({ wiggle }) =>
    wiggle &&
    css`
      animation: ${wiggleAnimation} 2s ease-in-out;
    `};
  &:hover {
    cursor: pointer;
  }
`;

const wiggleAnimation = keyframes`
  0%,
  7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-10deg);
  }
  20% {
    transform: rotateZ(5deg);
  }
  25% {
    transform: rotateZ(-6deg);
  }
  30% {
    transform: rotateZ(3deg);
  }
  35% {
    transform: rotateZ(-2deg);
  }
  40%,
  100% {
    transform: rotateZ(0);
  }
`;

const LittleText = ({ text, onClick, wiggle }) => {
  return (
    <StyledLittleText onClick={onClick} wiggle={wiggle}>
      {text}
    </StyledLittleText>
  );
};

export default LittleText;
