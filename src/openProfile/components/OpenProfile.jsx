import React, { useState } from 'react';
import * as Style from '../styledComponents/OpenProfileStyle';
import { ReactComponent as BriefcaseIcon } from '../../assets/icons/u_briefcase-alt.svg';

const OpenProfile = () => {
  const obj = {
    profileImg: '',
    name: '이민영',
    currentJob: '라인 프론트엔드 엔지니어',
    skils: ['javsscript', 'typescript', 'React', 'Redux', 'node.js', 'express.js'],
  };
  const [moreView, setMoreView] = useState(false);
  const handleMoreViewClick = () => {
    setMoreView(true);
  };
  return (
    <Style.Container>
      <Style.ProfileContent>
        <div>
          <img
            className='image_icon'
            src='https://www.chemicalnews.co.kr/news/photo/202210/4996_13445_157.png'
          ></img>
          <span className='text_content'>
            <h5>이민영</h5>
            <p>삼성 소프트웨어 엔지니어 ・ 2년차</p>
          </span>
        </div>
        <div>
          <button className='chat_button'>커피챗 신청</button>
        </div>
      </Style.ProfileContent>
      <Style.SkillContent>
        <div>javascript</div>
        <div>typescript</div>
      </Style.SkillContent>
      <Style.CareerContent>
        <div>
          <BriefcaseIcon />
          <h5>카카오뱅크</h5>
          <p>프론트엔드 개발자</p>
        </div>
        <p className='sub_text'>2020-05-01 ~ 현재 ・ 3년</p>
      </Style.CareerContent>
    </Style.Container>
  );
};

export default OpenProfile;
