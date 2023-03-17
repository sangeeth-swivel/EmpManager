import PRIMARYCOLOR from "@/styles/PrimaryColor";
import React from "react";
import { Button } from "react-bootstrap";

const SubmitButton = () => {
  return (
    <>
      <Button
        className="mx-2"
        style={{ backgroundColor: PRIMARYCOLOR }}
      >
      </Button>
    </>
  );
};

export default SubmitButton;
