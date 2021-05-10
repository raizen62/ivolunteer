import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import Router from "next/router";
import useForm from "../lib/useForm";
import DisplayError from "./ErrorMessage";
import { ALL_EVENTS_QUERY } from "./Events";
import Form from "./styles/Form";

const CREATE_EVENT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $description: String!
    $hours: Int!
    $image: Upload
    $type: String!
  ) {
    createEvent(
      data: {
        name: $name
        description: $description
        hours: $hours
        photo: { create: { image: $image, altText: $name } }
        type: $type
      }
    ) {
      id
      name
      description
    }
  }
`;

export default function CreateEvent() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: "Ceva",
    type: "wow",
    image: "",
    description: "",
    hours: 10
  });

  const [createEvent, { loading, error, data }] = useMutation(
    CREATE_EVENT_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_EVENTS_QUERY }],
    }
  );

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();

        const res = await createEvent();

        clearForm();

        console.log(data);

        Router.push({
          pathname: `/event/${res.data.createEvent.id}`
        });
      }}
    >
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
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
        <label htmlFor="image">
          Image
          <input type="file" id="image" name="image" onChange={handleChange} />
        </label>

        <button type="submit">+ Add event</button>
      </fieldset>
    </Form>
  );
}
