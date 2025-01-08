import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Min 3 Characters")
      .max(50, "Max 50 Characters")
      .required("Required Field"),
    number: Yup.string()
      .matches(/^[0-9()+\s]+$/, "The phone number can only contain numbers")
      .min(3, "Min 3 Characters")
      .max(50, "Max 50 Characters")
      .required("Required Field"),
  });
  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <div className={s.inputGroup}>
          <label htmlFor="name" className={s.label}>
            Name
          </label>
          <Field type="text" name="name" id="name" className={s.input} />
          <ErrorMessage name="name" component="div" className={s.error} />
        </div>
        <div className={s.inputGroup}>
          <label htmlFor="number" className={s.label}>
            Number
          </label>
          <Field type="text" name="number" id="number" className={s.input} />
          <ErrorMessage name="number" component="div" className={s.error} />
        </div>
        <button type="submit" className={s.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
