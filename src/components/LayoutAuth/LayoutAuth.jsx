
import {Outlet} from 'react-router-dom';
import {
    AuthContainer,
    IconLogo,
    IconWrapper, Section
} from './LayoutAuth.styled.js';
import logo from '../../assets/icons/logo.svg';

const LayoutAuth = () => {
    return (
        <AuthContainer>
            <Section>
                <IconWrapper>
                    <IconLogo src={logo} alt="icon logo"/>
                </IconWrapper>
                <Outlet/>
            </Section>
        </AuthContainer>
    );

};

export default LayoutAuth;
