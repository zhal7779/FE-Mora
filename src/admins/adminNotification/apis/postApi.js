import { useQuery } from 'react-query';

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFkZTM1NDU4LTliYjUtNGZmMy1hY2MxLTRlYWE1ZGU1NGFhMCIsImlhdCI6MTY4NjA2MjgzOH0.5OpGBXlONr1niG7HKTRy8uNAsm6laJwutU5fYFBSeCc`;

const postThing = async (keyArray) => {
  const { data } = useQuery([...keyArray], fetch('http://15.164.221.244:3000/api/v1/notice'), {
    method: 'post',
    body: JSON.stringify({
      title: '테스트 공지',
      content: '테스트 공지 내용',
    }),
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });

  return data;
};

export { postThing };
