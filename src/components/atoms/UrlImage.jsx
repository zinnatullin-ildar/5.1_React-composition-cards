import PropTypes from 'prop-types';

const UrlImage = ({ url }) => {
    if (!url) {
        return;
    }
    return (
        <>
            <div className='image-wrapper'>
                <img className='card-image' src={url} alt='' />
            </div>
        </>
    );
};

UrlImage.propTypes = {
    url: PropTypes.string,
    text: PropTypes.string,
};

export default UrlImage;
