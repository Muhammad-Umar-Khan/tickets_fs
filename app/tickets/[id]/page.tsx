type TicketProps = {
  params: { id: string, q: string };
  // searchParams: {q: string}
};
const Ticket = ({ params }: TicketProps) => {
  return <h1>Tickets {params.id} and query</h1>;
};

export default Ticket;
