import TitleAuth from '../components/TitleAuth/TitleAuth.jsx';
import FormPasswordReset from '../components/FormLogin/FormPasswordReset.jsx';

const PasswordResetPage = () => {
  return (
    <>
      <TitleAuth text={'Forgot Password?'} />
      <FormPasswordReset />
    </>
  );
};

export default PasswordResetPage;
