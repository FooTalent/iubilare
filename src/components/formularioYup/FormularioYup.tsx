import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  consulta: string;
}

const validationSchema = Yup.object({
  name: Yup.string().required("El nombre es requerido"),
  phone: Yup.string().required("El teléfono es requerido"),
  email: Yup.string()
    .email("Formato de correo electrónico inválido")
    .required("El correo electrónico es requerido"),
  consulta: Yup.string().required("La consulta es requerida"),
});

const FormularioYup: React.FC = () => {
  const handleSubmit = (values: FormValues) => {
    console.log(values);
    // Aquí podrías enviar los datos del formulario a tu servidor
  };

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
      {() => (
        <Form className="w-[328px] h-[560px] md:h-[396px] bg-background-grey flex flex-col items-start  xl:w-[484px] xl:h[572px]">
          <div className="flex flex-col items-start w-full pl-[8.5px] pr-[8.5px] ">
            <label className="pl-3 text-sm" htmlFor="name">
              Nombre y Apellido
            </label>
            <Field
              className="w-full h-[48px] rounded-md border-solid border-slate-300 border focus:outline-none focus:border-active-green pl-4 md:h-[31px] md:w-[265.4px] md:rounded-sm xl:h-[48px] xl:w-full bg-background-grey"
              placeholder="Juan Pérez"
              type="text"
              name="name"
              id="name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="flex flex-col items-start w-full pl-[8.5px] pr-[8.5px] pt-[8px]">
            <label className="pl-3 text-sm" htmlFor="phone">
              Teléfono
            </label>
            <Field
              className="w-full h-[48px] rounded-md border-solid border-slate-300 border focus:outline-none focus:border-active-green pl-4 md:h-[31px] md:w-[265.4px] md:rounded-sm xl:h-[48px] xl:w-full bg-background-grey"
              placeholder="1164589710"
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
          <div className="flex flex-col items-start w-full pl-[8.5px] pr-[8.5px] pt-[8px]">
            <label className="pl-3 text-sm" htmlFor="email">
              Email
            </label>
            <Field
              className="w-full h-[48px] rounded-md border-solid border-slate-300 border focus:outline-none focus:border-active-green pl-4 md:h-[31px] md:w-[265.4px] md:rounded-sm xl:h-[48px] xl:w-full bg-background-grey"
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
          <div className="flex flex-col items-start w-full pl-[8.5px] pr-[8.5px] pt-[8px]">
            <label className="pl-3 text-sm" htmlFor="consulta">
              Consulta
            </label>
            <textarea
              className="w-full  rounded-md border-solid border-slate-300 border focus:outline-none focus:border-active-green pl-4 md:h-24 md:w-[265.4px] md:rounded-sm  xl:w-full bg-background-grey "
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

          <div className="w-full pl-[7.5px] pr-[7.5px] mt-8">
            <button
              type="submit"
              className="w-full active:text-active-green hover:text-inherit md:inline-block py-2 px-4 bg-button-green text-white rounded hover:bg-button-hover-green hover:text-white active:bg-active-green outline-none focus:border focus:outline-none md:w-[145.13px] md:text-[14.14px] font-bold  xl:w-[160px] "
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
