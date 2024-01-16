/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import RegisterBusiness from "./RegisterBusiness";
import "./index.scss";

const businessRegistrationContext = createContext<{
  activeScreen?: string;
  goNext?: () => void;
  goBack? : () => void;
}>({});

export default function BusinessRegistrationProvider() {
  const SCREENS = ["business_type", "business_invoice"];
  const [activeScreen, setActiveScreen] = useState(SCREENS[0]);

  const goNext = () => {
    const idx = SCREENS.findIndex((s) => s === activeScreen);
    const nextScreen = SCREENS[idx + 1];
    setActiveScreen(nextScreen);
  };

  const goBack = () => {
    const idx = SCREENS.findIndex((s) => s === activeScreen);
    const nextScreen = SCREENS[idx - 1];
    setActiveScreen(nextScreen);
  };
  return (
    <businessRegistrationContext.Provider
      value={{ activeScreen, goNext, goBack }}
    >
      <RegisterBusiness />
    </businessRegistrationContext.Provider>
  );
}

export function useBusinessRegistrationContext() {
  return useContext(businessRegistrationContext);
}
