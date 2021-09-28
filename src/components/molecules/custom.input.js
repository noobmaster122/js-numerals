import {Input} from '../atoms/input';
import { Wrapper } from '../atoms/wrapper';

export const CustomInput = (props)=>{
    return(
        <Wrapper>
            <Input 
            placeholder="input number here"
            onChange={(e) => props.inputHandlerCB(e.target.value)}
            />
        </Wrapper>
    );
}