import TableEmployee from "@/components/molecules/Table/Table";
import { Table } from "react-bootstrap";
import { IACard } from "./CardView/CardViewInterface";

const ListView = ({ employees, onClickDelete }: IACard) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Photo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <TableEmployee />
      </Table>
    </>
  );
};

export default ListView;
