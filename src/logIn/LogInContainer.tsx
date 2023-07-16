import styled from 'styled-components';

interface LoginContainerProps {
  children: React.ReactNode;
}

const LoginContainer = ({ children }: LoginContainerProps) => {
  return <StyledLoginContainer>{children}</StyledLoginContainer>;
};

export default LoginContainer;

const StyledLoginContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 0 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
  top: 60px;
  background: #ffffff;
  border-width: 0px 1px;
  border-style: solid;
  border-color: #cbd5e1;

  @media (max-width: 768px) {
    border: none;
  }
`;
