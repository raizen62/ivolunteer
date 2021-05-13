import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const DELETE_EVENT_MUTATION = gql`
  mutation DELETE_EVENT_MUTATION($id: ID!) {
    deleteEvent(id: $id) {
      id
      name
    }
  }
`;

function update(cache, payload) {
  console.log(payload);
  cache.evict(cache.identify(payload.data.deleteEvent));
}
export default function DeleteEvent({ id, children }) {
  const [deleteEvent, { loading }] = useMutation(DELETE_EVENT_MUTATION, {
    variables: { id },
    update,
  });

  return (
    <button
      type="button"
      disabled={loading}
      onClick={() => {
        if (confirm("Are you sure you want to delete this event?")) {
          deleteEvent().catch((err) => alert(err.message));
        }
      }}
    >
      {children}
    </button>
  );
}
