import React from 'react';
import styled from 'styled-components';
import theme from './styles/Theme';

const BarStyles = styled.div`
    display: flex;
    flex-direction: row;
    height: 12px;
    width: 16rem;
    max-width: 60%;
    justify-content: flex-end;
    margin: 1.2rem 0 2.1rem;
`;

const CellStyles = styled.div`
    background-color: ${props => props.color};
    flex-basis: 1;
    width: 100%;
`;

const GradientBar = ({ reverse = false }) => {
    const shades = Object.values(theme.shades);
    const colors = reverse ? shades.reverse() : shades;
    // Colors from:  http://www.colorbox.io/ (Lock on theme primary color HEX)
    return (
        <BarStyles>
            {colors.map(color => (
                <CellStyles key={color} color={color} />
            ))}
        </BarStyles>
    );
};

export default GradientBar;
