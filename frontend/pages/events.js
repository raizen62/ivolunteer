import Link from "next/link";
import Events from "../components/Events";

export default function EventsPage() {
  return (
      <div>
        <Link href="/addevent"><a className="button">+ Add new event</a></Link>
        <Events/>
      </div>
  )
}