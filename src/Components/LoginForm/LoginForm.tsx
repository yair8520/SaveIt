"use client";
import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import {
  ILoginForm,
  LoginFormProps,
  LoginFormState,
  loginFormInit,
} from "./LoginFormProps";
import { useTranslation } from "react-i18next";
import { Text } from "../Text";
import { XInput } from "../XInput";
import { XButton } from "../XButton";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { signInWithFaceBook, signInWithGoogle } from "@/Helpers/Auth";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/Redux";
import { getUserInfo } from "@/Features/Auth/AuthSelectors";

export const LoginForm = ({}: LoginFormProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const navigateOnSuccess = (r: unknown) => {
    //router.push("/dashBoard");
  };
  const signInGoogle = () => {
    signInWithGoogle()
      .then((r) => navigateOnSuccess(r))
      .catch((e) => console.log(e));
  };
  const signInFacebook = () => {
    signInWithFaceBook()
      .then((r) => navigateOnSuccess(r))
      .catch((e) => console.log(e));
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text variant="h2" className="gradientText">
          {t("title.appName")}
        </Text>
        <Text variant="subtitle2">{t("title.continue")}</Text>
      </div>

      <div className={styles.buttonContainer}>
        <XButton
          onClick={() => signInGoogle()}
          startIcon={<GoogleIcon />}
          variant="outlined"
          value={t("withGoogle")}
        />
        <XButton
          variant="outlined"
          onClick={() => signInFacebook()}
          startIcon={<FacebookIcon />}
          value={t("withFacebook")}
        />
      </div>
    </div>
  );
};
