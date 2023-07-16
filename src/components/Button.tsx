import styled from 'styled-components';

interface ButtonProps {
  value: string;
  color: 'darkPurple' | 'lightPurple' | 'white';
  onClick?: () => void;
}

const Button = ({ value, color, onClick }: ButtonProps) => {
  let ButtonComponent;

  switch (color) {
    case 'darkPurple':
      ButtonComponent = DarkPurpleButton;
      break;
    case 'lightPurple':
      ButtonComponent = LightPurpleButton;
      break;
    case 'white':
      ButtonComponent = WhiteButton;
      break;
    default:
      ButtonComponent = DarkPurpleButton;
      break;
  }

  return (
    <div>
      <ButtonComponent onClick={onClick} color={color}>
        {value}
      </ButtonComponent>
    </div>
  );
};

export default Button;

const BaseButton = styled.button`
  display: inline-block;
  /* width: 9.8rem; */
  width: auto;
  height: 3.8rem;
  padding: 0.7rem 2rem 0.9rem 2rem;
  border-radius: 0.7rem;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.2rem;
  text-align: center;
  color: ${({ color }) => (color === 'white' ? '#242424' : '#ffffff')};
  box-shadow: rgba(0, 0, 0, 0.2) 1.9px 1.9px 2.6px;
  background: ${({ color }) =>
    color === 'darkPurple' ? '#7353ea' : color === 'lightPurple' ? '#d6c9ff' : '#ffffff'};

  &:hover {
    background: ${({ color }) =>
      color === 'darkPurple' ? '#5e3de4' : color === 'lightPurple' ? '#c5b4fc' : '#f1f1f1'};
    transition: all 0.2s ease-in-out;
  }

  &:not(:hover) {
    background: ${({ color }) =>
      color === 'darkPurple' ? '#7353ea' : color === 'lightPurple' ? '#d6c9ff' : '#ffffff'};
    transition: all 0.2s ease-in-out;
  }

  &:active {
    background: ${({ color }) =>
      color === 'darkPurple' ? '#532eda' : color === 'lightPurple' ? '#b39cfc' : '#eaeaea'};
  }
`;

const DarkPurpleButton = styled(BaseButton)``;
const LightPurpleButton = styled(BaseButton)``;
const WhiteButton = styled(BaseButton)`
  border: 1px solid #b9b9b9;
  padding: 0.6rem 2rem 0.9rem 2rem;
`;
