import TableEmployee from "@/components/molecules/Table/Table";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { IACard } from "./CardView/CardViewInterface";

const tableHeader = [
  "Image",
  "First Name",
  "Last Name",
  "Email",
  "Phone",
  "Gender",
  "Actions",
];

const ListView = ({ employees, onClickDelete }: IACard) => {
  const [isModalOpen, setModalOpen] = useState(false);
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
            {/* {tableHeader.map((header) => (
              <th key={tableHeader.indexOf(header)}>{header}</th>
            ))} */}
          </tr>
        </thead>
        <TableEmployee employees={employees} onClickDelete={() => setModalOpen(true)}/>
      </Table>
      
    </>
  );
};

export default ListView;
