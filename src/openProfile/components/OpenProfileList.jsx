import React, { useState } from 'react';
import jwt_decode from 'jwt-decode';
import { ReactComponent as BriefcaseIcon } from '../../assets/icons/u_briefcase-alt.svg';
import { ReactComponent as DownIcon } from '../../assets/icons/fi_chevron-down.svg';
import * as Style from '../styledComponents/OpenProfileStyle';
import { coffeeChatConfirm } from './CoffeeChatConfrim';
import { useWindowSize } from '../../hooks/useWindowSize';

const OpenProfileList = ({
  data,
  setCoffeChatStatus,
  coffeChatStatus,
  setUserId,
  coffeeCahtRefetch,
}) => {
  const token = sessionStorage.getItem('userToken');
  const myId = jwt_decode(token).id;

  const [moreView, setMoreView] = useState([]);

  const handleMoreViewClick = (id) => {
    setMoreView((prevMoreView) => {
      if (!prevMoreView.includes(id)) {
        return [...prevMoreView, id];
      }
    });
  };
  const { mobileSize } = useWindowSize();
  return data.map((item) => (
    <Style.Container key={item.user_id}>
      <div className='content'>
        <div className='profile-content'>
          <div>
            <img className='image_icon' src={item.img_path} alt='프로필'></img>
            <span className='text_content'>
              <h5>{item.User.name}</h5>
              {mobileSize ? (
                <div>
                  <p>{item.position}</p>
                  <p className='total-year'>{item.user_careers.total_year}</p>
                </div>
              ) : (
                <p>
                  {item.position} ・ {item.user_careers.total_year}
                </p>
              )}
            </span>
          </div>
          <div>
            {coffeChatStatus.includes(item.user_id) || item.chat_status === true ? (
              <button className='complete-button'>신청 완료</button>
            ) : myId === item.user_id ? (
              <button className='complete-button'>내 프로필</button>
            ) : (
              <Style.ChatButton
                onClick={() =>
                  coffeeChatConfirm(
                    item.user_id,
                    item.User.name,
                    setCoffeChatStatus,
                    setUserId,
                    coffeeCahtRefetch
                  )
                }
              >
                커피챗 신청
              </Style.ChatButton>
            )}
          </div>
        </div>
        <div className='skill-content'>
          {item.User.Skills.map((skill, index) => (
            <div key={index}>{skill.name}</div>
          ))}
        </div>
        {moreView.includes(item.user_id)
          ? item.user_careers.career_list.map((careear, index) => (
              <div className='carrer-content' key={index}>
                {mobileSize ? (
                  <div className='carrer-text'>
                    <div>
                      <BriefcaseIcon />
                      <h5>{careear.company_name}</h5>
                      <p>{careear.position}</p>
                    </div>
                    <p className='sub_text'>
                      {careear.hire_date} ~ {careear.resign_date} ・ {careear.work_year}
                    </p>
                  </div>
                ) : (
                  <>
                    <div>
                      <BriefcaseIcon />
                      <h5>{careear.company_name}</h5>
                      <p>{careear.position}</p>
                    </div>
                    <p className='sub_text'>
                      {careear.hire_date} ~ {careear.resign_date} ・ {careear.work_year}
                    </p>
                  </>
                )}
              </div>
            ))
          : item.user_careers.career_list.slice(0, 2).map((careear, index) => (
              <div className='carrer-content' key={index}>
                {mobileSize ? (
                  <div className='carrer-text'>
                    <div>
                      <BriefcaseIcon />
                      <h5>{careear.company_name}</h5>
                      <p>{careear.position}</p>
                    </div>
                    <p className='sub_text'>
                      {careear.hire_date} ~ {careear.resign_date} ・ {careear.work_year}
                    </p>
                  </div>
                ) : (
                  <>
                    <div>
                      <BriefcaseIcon />
                      <h5>{careear.company_name}</h5>
                      <p>{careear.position}</p>
                    </div>
                    <p className='sub_text'>
                      {careear.hire_date} ~ {careear.resign_date} ・ {careear.work_year}
                    </p>
                  </>
                )}
              </div>
            ))}
      </div>
      {!moreView.includes(item.user_id) && item.user_careers.career_list.length > 2 && (
        <div className='more-view-button' onClick={() => handleMoreViewClick(item.user_id)}>
          더 보기
          <DownIcon stroke='#acacb0' strokeWidth='1' width='19' height='19' />
        </div>
      )}
    </Style.Container>
  ));
};

export default OpenProfileList;
