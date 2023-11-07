import { createContext } from "react";

const initialValue = {
  appTitle: "",
  appDescription: "",
  appKeywords: "",
  mainTitle: "",
  mainDescription: "",
};

// set the defaults
const AppInformationContext = createContext({
  appInformation: initialValue,
  setAppInformation: () => {},
});

export default AppInformationContext;
