import React from "react";
import { Button } from "react-bootstrap";
import { NavButtonProps } from "./NavButtonInterface";

const NavButton = ({ text, onClick }: NavButtonProps) => {
  return (
    <>
      <Button
        className="mx-2"
        onClick={onClick}
        style={{ backgroundColor: "#6100ed"  }}
      >
        <b>{text}</b>
      </Button>
    </>
  );
};

export default NavButton;
