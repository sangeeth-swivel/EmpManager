
import { Button } from "react-bootstrap";
import { IconButton } from "./IconButtonInterface";

const SwitchButton = ({ icon, onClick }: IconButton) => {
  return (
    <>
      <Button
        className="rounded-circle "
        onClick={onClick}
        variant="primary"
        style={{ backgroundColor: "#6100ed" }}
      >
        {icon}
      </Button>
    </>
  );
};

export default SwitchButton;
