import React, { useState, useEffect } from 'react';
import * as Style from '../styledComponents/HeaderStyle';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo1.svg';
import { ReactComponent as MediaLogoIcon } from '../../assets/icons/logo2.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/fi_search.svg';
import { ReactComponent as BellIcon } from '../../assets/icons/fi_bell.svg';
import { ReactComponent as BarsIcon } from '../../assets/icons/bars-solid.svg';
import { useWindowSize } from '../../hooks/useWindowSize';
import SearchBar from '../../components/SearchBar';
import AlarmModal from '../../alarm/components/AlarmModal';
import { useQuery, useMutation } from 'react-query';
import { getAlert } from '../../alarm/api/alarmApi';
import defaultImg from '../../assets/images/rabbitProfile.png';

interface CheckedData {
  unchecked: boolean;
  id: string;
}

const URL = process.env.REACT_APP_URL;

const Header = () => {
  const token = sessionStorage.getItem('userToken');
  const location = useLocation();
  const [userImg, setUserImg] = useState<string>('');
  //30초마다 알림 갱신
  const { data, refetch: alarmRefetch } = useQuery('alert', getAlert, {
    enabled: true,
    refetchInterval: 30 * 1000,
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
          ...(userRefreshToken && { refresh: userRefreshToken }),
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

  // 새로고침시 menu 상태값 유지 위해 로컬스토리지 사용,
  // token 값이 있으면  초기 상태값 1

  const [menu, setMenu] = useState(() => {
    const storedMenu = localStorage.getItem('menu');
    return storedMenu ? parseInt(storedMenu) : token ? 'community' : 'main';
  });

  useEffect(() => {
    localStorage.setItem('menu', menu.toString());

    return () => {
      localStorage.removeItem('menu');
    };
  }, [menu]);

  useEffect(() => {
    if (location.pathname === '/') {
      setMenu('main');
    } else if (location.pathname.startsWith('/community/')) {
      setMenu('community');
    } else if (location.pathname.startsWith('/schedule/')) {
      setMenu('schedule');
    } else if (location.pathname === '/openprofile') {
      setMenu('openprofile');
    } else if (location.pathname === '/search') {
      setMenu('search');
    } else if (location.pathname === '/mypage') {
      setMenu('mypage');
    }
  }, [location.pathname]);

  // 메뉴 렌더링 함수
  const renderMenuItem = (menuName: string, link: string, text: string) => {
    const isActive = menu === menuName;
    const linkToRender = token ? link : '/nonmember';
    return (
      <div className={`menu-item ${isActive ? 'active' : ''}`}>
        <Link to={linkToRender}>
          <p>{text}</p>
        </Link>
      </div>
    );
  };
  //검색창 on
  const [onSearch, setOnSearch] = useState(false);
  const handleSearchClick = (): void => {
    setOnSearch(!onSearch);
  };

  //모달 open,close
  const [onModal, setOnModal] = useState(false);
  const handleModalClick = (): void => {
    setOnModal(!onModal);
  };

  const { logo, tabletSize } = useWindowSize(<LogoIcon />, <MediaLogoIcon />);
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    if (!tabletSize) {
      return setMenuOpen(false);
    }
    setMenuOpen(true);
  }, [tabletSize]);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      {onSearch ? (
        <SearchBar handleSearchClick={handleSearchClick} />
      ) : (
        <Style.HeaderStyle>
          <div className='container'>
            <nav className='content'>
              <div className='main-content'>
                <div className='logo' onClick={!tabletSize ? () => setMenuOpen(false) : undefined}>
                  <Link to='/'>{logo}</Link>
                </div>
                {menuOpen && (
                  <div className='menu-container'>
                    <div
                      className='menu-content'
                      onClick={!tabletSize ? () => setMenuOpen(false) : undefined}
                    >
                      {renderMenuItem('community', '/community/post/free', '토끼굴')}
                      {renderMenuItem('schedule', '/schedule/notice', '정비소')}
                      {renderMenuItem('openprofile', '/openprofile', '레이서 오픈 프로필')}
                    </div>
                  </div>
                )}
              </div>
              {menuOpen && (
                <div className='side-content'>
                  <div onClick={!tabletSize ? () => setMenuOpen(false) : undefined}>
                    {menu === 'search' || !token ? (
                      <SearchIcon style={{ stroke: 'var(--light-gray)', cursor: 'default' }} />
                    ) : (
                      <SearchIcon
                        onClick={() => handleSearchClick()}
                        style={{ stroke: 'var(--main-font-color)' }}
                      />
                    )}
                  </div>
                  <div>
                    {token ? (
                      <>
                        <BellIcon
                          onClick={handleModalClick}
                          style={{ stroke: 'var(--main-font-color)' }}
                        />
                        {data &&
                          data.length > 0 &&
                          data.map((item: CheckedData) =>
                            item.unchecked === true ? (
                              <span key={item.id} className='alarm'></span>
                            ) : (
                              ''
                            )
                          )}
                      </>
                    ) : (
                      <BellIcon style={{ stroke: 'var(--light-gray)', cursor: 'default' }} />
                    )}
                  </div>
                  <Link to={token ? '/mypage' : '/nonmember'}>
                    <div onClick={!tabletSize ? () => setMenuOpen(false) : undefined}>
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
              {onModal && <AlarmModal handleModalClick={handleModalClick} />}
            </div>
          </div>
        </Style.HeaderStyle>
      )}
    </>
  );
};
export default Header;
