import styled from 'styled-components';

interface SignInButtonProps {
  $purple?: boolean;
}

export const SignInOverlay = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: #000;

  z-index: 1;
  opacity: 0.2;
`;
export const SignInContentBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 45rem;
  padding: 4rem 5rem;
  border-radius: 1rem;

  background-color: #ffffff;

  box-shadow: rgba(99, 99, 99, 0.5) 0px 8px 16px 0px;
  z-index: 3;
`;
export const SignInTitle = styled.h3`
  display: block;
  font-size: 2rem;
  font-weight: bold;

  color: #424242;
`;
export const SignInSubTitle = styled.p`
  margin-bottom: 0.8rem;

  color: #616161;

  font-size: 1.3rem;
  font-weight: bold;
`;
export const SignInContentInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border: 1px solid #d9d9d9;
  border-radius: 0.4rem;
  margin-bottom: 2.2rem;

  background-color: #fefefe;
  color: #424242;

  font-size: 1.4rem;

  &:focus {
    outline: none;
  }
`;
export const SignInContentP = styled.p`
  width: 100%;
  padding: 1rem 1.5rem;
  border: 1px solid #d9d9d9;
  border-radius: 0.4rem;
  margin-bottom: 3rem;

  background-color: #fefefe;
  color: #424242;

  font-size: 1.4rem;
`;
export const SignInButtonBlock = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1.5rem;
  padding-top: 2rem;
`;
export const SignInHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
`;
export const SignInHeaderButton = styled.button`
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 4px;

  background-color: #5c469c;
  color: #fff;

  font-size: 1.2rem;
  font-weight: bold;
`;
export const SignInButton = styled.button<SignInButtonProps>`
  padding: 1rem 2rem;
  border: ${(props) => (props.$purple ? 'none' : '1px solid #d9d9d9')};
  border-radius: 4px;

  background-color: ${(props) => (props.$purple ? '#7353ea' : 'white')};
  color: ${(props) => (props.$purple ? '#fff' : '#616161')};

  font-size: 1.5rem;
  font-weight: bold;
`;
