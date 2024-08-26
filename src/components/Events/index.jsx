
import { useNavigate } from 'react-router-dom';

import useEventsData from '../../hooks/useEventsData';
import EventItem from './subComponents/EventItem';

const Events = ({ searchTerm}) => {
    const { events, isLoading, error } = useEventsData();
    const navigate = useNavigate();

    const handleEventItemClick = (id) => {
        navigate(`/detail/${id}`);
    };

    const renderEvents = () => {
        let eventsFiltered = events;

        if (searchTerm.length > 0){
            eventsFiltered = eventsFiltered.filter((item) => item.name.toLowerCase().includes(searchTerm));
        }

        return eventsFiltered.map((eventItem) => (
                <EventItem
                    key={`event-item-${eventItem.id}`}
                    name={eventItem.name}
                    info={eventItem.info}
                    image={eventItem.images[0].url}
                    onEventClick={handleEventItemClick}
                    id={eventItem.id}
                />
            )
        );
    };

    if (error) {
        return <div>Ha ocurrido un error</div>;
    }

    if (isLoading) {
        return <div>Cargando resultados...</div>;
    }
    
    return (
        <div>
            Eventos
            {renderEvents()}
        </div>
    );
};

export default Events;