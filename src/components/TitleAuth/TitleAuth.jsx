import PropTypes from 'prop-types';
import { StyledTitle } from './TitleAuth.styled.js';

const TitleAuth = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

TitleAuth.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TitleAuth;
