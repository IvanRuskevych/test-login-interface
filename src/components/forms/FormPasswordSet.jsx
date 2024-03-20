import {useState} from "react";
import {toast, ToastContainer} from 'react-toastify';
import {useApiPostRequest} from "../../hooks/apiRequests.js";
import FieldPassword from '../fields/FieldPassword.jsx';
import FormButton from '../FormButton/FormButton.jsx';
import LabelText from '../LabelText/LabelText.jsx';
import {API_PATH, INIT_STAT, MESSAGES} from "../../constants/constants.js";
import {Form} from './forms.styled.js';

const FormPasswordSet = () => {
    const [formData, setFormData] = useState(INIT_STAT.PSW_SET)
    const {sendData} = useApiPostRequest()

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formData.password.length < 8) {
            toast.error(MESSAGES.ERR_PSW);
        } else if (formData.password !== formData.confirmPassword) {
            toast.error(MESSAGES.ERR_PSW_MATCH);
        } else {
            try {
                await sendData(API_PATH.PSW_SET, formData);
                setFormData(INIT_STAT.PSW_SET);
                toast.success(MESSAGES.SUCCESS_PSW_RESET);
            } catch (error) {
                toast.error(MESSAGES.ERR_PSW_SET);
            }
        }
    }

    return (
        <>
            <ToastContainer/>
            <Form onSubmit={handleSubmit}>
                <LabelText text={'Password'}/>
                <FieldPassword name={"password"} value={formData.password} onChange={handleChange}
                               className={'password-set'}/>
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
