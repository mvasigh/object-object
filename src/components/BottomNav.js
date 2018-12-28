import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const BottomNavStyles = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
`;

const BottomNav = ({ previous, next }) => (
    <BottomNavStyles>
        <li>
            {previous && (
                <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                </Link>
            )}
        </li>
        <li>
            {next && (
                <Link to={next.fields.slug} rel="prev">
                    {next.frontmatter.title} →
                </Link>
            )}
        </li>
    </BottomNavStyles>
);

export default BottomNav;
