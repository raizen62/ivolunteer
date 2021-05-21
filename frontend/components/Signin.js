import Form from "./styles/Form";
import useForm from "../lib/useForm";

export default function SignIn() {
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
      e.preventDefault();
       
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Sign into your account</h2>
      <fieldset>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email adress"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign in!</button>
      </fieldset>
    </Form>
  );
}
