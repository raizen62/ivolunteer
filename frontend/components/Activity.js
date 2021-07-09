import styled from "styled-components";
import ActivityStyles from "./styles/ActivityStyles";
import Supreme from "./styles/Supreme";
import { useUser } from "./User";

const ActivityItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
  }
`;

function ActivityItem({ activityItem }) {
  const { event } = activityItem;
  if (!event) return null;

  console.log(event);
  return (
    <ActivityItemStyles>
      <img width="100" src={event.photo.image.publicUrlTransformed} />
      <div>
        <h3>{event.name}</h3>
        <p>{event.hours} hours</p>
      </div>
    </ActivityItemStyles>
  );
}

export default function Activity() {
  const me = useUser();

  if (!me) return null;
  return (
    <ActivityStyles open>
      <header>
        <Supreme>{me.name}'s Actitivity</Supreme>
      </header>
      <ul>
        {me.activity.map((activityItem) => (
          <ActivityItem key={activityItem.id} activityItem={activityItem} />
        ))}
      </ul>
    </ActivityStyles>
  );
}
