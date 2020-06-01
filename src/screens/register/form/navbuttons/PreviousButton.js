import React from "react";
import { Button } from "react-bootstrap";

const styles = {
  float: "left",
};
export function PreviousButton({ step, previous }) {
  if (step !== 1) {
    return (
      <Button
        style={styles}
        className="btn btn-secondary"
        type="button"
        onClick={previous}
      >
        Back
      </Button>
    );
  }
  return null;
}
