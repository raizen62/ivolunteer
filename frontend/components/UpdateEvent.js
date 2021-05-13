import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import useForm from "../lib/useForm";
import DisplayError from "./ErrorMessage";
import Form from "./styles/Form";

const SINGLE_EVENT_QUERY = gql`
  query SINGLE_EVENT_QUERY($id: ID!) {
    Event(where: { id: $id }) {
      id
      name
      description
      hours
      type
    }
  }
`;

const UPDATE_EVENT_MUTATION = gql`
  mutation UPDATE_EVENT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $hours: Int
    $type: String
  ) {
    updateEvent(
      id: $id
      data: {
        name: $name
        description: $description
        hours: $hours
        type: $type
      }
    ) {
      id
      name
      description
      hours
      type
    }
  }
`;

export default function UpdateEvent({ id }) {
  const { data, error, loading } = useQuery(SINGLE_EVENT_QUERY, {
    variables: {
      id,
    },
  });

  const [
    updateEvent,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_EVENT_MUTATION);

  const { inputs, handleChange, clearForm, resetForm } = useForm(data?.Event);
  if (loading) return <p>Loading..</p>;
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();

        const res = await updateEvent({
          variables: {
            id: id,
            name: inputs.name,
            description: inputs.description,
            type: inputs.type,
            hours: inputs.hours,
          },
        });

        // const res = await createEvent();

        // clearForm();

        // console.log(data);

        // Router.push({
        //   pathname: `/event/${res.data.createEvent.id}`
        // });
      }}
    >
      <DisplayError error={error || updateError} />
      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="type">
          Type
          <input
            type="text"
            id="type"
            name="type"
            placeholder="type"
            value={inputs.type}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="hours">
          Hours
          <input
            type="number"
            id="hours"
            name="hours"
            placeholder="hours"
            value={inputs.hours}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Update event</button>
      </fieldset>
    </Form>
  );
}
