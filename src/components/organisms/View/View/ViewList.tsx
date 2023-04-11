import { selectEmployee, deleteEmployee } from "@/app/store";
import CardView from "@/components/organisms/View/CardView/CardView";
import { ILView } from "@/components/organisms/View/View/ListViewInterface";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DeleteModal } from "../../../molecules/Modal/DeleteModal";
import TableEmployee from "../../../molecules/Table/Table";

const tableHeader = [
  "Image",
  "First Name",
  "Last Name",
  "Email",
  "Phone",
  "Gender",
  "Actions",
];

const ViewList = ({ data, gridView }: ILView) => {
  const router = useRouter();
  const dispatch: any = useDispatch();
  const content = useSelector(selectEmployee());
  const employee = content.delEmp;
  const [isModalOpen, setModalOpen] = useState(false);

  const onClickDeleteEmployee = () => {
    console.log(employee)
    dispatch(deleteEmployee(employee._id));
    setModalOpen(false);
  };
  
  return (
    <>
      <DeleteModal
        employee={employee}
        isOpen={isModalOpen}
        onClickClose={() => setModalOpen(false)}
        onClickDelete={onClickDeleteEmployee}
      />
      
      <Container fluid>
        {gridView ? (
          <Row xs="auto">
            {data.map((data) => (
              <CardView
                employees={[data]}
                onClickDelete={() => setModalOpen(true)}
                onClickEdit={() => router.push(`edit/${data._id}`)}
              />
            ))}
          </Row>
        ) : (
          <Row>
            <Table striped bordered hover size="sm" responsive="md" className="text-center">
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
                  onClickEdit={() => router.push(`edit/${data._id}`)}
                />
              ))}
            </Table>
          </Row>
          //
        )}
      </Container>
    </>
  );
};

export default ViewList;