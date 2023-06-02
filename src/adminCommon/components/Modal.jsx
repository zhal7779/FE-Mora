import { useRef, useState } from 'react';
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

    width: 45rem;
    padding: 4rem 5rem;
    border-radius: 1rem;

    background-color: #ffffff;

    z-index: 3;
  }
  & .modal-title {
    display: block;
    font-size: 2rem;
    font-weight: bold;

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
    margin-bottom: 2.2rem;

    background-color: #fefefe;
    color: #424242;

    font-size: 1.4rem;

    &:focus {
      outline: none;
    }
  }
  & .modal-content:last-child {
    margin-bottom: 3rem;
  }
  & .modal-button-block {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 1.5rem;
    padding-top: 2rem;
  }
`;

// 이건 안 됨.
// & .modal-button-update,
// & .modal-button-submit {
//   padding: 1rem 2rem 0.8rem 2rem;
//   border: 1px solid #d9d9d9;
//   border-radius: 4px;

//   background-color: ${(props) => (props.$purple ? '#7353ea' : 'white')};
//   color: ${(props) => (props.$purple ? '#fff' : '#616161')};

//   font-size: 1.5rem;
//   font-weight: bold;

//   cursor: pointer;
// }
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
`;
const ModalHeaderButton = styled.button`
  padding: 0.6rem 1rem 0.4rem 1rem;
  border: none;
  border-radius: 4px;

  background-color: #7353ea;
  color: #fff;

  font-size: 1.2rem;
  font-weight: bold;

  cursor: pointer;
`;
const ModalButton = styled.button`
  padding: 1rem 2rem 0.8rem 2rem;
  border: ${(props) => (props.$purple ? 'none' : '1px solid #d9d9d9')};
  border-radius: 4px;

  background-color: ${(props) => (props.$purple ? '#7353ea' : 'white')};
  color: ${(props) => (props.$purple ? '#fff' : '#616161')};

  font-size: 1.5rem;
  font-weight: bold;

  cursor: pointer;
`;

const Modal = ({ modal, toggleModal }) => {
  const info = [
    {
      type: 'name',
      subTitle: '이름',
      contentValue: '임지성',
    },
    {
      type: 'email',
      subTitle: '이메일',
      contentValue: 'jisung9105@gmail.com',
    },
    {
      type: 'password',
      subTitle: '비밀번호',
      contentValue: 'dkssudgktpdy11334^^&&',
    },
    {
      type: 'createdDate',
      subTitle: '가입 날짜',
      contentValue: '2023.06.02',
    },
  ];
  const [updatable, setUpdatable] = useState(false);
  const [contents, setContents] = useState(info);
  const firstInput = useRef(null);

  const handleUpdatable = () => {
    setUpdatable(true);
    if (!updatable) firstInput.current.focus();
  };

  const handleChangeContents = (e) => {
    const idx = e.target.alt;
    const newContents = [...contents];
    newContents[idx].contentValue = e.target.value;
    setContents(newContents);
  };

  return (
    <>
      {modal && (
        <ModalBlock>
          <div className='modal-overlay' onClick={toggleModal}></div>
          <div className='modal-content-block'>
            <ModalHeader>
              <h3 className='modal-title'>사용자 정보</h3>
              <ModalHeaderButton
                className='modal-button-update'
                onClick={handleUpdatable}
                $purple
                $header
              >
                수정하기
              </ModalHeaderButton>
            </ModalHeader>
            <div>
              {contents.map((content, idx) => {
                if (content.type !== 'createdDate')
                  return (
                    <div key={content.type + idx}>
                      <p className='modal-sub-title'>{content.subTitle}</p>
                      <input
                        type='text'
                        value={content.contentValue}
                        className='modal-content'
                        onChange={handleChangeContents}
                        readOnly={!updatable}
                        alt={idx}
                        ref={idx === 0 ? firstInput : null}
                      />
                    </div>
                  );
                else
                  return (
                    <div key={content.type + idx}>
                      <p className='modal-sub-title'>가입 날짜</p>
                      <p className='modal-content'>{content.contentValue}</p>
                    </div>
                  );
              })}
            </div>
            <div className='modal-button-block'>
              <ModalButton className='modal-button-submit' $purple>
                수정
              </ModalButton>
              <ModalButton
                className='modal-button-ok'
                onClick={() => {
                  setUpdatable(false);
                  toggleModal();
                }}
              >
                확인
              </ModalButton>
            </div>
          </div>
        </ModalBlock>
      )}
    </>
  );
};

export default Modal;
