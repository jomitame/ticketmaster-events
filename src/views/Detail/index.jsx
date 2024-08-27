import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from './Detail.module.css';

const Detail = () => {
    const { eventId } = useParams();
    const [eventData, setEventData] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=HFXzBJfEfIigZgry3DZeC54c5A5pWzCE`);
                const data = await response.json()

                setEventData(data);
                setIsLoading(false);
            } catch (error) {
                setEventData({});
                setError(error);
                setIsLoading(false);
            }
        };

        fetchEventData();
    }, []);

    if (isLoading && Object.keys(eventData) === 0) {
        return <div>Cargando evento...</div>
    }

    if (Object.keys(error) > 0) {
        return <div>Ha ocurrido un error.</div>;
    }

    console.log(eventData);
    return (
        <div className={styles.container}>
            <div className={styles.mainInfoContainer}>
                <img src={eventData.images?.[0].url} alt={eventData.name} />
                <h4>{eventData.name}</h4>
                <p>{eventData.info}</p>
            </div>
        </div>
    );
};

export default Detail;

