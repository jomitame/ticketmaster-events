import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

    console.log(eventData);
    return <div>Detail</div>
};

export default Detail;

