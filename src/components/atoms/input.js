import styled from 'styled-components';
import {colors} from '../../theme/theme'

export const Input = styled.input`
    border: 2px solid ${colors.primary};
    height: 50px;
    text-align: center;
    border-radius: 4px;
    width: 200px;
    max-width: 200px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    &:focus{
        outline: none;
        
    }
`;