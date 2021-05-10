import Link from "next/link";
import NavStyles from "./styles/NavStyles";

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/events">Events</Link>
      <Link href="/calendar">Calendar</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/team">Team</Link>
    </NavStyles>
  )
}