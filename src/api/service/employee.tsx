import { IEmployee } from "@/interfaces";
import { axiosClient } from "../axiosClient";

// Add Employee Service
const addEmployeeService = (employees: IEmployee) => {
  return axiosClient.post("/employee/add", JSON.stringify(employees));
};

// Get All Employees Service
const getAllEmployeesService = () => {
  return axiosClient.get("/employee/list");
};

// Get Employee by Id Service
const getEmployeeByIdService = (id?: string) => {
  return axiosClient.get(`/employee/getEmployee/${id}`);
};

// Update Employee Service
const updateEmployeeService = (employee: IEmployee) => {
  return axiosClient.post("/employee/update", JSON.stringify(employee));
};

// Delete Employee Service
const deleteEmployeeService = (id: string) => {
  return axiosClient.delete(`/employee/deleteEmployee/${id}`);
};

export {
  addEmployeeService,
  getAllEmployeesService,
  getEmployeeByIdService,
  updateEmployeeService,
  deleteEmployeeService,
};
