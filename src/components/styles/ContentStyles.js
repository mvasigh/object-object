import styled from 'styled-components';

const ContentStyles = styled.div`
    h1,
    h2,
    h3,
    h4 {
        margin-bottom: 1rem;
    }

    h1 {
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 1.8rem;
        color: ${({ theme }) => theme.dark};
    }

    h2 {
        font-family: 'IBM Plex Mono', sans-serif;
        font-size: 1.6rem;
        font-weight: 500;
        color: ${({ theme }) => theme.primary};
    }

    h2.title {
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: 0.6rem;
        color: ${({ theme }) => theme.dark};
    }

    h3 {
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 1.2rem;
        font-weight: 500;
        opacity: 0.9;
        color: ${({ theme }) => theme.dark};
    }

    p {
        font-family: 'IBM Plex Sans', sans-serif;
        margin-bottom: 1.8rem;
        line-height: 1.6;
        color: ${({ theme }) => theme.dark};
    }

    p.date {
        color: ${({ theme }) => theme.darkAccent};
        padding-top: 0;
        margin-bottom: 0;
    }

    pre {
        margin-bottom: 1.8rem;
    }
`;

export default ContentStyles;