import React from "react";
import { AuthProviderProps } from "./AuthProviderProps";
import { useAppSelector } from "@/Redux";
import { getUserInfo } from "@/Features/Auth/AuthSelectors";
import useFirebaseAuth from "@/Hooks/useFirebaseAuth/useFirebaseAuth";

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const user = useAppSelector(getUserInfo);
  useFirebaseAuth();
  console.log({ user });

  return children;
};
