import { IEmployee } from "@/interfaces";

export interface IForm {
    edit: boolean;
    text: string;
    employee?: IEmployee | any;
  }