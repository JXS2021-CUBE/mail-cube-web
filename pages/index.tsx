import React, { ReactNode, ReactNodeArray, useState } from 'react';
import styled from 'styled-components';

import GlobalHeader from 'src/components/header';
import Sidebar from 'src/components/sidebar';
import EmailTemplate from 'src/components/email-template';
import { WHITE } from 'src/constants/colors';

export type GlobalLayoutProps = {
  children: ReactNode | ReactNodeArray;
};

export default function Home() {
  const [selectedFileId, setSelectedFileId] = useState<string>(null);

  return (
    <Wrapper>
      <GlobalHeader />
      <Content>
        <Sidebar setSelectedFileId={setSelectedFileId} />
        <EmailTemplate recipientExcelFileId={parseInt(selectedFileId, 10)} />
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
