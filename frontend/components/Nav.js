import Link from "next/link";
import SignOut from "./SignOut";
import NavStyles from "./styles/NavStyles";
import { useUser } from "./User";

export default function Nav() {
  const user = useUser();

  return (
    <NavStyles>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/team">Team</Link>

      {user && (
        <>
          <Link href="/events">Events</Link>
          <Link href="/calendar">Calendar</Link>
          <SignOut />
        </>
      )}

      {!user && (
        <>
          <Link href="/signin">Sign in</Link>
        </>
      )}
    </NavStyles>
  );
}
