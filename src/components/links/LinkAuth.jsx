import PropTypes from 'prop-types';
import {Icon, StyledLink} from './links.styled.js';

const LinkAuth = ({href, text, icon}) => {
    return (
        <>
            <StyledLink href={`${import.meta.env.BASE_URL}${href}`}>
                <Icon src={icon} alt={`icon ${text}`}/>
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
