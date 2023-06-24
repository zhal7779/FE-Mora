import React, { useEffect, useState } from 'react';
import * as Style from '../styledComponents/OpenProfileStyle';
import { ReactComponent as BriefcaseIcon } from '../../assets/icons/u_briefcase-alt.svg';
import { ReactComponent as DownIcon } from '../../assets/icons/fi_chevron-down.svg';
import { useQuery, useQueryClient, useInfiniteQuery } from 'react-query';
import { getProfile, postCoffeeChat } from '../api/openProfileApi';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';

const OpenProfile = ({ registerstatus }) => {
  const token = sessionStorage.getItem('userToken');
  const myId = jwt_decode(token).id;

  const [userId, setUserId] = useState('');
  const [coffeChatStatus, setCoffeChatStatus] = useState([]);
  const { data: coffeeChat, refetch: coffeeCahtRefetch } = useQuery('coffeeChat', () =>
    postCoffeeChat(userId)
  );
  const handleCoffeeChatClick = (id, name) => {
    Swal.fire({
      icon: 'question',
      title: `[${name}]님께 커피챗을 보내시겠습니까?`,
      showCancelButton: true,
      confirmButtonText: '보내기',
      confirmButtonColor: '#7353ea',
      cancelButtonText: '취소',
      cancelButtonColor: '#EEEAFE',
    }).then((result) => {
      if (result.isConfirmed) {
        setCoffeChatStatus((prevData) => {
          return [...prevData, id];
        });
        setUserId(id);
        coffeeCahtRefetch();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log('커피챗 취소');
      }
    });
  };

  const queryClient = useQueryClient();

  const { data } = useQuery('openProfile', getProfile);
  // const {data, fetchNextPage, hasNextPage} = useInfiniteQuery("openProfile",({pageParam}) => getProfile);
  useEffect(() => {
    const profileRefetch = async () => {
      await queryClient.invalidateQueries('openProfile');
    };
    profileRefetch();
  }, [registerstatus, coffeeChat]);

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
          <img src='http://www.moyeora-racer.com/static/media/no-data-image.7c445de03420d586e6ca540e13c4cd7c.svg' />
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
                    <Style.ChatButton
                      onClick={() => handleCoffeeChatClick(item.user_id, item.User.name)}
                    >
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
        ))
      )}
    </>
  );
};

export default OpenProfile;
