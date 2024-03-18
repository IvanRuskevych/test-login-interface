import PropTypes from 'prop-types';
import { LinkWrapper, StyledText } from './LinkText.styled.js';
import { NavLink } from 'react-router-dom';

const LinkText = ({ to, text, className }) => {
  return (
    <LinkWrapper className={className}>
      <NavLink to={to}>
        <StyledText>{text}</StyledText>
      </NavLink>
    </LinkWrapper>
  );
};

LinkText.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LinkText;
