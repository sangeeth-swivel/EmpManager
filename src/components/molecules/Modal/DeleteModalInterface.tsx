import { IEmployee } from "@/interfaces";

export interface IDeleteModal {
    employee: IEmployee;
    isOpen: boolean;
    onClickDelete: () => void;
    onClickClose: () => void;
  }
  