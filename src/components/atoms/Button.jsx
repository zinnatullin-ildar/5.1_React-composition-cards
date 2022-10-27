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

export default Button;

Button.defaultProps = {
    url: '#',
};
