import React from 'react';
import styled from 'styled-components';

const TagStyles = styled.span`
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.8rem;
    font-weight: 500;
    padding: 0.2rem 0.4rem;
    background-color: ${({ theme }) => theme.shades['10']};
`;

const Tag = ({ text }) => <TagStyles>#{text}</TagStyles>;

export default Tag;
