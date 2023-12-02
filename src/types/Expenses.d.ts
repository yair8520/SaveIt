import { categories } from "@/Consts/constant";

export type TExpenses = {
  [year: string]: TYear;
};

export type TYear = {
  [month: string]: TMonth;
};

export type TMonth = {
  data: TExpense[];
};

export type TExpense = {
  amount: number;
  creditNum: number;
  date: string;
  category: CategoryKeys[]
};
type CategoryKeys = keyof typeof categories;

export type TCategory = {
  color: string;
  text: string;
};
