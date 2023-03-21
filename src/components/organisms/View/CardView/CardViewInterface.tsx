import { IEmployee } from "@/interfaces";

export interface IACard {
  employees: IEmployee[];
  onClickEdit: () => void;
  onClickDelete: () => void;
}
