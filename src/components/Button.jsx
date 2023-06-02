import styled from 'styled-components';

const Button = ({ value, color }) => {
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
  // 이렇게 props 적용해서 쓰기
  // <Button value='버튼 안 내용' color='lightPurple' />
  // <Button value='팀버튼 입니다' color='darkPurple' />
  // <Button value='벤자민 버튼 입니다' color='white' />

  return (
    <div>
      <ButtonComponent color={color}>{value}</ButtonComponent>
    </div>
  );
};

export default Button;

const BaseButton = styled.button`
  display: inline-block;
  width: auto;
  height: 3.8rem;
  padding: 9px 21px 9px 21px;
  border-radius: 4px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.2rem;
  text-align: center;
  color: ${({ color }) => (color === 'white' ? '#242424' : '#ffffff')};

  background: ${({ color }) =>
    color === 'darkPurple' ? '#7353ea' : color === 'lightPurple' ? '#d6c9ff' : '#ffffff'};

  &:hover {
    background: ${({ color }) =>
      color === 'darkPurple' ? '#4222bc' : color === 'lightPurple' ? '#bda8ff' : '#eaeaea'};
  }

  &:active {
    background: ${({ color }) =>
      color === 'darkPurple' ? '#3c21a0' : color === 'lightPurple' ? '#aa8fff' : '#d0cece'};
  }
`;

const DarkPurpleButton = styled(BaseButton)``;
const LightPurpleButton = styled(BaseButton)``;
const WhiteButton = styled(BaseButton)`
  border: 1px solid #424242;
  padding: 8px 21px 9px 21px;
`;
