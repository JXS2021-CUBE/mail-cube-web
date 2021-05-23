import React, { useState } from 'react';
import styled from 'styled-components';

import TemplateListViewModal from 'src/components/modal/template/list-view';
import EmailForm from 'src/components/email-template/form';
import { GREY, WHITE } from 'src/constants/colors';

import { useTemplate } from 'src/hooks/api/template';

export type EmailTemplateProps = {
  recipientExcelFileId: number;
};

export default function EmailTemplate({
  recipientExcelFileId,
}: EmailTemplateProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState<number>(null);
  const { data } = useTemplate(selectedTemplateId);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <TemplateListViewModal
          closeModal={closeModal}
          setSelectedTemplateId={setSelectedTemplateId}
        />
      )}
      <Wrapper>
        <ButtonWrapper>
          <ModalOpenButton onClick={openModal}>Choose Template</ModalOpenButton>
        </ButtonWrapper>
        <EmailForm
          recipientExcelFileId={recipientExcelFileId}
          selectedTemplate={data?.result}
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  margin-top: 6rem;
  padding: 3rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalOpenButton = styled.button`
  width: 20rem;
  height: 4rem;
  margin-right: 1rem;
  border: 1px solid ${GREY[200]};
  border-radius: 0.5rem;
  color: ${GREY[200]};
  font-size: 1.6rem;
  background-color: ${WHITE};
`;
