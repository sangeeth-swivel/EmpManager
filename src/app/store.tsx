import {
  Action,
  configureStore,
  createAsyncThunk,
  createSlice,
  ThunkAction,
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import {
  addEmployeeService,
  deleteEmployeeService,
  getAllEmployeesService,
  updateEmployeeService,
} from "../api/service/employee";

import { IEmployee } from "@/interfaces";

interface State {
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

// const initialState = {
//   employees: [],
//   employee: null,
//   statusFetching: "idle",
//   statusDeleting: "idle",
//   statusUpdating: "idle",
//   statusAdding: "idle",
//   addEmployeeMessage: "",
//   updateEmployeeMessage: "",
//   fetchEmployeeMessage: "",
//   error: "",
// };

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
    builder.addCase(HYDRATE, (state: any, action: any) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload.employee,
      };
    });

    builder
      //get employee
      .addCase(getAllEmployees.fulfilled, (state, action) => {
        state.employees = state.employees.concat(action.payload);
        state.statusFetching = "success";
      })
      .addCase(getAllEmployees.pending, (state, action) => {
        state.statusFetching = "loading";
      })
      .addCase(getAllEmployees.rejected, (state, action) => {
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
      });
  },
});

const makeStore = () =>
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
