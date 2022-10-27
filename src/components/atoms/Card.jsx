import PropTypes from 'prop-types';
import { Fragment } from 'react';

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

export default Card;

Card.propTypes = {
    data: PropTypes.shape
        ({
            title: PropTypes.string,
            text: PropTypes.string,
            url: PropTypes.string,
        }),
};
