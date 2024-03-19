import PropTypes from 'prop-types';
import {StyledButton, StyledField, StyledFieldPasswordWrapper, StyledIconOff, StyledIconOn,} from './fields.styled.js';
import {useState} from 'react';

const FieldPassword = ({name, value, onChange, className}) => {
    const [toggle, setToggle] = useState(false);

    const handleClick = (e) => {
        e.preventDefault()
        setToggle(!toggle)

    }

    return (
        <StyledFieldPasswordWrapper className={className}>
            <StyledField
                type={toggle ? "text" : "password"}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={'Password'}/>
            <StyledButton onClick={handleClick}>
                {!toggle && <StyledIconOn sx={{fontSize: 20}}/>}
                {toggle && <StyledIconOff sx={{fontSize: 20}}/>}
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
