import React, { useEffect, useState, useRef } from 'react';
import * as Style from '../styledComponents/OpenProfileStyle';
import { useQuery, useQueryClient, useInfiniteQuery } from 'react-query';
import { getProfile, postCoffeeChat } from '../api/openProfileApi';
import { useObserver } from '../../hooks/useObserver';
import OpenProfileList from './OpenProfileList';
import { RegisterStatusProps } from '../interface/openProfileInterface';

const OpenProfile = ({ registerStatus }: RegisterStatusProps) => {
  const [userId, setUserId] = useState('');
  //커피챗 쿼리
  const [coffeeChatStatus, setCoffeeChatStatus] = useState<string[]>([]);
  const { data: coffeeChatData, refetch: coffeeCahtRefetch } = useQuery(
    ['coffeeChat', coffeeChatStatus],
    () => postCoffeeChat(userId)
  );
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
  //무한스크롤 DOM요소 가시성 감지 함수
  useObserver(observerRef, fetchNextPage, hasNextPage);
  // 오픈프로필 등록하거나 커피챗 신청시 refetch
  useEffect(() => {
    const profileRefetch = async () => {
      await queryClient.invalidateQueries('openProfile');
    };
    profileRefetch();
  }, [registerStatus, coffeeChatData]);

  return (
    <>
      {isSuccess &&
        data.pages.map((page, index: number) =>
          page.totalPages === 0 ? (
            <Style.Nodata>
              <img src='http://www.moyeora-racer.com/static/media/no-data-image.7c445de03420d586e6ca540e13c4cd7c.svg' />
              <p>등록된 오픈 프로필이 없습니다.</p>
            </Style.Nodata>
          ) : (
            <>
              <OpenProfileList
                key={index}
                data={page.objArr}
                setUserId={setUserId}
                coffeeChatStatus={coffeeChatStatus}
                setCoffeeChatStatus={setCoffeeChatStatus}
                coffeeCahtRefetch={coffeeCahtRefetch}
              />
              <div ref={observerRef}></div>
            </>
          )
        )}
    </>
  );
};

export default OpenProfile;
