import { useQuery } from "@apollo/client";
import DisplayError from "./ErrorMessage";
import gql from "graphql-tag";
import Head from "next/head";
import styled from "styled-components";

const EventStyles = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    max-width: var(--maxWidth);
    justify-content: center;
    align-items: top;
    gap: 2rem;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Event(where: { id: $id }) {
      name
      hours
      description
      type
      id
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleEvent({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading..</p>;
  if (error) return <DisplayError error={error} />;

  const { Event } = data;

  return (
    <EventStyles>
      <Head>
        <title>iVolunteer | {Event.name}</title>
      </Head>
      <img
        src={Event.photo.image.publicUrlTransformed}
        alt={Event.photo.image.alt}
      />
      <div className="details">
        <h2>{Event.name}</h2>
        <p>{Event.description}</p>
      </div>
    </EventStyles>
  );
}
