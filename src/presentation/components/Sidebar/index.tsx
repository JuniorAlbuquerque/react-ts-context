import React from 'react';

import { Container } from './styles';

import { useSidebar } from '../../../data/context/sidebarContext';

export interface Props {
  active: boolean;
}

const Sidebar: React.FC = () => {
  const { active } = useSidebar();

  return (
    <Container active={active}>
    </Container>
  );
}

export default Sidebar;