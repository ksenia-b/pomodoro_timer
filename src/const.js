export const STATES_IDS = {
  focus: "focus",
  shortBreak: "shortBreak",
  longBreak: "longBreak",
};

export const STATE_INFO = {
  [STATES_IDS.focus]: "Focus",
  [STATES_IDS.shortBreak]: "Short Break",
  [STATES_IDS.longBreak]: "Long Break",
};

export const STATE_SECONDS = {
  [STATES_IDS.focus]: 25,
  [STATES_IDS.shortBreak]: 20,
  [STATES_IDS.longBreak]: 15,
};

export const STATE_FLOW = [
  STATES_IDS.focus,
  STATES_IDS.shortBreak,
  STATES_IDS.focus,
  STATES_IDS.longBreak,
];
// Focus > Short break > Focus > Long break > Focus
