import ActionButton from "@/components/atoms/Button/IconButton/ActionButton";
import router from "next/router";
import { AiFillDelete } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";

const TableEmployee = () => {
  return (
    <>
        <tbody>
          <tr>
            <td>photo</td>
            <td>name</td>
            <td>name</td>
            <td>email</td>
            <td>phone</td>
            <td>gender</td>
            <td>
              <ActionButton
                onClick={() => router.push("/employee/edit/:id")}
                icon={<FaUserEdit />}
                color={"success"}
              />
              <ActionButton
                onClick={() => router.push("/employee/delete/:id")}
                icon={<AiFillDelete />}
                color={"danger"}
              />
            </td>
          </tr>
        </tbody>
    </>
  );
};
export default TableEmployee;
