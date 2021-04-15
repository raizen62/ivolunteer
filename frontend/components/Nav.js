import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/events">Events</Link>
      <Link href="/calendar">Calendar</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/team">Team</Link>
    </nav>
  )
}