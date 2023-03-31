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
  updateEmployeeService,
} from "../api/service/employee";

import { IEmployee } from "@/interfaces";

interface State {
  delEmp: any;
  employees: IEmployee[];
  employee: IEmployee | null;
  statusFetching: string;
  statusDeleting: string;
  statusUpdating: string;
  statusAdding: string;
  addEmployeeMessage: string;
  updateEmployeeMessage: string;
  fetchEmployeeMessage: string;
  error: string;
}

const initialState: State = {
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

// createAsyncThunk function to fetch the employee list
export const getAllEmployees = createAsyncThunk("employees/fetch", async () => {
  try {
    const response = await getAllEmployeesService();
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

// createAsyncThunk function to add employee list
export const addNewEmployee = createAsyncThunk(
  "employee/add",
  async (employee: IEmployee) => {
    try {
      const res = await addEmployeeService(employee);
      return res.data;
    } catch (error) {
      console.log(error);
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
        state.fetchEmployeeMessage = "fetch employee successfully!";
      })
      .addCase(getAllEmployees.pending, (state) => {
        state.statusFetching = "loading";
      })
      .addCase(getAllEmployees.rejected, (state) => {
        state.statusFetching = "failed";
        state.fetchEmployeeMessage = "Sorry Something went wrong!";
      })

      //add employee
      .addCase(addNewEmployee.fulfilled, (state, action) => {
        state.statusAdding = "success";
        state.addEmployeeMessage = "New employee added successfully!";
      })
      .addCase(addNewEmployee.pending, (state, action) => {
        state.statusAdding = "pending";
      })
      .addCase(addNewEmployee.rejected, (state, action) => {
        state.statusAdding = "failed";
        state.addEmployeeMessage =
          "Could not add employee! please try again later.";
      })

      //update employee
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.statusUpdating = "success";
        state.updateEmployeeMessage = "Update Successfull";
      })
      .addCase(updateEmployee.pending, (state, action) => {
        state.statusUpdating = "loading";
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.statusUpdating = "failed";
        state.updateEmployeeMessage =
          "Could not update please try again later!";
      })

      //delete employee
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.statusDeleting = "success";
      })
      .addCase(deleteEmployee.pending, (state, action) => {
        state.statusDeleting = "loading";
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
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

// Selector
export const selectEmployee = () => (state: AppState) =>
  state?.[employeeSlice.name];

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
