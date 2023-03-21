import NavButton from "@/components/atoms/Button/TextButton/NavButton";
import SwitchButton from "@/components/atoms/Button/IconButton/SwitchButton";
import router from "next/router";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoReorderThree } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import CardView from "@/components/organisms/View/CardView";
import ListView from "@/components/organisms/View/ListView";
import { IListLayoutInterface } from "./ListInterface";
import axios from "axios";
import { IEmployee } from "@/interfaces";
import NavBar from "@/components/atoms/NavBar/NavBar";

function ListLayout({ employees }: IListLayoutInterface) {
// function ListLayout() {
  // function ListLayout() {

  const [gridView, setGridView] = useState(true);
  // const [userData, setUserData] = useState<IEmployee[]>();

  // async function getEmployeeList() {
  //   const res = await axios.get<IEmployee[]>("https://gray-hilarious-puppy.cyclic.app/employee/list")
  //   const data = await res.data
  //   console.log(data)
  //   return data
  // }

  // useEffect( () => {
  //   async function getEmployee() {
  //     try {
  //     const result = await getEmployeeList()
  //     setUserData(result)
  //     } catch (error) {
  //       console.log(error)
  //     }      
  //   }
  //   getEmployee()
  // },[])

  return (
    <>
      <Container className="py-2">
        <Row className="py-2">
          <Col />
          <Col xs="auto" className="ml-auto">
            <SwitchButton
              icon={gridView ? <IoReorderThree /> : <BsFillGrid3X3GapFill />}
              onClick={() => setGridView(!gridView)}
              color={""}
            />
            <NavButton
              text="Add Employee"
              onClick={() => router.push("/employee/add")}
            />
          </Col>
        </Row>
        
        <Row>{gridView ? <CardView employees={employees}/> : <ListView />}</Row>
      </Container>
    </>
  );
}
export default ListLayout;
