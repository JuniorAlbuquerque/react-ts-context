import styled from 'styled-components';

import { Props } from '.';

export const Container = styled.div<Props>`
  background: var(--black);
  height: 100vh;

  width: 238px;
  border-right: 1px solid var(--gray);

  margin-left: ${props => props.active ? '0px' : '-238px'};

  transition: margin-left .35s;
`;
