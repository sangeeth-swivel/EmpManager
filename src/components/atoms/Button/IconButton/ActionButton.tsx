import { Button } from "react-bootstrap";
import { IconButton } from "./IconButtonInterface";

const ActionButton = ({ color, icon, onClick }: IconButton) => {
  return (
    <>
      <Button
        onClick={onClick}
        variant={color}
        className="mx-1 float-right"
      >
        {icon}
      </Button>
    </>
  );
};

export default ActionButton;
