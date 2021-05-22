import React from 'react';
import styled from 'styled-components';

import ExcelInputSection from './section/excel-input';
import { GREY } from 'src/constants/colors';

export default function Sidebar() {
  return (
    <Wrapper>
      <ExcelInputSection />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 34.5rem;
  height: 100vh;
  background-color: ${GREY[50]};
`;
