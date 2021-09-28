import {Btn} from '../atoms/btn'
import { Wrapper } from '../atoms/wrapper';

export const CustomBtn = (props) => {
    return(
        <Wrapper>
            <Btn 
                {...props}
            />
        </Wrapper>
    );
}