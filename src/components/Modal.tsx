import styled from 'styled-components';
import { ReactNode } from 'react';

const Modal = ({ width, children }: { width: string; children: ReactNode }) => {
  return (
    <>
      <ModalContainer style={{ width: width }}>
        <div>{children}</div>
      </ModalContainer>
      <ModalBg />
    </>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 42px 48px;
  background: #ffffff;
  border: 1px solid #616161;
  border-radius: 10px;

  z-index: 300;
`;

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);

  z-index: 299;
`;
