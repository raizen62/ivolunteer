import ItemStyles from "./styles/ItemStyles";
import Title from "./styles/Title";
import Link from 'next/link';
import TypeTag from "./styles/TypeTag";
import DeleteEvent from "./DeleteEvent";

export default function Event({ event }) {
  return (
    <ItemStyles>
      <img src={event?.photo?.image?.publicUrlTransformed} alt={event.name} />
      <Title>
        <Link href={`/event/${event.id}`}>{event.name}</Link>
      </Title>
      <TypeTag>{event.type}</TypeTag>
      <p>{event.description}</p>
      <div className="buttonList">
        <Link href={{
          pathname: '/updateevent',
          query: {
            id: event.id
          }
        }}>Edit ✏️</Link>

        <DeleteEvent id={event.id}>Delete</DeleteEvent>
      </div>
    </ItemStyles>
  );
}
