import React from 'react'
import {Button} from 'react-bootstrap'

export function NextButton({step,disabled, next}) {
    console.log(disabled)
    if (step < 3) {
      return (
        <Button
          className="btn btn-secondary"
          type="button"
          onClick={next}
          disabled={disabled}
        >
          Next
        </Button>
      );
    }
    return <Button type="submit">Submit</Button>;
  }