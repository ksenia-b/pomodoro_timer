import Button from "@mui/material/Button";

function Play(props) {
  return (
    <Button onClick={props.handleStartTimer} variant="contained">
      {props.text}
    </Button>
  );
}

export default Play;
