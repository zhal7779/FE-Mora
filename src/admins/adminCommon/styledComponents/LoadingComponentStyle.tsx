import styled from 'styled-components';

interface EnrollButtonProps {
  $purple?: boolean;
}

export const EnrollButton = styled.button<EnrollButtonProps>`
  padding: 0.7rem 1.5rem;
  border: ${(props) => (props.$purple ? 'none' : '1px solid #d9d9d9')};
  border-radius: 4px;

  background-color: ${(props) => (props.$purple ? '#7353ea' : 'white')};
  color: ${(props) => (props.$purple ? '#fff' : '#616161')};

  font-size: 1.5rem;
  font-weight: bold;
`;
