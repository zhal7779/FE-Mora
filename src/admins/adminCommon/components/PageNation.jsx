import { PageNationBlock } from '../styledComponents/TableComponent';
import { getPageNumberComponents, getNumberOfPage } from '../utils/pageNation';

const PageNation = ({ totalDataNumber, numberByPage, nowPage, setNowPage }) => {
  const numberOfPage = getNumberOfPage(totalDataNumber, numberByPage);
  const pageNumberComponents = getPageNumberComponents(nowPage, numberOfPage, setNowPage);

  return <PageNationBlock className='page-nation-block'>{pageNumberComponents}</PageNationBlock>;
};

export default PageNation;
