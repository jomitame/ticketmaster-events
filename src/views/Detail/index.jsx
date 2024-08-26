import { useParams } from "react-router-dom";

const Detail = () => {
    const { eventId } = useParams();

    console.dir(eventId);
    return <div>Detail</div>
};

export default Detail;

