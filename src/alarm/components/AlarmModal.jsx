import React, { useState } from 'react';
import * as Style from '../styledComponents/AlarmModalStyle';
import { ReactComponent as DownIcon } from '../../assets/icons/fi_chevron-down.svg';
import { ReactComponent as UpIcon } from '../../assets/icons/fi_chevron-up.svg';
import { ReactComponent as PostIcon } from '../../assets/icons/post.svg';
import { useQuery } from 'react-query';
import { getAlert, patchAlert } from '../api/alarmApi';
import { Link } from 'react-router-dom';
const AlarmModal = ({ handleClose }) => {
  //더보기 상태
  const [hiddenContent, setHiddenContent] = useState([]);
  // 알림 읽음 여부 상태
  const [alarmStatus, setAlarmStauts] = useState([]);
  const [alarmId, setAlarmId] = useState('');
  const { data } = useQuery('alert', getAlert);
  const { refetch } = useQuery('alertStatus', () => patchAlert(alarmId));
  //모달 리스트 open, close
  const handleContentClick = (id) => {
    setAlarmId(id);
    refetch();
    setAlarmStauts((prevStatus) => {
      return [...prevStatus, id];
    });
    setHiddenContent((prevContent) => {
      // 열려있지 않다면 = 배열에 들어온 인덱스가 없다면 =>  배열에 인덱스 추가
      if (!prevContent.includes(id)) {
        return [...prevContent, id];
        // 열려 있다면 = 배열에 인덱스가 있다면 =>  배열에 들어있는 인덱스 삭제
      } else {
        return prevContent.filter((idx) => idx !== id);
      }
    });
  };
  const handleClickOutside = () => {
    handleClose(false);
  };
  console.log(data);

  return (
    <>
      <Style.Container>
        <Style.HeaderContent>
          <p>알림</p>
        </Style.HeaderContent>
        <Style.Scroll>
          {data && data.length > 1 ? (
            <>
              {data.map((item) => (
                <Style.Content key={item.id}>
                  <Style.ShowContent onClick={() => handleContentClick(item.id)}>
                    <div>
                      {item.checked === 1 || alarmStatus.includes(item.id) ? (
                        <span style={{ background: '#EEEAFE' }}></span>
                      ) : item.type === 'COMMENT' ? (
                        <span style={{ background: '#aa8dff' }}></span>
                      ) : item.type === 'PLAN' ? (
                        <span></span>
                      ) : (
                        ''
                      )}
                      {item.type === 'COMMENT' ? (
                        <>
                          <Style.ImageIcon
                            src={item['AlertFromUser.UserDetail.img_path']}
                          ></Style.ImageIcon>
                          <strong>{item['AlertFromUser.name']}</strong>
                          <p>님이 회원님의 게시글에 댓글을 달았습니다.</p>
                        </>
                      ) : item.type === 'PLAN' ? (
                        <div className='planAlarm'>
                          <strong>[{item.planTitle}] </strong>
                          <p> 일정 시작 1시간 전입니다. </p>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                    <div>
                      {hiddenContent.includes(item.id) ? (
                        <UpIcon />
                      ) : (
                        <DownIcon stroke='#616161' strokeWidth='2' width='22' height='22' />
                      )}
                    </div>
                  </Style.ShowContent>
                  {hiddenContent.includes(item.id) ? (
                    <Style.HiddenContent>
                      <div style={{ border: '1px solid #e0e0e0' }}>
                        {item.type === 'COMMENT' ? (
                          <p>{item.commentContent}</p>
                        ) : item.type === 'PLAN' ? (
                          <p>{item.planContent}</p>
                        ) : (
                          ''
                        )}
                      </div>
                      <div style={{ background: 'transparent' }}>
                        {item.type === 'COMMENT' ? (
                          <>
                            <PostIcon />
                            <Link to={'/community/' + item.boardId}>
                              <h5>{item.boardTitle}</h5>
                            </Link>
                          </>
                        ) : item.type === 'PLAN' ? (
                          <>
                            <span>일정</span>
                            <Link to={'/schedule'}>
                              <h5>{item.planTitle}</h5>
                            </Link>
                          </>
                        ) : (
                          ''
                        )}
                      </div>
                    </Style.HiddenContent>
                  ) : (
                    ''
                  )}
                </Style.Content>
              ))}{' '}
            </>
          ) : (
            <Style.Nodata>
              <img src='static/media/no-data-image.64c9ff0eb8587dac16cb266cc4a9f5b9.svg' />
              <p>새로운 알림이 없습니다.</p>
            </Style.Nodata>
          )}
        </Style.Scroll>
      </Style.Container>
      <Style.Background onClick={handleClickOutside} />
    </>
  );
};
export default AlarmModal;
