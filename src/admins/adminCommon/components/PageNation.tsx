import { PageNationBlock, PageNationBlockBtn } from '../styledComponents/TableComponent';

interface PageNationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (num: number) => void;
}

const PageNation = ({ totalPages, currentPage, setCurrentPage }: PageNationProps) => {
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
