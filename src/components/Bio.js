import React from 'react';
import styled from 'styled-components';

import {
    FiTwitter,
    FiGithub,
    FiCodepen,
    FiLinkedin,
    FiCode
} from 'react-icons/fi';

const BioContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 0;
    margin: 1.6rem 0;
    *:not(:last-child) {
        margin-right: 0.8rem;
    }

    @media screen and (max-width: 800px) {
        flex-direction: column;
        * {
            text-align: center;
        }
        div:not(:last-child) {
            margin-bottom: 1.6rem;
        }
    }
`;

const BioBlurb = styled.div`
    font-family: 'IBM Plex Sans', sans-serif;
    strong {
        color: ${({ theme }) => theme.primary};
    }
`;

const BioLinks = styled.div`
    a {
        display: inline-block;
        font-size: 1.4rem;
        :not(:first-child) {
            margin-left: 8px;
        }
    }
`;

class Bio extends React.Component {
    render() {
        return (
            <BioContainer>
                <BioBlurb>
                    <strong>Mehdi Vasigh</strong>, Full-Stack Developer based in
                    Houston, TX
                </BioBlurb>
                <BioLinks>
                    <a href="https://twitter.com/mehdi_vasigh">
                        <FiTwitter />
                    </a>
                    <a href="https://github.com/mvasigh">
                        <FiGithub />
                    </a>
                    <a href="https://codepen.io/vasighm/">
                        <FiCodepen />
                    </a>
                    <a href="https://www.linkedin.com/in/mehdi-vasigh/">
                        <FiLinkedin />
                    </a>
                </BioLinks>
            </BioContainer>
        );
    }
}

export default Bio;
