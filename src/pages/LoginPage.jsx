import LinkAuth from '../components/links/LinkAuth.jsx';
import FormLogin from '../components/forms/FormLogin.jsx';
import Separator from '../components/Separator/Separator.jsx';
import TitleAuth from '../components/TitleAuth/TitleAuth.jsx';
import {ButtonWrapper} from '../components/links/links.styled.js';
import iconGoogle from '../assets/icons/google.svg';
import iconGithub from '../assets/icons/github.svg';

const LoginPage = () => {
    return (
        <>
            <TitleAuth text={'Log in to your account'}/>
            <ButtonWrapper>
                <LinkAuth icon={iconGoogle} text={'Google'} href={`login`}/>
                <LinkAuth icon={iconGithub} text={'GitHub'} href={`login`}/>
            </ButtonWrapper>
            <Separator/>
            <FormLogin/>
        </>
    );

};

export default LoginPage;
