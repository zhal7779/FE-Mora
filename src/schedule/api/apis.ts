//캘린더 년, 월 조회 => 'ym'
//캘린더 년, 월, 일 조회 => 'ymd'
interface DateType {
  type: string;
  date: string;
}
export const fetchSchedule = async ({ type, date }: DateType) => {
  const response = await fetch(`${process.env.REACT_APP_URL}/api/plans/${type}/${date}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
  });
  const data = await response.json();
  return data;
};
//공지 조회
export const fetchNotice = async (page: number, keyword: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_URL}/api/notices?page=${page}&size=8&keyword=${keyword}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
      },
    }
  );
  const data = await response.json();
  return data;
};
