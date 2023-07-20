import React, { useState } from 'react';
import * as Style from '../styledComponents/AlarmModalStyle';
import { ReactComponent as DownIcon } from '../../assets/icons/fi_chevron-down.svg';
import { ReactComponent as UpIcon } from '../../assets/icons/fi_chevron-up.svg';
import { useQuery } from 'react-query';
import { getAlert, patchAlert } from '../api/apis';
import { Link } from 'react-router-dom';
import { useWindowSize } from '../../hooks/useWindowSize';

type Props = {
  handleModalClick: () => void;
};

interface AlarmData {
  checked: number;
  id: string;
  type: string;
  planTitle: string;
  planContent: string;
  commentContent: string;
  boardId: string;
  boardTitle: string;
  ['AlertFromUser.UserDetail.img_path']: string;
  ['AlertFromUser.name']: string;
}

const AlarmModal = ({ handleModalClick }: Props) => {
  //더보기 상태
  const [hiddenContent, setHiddenContent] = useState<string[]>([]);
  // 알림 읽음 여부 상태
  const [alarmStatus, setAlarmStauts] = useState<string[]>([]);
  const [alarmId, setAlarmId] = useState('');
  const { data } = useQuery('alert', getAlert);

  const { refetch } = useQuery('alertStatus', () => patchAlert(alarmId), { enabled: false });
  //모달 리스트 open, close
  const handleContentClick = (id: string) => {
    setAlarmId(id);
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
    if (!alarmStatus.includes(id)) {
      refetch();
    }
  };
  const { mobileSize } = useWindowSize();

  return (
    <>
      <Style.Container>
        <div className='header-content'>
          <p>알림</p>
        </div>
        <ul className='contents'>
          {data && data.length > 1 ? (
            <>
              {data.map(
                (item: AlarmData) =>
                  item.id && (
                    <li className='content' key={item.id}>
                      <div className='show-content' onClick={() => handleContentClick(item.id)}>
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
                              <img
                                className='img-icon'
                                src={item['AlertFromUser.UserDetail.img_path']}
                                alt='프로필 이미지'
                              ></img>
                              {mobileSize ? (
                                <div className='mobile-content'>
                                  <div>
                                    <strong>{item['AlertFromUser.name']}</strong>{' '}
                                    <p> &nbsp; 님이 회원님의 </p>
                                  </div>
                                  <p>게시글에 댓글을 달았습니다.</p>
                                </div>
                              ) : (
                                <>
                                  <strong>{item['AlertFromUser.name']}</strong>
                                  <p> &nbsp; 님이 회원님의 게시글에 댓글을 달았습니다.</p>
                                </>
                              )}
                            </>
                          ) : item.type === 'PLAN' ? (
                            <div className='planAlarm'>
                              {mobileSize ? (
                                <div className='mobile-content'>
                                  <div>
                                    [<strong>{item.planTitle} </strong>]
                                  </div>
                                  <p>일정 시작 1시간 전입니다. </p>
                                </div>
                              ) : (
                                <>
                                  [<strong>{item.planTitle} </strong>]
                                  <p> &nbsp; 일정 시작 1시간 전입니다. </p>
                                </>
                              )}
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                        <div>
                          {hiddenContent.includes(item.id) ? (
                            <UpIcon
                              stroke='var(--dark-gray)'
                              strokeWidth='2'
                              width={mobileSize ? '18' : '22'}
                              height={mobileSize ? '18' : '22'}
                            />
                          ) : (
                            <DownIcon
                              stroke='var(--dark-gray)'
                              strokeWidth='2'
                              width={mobileSize ? '18' : '22'}
                              height={mobileSize ? '18' : '22'}
                            />
                          )}
                        </div>
                      </div>
                      {hiddenContent.includes(item.id) ? (
                        <div className='hidden-content'>
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
                              <div className='title-div'>
                                <span style={{ background: '#605EA0' }}>게시글</span>
                                <Link to={'/community/' + item.boardId}>
                                  <h5>{item.boardTitle}</h5>
                                </Link>
                              </div>
                            ) : item.type === 'PLAN' ? (
                              <div className='title-div'>
                                <span style={{ background: ' #ed6653' }}>일정</span>
                                <Link to={'/schedule'}>
                                  <h5>{item.planTitle}</h5>
                                </Link>
                              </div>
                            ) : (
                              ''
                            )}
                          </div>
                        </div>
                      ) : (
                        ''
                      )}
                    </li>
                  )
              )}
            </>
          ) : (
            <Style.Nodata>
              <img src='http://www.moyeora-racer.com/static/media/no-data-image.7c445de03420d586e6ca540e13c4cd7c.svg' />
              <p>새로운 알림이 없습니다.</p>
            </Style.Nodata>
          )}
        </ul>
      </Style.Container>
      <Style.Background onClick={handleModalClick} />
    </>
  );
};
export default AlarmModal;
