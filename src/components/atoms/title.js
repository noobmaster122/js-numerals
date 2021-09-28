import styled from 'styled-components'

export const Title = styled.p`
    font-size: 1.5em;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    color: ${props => props.customColor};
`;