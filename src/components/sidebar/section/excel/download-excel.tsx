import React from 'react';
import styled from 'styled-components';

import { PRIMARY, WHITE } from 'src/constants/colors';

export default function DownloadExcelButton() {
  return (
    <A href="mailcube_list.xlsx" download>
      <DownloadButton>Download Excel Form</DownloadButton>
    </A>
  );
}

const A = styled.a`
  text-decoration: none;
`;

const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  width: 20rem;
  height: 4rem;
  background-color: ${PRIMARY};
  color: ${WHITE};
  border-radius: 0.5rem;
  font-size: 1.6rem;
  border: none;
  margin-bottom: 1.6rem;
  justify-content: center;
`;
