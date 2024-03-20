import PropTypes from 'prop-types';
import {StyledField} from './fields.styled.js';

const FieldEmail = ({value, onChange, placeholder,className}) => {
    return <StyledField
        name={"email"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}/>;
};

FieldEmail.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,

};
export default FieldEmail;
