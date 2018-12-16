import React from 'react';
import styled from 'styled-components';
import avatar from './avatar.jpg';

const Avatar = styled.img`
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 10px;
`;

const BioStyles = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0.8rem 0;
    *:not(:last-child) {
        margin-right: 0.8rem;
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
            <BioStyles>
                <Avatar src={avatar} alt={`Mehdi Vasigh`} />
                <div>
                    <span>
                        By <strong>Mehdi Vasigh</strong>, Software Developer
                        living in Houston, TX
                    </span>
                    <div>
                        {bioLinks.map(link => (
                            <a style={{ marginRight: '8px' }} href={link.href}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </BioStyles>
        );
    }
}

export default Bio;
