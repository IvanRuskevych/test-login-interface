import {useState} from "react";
import {toast, ToastContainer} from 'react-toastify';
import {useApiPostRequest} from "../../hooks/apiRequests.js";
import FieldEmail from '../fields/FieldEmail.jsx';
import FormButton from '../FormButton/FormButton.jsx';
import LinkCancel from '../links/LinkCancel.jsx';
import {API_PATH, INIT_STAT, MESSAGES, REGEX} from "../../constants/constants.js";
import {Form} from './forms.styled.js';

const FormPasswordReset = () => {
    const [formData, setFormData] = useState(INIT_STAT.PSW_RESET)
    const {sendData} = useApiPostRequest()

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formData.email.length === 0) {
            toast.error(MESSAGES.ERR_EMAIL);
        } else if (!REGEX.EMAIL.test(formData.email)) {
            toast.error(MESSAGES.ERR_EMAIL_INVALID);
        } else {
            try {
                await sendData(API_PATH.PSW_RESET, formData);
                setFormData(INIT_STAT.PSW_RESET);
                toast.success(MESSAGES.SUCCESS_EMAIL_SEND(formData.email));
            } catch (error) {
                toast.error(MESSAGES.ERR_PSW_RESET);
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
            <LinkCancel href={'login'} text={'Cancel'} className={'link-cancel'}/>
        </>
    );
};

export default FormPasswordReset;
