/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import CreateDocument from "./CreateDocument";
import "./index.scss";
import useRequest from "../../../hooks/useRequest";
import { getTemplates } from "../../../../api/templates";
import toast from "react-hot-toast";

const customiseDocContext = createContext<{
  activeScreen?: string;
  goNext?: () => void;
  goBack?: () => void;
  templates?: {}[];
}>({});

export default function CustomiseDocumentProvider() {
  const SCREENS = [
    "choose_document_type",
    // "choose_template",
    "template_invoice",
    "template_details",
    "confirm_template",
  ];
  const [activeScreen, setActiveScreen] = useState(SCREENS[0]);
  const { makeRequest, response } = useRequest(getTemplates);

  const getTemplate = async () => {
    const [_, err] = await makeRequest();

    if (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    getTemplate();
  }, []);

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
    <customiseDocContext.Provider
      value={{ activeScreen, goNext, goBack, templates: response }}
    >
      <CreateDocument />
    </customiseDocContext.Provider>
  );
}

export function useCustomiseDocContext() {
  return useContext(customiseDocContext);
}
