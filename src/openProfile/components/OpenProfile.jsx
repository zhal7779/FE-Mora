import React, { useState } from 'react';
import * as Style from '../styledComponents/OpenProfileStyle';
import { ReactComponent as BriefcaseIcon } from '../../assets/icons/u_briefcase-alt.svg';
import { ReactComponent as DownIcon } from '../../assets/icons/fi_chevron-down.svg';
import { useQuery } from 'react-query';
import { getProfile, postCoffeeChat } from '../api/openProfileApi';
const OpenProfile = () => {
  const { data } = useQuery('openProfile', getProfile);
  const { data: coffeeChat, refetch } = useQuery('coffeeChat', () => postCoffeeChat(userId), {
    enabled: false,
  });
  console.log(data);
  const [userId, setUserId] = useState('');
  const handleCoffeeChatClick = (id) => {
    setUserId(id);
    refetch();
  };
  const [moreView, setMoreView] = useState([]);

  const handleMoreViewClick = (id) => {
    setMoreView((prevMoreView) => {
      if (!prevMoreView.includes(id)) {
        return [...prevMoreView, id];
      }
    });
  };

  return (
    <>
      {data && data.length === 0 ? (
        <Style.Nodata>
          <img src='static/media/no-data-image.64c9ff0eb8587dac16cb266cc4a9f5b9.svg' />
          <p>등록된 오픈 프로필이 없습니다.</p>
        </Style.Nodata>
      ) : (
        data &&
        data.length > 0 &&
        data.map((item) => (
          <Style.Container key={item.user_id}>
            <Style.Content>
              <Style.ProfileContent>
                <div>
                  <img className='image_icon' src={item.img_path}></img>
                  <span className='text_content'>
                    <h5>{item.user.name}</h5>
                    <p>
                      {item.position} ・ {item.user_careers.total_year}
                    </p>
                  </span>
                </div>
                <div>
                  {coffeeChat && coffeeChat.user_id === item.user_id ? (
                    <Style.CompleteButton>커피챗 완료</Style.CompleteButton>
                  ) : (
                    <Style.ChatButton onClick={() => handleCoffeeChatClick(item.user_id)}>
                      커피챗 신청
                    </Style.ChatButton>
                  )}
                </div>
              </Style.ProfileContent>
              <Style.SkillContent>
                {item.user_skills.map((skill, index) => (
                  <div key={index}>{skill}</div>
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
        ))
      )}
    </>
  );
};

export default OpenProfile;
