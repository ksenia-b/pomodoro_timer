import Button from "@mui/material/Button";

function Stop(props) {
  return (
    <Button variant="contained" onClick={props.handleStartTimer}>
      Stop
    </Button>
  );
}

export default Stop;
