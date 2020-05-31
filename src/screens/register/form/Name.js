import React from "react";
import { Form } from "react-bootstrap";
import { PreviousButton } from "./navbuttons/PreviousButton";
import { NextButton } from "./navbuttons/NextButton";

export const Name = ({ step, formik, next, previous }) => {
  if (step !== 1) return null;
  const { getFieldProps, touched, errors } = formik;

  return (
    <>
      <Form.Group md="4" controlId="Formik01">
        <Form.Label>First name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          {...getFieldProps("firstName")}
          isValid={touched.firstName && !errors.firstName}
          isInvalid={touched.firstName && !!errors.firstName}
        />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          {errors.firstName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group md="4" controlId="Formik02">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          {...getFieldProps("lastName")}
          isValid={touched.lastName && !errors.lastName}
          isInvalid={touched.lastName && !!errors.lastName}
        />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          {errors.lastName}
        </Form.Control.Feedback>
      </Form.Group>
      <PreviousButton step={step} previous={previous} />
      <NextButton
        step={step}
        next={next}
        disabled={!!errors.firstName || !!errors.lastName}
      />
    </>
  );
};
