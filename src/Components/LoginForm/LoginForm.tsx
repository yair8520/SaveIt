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

export const LoginForm = ({}: LoginFormProps) => {
  const { t } = useTranslation();
  const [form, setForm] = useState<LoginFormState>(loginFormInit);
  const handleForm = (val: string, key: keyof ILoginForm) => {
    setForm((prevForm) => ({
      ...prevForm,
      [key]: {
        ...prevForm[key],
        value: val,
      },
    }));
  };
  console.log(form)
  return (
    <div className={styles.container}>
      <Text variant="h4">{t("title.login")}</Text>
      <div className={styles.inputContainer}>
        <XInput
          label={t("label.email")}
          value={form.email.value}
          onChangeText={(v) => handleForm(v, "email")}
        />
        <XInput
          label={t("label.pass")}
          value={form.password.value}
          onChangeText={(v) => handleForm(v, "password")}
        />
        <XButton value={t("send")} />
      </div>
    </div>
  );
};
