import React, { useState } from 'react';
import * as Style from '../styledComponents/OpenProfileStyle';
import { ReactComponent as BriefcaseIcon } from '../../assets/icons/u_briefcase-alt.svg';

const OpenProfile = () => {
  const obj = [
    {
      profileImg: '',
      name: '이민영',
      currentJob: '라인 프론트엔드 엔지니어',
      total: 3,
      skils: ['javsscript', 'typescript', 'React', 'Redux', 'node.js', 'express.js'],
      careers: [
        {
          company: '쿠팡',
          position: '프론트엔드',
          date: '2020-05-01 ~ 현재',
          term: 1,
        },
        {
          company: '네이버',
          position: '프론트엔드',
          date: '2020-05-01 ~ 현재',
          term: 2,
        },
      ],
    },
  ];
  const [moreView, setMoreView] = useState(false);
  const handleMoreViewClick = () => {
    setMoreView(true);
  };
  return (
    <>
      {obj.map((item, index) => (
        <Style.Container key={index}>
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
        </Style.Container>
      ))}
    </>
  );
};

export default OpenProfile;
