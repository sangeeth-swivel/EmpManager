import { IEmployee } from "@/interfaces";
import { axiosClient } from "../axiosClient";

// router.post("/add", employees.addEmployee);
const addEmployeeService = (employee: IEmployee) => {
  return axiosClient.post("/employee/add", JSON.stringify(employee));
};

// router.get("/list", employees.findAllEmployee);
const getAllEmployeesService = () => {
  return axiosClient.get("/employee/list");
};

// router.get('/:empId', employees.findOneEmployee);
const getEmployeeByIdService = (id?: string) => {
  return axiosClient.get(`/employee/${id}`);
};

// router.put('/edit/:empId', employees.updateEmployee);
const updateEmployeeService = (employee: IEmployee) => {
  return axiosClient.post("/employee/edit", JSON.stringify(employee));
};

// router.delete('/delete/:empId', employees.deleteEmployee);
const deleteEmployeeService = (id: string) => {
  return axiosClient.get(`/employee/delete/${id}`);
};

export {
  addEmployeeService,
  getAllEmployeesService,
  getEmployeeByIdService,
  updateEmployeeService,
  deleteEmployeeService,
};
