import React from 'react';
import { Link } from 'gatsby';
import Container from './styles/Container';
import Header from './Header';

// *** Snippet from existing file:
// ---
// const rootPath = `${__PATH_PREFIX__}/`;
// let header;
// if (location.pathname === rootPath) {

class Layout extends React.Component {
    render() {
        const { title, children } = this.props;
        return (
            <Container>
                <Header title={title} />
                {children}
            </Container>
        );
    }
}

export default Layout;
