import React from 'react';
import styled from 'styled-components';

const BioContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.8rem 0;
    *:not(:last-child) {
        margin-right: 0.8rem;
    }
`;

const BioBlurb = styled.div`
    font-family: 'IBM Plex Mono', monospace;
    strong {
        color: ${({ theme }) => theme.shades['30']};
    }
`;

const BioLinks = styled.div`
    a {
        margin-right: 8px;
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
                    {bioLinks.map(link => (
                        <a style={{ marginRight: '8px' }} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </BioLinks>
            </BioContainer>
        );
    }
}

export default Bio;
