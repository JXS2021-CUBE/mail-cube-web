import React from 'react';
import { GREY } from 'src/constants/colors';
import styled from 'styled-components';

import DownloadExcelButton from './download-excel';
import NewExcelFileInput from './new-input';
import RecentExcelFileSelect from './recent-select';

export default function ExcelInputSection({
  setSelectedFileId,
}: {
  setSelectedFileId: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Wrapper>
      <DownloadExcelButton />
      <NewExcelFileInput />
      <RecentExcelFileSelect setSelectedFileId={setSelectedFileId} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 2.6rem;
  border-bottom: 1px solid ${GREY[200]};
`;
