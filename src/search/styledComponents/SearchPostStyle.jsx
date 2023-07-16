import styled from 'styled-components';

export const Container = styled.section`
  width: 700px;
  border-radius: 4px;
  border: 1px #cbd5e1 solid;
  background: #ffffff;
  height: inherit;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const Content = styled.ul`
  li {
    padding: 2rem;
    border-bottom: 1px #cbd5e1 solid;
    cursor: pointer;
    &:hover {
      background: rgba(233, 233, 238, 0.4);
      transition: 0.2s ease-out;
    }
    .subject {
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      background: #eeeafe;
      color: #a58cf5;
      font-weight: 600;
      font-size: 1rem;
    }
    .title-content {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      font-weight: 600;
      strong {
        margin-right: 1rem;
        color: var(--dark-purple);
      }
    }
    h3 {
      padding: 1rem 0;
    }
    p {
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 1.4rem;
      line-height: 140%;
    }

    .hashtags {
      display: flex;
      padding-top: 1rem;
      h3 {
        color: #94a3b8;
        margin-right: 1rem;
        font-size: 1.2rem;
        font-weight: 500;
      }
    }
    .sub_content {
      display: flex;
      justify-content: space-between;
      font-weight: 600;
      margin-bottom: 0;
      p {
        font-size: 1rem;
      }
      div {
        display: flex;
        gap: 1rem;
        p {
          font-size: 1rem;
          color: var(--light-gray);
        }
      }
    }
  }
`;
export const AddView = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
  font-weight: 700;
  padding: 2rem;
  div {
    display: flex;
    align-items: center;
  }
  .title {
    padding-right: 0.5rem;
  }
  .total_count {
    color: #94a3b8;
  }
  .all_view {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;
