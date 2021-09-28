import {Wrapper} from '../atoms/wrapper'
import {Title} from '../atoms/title'
import { colors } from '../../theme/theme';

export const Header = ({title, props}) => {
    return(
        <Wrapper
        BgColor={colors.primary}>
            <Title
            customColor={colors.light.default}>{title}</Title>
        </Wrapper>
    );
}