import React from "react";
import { Form } from "react-bootstrap";

export const UsernameAndPassword = ({ formik }) => {
  const { getFieldProps, touched, errors } = formik;
  return (
    <>
      <Form.Group md="4" controlId="Formik11">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          placeholder='username'
          {...getFieldProps("username")}
          isValid={touched.username && !errors.username}
          isInvalid={touched.username && !!errors.username}
        />
        <Form.Control.Feedback type="invalid">
          {errors.username}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group md="4" controlId="Formik12">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder='password'
          {...getFieldProps("password")}
          isValid={touched.password && !errors.password}
          isInvalid={touched.password && !!errors.password}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};
