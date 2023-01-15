import React from "react";
import { useAuthStore } from "./store";
import { useMutation } from "react-query";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createDoctor } from "./apiAuth";

function CreateUser() {
  const setToken = useAuthStore((state) => state.setToken);
  const { mutate, isLoading, error, isError } = useMutation(
    "createDoctor",
    createDoctor
  );

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      identification: "",
      email: "",
      contact: "",
      gender: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("No es un correo válido")
        .required("El correo es requerido"),
      password: Yup.string()
        .required("La contraseña es requerida")
        .min(3, "Contraseña mínima 8 caracteres"),
    }),
    onSubmit: async (values) => {
      //console.log(values);
      mutate(
        {
          firstName: values.firstName,
          lastName: values.lastName,
          identification: values.identification,
          email: values.email,
          contact: values.contact,
          gender: values.gender,
          password: values.password,
        },
        {
          onSuccess: (data) => {
            //setToken(data.jwtToken);
            alert(data);
          },
          onError: (error) => {
            alert(error.response.data.message);
          },
        }
      );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {useAuthStore.getState().token}
      <input
        type="text"
        name="firstName"
        onChange={formik.handleChange}
        //value={formik.values.email}
      />

      <input
        type="text"
        name="lastName"
        onChange={formik.handleChange}
        //value={formik.values.email}
      />

      <input
        type="text"
        name="identification"
        onChange={formik.handleChange}
        //value={formik.values.email}
      />

      <input
        type="text"
        name="email"
        onChange={formik.handleChange}
        //value={formik.values.email}
      />
      {formik.errors.email && formik.touched.email && (
        <p>{formik.errors.email}</p>
      )}
      <input
        type="text"
        name="contact"
        onChange={formik.handleChange}
        //value={formik.values.email}
      />

      <input
        type="text"
        name="gender"
        onChange={formik.handleChange}
        //value={formik.values.email}
      />
      {formik.errors.email && formik.touched.email && (
        <p>{formik.errors.email}</p>
      )}
      <input
        type="password"
        name="password"
        onChange={formik.handleChange}
        //value={formik.values.password}
      />
      {formik.errors.password && formik.touched.password && (
        <p>{formik.errors.email}</p>
      )}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Enviando..." : "Login"}
      </button>
      {isError && <p>{error.response.data.message}</p>}
    </form>
  );
}

export default CreateUser;
