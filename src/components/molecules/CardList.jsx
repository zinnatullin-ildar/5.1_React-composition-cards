import PropTypes from 'prop-types';
import CardTitle from '../atoms/CardTitle';
import CardText from '../atoms/CardText';
import UrlImage from '../atoms/UrlImage';
import Button from '../atoms/Button';
import Card from '../atoms/Card';
import { v4 as uuid } from 'uuid';

function CardList({ cards }) {
    return (
        <ul className='cards-list'>
            {cards.map((elem) => {
                return (
                    <li className={'list-item'} key={uuid()}>
                        <UrlImage url={elem.url} />
                        <Card data={elem}>
                            <CardTitle title={elem.title} />
                            <CardText text={elem.text} />
                            <Button url={elem.url} text='Go somewhere' />
                        </Card>
                    </li>
                );
            })}
        </ul>
    );
}

CardList.propTypes = {
    cards: PropTypes.array.isRequired,
};

export default CardList;
