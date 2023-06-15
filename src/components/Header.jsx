import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../assets/icons/logo1.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/fi_search.svg';
import { ReactComponent as BellIcon } from '../assets/icons/fi_bell.svg';
import SearchBar from './SearchBar';
import AlarmModal from '../alarm/components/AlarmModal';
import { useQuery } from 'react-query';
import { getAlert } from '../alarm/api/alarmApi';
import { ProfilRegistrStatus } from '../openProfile/api/openProfileApi';
import defaultImg from '../assets/images/rabbitProfile.png';

const Header = () => {
  const token = sessionStorage.getItem('userToken');
  const location = useLocation();
  //프로필 이미지 가져오는 쿼리
  //프로필 이미지도 3초마다 호출됨, 수정 필요
  const { data: profileData, refetch: profileRefetch } = useQuery('profile', ProfilRegistrStatus);
  const profileImg = profileData?.UserDetail?.img_path;

  const { data, refetch: alarmRefetch } = useQuery('alert', getAlert);
  // 알림 api 3초에 한 번씩 재호출
  // const [onAlarm, setOnAlarm] = useState(false);
  const newAlarm = data?.alertComments?.filter((item) => item.checked === 0);
  useEffect(() => {
    // if (newAlarm && newAlarm.length > 0) {
    //   setOnAlarm(true);
    // } else {
    //   setOnAlarm(false);
    // }

    const interval = setInterval(() => {
      alarmRefetch();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useState(() => {
    profileRefetch();
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
    } else if (location.pathname === '/schedule') {
      setMenu(2);
    } else if (location.pathname === '/openprofile') {
      setMenu(3);
    } else if (location.pathname === '/search') {
      setMenu(4);
    } else if (location.pathname === '/mypage') {
      setMenu(5);
    }
  });

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
                <Link to={token ? '/schedule' : '/nonmember'}>
                  <MenuItem active={menu === 2}>
                    <p> 정비소</p>
                  </MenuItem>
                </Link>
                <Link to={token ? '/openprofile' : '/nonmember'}>
                  <MenuItem active={menu === 3}>
                    <p> 개발자 오픈 프로필</p>
                  </MenuItem>
                </Link>
              </MenuContent>
            </MenuContainer>
            <SideContent>
              <div>
                {menu === 4 || !token ? (
                  <SearchIcon style={{ stroke: '#BDBDBD', cursor: 'default' }} />
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
                    {newAlarm && newAlarm.length > 0 && <span className='alarm'></span>}
                  </>
                ) : (
                  <BellIcon style={{ stroke: '#BDBDBD', cursor: 'default' }} />
                )}
              </div>
              <Link to={token ? '/mypage' : '/nonmember'}>
                <div>
                  <ImageIcon src={token ? profileImg : defaultImg}></ImageIcon>
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
  background: #ffffff;
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
    color: #616161;
    &:hover {
      color: #242424;
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
    color: ${(props) => (props.active ? '#242424' : '#616161')};
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
      background: #7353ea;
    }
  }
`;
const ImageIcon = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  background: #969696;
`;
const ModalContent = styled.div`
  position: fixed;
  top: 5.8rem;
  left: 96rem;
`;
