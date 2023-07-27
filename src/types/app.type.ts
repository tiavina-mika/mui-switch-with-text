import { ReactNode } from "react";

export interface ISelectOption<V = any> {
  label: string;
  value: V;
  icon?: ReactNode | string;
}

export type IProjectProduct = "roadmap" | "insight";
