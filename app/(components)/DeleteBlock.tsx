import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteBlock = () => {
  return (
    <FontAwesomeIcon icon={faX} className="text-red-400 hover:text-red-200 w-5 h-5" />
  );
};

export default DeleteBlock;
