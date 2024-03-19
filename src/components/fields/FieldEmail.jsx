import PropTypes from 'prop-types';
import {StyledField} from './fields.styled.js';

const FieldEmail = ({value, onChange, placeholder}) => {
    return <StyledField
        name={"email"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={'email'}/>;
};

FieldEmail.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,

};
export default FieldEmail;
