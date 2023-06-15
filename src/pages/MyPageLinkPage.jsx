import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import styled from 'styled-components';
import LoginContainer from '../logIn/LogInContainer';
import MyPageEditInput from '../myPage/styledComponents/MyPageEditInput';
import Button from '../components/Button';

const URL = process.env.REACT_APP_URL;

const MyPageEdit = () => {
  const [url, setUrl] = useState('');
  const [urlName, setUrlName] = useState('');
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // useMutation POST 요청 선언
  const createLinkMutation = useMutation((linkData) =>
    fetch(`${URL}/api/links`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
      },
      body: JSON.stringify(linkData),
    })
  );

  const handleLinkUpdate = () => {
    const linkData = {
      url: url,
      name: urlName,
    };

    createLinkMutation.mutate(linkData, {
      onSuccess: () => {
        queryClient.invalidateQueries('myLinkList');
      },
      onError: (error) => {
        console.error('링크 수정 오류:', error);
      },
    });
  };

  return (
    <LoginContainer>
      <MyPageEditInput
        title='링크 연결'
        type='text'
        placeholder='URL을 입력해주세요'
        name='url'
        onChange={(e) => {
          e.preventDefault();
          setUrl(e.target.value);
        }}
        value={url}
      />

      <MyPageEditInput
        title='링크 이름'
        type='text'
        placeholder='링크에 표시할 이름을 입력해주세요'
        name='urlName'
        onChange={(e) => {
          e.preventDefault();
          setUrlName(e.target.value);
        }}
        value={urlName}
      />

      <ButtonContainer>
        <Button
          color='darkPurple'
          value='수정완료'
          onClick={() => {
            handleLinkUpdate();
            navigate('/mypage');
          }}
        />
        <Button
          color='white'
          value='수정취소'
          onClick={() => {
            navigate('/mypage');
          }}
        />
      </ButtonContainer>
    </LoginContainer>
  );
};

export default MyPageEdit;

const ButtonContainer = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;
