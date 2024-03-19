import {useState} from "react";
import {toast, ToastContainer} from 'react-toastify';

import {useApiPostRequest} from "../../hooks/apiRequests.js";
import {setAccessToken, setRefreshToken} from "../../utils/tokens.js";

import LinkText from '../LinkText/LinkText.jsx';
import FormButton from '../FormButton/FormButton.jsx';
import FieldEmail from '../fields/FieldEmail.jsx';
import FieldPassword from '../fields/FieldPassword.jsx';
import {Form, StyledText} from './forms.styled.js';


const FormLogin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const {data, sendData} = useApiPostRequest()
    const [isShow, setIsShow] = useState(false)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (e) => {
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
                console.log("send data")
                await sendData("/v1/auth/login", formData)
                setAccessToken(data.access_token)
                setRefreshToken(data.refresh_token)
                setIsShow(false)
                setFormData({
                    email: "",
                    password: "",
                })
                toast.success("Success")
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
