import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";
import Event from './Event';

export const ALL_EVENTS_QUERY = gql`
  query ALL_EVENTS_QUERY {
    allEvents {
      id
      type
      name
      description
      hours
      photo {
        id 
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const EventsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Events() {
  const { data, error, loading } = useQuery(ALL_EVENTS_QUERY);
  console.log( data, error, loading );

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <EventsListStyles>
        {data.allEvents.map(event => <Event key={event.id} event={event}/>)}
      </EventsListStyles>
    </div>
  );
}
