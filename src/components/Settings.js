import * as React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../App";

function Settings(props) {
  const theme = useTheme();

  const colorMode = React.useContext(ColorModeContext);

  const handleDarkMode = () => {
    colorMode.toggleColorMode();
  };

  return (
    <>
      <Button variant="contained" onClick={handleDarkMode}>
        .../dark mode
      </Button>
      {theme.palette.mode} mode
    </>
  );
}

export default Settings;
