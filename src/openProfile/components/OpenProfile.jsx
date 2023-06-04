import React, { useState } from 'react';
import * as Style from '../styledComponents/OpenProfileStyle';
import { ReactComponent as BriefcaseIcon } from '../../assets/icons/u_briefcase-alt.svg';
import { ReactComponent as DownIcon } from '../../assets/icons/fi_chevron-down.svg';
import data from './profile.json';
const OpenProfile = () => {
  const [moreView, setMoreView] = useState([]);

  const handleMoreViewClick = (id) => {
    setMoreView((prevMoreView) => {
      if (!prevMoreView.includes(id)) {
        return [...prevMoreView, id];
      } else {
        return prevMoreView.filter((item) => item !== id);
      }
    });
  };
  return (
    <>
      {data.map((item) => (
        <Style.Container key={item.id}>
          <Style.Content>
            <Style.ProfileContent>
              <div>
                <img
                  className='image_icon'
                  src='https://www.chemicalnews.co.kr/news/photo/202210/4996_13445_157.png'
                ></img>
                <span className='text_content'>
                  <h5>{item.name}</h5>
                  <p>
                    {item.currentJob} ・ {item.total}년차
                  </p>
                </span>
              </div>
              <div>
                <Style.ChatButton>커피챗 신청</Style.ChatButton>
              </div>
            </Style.ProfileContent>
            <Style.SkillContent>
              {item.skils.map((skill, index) => (
                <div key={index}>{skill}</div>
              ))}
            </Style.SkillContent>
            {moreView.includes(item.id)
              ? item.careers.map((careear, index) => (
                  <Style.CareerContent key={index}>
                    <div>
                      <BriefcaseIcon />
                      <h5>{careear.company}</h5>
                      <p>{careear.position}</p>
                    </div>
                    <p className='sub_text'>
                      {careear.date} ・ {careear.term}년
                    </p>
                  </Style.CareerContent>
                ))
              : item.careers.slice(0, 2).map((careear, index) => (
                  <Style.CareerContent key={index}>
                    <div>
                      <BriefcaseIcon />
                      <h5>{careear.company}</h5>
                      <p>{careear.position}</p>
                    </div>
                    <p className='sub_text'>
                      {careear.date} ・ {careear.term}년
                    </p>
                  </Style.CareerContent>
                ))}
          </Style.Content>
          {!moreView.includes(item.id) && item.careers.length > 2 && (
            <Style.MoreViewButton onClick={() => handleMoreViewClick(item.id)}>
              더 보기
              <DownIcon stroke='#acacb0' strokeWidth='1' width='19' height='19' />
            </Style.MoreViewButton>
          )}
        </Style.Container>
      ))}
    </>
  );
};

export default OpenProfile;
