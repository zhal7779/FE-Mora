import { PageNationBlock, PageNationBlockDiv } from '../styledComponents/tableComponent';

// 나중에 util 함수로 빼도 될 듯(게시글 전체 렝스, 페이지당 보여줄 게시물 개수를 인자로 받아서 몇 페이지가 나올지 배열에 넣어서 반환하는 함수)
const totalPages = [];
const onePageCount = 12;
let count = 1;
// let totalUser = tableBodyData.length;
let totalUser = 14;

while (totalUser > 0) {
  totalUser = ~~(totalUser / onePageCount);
  totalPages.push(count++);
}

const PageNation = () => {
  return (
    <PageNationBlock className='page-nation-block'>
      {totalPages.map((value) => {
        return (
          <PageNationBlockDiv className='page' key={value}>
            <p>{value}</p>
          </PageNationBlockDiv>
        );
      })}
    </PageNationBlock>
  );
};

export default PageNation;
