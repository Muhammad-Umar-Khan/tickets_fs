import Link from "next/link";

type TicketProps = {
  params: { id: string; q: string };
  // searchParams: {q: string}
};
const Ticket = ({ params }: TicketProps) => {
  return (
    <h1>
      Tickets {params.id}
      <Link href="/" className="underline">
        Home
      </Link>
    </h1>
  );
};

export default Ticket;
