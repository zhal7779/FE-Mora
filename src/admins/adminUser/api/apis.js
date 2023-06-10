const getUser = async () => {
  const { data } = await fetch();
  return data;
};

const response = await fetch('http://15.164.221.244:5000/api/Notification', {
  method: 'POST',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFkZTM1NDU4LTliYjUtNGZmMy1hY2MxLTRlYWE1ZGU1NGFhMCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NjE0NzQ1OH0.HwpPwWdFWofp1SZGnrEB_HSgJ3yTQE3mIsO15INQ0Og',
    'Content-type': 'application/json',
  },
  body: JSON.stringify({
    title: '테스트 공지 지성',
    content: '테스트 공지 내용 지성',
  }),
});
