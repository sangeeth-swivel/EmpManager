import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  employees: [],
  employee: null,
  statusFetching: "idle",
  statusDeleting: "idle",
  statusUpdating: "idle",
  statusAdding: "idle",
  addEmployeeMessage: "",
  updateEmployeeMessage: "",
  fetchEmployeeMessage: "",
  error: "",
};
export const EmployeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        setEmployeeData: (state, action) => {
            state.employees = action.payload;
        },
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            //to do handle client side state override
            state.employees = action.payload.employee.employees;
        },
    },
});

export const { setEmployeeData } = EmployeeSlice.actions;

export default EmployeeSlice.reducer;
