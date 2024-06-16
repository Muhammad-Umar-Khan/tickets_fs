type TicketProps = {
  params: { id: string };
};
const Ticket = ({ params }: TicketProps) => {
  return <h1>Tickets {params.id}</h1>;
};

export default Ticket;
