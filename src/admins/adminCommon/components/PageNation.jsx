import { PageNationBlock, PageNationBlockBtn } from '../styledComponents/TableComponent';

const PageNation = ({ totalPages, currentPage, setCurrentPage }) => {
  const totalPagesArray = Array(totalPages).fill(true);

  return (
    <PageNationBlock className='page-nation-block'>
      {totalPagesArray.map((falseValue, index) => (
        <PageNationBlockBtn
          className={index === currentPage ? 'now-page page' : 'page'}
          onClick={() => setCurrentPage(index)}
          key={index}
        >
          <p>{index + 1}</p>
        </PageNationBlockBtn>
      ))}
    </PageNationBlock>
  );
};

export default PageNation;
