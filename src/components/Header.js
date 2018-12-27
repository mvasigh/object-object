import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderStyles = styled.header`
    a,
    a:active {
        text-decoration: none;
        font-family: 'IBM Plex Mono', monospace;
        font-weight: 500;
        font-size: 1.4rem;
        letter-spacing: -1px;
        color: ${({ theme }) => theme.darkAccent};
    }
    padding: 1.8rem 0;
    .title,
    .title:active {
        color: ${({ theme }) => theme.primary};
    }
`;

class Header extends Component {
    render() {
        const { title } = this.props;
        return (
            <HeaderStyles>
                <Link to="/">
                    > <span className="title">{title}</span>
                </Link>
            </HeaderStyles>
        );
    }
}

export default Header;
