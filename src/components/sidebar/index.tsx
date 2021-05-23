import React, { useState } from 'react';
import styled from 'styled-components';

import ExcelInputSection from './section/excel';
import RecipientListSection from './section/recipient-list';
import { GREY } from 'src/constants/colors';

export default function Sidebar({
  selectedFileId,
  setSelectedFileId,
}: {
  selectedFileId: string;
  setSelectedFileId: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [fileName, setFileName] = useState<string>('');

  return (
    <Wrapper>
      <ExcelInputSection
        setSelectedFileId={setSelectedFileId}
        setFileName={setFileName}
      />
      <RecipientListSection
        fileName={fileName}
        selectedFileId={selectedFileId}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 34.5rem;
  height: calc(100vh - 6rem);
  margin-top: 6rem;
  background-color: ${GREY[50]};
`;
