import React from 'react';
import styled from 'styled-components';

import TemplateInfoCard from './info-card';
import { BLACK, WHITE } from 'src/constants/colors';

const TEMPLATE_DATA = [
  {
    name: '이것은 이메일1 제목입니다.',
    content:
      '이것은 이메일1 내용입니다.이것은 이메일1 내용입니다.이것은 이메일1 내용입니다.이것은 이메일1 내용입니다.이것은 이메일1 내용입니다.',
  },
  {
    name: '이것은 이메일2 제목입니다.',
    content:
      '이것은 이메일2 내용입니다.이것은 이메일2 내용입니다.이것은 이메일2 내용입니다.이것은 이메일2 내용입니다.이것은 이메일2 내용입니다.',
  },
  {
    name: '이것은 이메일3 제목입니다.',
    content:
      '이것은 이메일3 내용입니다.이것은 이메일3 내용입니다.이것은 이메일3 내용입니다.이것은 이메일3 내용입니다.이것은 이메일3 내용입니다.',
  },
  {
    name: '이것은 이메일4 제목입니다.',
    content:
      '이것은 이메일4 내용입니다.이것은 이메일4 내용입니다.이것은 이메일4 내용입니다.이것은 이메일4 내용입니다.이것은 이메일4 내용입니다.',
  },
  {
    name: '이것은 이메일5 제목입니다.',
    content:
      '이것은 이메일5 내용입니다.이것은 이메일5 내용입니다.이것은 이메일5 내용입니다.이것은 이메일5 내용입니다.이것은 이메일5 내용입니다.',
  },
  {
    name: '이것은 이메일6 제목입니다.',
    content:
      '이것은 이메일6 내용입니다.이것은 이메일6 내용입니다.이것은 이메일6 내용입니다.이것은 이메일6 내용입니다.이것은 이메일6 내용입니다.',
  },
];

export type TemplateListViewModalProps = {
  closeModal: () => void;
};

export default function TemplateListViewModal({
  closeModal,
}: TemplateListViewModalProps) {
  const selectTemplate = (e) => {
    e.stopPropagation();
    closeModal();
  };

  return (
    <Overlay onClick={closeModal}>
      <Wrapper onClick={selectTemplate}>
        <Title>Template List</Title>
        {TEMPLATE_DATA.map((v, i) => (
          <TemplateInfoCard key={v.name} id={i} {...v} />
        ))}
      </Wrapper>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  width: 100%;
  height: 100vh;
  background-color: rgba(27, 29, 31, 0.2);
`;

const Wrapper = styled.div`
  width: 84%;
  height: 84%;
  overflow-y: scroll;
  padding: 2.4rem 0;
  background-color: ${WHITE};
  border-radius: 2rem;
`;

const Title = styled.p`
  width: fit-content;
  margin: 0 auto 3.6rem;
  font-size: 2.4rem;
  font-weight: 700;
  color: ${BLACK};
`;
