import PRIMARYCOLOR from "@/styles/PrimaryColor";
import React from "react";
import { Button } from "react-bootstrap";
import { NavButtonProps } from "./NavButtonInterface";

const NavButton = ({ text, onClick }: NavButtonProps) => {
  return (
    <>
      <Button
        className="mx-2"
        onClick={onClick}
        style={{ backgroundColor: PRIMARYCOLOR }}
      >
        <b>{text}</b>
      </Button>
    </>
  );
};

export default NavButton;
