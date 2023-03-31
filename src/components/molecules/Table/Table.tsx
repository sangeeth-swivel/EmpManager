import ActionButton from "@/components/atoms/Button/IconButton/ActionButton";
import { setDeleteUserWithBtn } from "@/components/organisms/Shared/setDeleteUser";
import { IACard } from "@/components/organisms/View/CardView/CardViewInterface";
import { IEmployee } from "@/interfaces";
import router, { useRouter } from "next/router";
import { AiFillDelete } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";

const TableEmployee = ({ employees, onClickDelete }: IACard) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const onClickDeleteBtn = (employee: IEmployee) => {
    setDeleteUserWithBtn(employee, dispatch);
    onClickDelete();
  };

  return (
    <>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee._id}>
            <td>
              <img src={employee.photo} alt="My Image" />
            </td>
            <td>
              <h6>{employee.firstName}</h6>
            </td>
            <td>
              <h6>{employee.lastName}</h6>
            </td>
            <td>
              <h6>{employee.email}</h6>
            </td>
            <td>
              <h6>{employee.phone}</h6>
            </td>
            <td>
              <h6>
                {employee.gender == "M" ? <h6>Male</h6> : <h6>Female</h6>}
              </h6>
            </td>
            <td>
              <ActionButton
                onClick={() => router.push(`/employee/edit/${employee._id}`)}
                icon={<FaUserEdit />}
                color={"success"}
              />
              <ActionButton
                icon={<AiFillDelete />}
                color={"danger"}
                onClick={() => onClickDeleteBtn(employee)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};
export default TableEmployee;
