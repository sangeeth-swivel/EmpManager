import ActionButton from "@/components/atoms/Button/IconButton/ActionButton";
import { IACard } from "@/components/organisms/View/CardView/CardViewInterface";
import router, { useRouter } from "next/router";
import { AiFillDelete } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";

const TableEmployee = ({ employees, onClickDelete }: IACard) => {
  const dispatch = useDispatch();
  const router = useRouter();

  // const onClickDeleteBtn = (employee: IEmployee) => {
  //   setDeleteUserWithBtn(employee, dispatch);
  //   onClickDelete();
  // };

  return (
    <>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee._id}>
            <td>
              <img
                src={employee.photo}
                alt="My Image"
              />
            </td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.gender}</td>
            <td>
              <ActionButton
                onClick={() => router.push(`/employee/edit/${employee._id}`)}
                icon={<FaUserEdit />}
                color={"success"}
              />
              <ActionButton
                // onClick={() => router.push("/employee/delete/:id")}
                onClick={() => router.push(`/employee/delete/${employee._id}`)}
                icon={<AiFillDelete />}
                color={"danger"}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};
export default TableEmployee;
