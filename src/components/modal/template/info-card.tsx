import React from 'react';
import styled from 'styled-components';

import XIcon from 'src/assets/icons/x';
import { BLACK, SECONDARY } from 'src/constants/colors';

import TemplateService from 'src/services/api/template';

export type TemplateInfoCardProps = {
  id: number;
  title: string;
  content: string;
  selectTemplate: (id: number) => void;
};

export default function TemplateInfoCard({
  id,
  title,
  content,
  selectTemplate,
}: TemplateInfoCardProps) {
  const handleDeleteButtonClick = async () => {
    if (!confirm('Are you sure you want to delete the template?')) {
      return;
    }
    try {
      await TemplateService.deleteTemplate(id);
    } catch (err) {
      alert('Failed to delete template.');
      return;
    }
    alert('Template delete success!');
  };

  return (
    <Wrapper>
      <InfoWrapper
        onClick={() => {
          selectTemplate(id);
        }}
      >
        <Title>{title}</Title>
        <Content>{content}</Content>
      </InfoWrapper>
      <DeleteButton onClick={handleDeleteButtonClick}>
        <XIcon style={{ marginTop: '0.8rem' }} />
      </DeleteButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 8.6rem;
  &:hover {
    background-color: ${SECONDARY};
  }
`;

const InfoWrapper = styled.div`
  flex: 1;
  width: fit-content;
  margin-right: auto;
`;

const Title = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${BLACK};
  margin-bottom: 1.2rem;
`;

const Content = styled.p`
  display: -webkit-box;
  overflow: hidden;
  height: auto;
  font-size: 1.4rem;
  color: ${BLACK};
  text-overflow: ellipsis;
  word-break: keep-all;
  white-space: normal;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const DeleteButton = styled.button`
  border: none;
  background: none;
`;
