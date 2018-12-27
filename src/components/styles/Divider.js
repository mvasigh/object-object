import styled from 'styled-components';

export default styled.hr`
    border: 0;
    border-top: 2px solid ${({ theme }) => theme.darkAccent};
    margin-top: 1.8rem;
    margin-bottom: 1.6rem;
    margin-left: auto;
    margin-right: auto;
    width: 4.8rem;
`;
