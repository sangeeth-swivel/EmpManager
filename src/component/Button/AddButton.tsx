import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

const AddEmployeeButton = () => {
  const route = useRouter();
  const handeClick = () => {
    console.log("Add Employee");
    route.push("/employee/add");
  };
  return (
    <>
      <Button onClick={handeClick}>Add Employee</Button>
    </>
  );
};

export default AddEmployeeButton;
