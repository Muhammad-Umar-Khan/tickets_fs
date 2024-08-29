type TicketProps = {
  params: { id: string, q: string };
  searchParams: {q: string}
};
const Ticket = ({ params, searchParams }: TicketProps) => {
  return <h1>Tickets {params.id} and query is {searchParams.q}</h1>;
};

export default Ticket;
