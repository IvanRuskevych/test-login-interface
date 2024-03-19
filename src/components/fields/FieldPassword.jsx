import PropTypes from 'prop-types';
import {StyledButton, StyledField, StyledFieldPasswordWrapper, StyledIconOff, StyledIconOn,} from './fields.styled.js';
import {useState} from 'react';

const FieldPassword = ({name, value, onChange, className}) => {
    const [toggle, setToggle] = useState(false);


    return (
        <StyledFieldPasswordWrapper className={className}>
            <StyledField name={name} value={value} onChange={onChange} placeholder={'Password'}/>
            <StyledButton>
                {toggle && <StyledIconOn sx={{fontSize: 20}}/>}
                {!toggle && <StyledIconOff sx={{fontSize: 20}}/>}
            </StyledButton>
        </StyledFieldPasswordWrapper>
    );

};

FieldPassword.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
};

export default FieldPassword;
