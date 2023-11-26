import { ErrorMessage, Field, FormikErrors } from "formik";

interface SingleFormInputProps {
  value: string;
  placeholder?:string;
}

export default function SingleFormInput({ value , placeholder}: SingleFormInputProps) {
  return (
    <div className="mb-2">
      <div className="flex justify-between items-center mb-1">
        <label className="block text-gray-700 font-bold " htmlFor={value}>
          {value}
        </label>
        <div className="text-red-600 text-xs">
          <ErrorMessage name={value} />
        </div>
      </div>
      <Field
        as="input"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
         leading-tight focus:outline-none focus:shadow-outline"
        id={value}
        name={value}
        placeholder={placeholder || ""}
      />
    </div>
  );
}
