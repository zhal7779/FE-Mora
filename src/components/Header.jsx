import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../assets/icons/logo1.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/fi_search.svg';
import { ReactComponent as BellIcon } from '../assets/icons/fi_bell.svg';
import SearchBar from './SearchBar';
import AlarmModal from './AlarmModal';
import DefaultImg from '../assets/images/rabbitProfile.png';
const Header = () => {
  //menu === 0 ? 로고
  //menu === 1 ? 토끼굴
  //menu === 2 ? 정비소
  //menu === 3 ?오픈프로필
  //menu === 4 ? 검색창
  //menu === 5 ? 마이페이지

  const [menu, setMenu] = useState(0);
  const handleMenuClick = (num) => {
    setMenu(num);
  };

  const [onSearch, setOnSearch] = useState(false);
  const handleSearchClick = (boolean) => {
    setOnSearch(boolean);
    setMenu(4);
  };

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
                <LogoIcon onClick={() => handleMenuClick(0)} style={{ marginRight: '2rem' }} />
              </Link>
              <MenuContent>
                <Link to='/community/post/free'>
                  <MenuItem onClick={() => handleMenuClick(1)} active={menu === 1}>
                    <p>토끼굴</p>
                  </MenuItem>
                </Link>
                <Link to='/schedule'>
                  <MenuItem onClick={() => handleMenuClick(2)} active={menu === 2}>
                    <p> 정비소</p>
                  </MenuItem>
                </Link>
                <Link to='/openprofile'>
                  <MenuItem onClick={() => handleMenuClick(3)} active={menu === 3}>
                    <p> 개발자 오픈 프로필</p>
                  </MenuItem>
                </Link>
              </MenuContent>
            </MenuContainer>
            <SideContent>
              <div>
                {menu === 4 ? (
                  <SearchIcon style={{ stroke: '#BDBDBD', cursor: 'default' }} />
                ) : (
                  <SearchIcon
                    onClick={() => handleSearchClick(true)}
                    style={{ stroke: '#242424' }}
                  />
                )}
              </div>

              <div>
                <BellIcon onClick={() => handleModalClick(true)} />
              </div>
              <Link to='/mypage'>
                <div onClick={() => handleMenuClick(5)}>
                  <ImageIcon src={DefaultImg}></ImageIcon>
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
    margin: 0 1.1rem 0 1.1rem;
    cursor: pointer;
  }
`;
const ImageIcon = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  background: #e3e3e3;
`;
const ModalContent = styled.div`
  position: fixed;
  top: 5.8rem;
  left: 96rem;
`;
