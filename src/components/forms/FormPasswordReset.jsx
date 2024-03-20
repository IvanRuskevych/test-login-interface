import {Form} from './forms.styled.js';
import FieldEmail from '../fields/FieldEmail.jsx';
import FormButton from '../FormButton/FormButton.jsx';
import LinkCancel from '../links/LinkCancel.jsx';
import {useState} from "react";
import {toast, ToastContainer} from 'react-toastify';

const FormPasswordReset = () => {
    const [formData, setFromData] = useState({
        email: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFromData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if (formData.email.length === 0) {
            toast.error("Enter email");
        } else if (!regexEmail.test(formData.email)) {
            toast.error("This is not a valid email");
        }
    }

    return (
        <>
            <ToastContainer/>
            <Form onSubmit={handleSubmit}>
                <FieldEmail value={formData.email} onChange={handleChange} placeholder={'Enter your email'} className={"field-email"}/>
                <FormButton type={'submit'} text={'Send'}/>
            </Form>
            <LinkCancel href={'v1/auth/login'} text={'Cancel'} className={'link-cancel'}/>
        </>
    );
};

export default FormPasswordReset;
