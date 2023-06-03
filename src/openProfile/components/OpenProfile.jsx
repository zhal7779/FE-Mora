import React, { useState } from 'react';
import * as Style from '../styledComponents/OpenProfileStyle';
import { ReactComponent as BriefcaseIcon } from '../../assets/icons/u_briefcase-alt.svg';
import { ReactComponent as DownIcon } from '../../assets/icons/fi_chevron-down.svg';
import data from './profile.json';
const OpenProfile = () => {
  const [moreView, setMoreView] = useState(false);
  const handleMoreViewClick = () => {
    setMoreView(true);
  };
  return (
    <>
      {data.map((item, index) => (
        <Style.Container key={index}>
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
                <button className='chat_button'>커피챗 신청</button>
              </div>
            </Style.ProfileContent>
            <Style.SkillContent>
              {item.skils.map((skill, index) => (
                <div key={index}>{skill}</div>
              ))}
            </Style.SkillContent>
            {item.careers.map((careear, index) => (
              <Style.CareerContent>
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
          {!moreView ? (
            <Style.MoreViewButton>
              더 보기
              <DownIcon stroke='#acacb0' stroke-width='1' width='19' height='19' />
            </Style.MoreViewButton>
          ) : (
            ''
          )}
        </Style.Container>
      ))}
    </>
  );
};

export default OpenProfile;
