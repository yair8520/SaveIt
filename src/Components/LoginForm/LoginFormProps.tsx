export interface LoginFormProps {
  [key: string]: any;
}
export interface ILoginForm {
  email: string;
  password: string;
}

export type LoginFormState = {
  [key in keyof ILoginForm]: {
    value: string;
    error: string;
  };
};

export const loginFormInit: LoginFormState = {
  email: {
    value: "",
    error: "",
  },
  password: {
    value: "",
    error: "",
  },
};
