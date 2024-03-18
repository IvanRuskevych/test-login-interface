import PropTypes from 'prop-types';
import { StyledLink, Icon } from './LinkAuth.styled.js';

const LinkAuth = ({ href, text, icon }) => {
  return (
    <>
      <StyledLink
        href={`${import.meta.env.BASE_URL}${href}`}
        // target="_blank" rel="noopener noreferrer"
      >
        <Icon src={icon} alt={`icon ${text}`} />
        {text}
      </StyledLink>
    </>
  );
};

LinkAuth.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default LinkAuth;
