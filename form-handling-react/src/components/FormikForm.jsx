import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema with Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Formik Submitted:", values);

        // Simulate API call
        fetch("https://jsonplaceholder.typicode.com/users", {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Mock API Response:", data);
          });

        resetForm();
      }}
    >
      <Form className="p-4 border rounded w-80 space-y-3">
        <h2 className="text-xl font-bold">Register (Formik)</h2>

        <div>
          <Field name="username" placeholder="Username" className="w-full p-2 border rounded" />
          <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
        </div>

        <div>
          <Field type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
        </div>

        <div>
          <Field type="password" name="password" placeholder="Password" className="w-full p-2 border rounded" />
          <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
        </div>

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default FormikForm;