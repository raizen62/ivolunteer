import UpdateEvent from "../components/UpdateEvent";

export default function UpdateEventPage({query}) {
  return <div><UpdateEvent id={query.id}/></div>;
}
