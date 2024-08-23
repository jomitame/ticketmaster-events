import EventItem from './subComponents/EventItem';
import data from '../../data/events.json';

//const events = data._embedded.events;
const { _embedded: { events }} = data;

const Events = () => {

    const eventsComponent = events.map((eventItem) => (
            <EventItem
                key={`event-item-${eventItem.id}`}
                name={eventItem.name}
                info={eventItem.info}
                image={eventItem.images[0].url}
            />
        )
    );
    return (
        <div>
            Eventos
            {eventsComponent}
        </div>
    );
};

export default Events;