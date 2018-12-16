import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import 'typeface-ibm-plex-mono';

const HeaderStyles = styled.header`
    padding: 1.2rem 0.8rem;
    .title {
        font-family: 'IBM Plex Mono', monospace;
        font-weight: 700;
        font-size: 2.2rem;
    }
`;

class Header extends Component {
    render() {
        const { title } = this.props;
        return (
            <HeaderStyles>
                <div className="title">{title}</div>
            </HeaderStyles>
        );
    }
}

export default Header;
