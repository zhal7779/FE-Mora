import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as LeftIcon } from '../../assets/icons/fi_chevron-left.svg';
import { ReactComponent as RightIcon } from '../../assets/icons/fi_chevron-right.svg';

const Pagination = ({ pages, currentPage, clickPage }) => {
  const [pageNumber, setPageNumber] = useState(currentPage + 1);

  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber + 1);
    clickPage(newPageNumber);
  };
  //이전페이지
  const handlePrevButton = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      clickPage(pageNumber - 2);
    }
  };
  //다음페이지
  const handleNextButton = () => {
    if (pageNumber < pages) {
      setPageNumber(pageNumber + 1);
      clickPage(pageNumber);
    }
  };
  return (
    <Container>
      <button className='prev_button' onClick={handlePrevButton}>
        <LeftIcon stroke='#ffffff' />
      </button>
      {Array.from({ length: pages }, (_, index) => (
        <PageNumber
          key={index}
          onClick={() => handlePageChange(index)}
          isActive={pageNumber === index + 1}
        >
          {index + 1}
        </PageNumber>
      ))}
      <button className='next_button' onClick={handleNextButton}>
        <RightIcon stroke='#ffffff' />
      </button>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  margin-top: 5rem;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.1rem;
    height: 2.1rem;
    margin: 0 1rem;
    background: #9169ff;
    border: 1px solid#9169ff;
    border-radius: 50%;
  }
`;
const PageNumber = styled.p`
  cursor: pointer;
  color: #616161;

  padding: 0 0.5rem;
  ${({ isActive }) =>
    isActive &&
    `
    font-weight: 600;
    
  `}
`;
