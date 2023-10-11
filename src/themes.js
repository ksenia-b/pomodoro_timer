import { STATES_IDS } from "./const";

export const themes = {
  [STATES_IDS.focus]: {
    light: {
      primary: {
        main: "#ff1",
        dark: "#619",
      },
      secondary: {
        main: "#3f5",
        dark: "#621",
      },
    },
    dark: {
      primary: {
        main: "#f557",
        dark: "#600",
      },
      secondary: {
        main: "#311",
      },
    },
  },
  [STATES_IDS.shortBreak]: {
    light: {
      primary: {
        main: "#305135",
        dark: "#fff",
      },
      secondary: {
        main: "#fff",
      },
    },
    dark: {
      primary: {
        main: "#305",
        dark: "#f2f",
      },
      secondary: {
        main: "#f56",
      },
    },
  },

  [STATES_IDS.longBreak]: {
    light: {
      primary: {
        main: "#876",
        dark: "#231",
      },
      secondary: {
        main: "#434",
      },
    },
    dark: {
      primary: {
        main: "#862",
        dark: "#261",
      },
      secondary: {
        main: "#494",
      },
    },
  },
};
