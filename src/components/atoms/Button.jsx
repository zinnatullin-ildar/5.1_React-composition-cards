import PropTypes from 'prop-types';

const Button = ({ url, text }) => {
    if (!url) {
        return;
    }
    return (
        <>
            <a className='card-link' href={url}>
                {text}
            </a>
        </>
    );
};

Button.propTypes = {
    url: PropTypes.string,
    text: PropTypes.string,
};

export default Button;
