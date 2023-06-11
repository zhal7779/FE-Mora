import { useQueryClient } from 'react-query';
import { PageNationBlock, PageNationBlockBtn } from '../styledComponents/TableComponent';

const PageNation = ({ totalPages, currentPage, setCurrentPage }) => {
  const totalPagesArray = Array(totalPages).fill(true);
  const queryClient = useQueryClient();

  return (
    <PageNationBlock className='page-nation-block'>
      {totalPagesArray.map((falseValue, index) => (
        <PageNationBlockBtn
          className={index === currentPage ? 'now-page page' : 'page'}
          onClick={() => {
            setCurrentPage(index);
            queryClient.invalidateQueries(['admin', 'notification', 'get', currentPage]);
          }}
          key={index}
        >
          <p>{index + 1}</p>
        </PageNationBlockBtn>
      ))}
    </PageNationBlock>
  );
};

export default PageNation;
