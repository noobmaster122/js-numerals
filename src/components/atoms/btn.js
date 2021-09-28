import styled from 'styled-components'
import {colors} from '../../theme/theme'

export const Btn = styled.button`
    border: 0;
    background-color: ${colors.primary};
    border-radius: 4px;
    width: 200px;
    max-width: 200px;
    height: 50px;
    color: ${colors.light.default};
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    box-shadow: ${colors.shEffect.default};
    &:hover{
        box-shadow: ${colors.shEffect.hovered};
        transition: all 0.5s 0s ease;
    }
`;