import { useEffect, useState } from 'react';

const useEventsData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchEvent = async () => {
            try{
                const response = await fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=HFXzBJfEfIigZgry3DZeC54c5A5pWzCE");
                const data = await response.json();
                setData(data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
            }
        };

        // Load API Call
        fetchEvent();

    }, []);

    return {
        events:  data?._embedded?.events || [],
        isLoading,
        error
    };
};

export default useEventsData;