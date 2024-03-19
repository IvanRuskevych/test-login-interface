import PropTypes from 'prop-types';
import {StyledLink} from "./links.styled.js";

const LinkCancel = ({href, text, className}) => {
    return (
        <>
            <StyledLink href={`${import.meta.env.BASE_URL}${href}`} className={className}>
                {text}
            </StyledLink>
        </>
    );
};

LinkCancel.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};



export default LinkCancel;