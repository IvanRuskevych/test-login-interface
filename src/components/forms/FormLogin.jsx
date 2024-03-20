import {useState} from "react";
import {toast, ToastContainer} from 'react-toastify';
import {useApiPostRequest} from "../../hooks/apiRequests.js";
import {setAccessToken, setRefreshToken} from "../../utils/tokens.js";
import LinkText from '../LinkText/LinkText.jsx';
import FormButton from '../FormButton/FormButton.jsx';
import FieldEmail from '../fields/FieldEmail.jsx';
import FieldPassword from '../fields/FieldPassword.jsx';
import {Form, StyledText} from './forms.styled.js';
import {API_PATH, INIT_STAT, MESSAGES, REGEX} from "../../constants/constants.js";

const FormLogin = () => {
    const [formData, setFormData] = useState(INIT_STAT.LOGIN)
    const {data, sendData} = useApiPostRequest()
    const [isShow, setIsShow] = useState(false)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!isShow) {
            if (formData.email.length === 0) {
                toast.error(MESSAGES.ERR_EMAIL);
            } else if (!REGEX.EMAIL.test(formData.email)) {
                return toast.error(MESSAGES.ERR_EMAIL_INVALID);
            } else if (REGEX.EMAIL.test(formData.email)) {
                return setIsShow(true)
            }
        } else if (isShow) {
            if (formData.password.length < 8) {
                return toast.error(MESSAGES.ERR_PSW);
            } else {
                try {
                    await sendData(API_PATH.LOGIN, formData);
                    setAccessToken(data.access_token);
                    setRefreshToken(data.refresh_token);
                    setIsShow(false);
                    setFormData(INIT_STAT.LOGIN);
                    toast.success(MESSAGES.SUCCESS_MSG);
                } catch (error) {
                    toast.error(MESSAGES.ERR_LOGIN);
                }
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
                    className={isShow ? "field-email" : "field-psw-hide"}
                />
                {isShow &&
                    <>
                        <FieldPassword
                            name={"password"}
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <LinkText
                            href={"password-reset"}
                            text={'Forgot your password?'}
                            className={'forgot-psw'}
                        />
                    </>
                }
                <FormButton type={'submit'} text={'Log in to Qencode'}/>
            </Form>
            <StyledText>
                Is your company new to Qencode?&nbsp;
                <LinkText href={""} text={'Sign up'}/>
            </StyledText>
        </>
    )
        ;
};

export default FormLogin;
