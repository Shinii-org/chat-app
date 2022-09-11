import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from "../../utils/styles";
import styles from "./index.module.scss";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {};
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="email" {...register("email", { required: true })}>
          Email
        </InputLabel>
        <InputField type="email" id="email" />
      </InputContainer>
      <section className={styles.nameFieldRow}>
        <InputContainer>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <InputField
            type="text"
            id="firstName"
            {...register("firstName", { required: true })}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastName">LastName</InputLabel>
          <InputField
            type="text"
            id="lastName"
            {...register("lastName", { required: true })}
          />
        </InputContainer>
      </section>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField
          type="password"
          id="password"
          {...register("password", { required: true })}
        />
      </InputContainer>
      <Button className={styles.button}>Register</Button>
      <div className={styles.footerText}>
        <span>Already have an account ? </span>
        <Link to="/login">
          <span>Login</span>
        </Link>
      </div>
    </form>
  );
};
