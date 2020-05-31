import React from 'react'
import {Button} from 'react-bootstrap'

export function PreviousButton({step, previous}) {
    if (step !== 1) {
      return (
        <Button
          className="btn btn-secondary"
          type="button"
          onClick={previous}
        >
          Previous
        </Button>
      );
    }
    return null;
  }