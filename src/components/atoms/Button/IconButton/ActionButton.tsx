import { Button } from "react-bootstrap";
import { IconButton } from "./IconButtonInterface";

const ActionButton = ({ color, icon, onClick }: IconButton) => {
  return (
    <>
      <Button
        onClick={onClick}
        variant={color}
        className="rounded-circle mx-1"
      >
        {icon}
      </Button>
    </>
  );
};

export default ActionButton;
