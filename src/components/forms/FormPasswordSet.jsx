import {Form} from './forms.styled.js';
import FieldPassword from '../fields/FieldPassword.jsx';
import FormButton from '../FormButton/FormButton.jsx';
import LabelText from '../LabelText/LabelText.jsx';
import {useState} from "react";
import {toast, ToastContainer} from 'react-toastify';


const FormPasswordSet = () => {
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.password.length < 8) {
            toast.error("Password must be less than 8 characters");
        } else if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
        }
    }

    return (
        <>
            <ToastContainer/>
            <Form onSubmit={handleSubmit}>
                <LabelText text={'Password'}/>
                <FieldPassword name={"password"} value={formData.password} onChange={handleChange}/>
                <LabelText text={'Confirm Password'}/>
                <FieldPassword name={"confirmPassword"} value={formData.confirmPassword} onChange={handleChange}
                               className={'password-set'}/>
                <FormButton text={'Reset Password'} type={'submit'}/>
            </Form>
        </>
    );
};

FormPasswordSet.propTypes = {};

export default FormPasswordSet;