import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import * as React from "react";

import Settings from "./Settings";
import Play from "./Play";
import Next from "./Next";
import { STATE_SECONDS, STATE_FLOW, STATE_INFO, STATES_IDS } from "../const";

import { themes } from "../themes";

const Timer = (props) => {
  const [startTimer, setStartTimer] = useState(false);

  const [currentFlowIndex, setCurrentFlowIndex] = useState(0);
  const [time, setNewTime] = useState(
    STATE_SECONDS[STATE_FLOW[currentFlowIndex]]
  );
  const [state, setState] = useState(STATE_INFO[[STATES_IDS.focus]]);
  const [mode, setMode] = React.useState("light");

  const handleStartTimer = () => {
    startTimer ? setStartTimer(false) : setStartTimer(true);
  };

  const handleDarkMode = () => {
    console.log("mode = ", mode);
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const handleSetState = () => {
    setCurrentFlowIndex(
      currentFlowIndex === STATE_FLOW.length - 1 ? 0 : currentFlowIndex + 1
    );
  };

  useEffect(() => {
    setState(STATE_INFO[STATE_FLOW[currentFlowIndex]]);
    setNewTime(STATE_SECONDS[STATE_FLOW[currentFlowIndex]]);
    props.setCustomTheme(themes[STATE_FLOW[currentFlowIndex]]);
  }, [currentFlowIndex, props]);

  useEffect(() => {
    if (startTimer) {
      const interval = setTimeout(() => {
        time > 0 && setNewTime(time - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time, startTimer]);

  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
      <Box>{state}</Box>
      <Box fontSize={"256px"}>{time}</Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        gap={"20px"}
      >
        <Settings handleDarkMode={handleDarkMode}>Settings</Settings>
        <Play
          handleStartTimer={handleStartTimer}
          text={startTimer ? "Pause" : "Play"}
        ></Play>

        <Next handleSetState={handleSetState}>Next Button</Next>
      </Box>
    </Box>
  );
};

export default Timer;
