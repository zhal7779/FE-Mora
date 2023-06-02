import { useState } from 'react';
import styled from 'styled-components';

const ModalBlock = styled.div`
  display: flex;

  & .modal-overlay {
    position: fixed;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: #000;

    z-index: 1;
    opacity: 0.4;
  }
  & .modal-content-block {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 42rem;
    padding: 4rem 5rem;
    border-radius: 1rem;

    background-color: #ffffff;

    z-index: 3;
  }
  & .modal-title {
    display: block;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 5rem;

    color: #424242;
  }

  & .modal-sub-title {
    margin-bottom: 0.8rem;

    color: #616161;

    font-size: 1.3rem;
    font-weight: bold;
  }
  & .modal-content {
    width: 100%;
    padding: 1rem 1.5rem;
    border: 1px solid #d9d9d9;
    border-radius: 0.4rem;
    margin-bottom: 2.8rem;

    background-color: #fefefe;
    color: #424242;

    font-size: 1.4rem;

    &:focus {
      outline: none;
    }
  }
  & .modal-button-block {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 1.5rem;
    padding-top: 2rem;

    & .modal-button-update,
    & .modal-button-ok {
      padding: 1rem 2rem 0.8rem 2rem;
      border: 1px solid #d9d9d9;
      border-radius: 4px;

      background-color: #fff;
      color: #424242;

      font-size: 1.5rem;
      font-weight: bold;

      cursor: pointer;
    }
    & .modal-button-update {
      border: none;

      background-color: #7353ea;
      color: #fff;
    }
  }
`;

const Modal = ({ modal, toggleModal }) => {
  return (
    <>
      {modal && (
        <ModalBlock>
          <div className='modal-overlay' onClick={toggleModal}></div>
          <div className='modal-content-block'>
            <h3 className='modal-title'>임지성</h3>
            <div>
              <p className='modal-sub-title'>이메일</p>
              <input type='text' value='jisung9105@gmail.com' className='modal-content' readOnly />
              <p className='modal-sub-title'>비밀번호</p>
              <input type='text' value='dkssudgktpdy11334^^&&' className='modal-content' readOnly />
              <p className='modal-sub-title'>가입 날짜</p>
              <p className='modal-content'>2023.06.02</p>
            </div>
            <div className='modal-button-block'>
              <button className='modal-button-update' color='#7353ea'>
                수정
              </button>
              <button className='modal-button-ok' onClick={toggleModal}>
                확인
              </button>
            </div>
          </div>
        </ModalBlock>
      )}
    </>
  );
};

export default Modal;
