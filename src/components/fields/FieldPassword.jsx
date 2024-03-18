import PropTypes from 'prop-types';
import {
  StyledField,
  StyledFieldPasswordWrapper,
  StyledButton,
  // StyledIconOn,
  // StyledIconOff,
} from './fields.styled.js';
import { useState } from 'react';

const FieldPassword = ({ className }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <StyledFieldPasswordWrapper className={className}>
      <StyledField placeholder={'Password'} />
      <StyledButton>
        {/*{toggle && <StyledIconOn sx={{ fontSize: 20 }} />}*/}
        {/*{!toggle && <StyledIconOff sx={{ fontSize: 20 }} />}*/}
      </StyledButton>
    </StyledFieldPasswordWrapper>
  );
};

FieldPassword.propTypes = {
  className: PropTypes.string,
};

export default FieldPassword;
