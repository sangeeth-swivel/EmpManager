import CardView from "@/components/organisms/View/CardView/CardView";
import ListView from "@/components/organisms/View/ListView";
import { ILView } from "@/components/organisms/View/ListViewInterface";
import { useState } from "react";
import { Row, Table } from "react-bootstrap";
import TableEmployee from "../Table/Table";

const tableHeader = [
  "Image",
  "First Name",
  "Last Name",
  "Email",
  "Phone",
  "Gender",
  "Actions",
];

const ViewList = ({ data, gridView, onClickDelete }: ILView) => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Row>
        {gridView ? (
          <Row>
            {data.map((data) => (
              <CardView
                employees={[data]}
                onClickDelete={() => setModalOpen(true)}
                // onClickEdit={() => router.push(`employee/edit/${data._id}`)}
              />
            ))}
          </Row>
        ) : (
          <Row>
            <Table striped bordered hover>
              <thead>
                <tr>
                  {tableHeader.map((header) => (
                    <th key={tableHeader.indexOf(header)}>{header}</th>
                  ))}
                </tr>
              </thead>
              {data.map((data) => (
                <TableEmployee
                employees={[data]}
                onClickDelete={() => setModalOpen(true)}
                />
              ))}
            </Table>
          </Row>
          //
        )}
      </Row>
    </>
  );
};

export default ViewList;
