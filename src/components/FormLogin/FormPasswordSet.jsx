import PropTypes from 'prop-types';
import { Form } from './FormLogin.styled.js';
import FieldPassword from '../fields/FieldPassword.jsx';
import FormButton from '../FormButton/FormButton.jsx';
import LabelText from '../LabelText/LabelText.jsx';

const FormPasswordSet = (props) => {
  return (
    <Form>
      <LabelText text={'Password'} />
      <FieldPassword />
      <LabelText text={'Confirm Password'} />
      <FieldPassword className={'password-set'} />
      <FormButton text={'Reset Password'} type={'submit'} />
    </Form>
  );
};

FormPasswordSet.propTypes = {};

export default FormPasswordSet;
