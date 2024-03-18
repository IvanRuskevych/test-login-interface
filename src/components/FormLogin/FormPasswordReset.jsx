import { Form } from './FormLogin.styled.js';
import Field from '../fields/Field.jsx';
import FormButton from '../FormButton/FormButton.jsx';
import LinkCancel from '../LinkAuth/LinkCancel.jsx';

const FormPasswordReset = () => {
  return (
    <>
      <Form>
        <Field placeholder={'Enter your email'} />
        <FormButton type={'submit'} text={'Send'} />
      </Form>
      <LinkCancel href={'/login'} text={'Cancel'} className={'link-cancel'} />
    </>
  );
};

export default FormPasswordReset;
