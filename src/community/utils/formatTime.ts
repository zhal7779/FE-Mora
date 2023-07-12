const formatTime = time => {
  const date = new Date(time);
  const now = new Date();

  const diffMilliseconds = now - date;
  const diffSeconds = Math.floor(diffMilliseconds / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSeconds < 60) {
    return '방금 전';
  }
  if (diffMinutes < 60) {
    return `${diffMinutes}분 전`;
  }
  if (diffHours < 60) {
    return `${diffHours}시간 전`;
  }
  if (diffDays < 7) {
    return `${diffDays}일 전`;
  }

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('ko-KR', options);
};

export default formatTime;
