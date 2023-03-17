import PRIMARYCOLOR from "@/styles/PrimaryColor";
import { Button } from "react-bootstrap";
import { IconButton } from "./IconButtonInterface";

const SwitchButton = ({ icon, onClick }: IconButton) => {
  return (
    <>
      <Button
        className="rounded-circle"
        onClick={onClick}
        style={{ backgroundColor: PRIMARYCOLOR }}
      >
        {icon}
      </Button>
    </>
  );
};

export default SwitchButton;
