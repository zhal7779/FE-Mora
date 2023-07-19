import React, { LegacyRef } from 'react';
import * as Style from '../styledComponents/SearchPostStyle';
import { ReactComponent as RightIcon } from '../../assets/icons/fi_chevron-right.svg';
import NoData from '../../components/NoData';
import SearchPostList from './SearchPostList';
import { SearchPostData } from '../interface/searchInterface';

interface Props {
  data: any;
  type: string;
  menu: string;
  receiveMenu?: (menu: string) => void;
  count?: number;
  hasNextPage?: boolean;
  observerRef?: LegacyRef<HTMLDivElement> | undefined;
}

const SearchPost = ({ data, count, type, receiveMenu, menu, hasNextPage, observerRef }: Props) => {
  const handleAllView = () => {
    if (receiveMenu) {
      receiveMenu(menu);
    }
  };
  return (
    <Style.Container>
      <Style.Content>
        {data && type === 'simple' ? (
          <>
            <Style.AddView>
              <div>
                {menu === 'free' ? (
                  <p className='title'>자유 게시판</p>
                ) : menu === 'Knowledge' ? (
                  <p className='title'>지식 공유</p>
                ) : menu === 'study' ? (
                  <p className='title'>스터디 모집</p>
                ) : (
                  <p className='title'>레이서 Q&A</p>
                )}
                <p className='total_count'>{count}</p>
              </div>
              <div style={{ cursor: 'pointer' }} onClick={handleAllView}>
                <p className='all_view'>모두 보기</p>
                <RightIcon stroke='#242424' />
              </div>
            </Style.AddView>
            {data.map((item: SearchPostData) => (
              <SearchPostList item={item} menu={menu} />
            ))}
          </>
        ) : (
          data &&
          data.pages &&
          data.pages.map((page: { totalItems: number; objArr: [] }) =>
            page.totalItems === 0 ? (
              <NoData />
            ) : (
              page.objArr.map((item: SearchPostData) => <SearchPostList item={item} menu={menu} />)
            )
          )
        )}
        {hasNextPage && <div ref={observerRef}></div>}
      </Style.Content>
    </Style.Container>
  );
};

export default SearchPost;
