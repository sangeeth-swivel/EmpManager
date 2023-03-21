import { addNewEmployee, updateEmployee } from "@/app/store";

const addEmployee = (employee: any, dispatch: any) => {
  dispatch(addNewEmployee(employee));
};
const updateExistingEmployee = (employee: any, dispatch: any) => {
  try {
    dispatch(updateEmployee(employee));
  } catch (err) {
    console.log(err);
  }
};
export { addEmployee, updateExistingEmployee };