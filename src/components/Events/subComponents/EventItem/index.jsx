import styles from './EventItem.module.css';

import useLikedEvents from '../../../../hooks/useLikeEvents';
import HearthFilled from '../../../../assets/hearth-filled.png';
import HearthUnFilled from '../../../../assets/hearth-unfilled.png';

const EventItem = ({ info, id, name, image, onEventClick }) => {

    const { isEventLiked, toggleEventLike } = useLikedEvents(id);

    const handleSeeMoreClick = (evt) => {
        evt.stopPropagation();
        onEventClick(id);
    };

    const handleHerathClick = () => {
        toggleEventLike();
    };

    return (
        <div onClick={() => console.log('parent clicked')} className={`${styles.eventItemContainer} ${styles.anotherContainer}`}>
            <div className={styles.imageContainer}>
                <img src={isEventLiked ? HearthFilled : HearthUnFilled} alt="Hearth button" className={styles.hearthImage} onClick={handleHerathClick}/>
                <img src={image} alt={name} width={200} height={200} />
            </div>
            <div className={styles.eventInfoContainer}>
                <h4 className={styles.eventName}>{name}</h4>
                <p className={styles.eventInfo}>{info}</p>
                <button onClick={handleSeeMoreClick} className={styles.seeMoreBtn}>
                    {/*<Link to={`/detail/${id}`}>
                        Ver mas
                    </Link>*/}
                    Ver mas
                </button>
            </div>
        </div>
    );
};

export default EventItem;