/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import ReserveBusinessName from "./ReserveBusinessName";
import "./index.scss";

const businessNameReservationContext = createContext<{
  activeScreen?: string;
  goNext?: () => void;
  goBack? : () => void;
}>({});

export default function BusinessRegistrationProvider() {
  const SCREENS = ["name_info", "name_payment", "name_personal_details", "name_complete"];
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
    <businessNameReservationContext.Provider
      value={{ activeScreen, goNext, goBack }}
    >
      <ReserveBusinessName />
    </businessNameReservationContext.Provider>
  );
}

export function useBusinessNameReservationContext() {
  return useContext(businessNameReservationContext);
}
