import PropTypes from 'prop-types';
import { LabelTextStyled } from './LabelText.styled.js';

const LabelText = ({ text }) => {
  return <LabelTextStyled aria-label={text}>{text}</LabelTextStyled>;
};

LabelText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default LabelText;
