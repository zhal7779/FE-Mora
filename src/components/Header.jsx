import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../assets/icons/logo1.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/fi_search.svg';
import { ReactComponent as BellIcon } from '../assets/icons/fi_bell.svg';
import SearchBar from './SearchBar';
import AlarmModal from '../alarm/components/AlarmModal';
import { useQuery, useMutation } from 'react-query';
import { getAlert } from '../alarm/api/alarmApi';
import defaultImg from '../assets/images/rabbitProfile.png';
import jwt_decode from 'jwt-decode';
const URL = process.env.REACT_APP_URL;

const Header = () => {
  const token = sessionStorage.getItem('userToken');
  const location = useLocation();
  const [userImg, setUserImg] = useState('');

  const { data, refetch: alarmRefetch } = useQuery('alert', getAlert, {
    enabled: false,
  });
  console.log(data);

  // mainProfileData (유저 프로필 정보) 가져오기
  const mainProfileDataQuery = useQuery('mainProfileData', () =>
    fetch(`${URL}/api/users/mypage`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
      },
    }).then((response) => response.json())
  );
  const mainProfileData = mainProfileDataQuery.data;

  useEffect(() => {
    if (token && mainProfileData) {
      alarmRefetch();
      setUserImg(mainProfileData?.UserDetail?.img_path || '');
    }
  }, [token, mainProfileData]);

  console.log(mainProfileData);

  // 리프레쉬 토큰 요청 Mutation 선언
  const refreshMutation = useMutation(
    async () => {
      const url = `${URL}/api/users/refresh-token`;
      const userToken = sessionStorage.getItem('userToken');
      const refeshToken = sessionStorage.getItem('userRefreshToken');

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
          refresh: refeshToken,
        },
      });

      const data = await response.json();
      const { accessToken, refreshToken } = data;
      return { accessToken, refreshToken };
    },
    {
      onSuccess: (data) => {
        const { accessToken, refreshToken } = data;
        if (accessToken && refreshToken) {
          if (sessionStorage.getItem('userToken')) {
            sessionStorage.removeItem('userToken');
          }
          if (sessionStorage.getItem('userRefreshToken')) {
            sessionStorage.removeItem('userRefreshToken');
          }
          sessionStorage.setItem('userToken', accessToken);
          sessionStorage.setItem('userRefreshToken', refreshToken);
          console.log('리프레쉬 토큰 발급 성공');
        } else {
          console.log('리프레쉬 토큰 발급 실패');
        }
      },
    }
  );

  // useEffect로 10분에 한 번씩 refreshMutation 실행

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     refreshMutation.mutate();
  //   }, 2000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  //알림 api 30초에 한 번씩 재호출
  useEffect(() => {
    const interval = setInterval(() => {
      alarmRefetch();
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // 새로고침시 menu 상태값 유지 위해 로컬스토리지 사용,
  // token 값이 있으면  초기 상태값 1

  const [menu, setMenu] = useState(() => {
    const storedMenu = localStorage.getItem('menu');
    return storedMenu ? parseInt(storedMenu) : token ? 1 : 0;
  });

  useEffect(() => {
    localStorage.setItem('menu', menu.toString());

    return () => {
      localStorage.removeItem('menu');
    };
  }, [menu]);

  //메뉴 상태 변경
  //menu === 0 ? 로고
  //menu === 1 ? 토끼굴
  //menu === 2 ? 정비소
  //menu === 3 ?오픈프로필
  //menu === 4 ? 검색창 사용불가
  //menu === 5 ? 마이페이지
  useEffect(() => {
    if (location.pathname === '/') {
      setMenu(0);
    } else if (location.pathname === '/community/post/free') {
      setMenu(1);
    } else if (location.pathname === '/schedule/notice') {
      setMenu(2);
    } else if (location.pathname === '/openprofile') {
      setMenu(3);
    } else if (location.pathname === '/search') {
      setMenu(4);
    } else if (location.pathname === '/mypage') {
      setMenu(5);
    }
  }, [location.pathname]);

  //검색창 on
  const [onSearch, setOnSearch] = useState(false);
  const handleSearchClick = (boolean) => {
    setOnSearch(boolean);
  };

  //모달 open,close
  const [onModal, setOnModal] = useState(false);
  const handleModalClick = (boolean) => {
    setOnModal(boolean);
  };

  return (
    <>
      {onSearch ? (
        <SearchBar handleClose={handleSearchClick} />
      ) : (
        <Container>
          <Content>
            <ModalContent>
              {onModal ? <AlarmModal handleClose={handleModalClick} /> : ''}
            </ModalContent>

            <MenuContainer>
              <Link to='/'>
                <LogoIcon style={{ marginRight: '2rem' }} />
              </Link>
              <MenuContent>
                <Link to={token ? '/community/post/free' : '/nonmember'}>
                  <MenuItem active={menu === 1}>
                    <p>토끼굴</p>
                  </MenuItem>
                </Link>
                <Link to={token ? '/schedule/notice' : '/nonmember'}>
                  <MenuItem active={menu === 2}>
                    <p>정비소</p>
                  </MenuItem>
                </Link>
                <Link to={token ? '/openprofile' : '/nonmember'}>
                  <MenuItem active={menu === 3}>
                    <p>레이서 오픈 프로필</p>
                  </MenuItem>
                </Link>
              </MenuContent>
            </MenuContainer>
            <SideContent>
              <div>
                {menu === 4 || !token ? (
                  <SearchIcon style={{ stroke: 'var(--light-gray)', cursor: 'default' }} />
                ) : (
                  <SearchIcon
                    onClick={() => handleSearchClick(true)}
                    style={{ stroke: '#242424' }}
                  />
                )}
              </div>

              <div>
                {token ? (
                  <>
                    <BellIcon
                      onClick={() => handleModalClick(true)}
                      style={{ stroke: '#242424' }}
                    />
                    {data &&
                      data.length > 0 &&
                      data.map((item) =>
                        item.unchecked === true ? <span className='alarm'></span> : ''
                      )}
                  </>
                ) : (
                  <BellIcon style={{ stroke: 'var(--light-gray)', cursor: 'default' }} />
                )}
              </div>
              <Link to={token ? '/mypage' : '/nonmember'}>
                <div>
                  {mainProfileData &&
                  mainProfileData.UserDetail &&
                  mainProfileData.UserDetail.img_path ? (
                    <ImageIcon src={mainProfileData.UserDetail.img_path || defaultImg} />
                  ) : (
                    <ImageIcon src={defaultImg} />
                  )}
                </div>
              </Link>
            </SideContent>
          </Content>
        </Container>
      )}
    </>
  );
};
export default Header;

const Container = styled.header`
  position: fixed;
  display: block;
  left: 0;
  right: 0;
  top: 0;
  z-index: 90;
  background: var(--main-white);
  border-bottom: #cbd5e1 1px solid;
  height: 6rem;
`;
const Content = styled.nav`
  max-width: 1280px;
  height: 100%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
`;
const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  p {
    padding: 2.1rem 2rem 2.1rem 2rem;
    font-weight: 700;
    font-size: 1.6rem;
    color: var(--dark-gray);
    &:hover {
      color: var(--main-font-color);
    }
  }
`;

const MenuContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const MenuItem = styled.div`
  cursor: pointer;
  height: 100%;
  ${(props) => (props.active ? 'border-bottom: 0.3rem solid #522bae;' : '')}
  p {
    font-weight: 700;
    font-size: 1.6rem;
    color: ${(props) => (props.active ? 'var( --main-font-color)' : 'var(--dark-gray)')};
  }
`;

const SideContent = styled.div`
  display: flex;
  align-items: center;
  div {
    position: relative;
    margin: 0 1.1rem 0 1.1rem;
    cursor: pointer;
    .alarm {
      position: absolute;
      right: 0.1rem;
      width: 1.1rem;
      height: 1.1rem;
      border-radius: 50%;
      background: var(--dark-purple);
    }
  }
`;
const ImageIcon = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  background: #969696;
  object-fit: cover;
`;
const ModalContent = styled.div`
  position: fixed;
  top: 5.8rem;
  left: 96rem;
`;
