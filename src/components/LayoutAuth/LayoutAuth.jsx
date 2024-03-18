import { Outlet } from 'react-router-dom';
import { AuthContainer, IconLogo, IconWrapper, Section } from './LayoutAuth.styled.js';
// import logo from '../../assets/icons/logo.svg';
import vite from"../../../public/vite.svg"

const LayoutAuth = () => {
  return (
    <AuthContainer>
      <Section>
        <IconWrapper>
          <IconLogo src={vite} alt="icon logo" />
        </IconWrapper>
        <Outlet />
      </Section>
    </AuthContainer>
  );
};

export default LayoutAuth;
