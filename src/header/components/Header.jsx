import React, { useState, useEffect } from 'react';
import * as Style from '../styledComponents/HeaderStyle';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo1.svg';
import { ReactComponent as MediaLogoIcon } from '../../assets/icons/logo2.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/fi_search.svg';
import { ReactComponent as BellIcon } from '../../assets/icons/fi_bell.svg';
import { ReactComponent as BarsIcon } from '../../assets/icons/bars-solid.svg';
import { useWindowSize } from './useWindowSize';
import SearchBar from '../../components/SearchBar';
import AlarmModal from '../../alarm/components/AlarmModal';
import { useQuery, useMutation } from 'react-query';
import { getAlert } from '../../alarm/api/alarmApi';
import defaultImg from '../../assets/images/rabbitProfile.png';

const URL = process.env.REACT_APP_URL;

const Header = () => {
  const token = sessionStorage.getItem('userToken');
  const location = useLocation();
  const [userImg, setUserImg] = useState('');

  const { data, refetch: alarmRefetch } = useQuery('alert', getAlert, {
    enabled: false,
  });

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

  // console.log(mainProfileData);

  // 리프레쉬 토큰 요청 Mutation 선언
  const refreshMutation = useMutation(
    async () => {
      const url = `${URL}/api/users/refresh-token`;
      const userToken = sessionStorage.getItem('userToken');
      const userRefreshToken = sessionStorage.getItem('userRefreshToken');

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
          refresh: userRefreshToken,
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

  useEffect(() => {
    const interval = setInterval(() => {
      refreshMutation.mutate();
    }, 600000);
    return () => {
      clearInterval(interval);
    };
  }, []);

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
    } else if (location.pathname.startsWith('/community/')) {
      setMenu(1);
    } else if (location.pathname.startsWith('/schedule/')) {
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

  const { logo, isSize } = useWindowSize(<LogoIcon />, <MediaLogoIcon />);
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    if (!isSize) {
      return setMenuOpen(false);
    }
    setMenuOpen(true);
  }, [isSize]);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      {onSearch ? (
        <SearchBar handleClose={handleSearchClick} />
      ) : (
        <Style.HeaderStyle>
          <div className='container'>
            <nav className='content'>
              <div className='main-content'>
                <div className='logo' onClick={!isSize ? () => setMenuOpen(false) : undefined}>
                  <Link to='/'>{logo}</Link>
                </div>
                {menuOpen && (
                  <div className='menu-container'>
                    <div
                      className='menu-content'
                      onClick={!isSize ? () => setMenuOpen(false) : undefined}
                    >
                      <div className={menu === 1 ? 'menu-item active' : 'menu-item'}>
                        <Link to={token ? '/community/post/free' : '/nonmember'}>
                          <p>토끼굴</p>
                        </Link>
                      </div>

                      <div className={menu === 2 ? 'menu-item active' : 'menu-item'}>
                        <Link to={token ? '/schedule/notice' : '/nonmember'}>
                          <p>정비소</p>
                        </Link>
                      </div>

                      <div className={menu === 3 ? 'menu-item active' : 'menu-item'}>
                        <Link to={token ? '/openprofile' : '/nonmember'}>
                          <p>레이서 오픈 프로필</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {menuOpen && (
                <div className='side-content'>
                  <div onClick={!isSize ? () => setMenuOpen(false) : undefined}>
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
                    <div onClick={!isSize ? () => setMenuOpen(false) : undefined}>
                      {mainProfileData &&
                      mainProfileData.UserDetail &&
                      mainProfileData.UserDetail.img_path ? (
                        <img
                          className='img-icon'
                          src={mainProfileData.UserDetail.img_path || defaultImg}
                        />
                      ) : (
                        <img className='img-icon' src={defaultImg} />
                      )}
                    </div>
                  </Link>
                </div>
              )}
              <div className='nav-toggle'>
                <BarsIcon style={{ fill: '#7353ea' }} onClick={handleMenuOpen} />
              </div>
            </nav>
            <div className='modal-content'>
              {onModal ? <AlarmModal handleClose={handleModalClick} /> : ''}
            </div>
          </div>
        </Style.HeaderStyle>
      )}
    </>
  );
};
export default Header;
