import LinkAuth from '../components/LinkAuth/LinkAuth.jsx';
import FormLogin from '../components/FormLogin/FormLogin.jsx';
import Separator from '../components/Separator/Separator.jsx';
import TitleAuth from '../components/TitleAuth/TitleAuth.jsx';
import { ButtonWrapper } from '../components/LinkAuth/LinkAuth.styled.js';
// import iconGoogle from '../assets/icons/google.svg';
// import iconGithub from '../assets/icons/github.svg';

import vite from "../../public/vite.svg"
import react from "../assets/react.svg"

const LoginPage = () => {
  return (
    <>
      <TitleAuth text={'Log in to your account'} />
      <ButtonWrapper>
        {/*<LinkAuth icon={iconGoogle} text={"Google"} href={`https://github.com/`}/>*/}
        <LinkAuth icon={vite} text={'Google'} href={`/password-reset`} />
        <LinkAuth icon={react} text={'GitHub'} href={`/password-set`} />
      </ButtonWrapper>
      <Separator />
      <FormLogin />
    </>
  );
};

export default LoginPage;
