import React, { useContext } from "react";
import { Button, Spinner } from "react-bootstrap";
import { AuthContext } from "../../../../context/authContext";

const styles = {
  float: "right",
};
export function NextButton({ step, disabled, next }) {
  const { loading } = useContext(AuthContext);
  if (step < 5) {
    return (
      <Button
        style={styles}
        className="btn btn-secondary"
        type="button"
        onClick={next}
        disabled={disabled}
      >
        Next
      </Button>
    );
  }
  return loading ? (
    <Button variant="primary" disabled style={styles}>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      Loading...
    </Button>
  ) : (
    <Button type="submit" style={styles}>
      Login
    </Button>
  );
}
