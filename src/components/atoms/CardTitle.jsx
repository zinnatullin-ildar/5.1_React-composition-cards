import PropTypes from 'prop-types';

const CardTitle = ({ title }) => {
    return (
        <>
            <h5 className='card-title'>{title}</h5>
        </>
    );
};

CardTitle.propTypes = {
    title: PropTypes.string,
};

export default CardTitle;
