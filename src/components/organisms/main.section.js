import {useState} from 'react'
import {Wrapper} from '../atoms/wrapper'
import {Title} from '../atoms/title';
import {Gif} from '../atoms/gif';
import giphy from '../../assests/img/giphy.gif';
import {CustomInput} from '../molecules/custom.input'
import {breakDown} from '../../utils/numeric.to.words'
import {CustomBtn} from '../molecules/custom.btn'
 
export const PuzzleSection = () => {
    const [numericValue, setNumericValue] = useState('')
    const [stringValue, setStringValue] = useState('');

    const isNumber = (x) => {
        return /^[0-9]*$/.test(x)
    }

    const noLeadingZero = (x) => {
        return /^[1-9]\d*(\.\d+)?$/.test(x)
    }

    const inputHandler = () => (x) => {
        setNumericValue(`${x}`)
    }

    const clickHandler = () => {
        
        if(!!isNumber(numericValue) && numericValue == 0) return setStringValue("zero");
        if(!!!numericValue) return setStringValue("must enter a number !")
        if(!!!noLeadingZero(numericValue)) return setStringValue("cant accept value with leading zeros");
        if(!!!isNumber(numericValue)) return setStringValue("enter whole numbers only !");
        if(!!isNumber(numericValue) && !!numericValue){
            let x = breakDown(numericValue);
            // filter out empty strings (what would have been a zero*)
            let res = breakDown(numericValue).split(' ').filter(word => word.length > 1);
            //filter out leading and keyword
            if(res[0] == 'and'){
                res = res.slice(1, res.length).join(' '); 
                return setStringValue(res);
            }        
            // filter out tailing and keyword    
            if(res[res.length - 1] == 'and'){
                res = res.slice(0, -1).join(' '); 
                return setStringValue(res);
            }
            // write into state
            return setStringValue(x);
        }
    }

    return(
        <Wrapper>
            <Wrapper>
                <Title>have to help hoomans !</Title>    
            </Wrapper>
            <Wrapper>
                <Gif src={giphy} /> 
            </Wrapper>
            <CustomInput 
            inputHandlerCB={inputHandler()}
            />
            <CustomBtn 
                onClick={()=>clickHandler()}
            >
                   convert
            </CustomBtn>
            <Wrapper>
                <Title>{stringValue}</Title>
            </Wrapper>
        </Wrapper>
    );
}