import PropTypes from 'prop-types';

const CardText = ({ text }) => {
    return (
        <>
            <div className='card-text'>{text}</div>
        </>
    );
};

CardText.propTypes = {
    text: PropTypes.string,
};

export default CardText;
