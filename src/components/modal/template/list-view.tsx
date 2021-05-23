import React from 'react';
import styled from 'styled-components';

import TemplateInfoCard from './info-card';
import { BLACK, WHITE } from 'src/constants/colors';

import { useTemplateList } from 'src/hooks/api/template';

export type TemplateListViewModalProps = {
  closeModal: () => void;
  setSelectedTemplateId: React.Dispatch<React.SetStateAction<number>>;
};

export default function TemplateListViewModal({
  closeModal,
  setSelectedTemplateId,
}: TemplateListViewModalProps) {
  const { data } = useTemplateList();

  const selectTemplate = (id: number) => {
    setSelectedTemplateId(id);
    closeModal();
  };

  return (
    <Overlay onClick={closeModal}>
      <Wrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Title>Template List</Title>
        {data?.result?.map(({ id, title, content }) => (
          <TemplateInfoCard
            key={id}
            id={id}
            title={title}
            content={content}
            selectTemplate={selectTemplate}
          />
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
