import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-self: start;
  background-color: ${p => p.theme.color.primary};
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: space-between;
  padding: ${p => p.theme.spacing.small};
  width: 100%;
`;

const Nav = () => (
  <Wrapper>
    <h1>Is it worth the time?</h1>
    <a href="https://xkcd.com/1205/">https://xkcd.com/1205/</a>
  </Wrapper>
);

export default Nav;
