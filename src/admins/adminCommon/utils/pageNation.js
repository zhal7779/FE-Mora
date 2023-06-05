import { PageNationBlockDiv } from '../styledComponents/tableComponent';

/**
 *
 * @param {*} totalNumber 전체 컬럼(유저, 신고, 일정 등)개수
 * @param {*} numberByPage 한 페이지당 보여줄 컬럼 개수
 * @returns 페이지 개수
 */
export const getNumberOfPage = (totalNumber, numberByPage) => {
  let count = 0;

  if (totalNumber % numberByPage === 0) {
    count = totalNumber / numberByPage;
  } else {
    count = totalNumber / numberByPage + 1;
  }
  return count;
};

/**
 *
 * @param {*} nowPageNumber 보여지도록 설정되는 페이지
 * @param {*} numberOfPage 전체 페이지 개수
 * @param {*} setNowPageNumber 각 버튼 컴포넌트 클릭 시 스테이트를 현재 페이지로 바꾸는 함수
 * @returns 현재 페이지에 css가 적용된 전체 페이지 버튼
 */
export const getPageNumberComponents = (nowPageNumber, numberOfPage, setNowPageNumber) => {
  const pageNumberComponents = [];

  for (let index = 1; index <= numberOfPage; index++) {
    pageNumberComponents.push(
      <PageNationBlockDiv
        className={index === nowPageNumber ? 'now-page page' : 'page'}
        onClick={() => setNowPageNumber(index)}
        key={index}
      >
        <p>{index}</p>
      </PageNationBlockDiv>
    );
  }
  return pageNumberComponents;
};
