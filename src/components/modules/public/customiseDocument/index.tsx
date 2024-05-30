/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import CreateDocument from "./CreateDocument";
import "./index.scss";
import useRequest from "../../../hooks/useRequest";
import { getTemplateCategories } from "../../../../api/templates";
import toast from "react-hot-toast";

const customiseDocContext = createContext<{
  activeScreen?: string;
  goNext?: () => void;
  goBack?: () => void;
  // getTemplatesByCategoryId: (categoryId: string) => {};
  // templates?: [];
  categories?: [{name: string, id: string}];
  categoryId?: string;
  templateId?: string;
  setCategoryId: (categoryId: string) => void;
  setTemplateId: (templateId: string) => void;
}>({});

export default function CustomiseDocumentProvider() {
  const SCREENS = [
    "choose_document_type",
    "choose_template",
    "template_invoice",
    "template_details",
    "confirm_template",
    "template_payment",
    "template_personal_details",
    "template_thank",
  ];
  const [activeScreen, setActiveScreen] = useState(SCREENS[0]);
  const { makeRequest } = useRequest(getTemplateCategories);
  const [categories, setCategories] = useState()
  const [categoryId, setCategoryId] = useState("")
  const [templateId, setTemplateId] = useState("")

  const requestTemplateCategories = async () => {
    const [categories, err] = await makeRequest();

    if (err) {
      toast.error(err.message);
    }
    setCategories(categories?.data)
  };

  useEffect(() => {
    requestTemplateCategories();
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
  const setCategoryIdReal = (categoryId: string) => {
    setCategoryId(categoryId)
    const idx = SCREENS.findIndex((s) => s === activeScreen);
    const nextScreen = SCREENS[idx + 1];
    setActiveScreen(nextScreen);
  }
  const setTemplateIdReal = (templateId: string) => {
    setTemplateId(templateId)
    const idx = SCREENS.findIndex((s) => s === activeScreen);
    const nextScreen = SCREENS[idx + 1];
    setActiveScreen(nextScreen);
  }
  // const getTemplatesByCategoryId = async (categoryId: string) => {
  //   const [templates, err] = await getTemplatesByCategory(categoryId);
  //   if (err) {
  //     toast.error(err.message);
  //   }
  //   setTemplates(templates?.data);
  //   setActiveScreen("choose_template");
  // }
  return (
    <customiseDocContext.Provider
      value={{
        activeScreen, goNext, goBack, setCategoryId: setCategoryIdReal, 
        setTemplateId: setTemplateIdReal, categories: categories,
        categoryId: categoryId, templateId: templateId,
      }}
    >
      <CreateDocument />
    </customiseDocContext.Provider>
  );
}

export function useCustomiseDocContext() {
  return useContext(customiseDocContext);
}
