import React, { useState } from 'react';
import styled from 'styled-components';

import ChevronDownIcon from 'src/assets/icons/chevron/down';
import { WHITE, GREY, BLACK } from 'src/constants/colors';
import { useExcelList } from 'src/hooks/api/excel';

// 백엔드 연결되면 삭제 예정
const OPTION_DATA = [
  { value: 'Cat', text: 'Cat' },
  { value: 'Dog', text: 'Dog' },
];

export default function RecentExcelFileSelect({
  setSelectedFileId,
  setFileName,
}: {
  setSelectedFileId: React.Dispatch<React.SetStateAction<string>>;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { data } = useExcelList();

  const handleChange = (e) => {
    const selected = data.result.filter((item) => item.name === e.target.value);
    setSelectedFileId(selected[0].id.toString());
    setFileName(e.target.value);
  };

  return (
    <>
      <Select onChange={handleChange}>
        <Option selected disabled>
          Open Recent File
        </Option>
        {
          // 백엔드 연결되면 삭제 예정
        }
        {data
          ? data.result.map(({ id, blob_url, name, datetime }) => (
              <Option key={id} value={name}>
                {name}
              </Option>
            ))
          : OPTION_DATA.map(({ value, text }) => (
              <Option key={value} value={value}>
                {text}
              </Option>
            ))}
      </Select>
      <ChevronDownIcon style={{ position: 'relative', right: '2.8rem' }} />
    </>
  );
}

const Select = styled.select`
  width: 20rem;
  height: 4rem;
  padding: 0.8rem 1.6rem 1rem;
  margin-top: 1.6rem;
  font-size: 1.6rem;
  color: ${GREY[200]};
  background-color: ${WHITE};
  border: 1px solid ${GREY[200]};
  border-radius: 0.5rem;
  appearance: none;
`;

const Option = styled.option<{ value?: string }>`
  color: ${({ value }) => (value ? BLACK : GREY[200])};
  font-size: 1.6rem;
`;
