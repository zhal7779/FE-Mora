import React from 'react';
import { FooterStyle } from '../styledComponents/FooterStyle';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo1.svg';
import { ReactComponent as MediaLogoIcon } from '../../assets/icons/logo2.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icons/u_facebook.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/u_github.svg';
import { ReactComponent as TelephoneIcon } from '../../assets/icons/telephone-fill.svg';
import { ReactComponent as EmailIcon } from '../../assets/icons/envelope-at.svg';
import { useWindowSize } from '../../hooks/useWindowSize';
const Footer = () => {
  const { logo, mobileSize } = useWindowSize(<LogoIcon />, <MediaLogoIcon />);
  console.log(mobileSize);
  return (
    <FooterStyle>
      <div className='content'>
        <div className='main-content'>
          <div className='logo-content'>{logo}</div>
          <div className='main-items'>
            <p>개인정보처리방침</p>
            <p>이용약관</p>
            <p>이용안내</p>
          </div>
          <div className='icons'>
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
        </div>
        <div className='sub-content'>
          <div className='sub-items'>
            <strong>CUSTOMER SUPPORT CENTER</strong>
            <div>
              <div className='customer-content'>
                <TelephoneIcon style={{ marginTop: '1rem' }} />
                <p>02-1234-5678</p>
              </div>
              <div className='customer-content'>
                <EmailIcon style={{ marginTop: '1rem' }} />
                <p> elice@elice.com</p>
              </div>
            </div>
          </div>
          <div className='sub-items'>
            <strong>OPERATING HOURS</strong>
            <p>MON - FRI AM 09:30 - PM 05:30 </p>
            <p>LUNCH PM 12:00 - 13:00</p>
            <p> SAT, SUN, HOLIDAY OFF</p>
          </div>
          <div className='sub-items'>
            <strong>COMPANY INFORMATIONS</strong>
            <p>COMPANY : 모여라 레이서 </p>
            {mobileSize ? (
              <>
                <p>CREATORS :이민영, 이성호, 이혜정, 김윤지, </p>
                <p>임지성, 김지우, 연정환</p>
              </>
            ) : (
              <p>CREATORS : 이민영, 이성호, 이혜정, 김윤지, 임지성, 김지우, 연정환 </p>
            )}
          </div>
        </div>
        <div className='copyright'>
          <p>Copyright ⓒ 2023 - 2023 Moyeora Elice Inc. All Rights Reserved.</p>
        </div>
      </div>
    </FooterStyle>
  );
};
export default Footer;
