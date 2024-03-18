import PropTypes from 'prop-types';
import { StyledField } from './fields.styled.js';

const Field = ({ placeholder }) => {
  return <StyledField placeholder={placeholder} className={'email'} />;
};

Field.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
export default Field;
