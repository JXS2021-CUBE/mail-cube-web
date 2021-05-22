import React, { ReactNode, ReactNodeArray, useState } from 'react';
import styled from 'styled-components';

import GlobalHeader from 'src/components/header';
import Sidebar from 'src/components/sidebar';
import TemplateListViewModal from 'src/components/modal/template/list-view';
import { WHITE } from 'src/constants/colors';

export type GlobalLayoutProps = {
  children: ReactNode | ReactNodeArray;
};

export default function Home() {
  //임시 state
  const [isModalOpen, setModalOpen] = useState(true);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Wrapper>
      <GlobalHeader />
      <Content>
        <Sidebar />
        {isModalOpen && <TemplateListViewModal closeModal={closeModal} />}
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
