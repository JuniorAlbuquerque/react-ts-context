import React from 'react';

import { Container, Main, Content } from './styles';

import Header from '../Header';
import Sidebar from '../Sidebar';

import SidebarProvider from '../../../data/context/sidebarContext';

const Layout: React.FC = () => {
  return (
    <Container>
      <SidebarProvider>
        <Sidebar />
        <Main>
          <Header />
          <Content>
          </Content>
        </Main>
      </SidebarProvider>
    </Container>
  );
}

export default Layout;