import React from 'react';

import { Container, Icon, Avatar } from './styles';

import { RiMenu2Line } from 'react-icons/ri';

import { useSidebar } from '../../../data/context/sidebarContext';

const Header: React.FC = () => {
  const { active, setActive } = useSidebar();

  return (
    <Container>
        <Icon>
          <RiMenu2Line onClick={() => setActive(!active)} color={'#49E9FF'} size={24}/>
        </Icon>
        <Avatar>
          <span>J</span>
        </Avatar>
    </Container>
  );
}

export default Header;