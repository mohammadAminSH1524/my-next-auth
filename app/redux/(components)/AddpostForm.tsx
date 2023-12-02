"use client";

import SingleFormInput from "@/app/components/SingleFormInput";
import { nanoid } from "@reduxjs/toolkit";
import { Field, Form, Formik, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { postAdded } from "../features/posts/postsSlice";
import type { AppDispatch } from "../store";
import { sellectAllUsers } from "../features/users/usersSlice";

const newUserSchema = Yup.object().shape({
  userId: Yup.string().required("title is required"),
  title: Yup.string().required("title is required"),
  content: Yup.string().required("content is required"),
});

const initialValues = {
  title: "",
  content: "",
  userId: "",
};

export default function AddPostForm() {
  const dispatch: AppDispatch = useDispatch();

  const users = useSelector(sellectAllUsers);
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={newUserSchema}
        onSubmit={(values, actions) => {
          //   console.log(values);
          dispatch(postAdded(values.title, values.content, values.userId));
        }}
      >
        <Form className="flex-1 flex flex-col min-w-[300px] w-full items-center gap-5 ">
          <h1>Add New Post</h1>

          <SingleFormInput value="title" placeholder="title" />
          <SingleFormInput value="content" placeholder=" content" />

          <Field as="select" name="userId">
            <option value={""}>author</option>
            {users.map((user, index) => (
              <option key={index} value={user.id}>
                {user.name}
              </option>
            ))}
          </Field>

          <button
            className="py-4 px-6 cursor-pointer bg-green-800 
          border-none rounded-md w-max text-white"
            type="submit"
          >
            add post
          </button>
        </Form>
      </Formik>
    </div>
  );
}
