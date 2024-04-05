import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  consulta: string;
}

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z]+$/, "El nombre solo puede contener letras")
    .required("El nombre es requerido"),
  phone: Yup.string()
    .min(8, "El teléfono debe contener al menos 8 números")
    .matches(
      /^\d+$/,
      "El número de teléfono solo puede contener dígitos numéricos"
    )
    .required("El teléfono es requerido"),
  email: Yup.string()
    .email("Formato de correo electrónico inválido")
    .required("El correo electrónico es requerido"),
  consulta: Yup.string()
    .min(40, "La consulta debe tener al menos 40 caracteres")
    .required("La consulta es requerida"),
});

const FormularioYup: React.FC = () => {
  /*  const handleSubmit = (values: FormValues) => {
    console.log(values);
    // Aquí podrías enviar los datos del formulario a tu servidor
  }; */
  const handleSubmit = async (values: FormValues) => {
    try {
      const response = await axios.post(
        "https://formsubmit.co/ajax/gonzalo-ezequiel@hotmail.com",
        values
      );
      Swal.fire({
        icon: "success",
        title: `¡Buen Trabajo!`,
        text: "¡Su consulta fue enviada con éxito!",
        showConfirmButton: false,
        /*  onBeforeOpen: () => {
          Swal.showLoading()
        } */
      });
      console.log(response);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      Swal.fire({
        icon: "error",
        title: `Error`,
        text: "Su consulta no pudo ser enviada. Intente más tarde",
        showConfirmButton: false,
        /*  onBeforeOpen: () => {
          Swal.showLoading()
        } */
      });
    }
  };

  const normalStyleField =
    "w-full rounded-md border-solid border-slate-300 border focus:outline-none focus:border-active-green pl-4   md:rounded-sm bg-background-grey";

  const errorStyleField =
    "w-full rounded-md border-solid border-slate-300 border focus:outline-none border-red-600 pl-4   md:rounded-sm   bg-background-grey";

  const textLabelError = "text-red-500 font-normal";

  const textLabelNormal = "text-black font-normal";

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        consulta: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, handleSubmit }) => (
        <Form
          onSubmit={handleSubmit}
          className="w-[328px] h-[396px] xl:h-[576px]  bg-background-grey flex flex-col items-start justify-around  xl:w-[484px] xl:h[572px]"
        >
          <div className="flex flex-col items-start w-full pl-[8.5px] pr-[8.5px] ">
            <label
              className={`pl-3 text-sm ${
                touched.name && errors.name ? textLabelError : textLabelNormal
              }`}
              htmlFor="name"
            >
              Nombre y Apellido
            </label>
            <Field
              className={`h-[38px] xl:h-[48px] ${
                touched.name && errors.name ? errorStyleField : normalStyleField
              }`}
              placeholder="Juan Pérez"
              type="text"
              name="name"
              id="name"
              autoComplete="off"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="flex flex-col items-start w-full pl-[8.5px] pr-[8.5px] pt-[10px] xl:pt-[8px]">
            <label
              className={`pl-3 text-sm ${
                touched.phone && errors.phone ? textLabelError : textLabelNormal
              }`}
              htmlFor="phone"
            >
              Teléfono
            </label>
            <Field
              className={`h-[38px] xl:h-[48px] ${
                touched.phone && errors.phone
                  ? errorStyleField
                  : normalStyleField
              }`}
              placeholder="11111111"
              type="number"
              name="phone"
              id="phone"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="flex flex-col items-start w-full pl-[8.5px] pr-[8.5px] pt-[10px] xl:pt-[8px]">
            <label
              className={`pl-3 text-sm ${
                touched.email && errors.email ? textLabelError : textLabelNormal
              }`}
              htmlFor="email"
            >
              Email
            </label>
            <Field
              className={`h-[38px] xl:h-[48px] ${
                touched.email && errors.email
                  ? errorStyleField
                  : normalStyleField
              }`}
              placeholder="tumail@gmail.com"
              type="mail"
              name="email"
              id="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="flex flex-col items-start w-full pl-[8.5px] pr-[8.5px] pt-[10px] xl:pt-[8px]">
            <label
              className={`pl-3 text-sm ${
                touched.consulta && errors.consulta
                  ? textLabelError
                  : textLabelNormal
              }`}
              htmlFor="consulta"
            >
              Consulta
            </label>
            <Field
              as="textarea"
              className={`h-[133px] w-[311px] xl:w-[484px] xl:h-[200px]${
                touched.consulta && errors.consulta
                  ? errorStyleField
                  : normalStyleField
              }`}
              placeholder="Deja aquí tu consulta"
              name="consulta"
              id="consulta"
            />
            <ErrorMessage
              name="consulta"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="w-full pt-6 xl:pt-0 flex justify-center items-center pl-[7.5px] pr-[7.5px]">
            <button
              type="submit"
              className="h-11 w-full md:w-[163px] flex justify-center items-center active:text-active-green hover:text-inherit  xl:py-2 xl:px-4 bg-button-green text-white rounded hover:bg-button-hover-green hover:text-white active:bg-active-[#29CA8A] outline-none focus:border focus:outline-none  md:text-[20px] font-semibold lg:h-12 lg:w-52"
            >
              Enviar consulta
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormularioYup;
