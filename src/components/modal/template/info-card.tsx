import React from 'react';
import styled from 'styled-components';

import { BLACK, SECONDARY } from 'src/constants/colors';
import XIcon from 'src/assets/icons/x';

export type TemplateInfoCardProps = {
  id: number;
  name: string;
  content: string;
  setSelectedTemplateId: React.Dispatch<React.SetStateAction<number>>;
};

export default function TemplateInfoCard({
  id,
  name,
  content,
  setSelectedTemplateId,
}: TemplateInfoCardProps) {
  return (
    <Wrapper>
      <InfoWrapper
        onClick={() => {
          setSelectedTemplateId(id);
        }}
      >
        <Title>{name}</Title>
        <Content>{content}</Content>
      </InfoWrapper>
      <XIcon style={{ marginTop: '0.8rem' }} />
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
