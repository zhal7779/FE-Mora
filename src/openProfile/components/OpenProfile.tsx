import React, { useEffect, useState, useRef } from 'react';
import * as Style from '../styledComponents/OpenProfileStyle';
import { useQuery, useQueryClient, useInfiniteQuery } from 'react-query';
import { getProfile, postCoffeeChat } from '../api/openProfileApi';
import { useObserver } from '../../hooks/useObserver';
import OpenProfileList from './OpenProfileList';
import { RegisterStatusProps } from '../types/openProfileType';

const OpenProfile = ({ registerStatus }: RegisterStatusProps) => {
  const [userId, setUserId] = useState('');

  //커피챗 쿼리
  const [coffeeChatStatus, setCoffeeChatStatus] = useState<string[]>([]);
  const { refetch: coffeeChatRefetch } = useQuery(
    ['coffeeChat', coffeeChatStatus],
    () => postCoffeeChat(userId),
    {
      enabled: false,
    }
  );

  // 커피챗 신청시 유저 아이디를 배열에 추가, 유저아이디 배열을 의존성으로 하여 refetch함.
  useEffect(() => {
    if (coffeeChatStatus.length > 0) {
      coffeeChatRefetch();
    }
  }, [coffeeChatStatus, coffeeChatRefetch]);

  const queryClient = useQueryClient();
  //오픈프로필 전체 데이터 쿼리, 무한스크롤 적용
  const { data, fetchNextPage, hasNextPage, isSuccess } = useInfiniteQuery(
    'openProfile',
    ({ pageParam = 0 }) => getProfile(pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.currentPage + 1 < lastPage.totalPages
          ? lastPage.currentPage + 1
          : undefined;
      },
      keepPreviousData: true,
    }
  );

  const observerRef = useRef(null);
  useObserver(observerRef, fetchNextPage, hasNextPage);

  // 오픈프로필 등록시 refetch
  useEffect(() => {
    const profileRefetch = async () => {
      await queryClient.invalidateQueries('openProfile');
    };
    profileRefetch();
  }, [registerStatus]);

  return (
    <>
      {isSuccess &&
        data.pages.map((page) =>
          page.totalItems === 0 ? (
            <Style.Nodata key={page.totalItems}>
              <img src='http://www.moyeora-racer.com/static/media/no-data-image.7c445de03420d586e6ca540e13c4cd7c.svg' />
              <p>등록된 오픈 프로필이 없습니다.</p>
            </Style.Nodata>
          ) : (
            <React.Fragment key={page.currentPage}>
              <OpenProfileList
                data={page.objArr}
                setUserId={setUserId}
                coffeeChatStatus={coffeeChatStatus}
                setCoffeeChatStatus={setCoffeeChatStatus}
              />
              <div ref={observerRef}></div>
            </React.Fragment>
          )
        )}
    </>
  );
};

export default OpenProfile;
