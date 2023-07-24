import styled from 'styled-components';

interface OrLineTextProps {
  text: string;
}

const OrLine = styled.div`
  border-bottom: 1px solid #bdbdbd;
  width: 35rem;
  margin-top: 3rem;
`;

const OrText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #bdbdbd;
  background-color: white;
  margin-top: -0.7rem;
  padding: 0 1rem 0 1rem;
`;

const OrLineText = ({ text }: OrLineTextProps) => {
  return (
    <>
      <OrLine />
      <OrText>{text}</OrText>
    </>
  );
};

export default OrLineText;
