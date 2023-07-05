import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 10rem;
  width: 67%;
  height: 100%;
  div {
    //토,일 색상 변경
    .fc-day-sat a {
      color: #6d94d6;
    }
    .fc-day-sun a {
      color: #d66d97;
    }
    // 요일 헤더 셀
    .fc .fc-col-header-cell-cushion {
      padding: 0.5rem 0;
      font-weight: 600;
      font-size: 1.2rem;
    }
    //헤더 2023년 6월
    .fc .fc-toolbar-title {
      font-size: 2.2rem;
      font-weight: 600;
      color: var(--main-font-color);
      margin: 0px;
    }
    // 헤더 today, prev,next 버튼색상 변경
    .fc-button-primary {
      background: var(--light-purple);
    }
    .fc-today-button {
      background: var(--dark-purple) !important;
    }

    .fc-button {
      border: none;
      box-shadow: none !important;
      &:hover {
        background: rgb(170, 141, 255, 0.6) !important;
      }
      &:active {
        background: rgb(170, 141, 255, 0.6) !important;
      }
    }
    //prev,next 아이콘 색상 변경
    .fc-icon-chevron-left,
    .fc-icon-chevron-right {
      &::before {
        color: var(--dark-gray);
      }
    }
    //cell 커서
    /* .fc td {
    height: 70px;
  } */
    .fc-daygrid-day-frame {
      cursor: pointer;
      height: 100% !important;
      &:hover {
        background: rgba(238, 234, 254, 0.6);
      }
    }
    .fc-daygrid-dot-event {
      display: block;
    }
    //cell 폰트 사이즈 변경
    .fc-daygrid-day-number {
      font-size: 1.05rem;
    }
    .fc .fc-daygrid-day-frame {
      /* height: 7rem; */
      min-height: 7rem;
      position: relative;
    }
    //이벤트
    .fc-event {
      border: none;
    }
    i.event_text {
      display: flex;
      justify-content: center;
    }
  }
  @media (max-width: 768px) {
    width: 100%;

    padding: 0 2.4rem;
    margin-top: 6rem;
  }
`;
export const EventColor = styled.div`
  background: #9169ff;
  font-weight: 500;
  padding: 0.5rem 0;
  .event_text {
    color: #ffffff;
  }
`;
