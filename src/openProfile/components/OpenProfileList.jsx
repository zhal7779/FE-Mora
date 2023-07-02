import React from 'react';
import { ReactComponent as BriefcaseIcon } from '../../assets/icons/u_briefcase-alt.svg';
import { ReactComponent as DownIcon } from '../../assets/icons/fi_chevron-down.svg';
import * as Style from '../styledComponents/OpenProfileStyle';

const OpenProfileList = ({
  data,
  myId,
  coffeChatStatus,
  handleCoffeeChatClick,
  moreView,
  handleMoreViewClick,
}) => {
  return data.map((item) => (
    <Style.Container key={item.user_id}>
      <Style.Content>
        <Style.ProfileContent>
          <div>
            <img className='image_icon' src={item.img_path} alt='프로필'></img>
            <span className='text_content'>
              <h5>{item.User.name}</h5>
              <p>
                {item.position} ・ {item.user_careers.total_year}
              </p>
            </span>
          </div>
          <div>
            {coffeChatStatus.includes(item.user_id) || item.chat_status === true ? (
              <Style.CompleteButton>신청 완료</Style.CompleteButton>
            ) : myId === item.user_id ? (
              <Style.CompleteButton>내 프로필</Style.CompleteButton>
            ) : (
              <Style.ChatButton onClick={() => handleCoffeeChatClick(item.user_id, item.User.name)}>
                커피챗 신청
              </Style.ChatButton>
            )}
          </div>
        </Style.ProfileContent>
        <Style.SkillContent>
          {item.User.Skills.map((skill, index) => (
            <div key={index}>{skill.name}</div>
          ))}
        </Style.SkillContent>
        {moreView.includes(item.user_id)
          ? item.user_careers.career_list.map((careear, index) => (
              <Style.CareerContent key={index}>
                <div>
                  <BriefcaseIcon />
                  <h5>{careear.company_name}</h5>
                  <p>{careear.position}</p>
                </div>
                <p className='sub_text'>
                  {careear.hire_date} ~ {careear.resign_date} ・ {careear.work_year}
                </p>
              </Style.CareerContent>
            ))
          : item.user_careers.career_list.slice(0, 2).map((careear, index) => (
              <Style.CareerContent key={index}>
                <div>
                  <BriefcaseIcon />
                  <h5>{careear.company_name}</h5>
                  <p>{careear.position}</p>
                </div>
                <p className='sub_text'>
                  {careear.hire_date} ~ {careear.resign_date} ・ {careear.work_year}
                </p>
              </Style.CareerContent>
            ))}
      </Style.Content>
      {!moreView.includes(item.user_id) && item.user_careers.career_list.length > 2 && (
        <Style.MoreViewButton onClick={() => handleMoreViewClick(item.user_id)}>
          더 보기
          <DownIcon stroke='#acacb0' strokeWidth='1' width='19' height='19' />
        </Style.MoreViewButton>
      )}
    </Style.Container>
  ));
};

export default OpenProfileList;
