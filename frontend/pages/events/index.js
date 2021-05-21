import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import Events from "../../components/Events";
import Pagination from "../../components/Pagination";

export default function EventsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);

  return (
    <div>
      <Link href="/addevent">
        <a className="button">+ Add new event</a>
      </Link>
      <Pagination page={page || 1} />
      <Events page={page || 1} />
      <Pagination page={page || 1} />
    </div>
  );
}
