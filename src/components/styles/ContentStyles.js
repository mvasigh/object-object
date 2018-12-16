import styled from 'styled-components';

const ContentStyles = styled.div`
    h1,
    h2,
    h3,
    h4 {
        padding: 1.2rem 0 0;
    }

    h1 {
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 1.8rem;
        color: ${({ theme }) => theme.primary};
    }

    h2 {
        font-family: 'IBM Plex Mono', sans-serif;
        font-size: 1.6rem;
        font-weight: 500;
        color: ${({ theme }) => theme.accent};
    }

    h2.title {
        font-size: 2rem;
        font-weight: 700;
        padding-bottom: 0;
        color: ${({ theme }) => theme.primary};
    }

    h3 {
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 1.3rem;
        font-weight: 600;
        opacity: 0.9;
        color: ${({ theme }) => theme.primaryDark};
    }

    p {
        font-family: 'IBM Plex Sans', sans-serif;
        padding-top: 0.6rem;
        padding-bottom: 1.2rem;
        line-height: 1.6;
        color: ${({ theme }) => theme.primaryDark};
    }

    p.date {
        color: ${({ theme }) => theme.primary};
        opacity: 0.6;
        padding-top: 0;
    }
`;

export default ContentStyles;
