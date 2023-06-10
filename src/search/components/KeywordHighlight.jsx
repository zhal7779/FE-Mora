import styled from 'styled-components';

//검색 키워드 하이라이팅 컴포넌트
export const KeywordHighlight = ({ content, keyword }) => {
  return content.includes(keyword) ? (
    <span>
      {content.split(keyword)[0]}
      <Highlight>{keyword}</Highlight>
      {content.split(keyword)[1]}
    </span>
  ) : (
    <span>{content}</span>
  );
};

const Highlight = styled.span`
  background: #fff5ac;
`;
