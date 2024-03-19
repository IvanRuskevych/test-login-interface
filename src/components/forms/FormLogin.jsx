import {Form, StyledText} from './forms.styled.js';
import LinkText from '../LinkText/LinkText.jsx';
import FormButton from '../FormButton/FormButton.jsx';
import FieldEmail from '../fields/FieldEmail.jsx';
import FieldPassword from '../fields/FieldPassword.jsx';

import {toast, ToastContainer} from 'react-toastify';
import {useState} from "react";

const FormLogin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [isShow, setIsShow] = useState(false)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if (!isShow) {
            if (formData.email.length === 0) {
                toast.error("Enter email");
            } else if (!regexEmail.test(formData.email)) {
                return toast.error("This is not a valid email");
            } else if (regexEmail.test(formData.email)) {
                return setIsShow(true)
            }
        } else if (isShow) {
            if (formData.password.length < 8) {
                return toast.error("Password must be less than 8 characters");
            } else {
                toast.success("Success")
                console.log("send data")

                setIsShow(false)
                setFormData({
                    email: "",
                    password: "",
                })
            }
        }

    }

    return (
        <>
            <ToastContainer/>
            <Form onSubmit={handleSubmit}>
                <FieldEmail
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={"Work email"}
                    className={isShow ? "field-psw-show" : "field-psw-hide"}
                />

                {isShow &&
                    <>
                        <FieldPassword
                            name={"password"}
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <LinkText
                            href={'v1/auth/password-reset'}
                            text={'Forgot your password?'}
                            className={'forgot-psw'}/>
                    </>
                }
                <FormButton type={'submit'} text={'Log in to Qencode'}/>
            </Form>
            <StyledText>
                Is your company new to Qencode?&nbsp;
                <LinkText href={'v1/auth/'} text={' Sign up'}/>
            </StyledText>
        </>
    );
};

export default FormLogin;
