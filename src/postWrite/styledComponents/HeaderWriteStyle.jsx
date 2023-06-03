import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;

  width: 100%;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #cbd5e1;

  .header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1280px;
    margin: 0 auto;
  }

  .btn-back {
    width: 40px;
    height: 40px;
  }

  .header-right-btns {
    display: flex;
  }

  .post-image,
  .write-code {
    width: 36px;
    height: 36px;
    padding: 6px;
  }

  .btn-back,
  .post-image,
  .write-code {
    background: none;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .write-code {
    margin: 0 60px 0 10px;
  }
`;
