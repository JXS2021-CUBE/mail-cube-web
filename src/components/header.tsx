import React from 'react';
import styled from 'styled-components';

import { BLACK, PRIMARY } from 'src/constants/colors';

export default function GlobalHeader() {
  return (
    <Wrapper>
      <Title>
        Mail <Strong>Cube</Strong>
      </Title>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  flex: 1;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 4px 7px;
  padding: 1.4rem 0;
`;

const Title = styled.p`
  width: fit-content;
  margin: 0 auto;
  color: ${BLACK};
  font-size: 2.4rem;
  font-weight: bold;
`;

const Strong = styled.strong`
  color: ${PRIMARY};
  font-weight: bold;
`;
