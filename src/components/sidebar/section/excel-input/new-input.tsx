import React from 'react';
import styled from 'styled-components';

import { GREY, WHITE } from 'src/constants/colors';

export default function NewExcelFileInput() {
  return (
    <>
      <Label htmlFor="newExcelFileInput">
        <InputButton>
          <P>Import New File</P>
        </InputButton>
      </Label>
      <Input type="file" id="newExcelFileInput" />
    </>
  );
}

const InputButton = styled.div`
  display: flex;
  align-items: center;
  width: 20rem;
  height: 4rem;
  background-color: ${WHITE};
  border: 1px solid ${GREY[200]};
  border-radius: 0.5rem;
`;

const P = styled.p`
  width: fit-content;
  margin: 0 auto;
  font-size: 1.6rem;
  color: ${GREY[200]};
`;

const Label = styled.label`
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;
