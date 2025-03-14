import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactsStyle/ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const handleSummit = (values, actions) => {
    console.log("submit", values);
    onAdd({
      id: Date.now(),
      name: values.username,
      number: values.telephone,
    });
    actions.resetForm();
  };

  const UserSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    telephone: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={{
        username: "",
        telephone: "",
      }}
      onSubmit={handleSummit}
      validationSchema={UserSchema}
    >
      <Form className={css.form}>
        <div className={css.containerInput}>
          <label>Username</label>
          <Field className={css.input} type="taxt" name="username" />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>

        <div className={css.containerInput}>
          <label>Tel number</label>
          <Field className={css.input} type="number" name="telephone" />
          <ErrorMessage
            className={css.error}
            name="telephone"
            component="span"
          />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
