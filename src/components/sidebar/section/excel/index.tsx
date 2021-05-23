import React from 'react';
import { GREY } from 'src/constants/colors';
import styled from 'styled-components';

import DownloadExcelButton from './download-excel';
import NewExcelFileInput from './new-input';
import RecentExcelFileSelect from './recent-select';

export default function ExcelInputSection() {
  return (
    <Wrapper>
      <DownloadExcelButton />
      <NewExcelFileInput />
      <RecentExcelFileSelect />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 2.6rem;
  border-bottom: 1px solid ${GREY[200]};
`;