"use client";

import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";
import SingleFormInput from "./SingleFormInput";

const newUserSchema = Yup.object().shape({
  name: Yup.string().required("name is required"),
  email: Yup.string().email("invalid email").required("email is required"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must be strong password"
    ),
});

const initialValues = {
  name: "mamin1524",
  email: "mamin@mailfa.com",
  password: "@Ttwe1234",
};

export default function UserForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");


  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={newUserSchema}
        onSubmit={async (values, actions) => {
          // console.log(values);
          
          setErrorMessage("");
            
          const res = await fetch("/api/Users", {
            method: "POST",
            body: JSON.stringify({ values }),
            "content-type": "application/json",
          });

          if (!res.ok) {
            const response = await res.json();
            setErrorMessage(response.message);
          } else {
            router.refresh();
            router.push("/");
          }
        }}
      >
        <Form className="flex-1 flex flex-col min-w-[300px] w-full items-center gap-5 ">
          <h1>Add New Post</h1>

          <SingleFormInput value="name" placeholder="mamin1524" />
          <SingleFormInput value="email" placeholder="mamin@mailfa.com" />
          <SingleFormInput value="password" placeholder="12345678" />

          <button
            className="py-4 px-6 cursor-pointer bg-green-800 
          border-none rounded-md w-max text-white"
            type="submit"
          >
            Send
          </button>
        </Form>
      </Formik>
      <p>{errorMessage}</p>
    </div>
  );
}
