import {Form, StyledText} from './FormLogin.styled.js';
import LinkText from '../LinkText/LinkText.jsx';
import FormButton from '../FormButton/FormButton.jsx';
import Field from '../fields/Field.jsx';
import FieldPassword from '../fields/FieldPassword.jsx';

const FormLogin = () => {
    return (
        <>
            <Form>
                <Field placeholder={'Work email'}/>
                <FieldPassword/>
                <LinkText href={'v1/auth/password-reset'} text={'Forgot your password?'} className={'forgot-psw'}/>
                <FormButton type={'submit'} text={'Log in to Qencode'}/>
            </Form>
            <StyledText>
                Is your company new to Qencode?
                <LinkText href={'/'} text={'Sign up'}/>
            </StyledText>
        </>
    );
};

export default FormLogin;
