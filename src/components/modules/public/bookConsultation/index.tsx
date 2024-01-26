/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import ConsultLawyer from "./ConsultLawyer";
import "./index.scss";

const bookConsultationContext = createContext<{
  activeScreen?: string;
  goNext?: () => void;
  goBack?: () => void;
}>({});

export default function BookConsultationProvider() {
  const SCREENS = ["consultation_intro", "consult"];
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
    <bookConsultationContext.Provider value={{ activeScreen, goNext, goBack }}>
      <ConsultLawyer />
    </bookConsultationContext.Provider>
  );
}

export function useBookConsultationContext() {
  return useContext(bookConsultationContext);
}
