import styled from 'styled-components';

export const Container = styled.div`
  background: var(--black);
  height: 80px;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;
`;

export const Icon = styled.div`
  cursor: pointer;
`;

export const Avatar = styled.div`
  width: 55px;
  height: 55px;

  border-radius: 50%;
  background: var(--gray);

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: var(--black);
    font-size: 28px;
  }
`;