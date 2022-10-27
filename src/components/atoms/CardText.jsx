import PropTypes from 'prop-types';

const CardText = ({ text }) => {
    return (
        <>
            <div className='card-text'>{text}</div>
        </>
    );
};

export default CardText;

CardText.propTypes = {
    text: PropTypes.string,
};
