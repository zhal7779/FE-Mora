import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginContainer from '../logIn/LogInContainer';
import MyPageEditInput from '../myPage/styledComponents/MyPageEditInput';
import MyPageEditSelect from '../myPage/styledComponents/MyPageEditSelect';
import Button from '../components/Button';

const MyPageEdit = () => {
  const [companyName, setCompanyName] = useState('');
  const [startYear, setStartYear] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [endYear, setEndYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [position, setPosition] = useState('');
  const [intro, setIntro] = useState('');
  const [isCurrentlyEmployed, setIsCurrentlyEmployed] = useState(false);
  const navigate = useNavigate();

  const StartYearOptions = [
    { value: '년도를 선택해주세요', label: '년도를 선택해주세요' },
    { value: '2022년', label: '2022년' },
    { value: '2023년', label: '2023년' },
    { value: '2024년', label: '2024년' },
  ];
  const StartMonthOptions = [
    { value: '월을 선택해주세요', label: '월을 선택해주세요' },
    { value: '1월', label: '1월' },
    { value: '2월', label: '2월' },
    { value: '3월', label: '3월' },
  ];
  const EndYearOptions = [
    { value: '년도를 선택해주세요', label: '년도를 선택해주세요' },
    { value: '2024년', label: '2024년' },
    { value: '2025년', label: '2025년' },
    { value: '2026년', label: '2026년' },
  ];
  const EndMonthOptions = [
    { value: '월을 선택해주세요', label: '월을 선택해주세요' },
    { value: '5월', label: '5월' },
    { value: '6월', label: '6월' },
    { value: '7월', label: '7월' },
  ];

  const handleStartYearChange = (e) => {
    e.preventDefault();
    const selectedYear = e.target.value;
    setStartYear(selectedYear);
  };

  const handleStartMonthChange = (e) => {
    e.preventDefault();
    const selectedMonth = e.target.value;
    setStartMonth(selectedMonth);
  };

  const handleEndYearChange = (e) => {
    e.preventDefault();
    const selectedYear = e.target.value;
    setEndYear(selectedYear);
  };

  const handleEndMonthChange = (e) => {
    e.preventDefault();
    const selectedMonth = e.target.value;
    setEndMonth(selectedMonth);
  };

  const handleCurrentlyEmployedChange = (e) => {
    setIsCurrentlyEmployed(e.target.checked);
    if (e.target.checked) {
      setEndYear('');
      setEndMonth('');
    }
  };

  return (
    <LoginContainer>
      <MyPageEditInput
        title='회사'
        type='text'
        placeholder='회사명을 입력해주세요'
        name='companyName'
        onChange={(e) => {
          e.preventDefault();
          setCompanyName(e.target.value);
        }}
        value={companyName}
      />

      <MyPageEditInput
        title='직함'
        type='text'
        placeholder='직함을 입력해주세요'
        name='position'
        onChange={(e) => {
          e.preventDefault();
          setPosition(e.target.value);
        }}
        value={position}
      />

      <StartEndDateContainer>
        <div className='startDateContainer'>
          <MyPageEditSelect
            title='시작년도'
            options={StartYearOptions}
            name='시작년도'
            onChange={handleStartYearChange}
            value={startYear}
          />
          <MyPageEditSelect
            title='시작월'
            options={StartMonthOptions}
            name='시작월'
            onChange={handleStartMonthChange}
            value={startMonth}
          />
        </div>
        <div className='endDateContainer'>
          <MyPageEditSelect
            title='종료년도'
            options={EndYearOptions}
            name='종료년도'
            onChange={handleEndYearChange}
            value={endYear}
            disabled={isCurrentlyEmployed}
          />
          <MyPageEditSelect
            title='종료월'
            options={EndMonthOptions}
            name='종료월'
            onChange={handleEndMonthChange}
            value={endMonth}
            disabled={isCurrentlyEmployed}
          />
        </div>
      </StartEndDateContainer>
      <CheckboxContainer>
        <input
          type='checkbox'
          id='currentlyEmployed'
          checked={isCurrentlyEmployed}
          onChange={handleCurrentlyEmployedChange}
        />
        <label htmlFor='currentlyEmployed'>재직중</label>
      </CheckboxContainer>

      <IntroTextContainter
        onChange={(e) => {
          e.preventDefault();
          setIntro(e.target.value);
        }}
        value={intro}
      >
        <h3>어떤 일을 했나요?</h3>
        <textarea placeholder='담당한 업무, 프로젝트 등을 소개해주세요'></textarea>
      </IntroTextContainter>

      <ButtonContainer>
        <Button
          color='darkPurple'
          value='수정완료'
          onClick={() => {
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

const StartEndDateContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .startDateContainer {
    width: 45%;
  }
  .endDateContainer {
    width: 45%;
  }
`;

const IntroTextContainter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  h3 {
    font-family: 'Noto Sans KR';
    font-weight: 400;
    font-size: 1.7rem;
    line-height: 2rem;
    margin: 0;
    margin-right: 1.5rem;
    margin-bottom: 0.5rem;
  }
  textarea {
    border: 1px solid #d8e0e9;
    border-radius: 8px;
    width: 100%;
    height: 17rem;
    padding: 0.5rem 1rem;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;

    ::placeholder {
      padding-top: 0.3rem;
      font-size: 1.6rem;
      font-weight: 600;
      opacity: 0.35;
    }
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  input[type='checkbox'] {
    appearance: none;
    width: 2rem;
    height: 2rem;
    border: 2px solid #d8e0e9;
    border-radius: 4px;
    margin-right: 0.5rem;
    outline: none;
    cursor: pointer;
    transition: border-color 0.2s ease-in-out;

    &:checked {
      background-color: #5f3dc4;
      border-color: #5f3dc4;
    }
  }

  label {
    font-family: 'Noto Sans KR';
    font-weight: 400;
    font-size: 1.5rem;
  }
`;
