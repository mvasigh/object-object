import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import Container from './styles/Container';
import Header from './Header';

import 'typeface-ibm-plex-mono';
import 'typeface-ibm-plex-sans';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        background-color: ${({ theme }) => theme.white};
    }
    body {
        font-family: 'IBM Plex Sans', 'Roboto', sans-serif;
    }
    a,
    a:active {
        color: ${({ theme }) => theme.primary};
        transition: 0.2s;
    }
    a:hover {
        color: ${({ theme }) => theme.primaryAccent};
        transition: 0.2s;
    }
`;

class Layout extends React.Component {
    render() {
        const { title, children } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <Container>
                    <GlobalStyle />
                    <Header title={title} />
                    {children}
                </Container>
            </ThemeProvider>
        );
    }
}

export default Layout;
