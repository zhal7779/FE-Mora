import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../icons/logo1.svg';
import { ReactComponent as InstagramIcon } from '../icons/instagram.svg';
import { ReactComponent as FacebookIcon } from '../icons/u_facebook.svg';
import { ReactComponent as GithubIcon } from '../icons/u_github.svg';
import { ReactComponent as TelephoneIcon } from '../icons/telephone-fill.svg';
import { ReactComponent as EmailIcon } from '../icons/envelope-at.svg';
const Footer = () => {
  return (
    <Container>
      <Content>
        <MainContent>
          <div>
            <LogoIcon style={{ marginRight: '2rem' }} />
            <p>개인정보처리방침</p>
            <p>이용약관</p>
            <p>이용안내</p>
          </div>
          <div>
            <button>
              <InstagramIcon />
            </button>
            <button>
              <FacebookIcon />
            </button>
            <button>
              <GithubIcon />
            </button>
          </div>
        </MainContent>
        <SubContent>
          <SubItems>
            <strong>CUSTOMER SUPPORT CENTER</strong>
            <div>
              <CustomerContentDIv>
                <TelephoneIcon style={{ marginTop: '1rem' }} />
                <p>02-1234-5678</p>
              </CustomerContentDIv>
              <CustomerContentDIv>
                <EmailIcon style={{ marginTop: '1rem' }} />
                <p> elice@elice.com</p>
              </CustomerContentDIv>
            </div>
          </SubItems>
          <SubItems>
            <strong>OPERATING HOURS</strong>
            <p>MON - FRI AM 09:30 - PM 05:30 </p>
            <p>LUNCH PM 12:00 - 13:00</p>
            <p> SAT, SUN, HOLIDAY OFF</p>
          </SubItems>
          <SubItems>
            <strong>COMPANY INFORMATIONS</strong>
            <p>COMPANY : 모여라 레이서 </p>
            <p>CREATORS : 이민영, 이성호, 이혜정, 김윤지, 임지성, 김지우, 연정환 </p>
          </SubItems>
        </SubContent>
        <CopyrightItem>
          Copyright ⓒ 2023 - 2023 Moyeora Elice Inc. All Rights Reserved.
        </CopyrightItem>
      </Content>
    </Container>
  );
};
export default Footer;
const Container = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0px;
  background: #f7f5ff;
`;
const Content = styled.div`
  padding: 2rem 0;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;
const MainContent = styled.div`
  display: flex;
  padding: 0 3rem 2rem 3rem;
  border-bottom: #cbd5e1 0.1rem solid;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    right: 0;
  }
  button {
    background: transparent;
    cursor: pointer;
  }
  p {
    padding: 0 3rem;
    font-size: 1.3rem;
    color: #616161;
    cursor: pointer;
  }
`;

const SubContent = styled.div`
  border-bottom: #cbd5e1 0.1rem solid;
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
`;

const SubItems = styled.div`
  padding: 3rem 0;

  strong {
    font-size: 1.6rem;
    color: #242424;
    font-weight: 600;
  }

  p {
    font-size: 1.2rem;
    color: #616161;
    padding: 1rem 0 0 0.5rem;
  }
`;
const CustomerContentDIv = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 0.5rem;
  p {
    font-size: 1.5rem;
    font-weight: 500;
    padding-left: 1rem;
  }
`;
const CopyrightItem = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  color: #616161;
  padding-top: 2rem;
`;
