import { Button } from "react-bootstrap";
import { IconButton } from "./IconButtonInterface";

const ActionButton = ({ color, icon, onClick }: IconButton) => {
  return (
    <>
      <Button
        onClick={onClick}
        variant={color}
        className="mx-2"
      >
        {icon}
      </Button>
    </>
  );
};

export default ActionButton;
