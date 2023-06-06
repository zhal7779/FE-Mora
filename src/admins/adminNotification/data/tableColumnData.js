const tableColumnData = ['관리자', '제목', '내용', '등록 날짜', '수정', '삭제'];

// id char(36) [primary key]
// admin_id char(36)// NN FK
// title varchar// NN
// content varchar// NN
// created_at timestamp
// updated_at timestamp

export default tableColumnData;

// 얘도 common으로 빼놓을 수 있을 듯.
// 각각 테이블 앞에 이름 붙여놓고 export 하고 import 해서 쓰면 되니까
