import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../icons/logo1.svg';
import { ReactComponent as SearchIcon } from '../icons/fi_search.svg';
import { ReactComponent as BellIcon } from '../icons/fi_bell.svg';
const Header = () => {
  const [menu, setMenu] = useState(0);
  const handleMenuClick = (num) => {
    setMenu(num);
  };
  return (
    <Container>
      <MainContent>
        <LogoIcon onClick={() => handleMenuClick(0)} style={{ marginRight: '2rem' }} />
        <MenuContainer>
          <MenuItem onClick={() => handleMenuClick(1)} active={menu === 1}>
            <p active={menu === 1}> 토끼굴</p>
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick(2)} active={menu === 2}>
            <p active={menu === 2}> 정비소</p>
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick(3)} active={menu === 3}>
            <p active={menu === 3}> 개발자 오픈 프로필</p>
          </MenuItem>
        </MenuContainer>
      </MainContent>
      <SideContent>
        <div>
          <SearchIcon />
        </div>
        <div>
          <BellIcon />
        </div>
        <div>
          <ImageIcon src='https://www.chemicalnews.co.kr/news/photo/202210/4996_13445_157.png'></ImageIcon>
        </div>
      </SideContent>
    </Container>
  );
};
export default Header;
const Container = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: #cbd5e1 1px solid;
  height: 6rem;
`;
const MainContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32rem;
  p {
    margin: 2.1rem 2rem 2.1rem 2rem;
    font-weight: 700;
    font-size: 1.6rem;
    color: #616161;
    cursor: pointer;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
`;

const MenuItem = styled.div`
  height: 95%;
  ${(props) => (props.active ? 'border-bottom: 0.3rem solid #522bae;' : '')}
  p {
    font-weight: 700;
    font-size: 1.6rem;
    color: ${(props) => (props.active ? '#242424' : '#616161')};

    cursor: pointer;
  }
`;

const SideContent = styled.div`
  display: flex;
  align-items: center;
  margin-right: 32rem;
  right: 0;
  div {
    margin: 0 1.1rem 0 1.1rem;
    cursor: pointer;
  }
`;
const ImageIcon = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
`;
