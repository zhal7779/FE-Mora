const tableColumnData = [
  '신고자',
  '피신고자',
  '신고 내용',
  '신고 유형',
  '신고 날짜',
  '상세보기',
  '처리 상태',
  '삭제',
];

// Table generation {
//   id char(36) [primary key]
//   name varchar(10)// NN // 과목명
//   phase integer// NN // 1, 2, 3 다 각각 입력해주기
// }

export default tableColumnData;

// 얘도 common으로 빼놓을 수 있을 듯.
// 각각 테이블 앞에 이름 붙여놓고 export 하고 import 해서 쓰면 되니까
