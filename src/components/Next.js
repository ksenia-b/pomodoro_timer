import * as React from "react";
import Button from "@mui/material/Button";

function Next(props) {
  const handleClick = () => {
    props.handleSetState();
  };
  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        Next
      </Button>
    </>
  );
}

export default Next;
