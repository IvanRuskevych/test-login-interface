import PropTypes from 'prop-types';
import { StyledButton } from './FormButton.styled.js';

const FormButton = ({ type, text }) => {
  return <StyledButton type={type}>{text}</StyledButton>;
};

FormButton.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.any,
};

export default FormButton;
