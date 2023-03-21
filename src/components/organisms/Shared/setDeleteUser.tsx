import { setEmployeeToDelete } from "@/app/store";
import { IEmployee } from "@/interfaces";

const setDeleteUserWithBtn = (employee: IEmployee, dispatch: any) => {
    dispatch(setEmployeeToDelete(employee));
  };
  
  export { setDeleteUserWithBtn };
  