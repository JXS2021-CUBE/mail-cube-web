import React from 'react';
import styled from 'styled-components';

import { BLACK, GREY } from 'src/constants/colors';

const RECIPIENT_DATA = [
  { name: '가나다', email: '1111111@gmail.com' },
  { name: '나다라', email: '2222222@gmail.com' },
  { name: '다라마', email: '3333333@gmail.com' },
  { name: '라마바', email: '4444444@gmail.com' },
  { name: '마바사', email: '5555555@gmail.com' },
  { name: '바사아', email: '6666666@gmail.com' },
  { name: '가나다', email: '1111111@gmail.com' },
  { name: '나다라', email: '2222222@gmail.com' },
  { name: '다라마', email: '3333333@gmail.com' },
  { name: '라마바', email: '4444444@gmail.com' },
  { name: '마바사', email: '5555555@gmail.com' },
  { name: '바사아', email: '6666666@gmail.com' },
  { name: '가나다', email: '1111111@gmail.com' },
  { name: '나다라', email: '2222222@gmail.com' },
  { name: '다라마', email: '3333333@gmail.com' },
  { name: '라마바', email: '4444444@gmail.com' },
  { name: '마바사', email: '5555555@gmail.com' },
  { name: '바사아', email: '6666666@gmail.com' },
  { name: '가나다', email: '1111111@gmail.com' },
  { name: '나다라', email: '2222222@gmail.com' },
  { name: '다라마', email: '3333333@gmail.com' },
  { name: '라마바', email: '4444444@gmail.com' },
  { name: '마바사', email: '5555555@gmail.com' },
  { name: '바사아', email: '6666666@gmail.com' },
];

export default function RecipientListSection() {
  return (
    <Wrapper>
      <Title>File Name</Title>
      <RecipientWrapper>
        {RECIPIENT_DATA.map(({ name, email }, index) => (
          <P key={name + index}>
            {name}({email})
          </P>
        ))}
      </RecipientWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  height: calc(100% - 19.6rem);
  overflow-y: scroll;
  padding: 0 1rem;
  margin: 1.6rem 1.6rem;
  -ms-overflow-style: auto;
  &::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: ${GREY[200]};
    width: 0.4rem;
    opacity: 1;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
`;

const Title = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${BLACK};
  margin-bottom: 2rem;
`;

const RecipientWrapper = styled.div`
  width: 100%;
  margin-left: 0.4rem;
`;

const P = styled.p`
  font-size: 1.6rem;
  color: ${BLACK};
  margin: 0 0 1.6rem 0.4rem;
`;
