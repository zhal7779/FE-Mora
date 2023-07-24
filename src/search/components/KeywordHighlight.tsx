import styled from 'styled-components';

interface Props {
  content: string;
  keyword: string;
}

// 검색 키워드 하이라이팅 컴포넌트
export const KeywordHighlight = ({ content, keyword }: Props) => {
  const regex = new RegExp(`(${keyword})`, 'gi');
  const parts = content.split(regex);

  return (
    <span>
      {parts.map((part: string, index: number) =>
        part.toLowerCase() === keyword.toLowerCase() ? (
          <Highlight key={index}>{part}</Highlight>
        ) : (
          part
        )
      )}
    </span>
  );
};

const Highlight = styled.span`
  background: #fff5ac;
`;
