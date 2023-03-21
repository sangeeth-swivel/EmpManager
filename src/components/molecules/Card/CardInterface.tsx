import { IEmployee } from "@/interfaces";

export interface ICard extends IEmployee {
    children: JSX.Element;
  }