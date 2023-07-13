import styled from 'styled-components';

interface MyPageEditSelectProps {
  title: string;
  options: { value: string; label: string }[];
  name: string;
  onChange: () => void;
  value: string;
  disabled?: boolean;
}

const MyPageEditSelect = ({
  title,
  options,
  name,
  onChange,
  value,
  disabled,
}: MyPageEditSelectProps) => {
  return (
    <MyPageEditSelectContainer>
      <MyPageEditSelectText>{title}</MyPageEditSelectText>
      <SelectContainer>
        <Select name={name} onChange={onChange} value={value} disabled={disabled}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </SelectContainer>
    </MyPageEditSelectContainer>
  );
};

export default MyPageEditSelect;

const MyPageEditSelectContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const MyPageEditSelectText = styled.h3`
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 2rem;
  margin: 0;
  margin-right: 1.5rem;
  margin-bottom: 0.5rem;
`;

const SelectContainer = styled.div`
  width: 100%;
`;

const Select = styled.select`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  background: #ffffff;
  border: 1px solid #d8e0e9;
  border-radius: 8px;
  padding-left: 1rem;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
`;
