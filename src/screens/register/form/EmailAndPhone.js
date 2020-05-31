import React from "react";
import { Form } from "react-bootstrap";

export const EmailAndPhone = ({ step, formik }) => {
  if (step !== 2) return null;
  const { getFieldProps, touched, errors } = formik;
  return (
    <>
      <Form.Group md="4" controlId="Formik03">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          {...getFieldProps("email")}
          isValid={touched.email && !errors.email}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group md="4" controlId="Formik04">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          {...getFieldProps("phone")}
          isValid={touched.phone && !errors.phone}
          isInvalid={!!errors.phone}
        />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          {errors.phone}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};
