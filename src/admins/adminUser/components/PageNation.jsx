import { useState } from 'react';
import { PageNationBlock } from '../styledComponents/tableComponent';
import { getPageNumberComponents, getNumberOfPage } from '../../adminCommon/utils/pageNation';

const PageNation = ({ totalDataNumber, numberByPage }) => {
  const [nowPageNumber, setNowPageNumber] = useState(1);

  const numberOfPage = getNumberOfPage(totalDataNumber, numberByPage);
  const pageNumberComponents = getPageNumberComponents(
    nowPageNumber,
    numberOfPage,
    setNowPageNumber
  );

  return <PageNationBlock className='page-nation-block'>{pageNumberComponents}</PageNationBlock>;
};

export default PageNation;
