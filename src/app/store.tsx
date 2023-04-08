import {
  Action,
  configureStore,
  createAsyncThunk,
  createSlice,
  ThunkAction,
} from "@reduxjs/toolkit";

import { createWrapper, HYDRATE } from "next-redux-wrapper";

import {
  addEmployeeService,
  deleteEmployeeService,
  getAllEmployeesService,
  getEmployeeByIdService,
  updateEmployeeService,
} from "../api/service/employee";

import { IEmployee } from "@/interfaces";

const initialState = {
  employees: [],
  employee: null,
  statusFetching: "idle",
  statusDeleting: "idle",
  statusUpdating: "idle",
  statusAdding: "idle",
  addEmployeeMessage: "",
  updateEmployeeMessage: "",
  deleteEmployeeMessage: "",
  fetchAllEmployeeMessage: "",
  fetchEmployeeMessage: "",
  error: "",
  // delEmp: null,
};

// createAsyncThunk function to fetch the employee list
export const getAllEmployees = createAsyncThunk(
  "employee/list",
  async (_obj, { rejectWithValue }) => {
    try {
      const response = await getAllEmployeesService();
      if (response.data.employees) {
        return response.data.employees;
      } else {
        return rejectWithValue("Sorry Something went wrong!");
      }
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

// createAsyncThunk function to fetch the employee by id
export const fetchEmployeeById = createAsyncThunk(
  "employee/getEmployee/fetchById",
  async (id: string) => {
    const res = await getEmployeeByIdService(id);
    console.log("comming fetch");
    return res.data.employee;
  }
);

// createAsyncThunk function to add employee list
export const addNewEmployee = createAsyncThunk(
  "employee/add",
  async (employee: IEmployee, { rejectWithValue }) => {
    try {
      const res = await addEmployeeService(employee);
      if (res.data.message === "success") {
        return res.data;
      } else {
        return rejectWithValue("error");
      }
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

// createAsyncThunk function to update employee list
export const updateEmployee = createAsyncThunk(
  "employee/edit",
  async (employee: IEmployee, { rejectWithValue }) => {
    console.log("comming here");
    try {
      const res = await updateEmployeeService(employee);
      if (res.data.message === "success") {
        return res.data;
      } else {
        return rejectWithValue("error");
      }
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

// createAsyncThunk function to delete employee list
export const setEmployeeToDelete =
  (employee: IEmployee): AppThunk =>
  async (dispatch) => {
    dispatch(employeeSlice.actions.setDelEmployee({ delEmp: employee }));
  };

export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (id: string) => {
    const res = await deleteEmployeeService(id);
    return res.data.employees;
  }
);

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setDelEmployee(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },

  //Hydrate state with wrapper
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state: any, action: any) => {
        console.log("HYDRATE", state, action.payload);
        return {
          ...state,
          ...action.payload.employee,
        };
      })

      //get all employee
      .addCase(getAllEmployees.fulfilled, (state, action) => {
        state.employees = state.employees.concat(action.payload);
        state.statusFetching = "success";
        state.fetchAllEmployeeMessage = "fetch employee successfully!";
      })
      .addCase(getAllEmployees.pending, (state) => {
        state.statusFetching = "loading";
      })
      .addCase(getAllEmployees.rejected, (state) => {
        state.statusFetching = "failed";
        state.fetchAllEmployeeMessage = "Sorry Something went wrong!";
      })

      .addCase(fetchEmployeeById.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.fetchEmployeeMessage = "success";
      })
      .addCase(fetchEmployeeById.pending, (state) => {
        state.fetchEmployeeMessage = "pending";
      })
      .addCase(fetchEmployeeById.rejected, (state) => {
        state.fetchEmployeeMessage = "failed";
      })

      //add employee
      .addCase(addNewEmployee.fulfilled, (state) => {
        state.statusAdding = "success";
        state.addEmployeeMessage = "New employee added successfully!";
      })
      .addCase(addNewEmployee.pending, (state) => {
        state.statusAdding = "pending";
      })
      .addCase(addNewEmployee.rejected, (state) => {
        state.statusAdding = "failed";
        state.addEmployeeMessage =
          "Could not add employee! please try again later.";
      })

      //update employee
      .addCase(updateEmployee.fulfilled, (state) => {
        state.statusUpdating = "success";
        state.updateEmployeeMessage = "Update Successfull";
      })
      .addCase(updateEmployee.pending, (state) => {
        state.statusUpdating = "loading";
      })
      .addCase(updateEmployee.rejected, (state) => {
        state.statusUpdating = "failed";
        state.updateEmployeeMessage =
          "Could not update please try again later!";
      })

      //delete employee
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.employees = action.payload;
        state.statusDeleting = "success";
        state.deleteEmployeeMessage = "Delete Successfull";
      })
      .addCase(deleteEmployee.pending, (state) => {
        state.statusDeleting = "loading";
      })
      .addCase(deleteEmployee.rejected, (state) => {
        state.statusDeleting = "failed";
      });
  },
});

export const makeStore = () =>
  configureStore({
    reducer: {
      [employeeSlice.name]: employeeSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;

export type AppState = ReturnType<AppStore["getState"]>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

//wrapper
export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });

// Selector
export const selectEmployee = () => (state: AppState) =>
  state?.[employeeSlice.name];