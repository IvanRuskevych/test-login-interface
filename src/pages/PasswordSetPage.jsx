import TitleAuth from '../components/TitleAuth/TitleAuth.jsx';
import FormPasswordSet from '../components/forms/FormPasswordSet.jsx';

const PasswordSetPage = () => {
  return (
    <>
      <TitleAuth text={'Create new Password?'} />
      <FormPasswordSet />
    </>
  );
};

export default PasswordSetPage;
