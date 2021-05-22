import React, { ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';

import GlobalHeader from 'src/components/header';
import Sidebar from 'src/components/sidebar';
import { WHITE } from 'src/constants/colors';
import EmailTemplate from 'src/components/email-template';

export type GlobalLayoutProps = {
  children: ReactNode | ReactNodeArray;
};

export default function Home() {
  return (
    <Wrapper>
      <GlobalHeader />
      <Content>
        <Sidebar />
        <EmailTemplate />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${WHITE};
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
