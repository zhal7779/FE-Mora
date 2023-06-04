import styled from 'styled-components';

const OrLine = styled.div`
  border-bottom: 1px solid #bdbdbd;
  width: 35rem;
  margin-top: 3rem;
`;

const OrText = styled.span`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #bdbdbd;
  background-color: white;
  margin-top: -0.7rem;
  padding: 0 1rem 0 1rem;
`;

const OrLineText = ({ text }) => {
  return (
    <>
      <OrLine />
      <OrText>{text}</OrText>
    </>
  );
};

export default OrLineText;
