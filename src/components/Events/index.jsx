
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

import EventItem from './subComponents/EventItem';

const Events = ({ searchTerm, events }) => {
    const navigate = useNavigate();

    const handleEventItemClick = (id) => {
        navigate(`/detail/${id}`);
    };

    console.log('render events');

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
    
    return (
        <div>
            Eventos
            {renderEvents()}
        </div>
    );
};

export default memo(Events);