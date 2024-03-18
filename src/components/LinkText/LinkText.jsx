import PropTypes from 'prop-types';
import { LinkWrapper, StyledText } from './LinkText.styled.js';

const LinkText = ({ href, text, className }) => {
  return (
    <LinkWrapper className={className}>
      <a href={`${import.meta.env.BASE_URL}${href}`}>
        <StyledText>{text}</StyledText>
      </a>
    </LinkWrapper>
  );
};

LinkText.propTypes = {
    href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LinkText;
