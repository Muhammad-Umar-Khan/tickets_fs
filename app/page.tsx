import { Fragment } from "react";
import TicketCard from "./(components)/TicketCard";

export default function Home() {
  return (
    <Fragment>
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </Fragment>
  );
}
