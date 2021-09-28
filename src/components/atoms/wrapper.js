import styled from 'styled-components'

export const Wrapper = styled.div`
height: ${props => props.CustomHeight};
background-color: ${props => props.BgColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
`;