import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderStyles = styled.header`
    padding: 1.8rem 0;
    .title,
    .title:active {
        text-decoration: none;
        font-family: 'IBM Plex Mono', monospace;
        font-weight: 500;
        font-size: 2.2rem;
        letter-spacing: -1px;
        color: ${({ theme }) => theme.accent};
    }
`;

class Header extends Component {
    render() {
        const { title } = this.props;
        return (
            <HeaderStyles>
                <Link className="title" to="/">
                    {title}
                </Link>
            </HeaderStyles>
        );
    }
}

export default Header;
