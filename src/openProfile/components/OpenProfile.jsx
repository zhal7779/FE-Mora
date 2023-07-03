import React, { useEffect, useState, useRef } from 'react';
import * as Style from '../styledComponents/OpenProfileStyle';
import { useQuery, useQueryClient, useInfiniteQuery } from 'react-query';
import { getProfile, postCoffeeChat } from '../api/openProfileApi';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';
import { useObserver } from './useObserver';
import OpenProfileList from './OpenProfileList';

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

  const { data, fetchNextPage, hasNextPage, isSuccess } = useInfiniteQuery(
    'openProfile',
    ({ pageParam = 0 }) => getProfile(pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.currentPage + 1 < lastPage.totalPages
          ? lastPage.currentPage + 1
          : undefined;
      },
      staleTime: 500,
      // keepPreviousData: true,
    }
  );

  const observerRef = useRef(null);
  useObserver(observerRef, fetchNextPage, hasNextPage);

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
      {isSuccess &&
        data.pages.map((page) =>
          page.totalPages === 0 ? (
            <Style.Nodata>
              <img src='http://www.moyeora-racer.com/static/media/no-data-image.7c445de03420d586e6ca540e13c4cd7c.svg' />
              <p>등록된 오픈 프로필이 없습니다.</p>
            </Style.Nodata>
          ) : (
            <>
              <OpenProfileList
                data={page.objArr}
                myId={myId}
                coffeChatStatus={coffeChatStatus}
                handleCoffeeChatClick={handleCoffeeChatClick}
                moreView={moreView}
                handleMoreViewClick={handleMoreViewClick}
              />
              <div ref={observerRef}></div>
            </>
          )
        )}
    </>
  );
};

export default OpenProfile;
