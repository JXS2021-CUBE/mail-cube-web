import React, { useState } from 'react';
import styled from 'styled-components';

import { GREY, PRIMARY, WHITE } from 'src/constants/colors';

import TemplateService from 'src/services/api/template';
import EmailService from 'src/services/api/email';
import { TemplateType } from 'src/types';

export type EmailFormProps = {
  recipientExcelFileId: number;
  selectedTemplate: TemplateType;
};

export default function EmailForm({
  recipientExcelFileId,
  selectedTemplate,
}: EmailFormProps) {
  const [title, setTitle] = useState(selectedTemplate?.title || '');
  const [content, setContent] = useState(selectedTemplate?.content || '');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const saveTemplate = async (e) => {
    e.preventDefault();

    if (!title) {
      alert('Please enter a title.');
      return;
    }
    if (!content) {
      alert('Please enter your content.');
      return;
    }
    try {
      await TemplateService.update(selectedTemplate?.id, { title, content });
    } catch (err) {
      alert('Failed to save template.');
      return;
    }
    alert('Template save success!');
  };

  const addTemplate = async (e) => {
    e.preventDefault();

    if (!title) {
      alert('Please enter a title.');
      return;
    }
    if (!content) {
      alert('Please enter your content.');
      return;
    }
    try {
      await TemplateService.create({ title, content });
    } catch (err) {
      alert('Failed to add template.');
      return;
    }
    alert('Template add success!');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recipientExcelFileId) {
      alert('Please upload excel file to register your recipients.');
    }
    if (!title) {
      alert('Please enter a title.');
      return;
    }
    if (!content) {
      alert('Please enter your content.');
      return;
    }
    const { TEST_SENDER_NAME, TEST_SENDER_EMAIL } = process.env;

    try {
      await EmailService.create(recipientExcelFileId, {
        title,
        content,
        senderName: TEST_SENDER_NAME,
        senderEmail: TEST_SENDER_EMAIL,
      });
    } catch (err) {
      alert('Failed to send email.');
      return;
    }
    alert('Email send success!');
  };

  return (
    <Wrapper>
      <TitleInput
        type="text"
        placeholder="Your E-mail Title"
        value={title}
        onChange={handleTitleChange}
      />
      <ContentWrapper>
        <ContentTextarea value={content} onChange={handleContentChange} />
        <InfoText>
          {'! Please write ${' +
            "name} where you want to put the recipient's name."}
        </InfoText>
      </ContentWrapper>
      <ButtonWrapper>
        <TemplateButtonWrapper>
          {selectedTemplate && (
            <TemplateButton onClick={saveTemplate}>
              Save Teamplate
            </TemplateButton>
          )}
          <TemplateButton onClick={addTemplate}>Add Template</TemplateButton>
        </TemplateButtonWrapper>
        <SubmitButton onClick={handleSubmit}>Send</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 5rem;
  border: none;
  border-bottom: 2px solid ${GREY[400]};
  margin-bottom: 2rem;
  font-size: 3.6rem;
  font-weight: bold;
  ::placeholder {
    color: ${GREY[400]};
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 65%;
  margin-bottom: 2rem;
  border: none;
  box-shadow: 0px 1px 8px rgba(27, 29, 31, 0.12);
  border-radius: 0.6rem;
  transform: matrix(1, 0, 0);
  padding: 5rem 5rem 0 5rem;
  display: flex;
  flex-direction: column;
`;

const ContentTextarea = styled.textarea`
  resize: none;
  width: 100%;
  font-size: 1.5rem;
  height: 100%;
  border: none;
`;

const InfoText = styled.p`
  color: ${GREY[200]};
  font-size: 1.5rem;
  margin: 2rem 0 2.7rem 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TemplateButtonWrapper = styled.div``;

const TemplateButton = styled.button`
  width: 20rem;
  height: 4rem;
  margin-right: 1rem;
  border: 1px solid ${GREY[200]};
  border-radius: 0.5rem;
  color: ${GREY[200]};
  font-size: 1.6rem;
  background-color: ${WHITE};
`;

const SubmitButton = styled.button`
  width: 20rem;
  height: 5rem;
  border-radius: 2.5rem;
  background-color: ${PRIMARY};
  color: ${WHITE};
  font-size: 1.6rem;
  border: none;
`;
