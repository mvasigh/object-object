import React from 'react';
import styled from 'styled-components';

const BioContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
        margin-right: 8px;
        display: inline-block;
    }
`;

class Bio extends React.Component {
    render() {
        const bioLinks = [
            {
                label: 'Website',
                href: 'https://mvasigh.github.io'
            },
            {
                label: 'Github',
                href: 'https://github.com/mvasigh'
            },
            {
                label: 'Codepen',
                href: 'https://codepen.io/vasighm/'
            },
            {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/mehdi-vasigh/'
            }
        ];

        return (
            <BioContainer>
                <BioBlurb>
                    <strong>Mehdi Vasigh</strong>, Full-Stack Developer based in
                    Houston, TX
                </BioBlurb>
                <BioLinks>
                    {bioLinks.map((link, i) => (
                        <a
                            key={i}
                            style={{ marginRight: '8px' }}
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                </BioLinks>
            </BioContainer>
        );
    }
}

export default Bio;
