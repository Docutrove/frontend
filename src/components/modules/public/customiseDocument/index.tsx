/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import CreateDocument from "./CreateDocument";
import "./index.scss";

const customiseDocContext = createContext<{
  activeScreen?: string;
  goNext?: () => void;
  goBack?: () => void;
}>({});

export default function CustomiseDocumentProvider() {
  const SCREENS = [
    "choose_document_type",
    "choose_template",
    "template_invoice",
    "template_details",
    "confirm_template",
  ];
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
    <customiseDocContext.Provider value={{ activeScreen, goNext, goBack }}>
      <CreateDocument />
    </customiseDocContext.Provider>
  );
}

export function useCustomiseDocContext() {
  return useContext(customiseDocContext);
}
