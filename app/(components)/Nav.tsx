import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex items-center px-4 py-2 justify-between bg-nav">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="w-10 h-10" />
        </Link>
        <Link href="ticket/new">
          <FontAwesomeIcon icon={faTicket} className="" />
        </Link>
      </div>
      <div>
        <p>umar@nineprimes.com</p>
      </div>
    </nav>
  );
};

export default Nav;
