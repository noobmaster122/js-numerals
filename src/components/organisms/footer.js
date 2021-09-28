import {Wrapper} from '../atoms/wrapper'
import {Link} from '../atoms/link'
import { colors } from '../../theme/theme';

export const Footer = ({title}) => {
    return(
        <Wrapper
        BgColor={colors.primary}
        CustomHeight="50px">
            <Link
            href="https://github.com/noobmaster122/js-numerals" target="_blank">{title}</Link>
        </Wrapper>
    );
}