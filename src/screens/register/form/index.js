import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Form } from "react-bootstrap";
import { EmailAndPhone } from "./EmailAndPhone";
import { Name } from "./Name";
import { Address } from "./Address";

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const schema = yup.object({
  firstName: yup
    .string()
    .min(2, "*Name too short")
    .max(50, "*Name can't be longer than 50 characters")
    .required("*First Name is required"),
  lastName: yup
    .string()
    .min(2, "*Name is too short")
    .max(50, "*Name can't be longer than 50 characters")
    .required("*Last Name is required"),
  email: yup
    .string()
    .email("*Enter a valid email address")
    .required("*Email is required"),
  phone: yup
    .string()
    .min(11, "*Phone number is too short")
    .max(14, "*Phone number is too long")
    .matches(phoneRegExp, "*Phone number is not valid")
    .required("*Phone number required"),
  address1: yup
    .string()
    .min(10, "*Address is too short")
    .required("*Address is required"),
  /*username: yup
    .string()
    .min(3, "*Username must be at least 3 characters long")
    .max(12, "*Username can't be longer than 12 characters")
    .required("*Username is required"),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  terms: yup.bool().required(),*/
});

function RegisterationForm() {
  const [step, setStep] = React.useState(1);
  React.useEffect(() => {
    console.log(step);
  });
  const next = () => setStep(step >= 2 ? 3 : step + 1);
  const previous = () => setStep(step <= 1 ? 1 : step - 1);

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(value) => console.log(value)}
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
      }}
    >
      {(formik) => (
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Name formik={formik} step={step} next={next} previous={previous} />
          <EmailAndPhone
            formik={formik}
            step={step}
            next={next}
            previous={previous}
          />
          <Address
            formik={formik}
            step={step}
            next={next}
            previous={previous}
          />
        </Form>
      )}
    </Formik>
  );
}
export default RegisterationForm;
