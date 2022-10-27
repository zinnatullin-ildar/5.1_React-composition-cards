import PropTypes from 'prop-types';

const CardTitle = ({ title }) => {
    return (
        <>
            <h5 className='card-title'>{title}</h5>
        </>
    );
};

export default CardTitle;

CardTitle.propTypes = {
    title: PropTypes.string,
};
