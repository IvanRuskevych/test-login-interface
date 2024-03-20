import {Form} from './forms.styled.js';
import FieldEmail from '../fields/FieldEmail.jsx';
import FormButton from '../FormButton/FormButton.jsx';
import LinkCancel from '../links/LinkCancel.jsx';
import {useState} from "react";
import {toast, ToastContainer} from 'react-toastify';
import {useApiPostRequest} from "../../hooks/apiRequests.js";

const FormPasswordReset = () => {
    const [formData, setFormData] = useState({
        email: ""
    })
    const {data, sendData} = useApiPostRequest()

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if (formData.email.length === 0) {
            toast.error("Enter email");
        } else if (!regexEmail.test(formData.email)) {
            toast.error("This is not a valid email");
        } else if (regexEmail.test(formData.email)) {
            try {
                await sendData("/v1/auth/password-reset", formData);
                setFormData({email: "",});
                toast.success(`Please check your email ${formData.email} to complete the password reset process`);
            } catch (error) {
                toast.error("Failed to reset password. Please try again later.");
            }
        }
    }

    return (
        <>
            <ToastContainer/>
            <Form onSubmit={handleSubmit}>
                <FieldEmail value={formData.email} onChange={handleChange} placeholder={'Enter your email'}
                            className={"field-email"}/>
                <FormButton type={'submit'} text={'Send'}/>
            </Form>
            <LinkCancel href={'v1/auth/login'} text={'Cancel'} className={'link-cancel'}/>
        </>
    );
};

export default FormPasswordReset;
