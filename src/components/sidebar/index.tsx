import React from 'react';
import styled from 'styled-components';

import ExcelInputSection from './section/excel-input';
import RecipientListSection from './section/recipient-list';
import { GREY } from 'src/constants/colors';

export default function Sidebar() {
  return (
    <Wrapper>
      <ExcelInputSection />
      <RecipientListSection />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 34.5rem;
  height: calc(100vh - 6rem);
  background-color: ${GREY[50]};
`;
