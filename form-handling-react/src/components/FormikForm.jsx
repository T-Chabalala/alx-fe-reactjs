import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log("User registered:", data);
      alert("User registered successfully!");
      resetForm();
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4 max-w-md mx-auto p-6 border rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Register (Formik + Yup)</h2>

          <div>
            <Field name="username" type="text" placeholder="Username" className="border p-2 rounded w-full" />
            <ErrorMessage name="username" component="p" className="text-red-500" />
          </div>

          <div>
            <Field name="email" type="email" placeholder="Email" className="border p-2 rounded w-full" />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>

          <div>
            <Field name="password" type="password" placeholder="Password" className="border p-2 rounded w-full" />
            <ErrorMessage name="password" component="p" className="text-red-500" />
          </div>

          <button type="submit" disabled={isSubmitting} className="bg-green-500 text-white p-2 rounded">
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
