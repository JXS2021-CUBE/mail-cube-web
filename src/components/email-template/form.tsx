import React from 'react';
import styled from 'styled-components';

import { GREY, PRIMARY, WHITE } from 'src/constants/colors';

export default function Form() {
  return (
    <Wrapper>
      <TitleInput type="text" placeholder="Your E-mail Title" />
      <ContentWrapper>
        <ContentTextarea />
        <InfoText>
          {'! Please write ${' +
            "name} where you want to put the recipient's name."}
        </InfoText>
      </ContentWrapper>
      <ButtonWrapper>
        <TemplateButtonWrapper>
          <TemplateButton>Save Teamplate</TemplateButton>
          <TemplateButton>Add Template</TemplateButton>
        </TemplateButtonWrapper>
        <SendButton>Send</SendButton>
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

const SendButton = styled.button`
  width: 20rem;
  height: 5rem;
  border-radius: 2.5rem;
  background-color: ${PRIMARY};
  color: ${WHITE};
  font-size: 1.6rem;
  border: none;
`;
