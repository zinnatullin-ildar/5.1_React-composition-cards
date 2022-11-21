import { Fragment } from 'react';
import PropTypes from 'prop-types';

function Card(data) {
    return (
        <Fragment>
            <div className="card-box">
                <div className='card-content'>
                    {data.children}
                </div>
            </div>
        </Fragment>
    );
}

Card.propTypes = {
    data: PropTypes.shape
        ({
            title: PropTypes.string,
            text: PropTypes.string,
            url: PropTypes.string,
        }),
};

export default Card;
