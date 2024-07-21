import { createContext, useContext, useEffect, useState } from 'react'
import CreateDocument from './CreateDocument'
import './index.scss'
import useRequest from '../../../hooks/useRequest'
import { getTemplateCategories } from '../../../../api/templates'
import toast from 'react-hot-toast'
import { useSearchParams } from 'react-router-dom'

interface AuthData {
  firstName: string
  lastName: string
  email: string
  phone: string
}

interface TemplateModule {
  name: string
  label: string
  dropDownOptions: string[]
  isDropDown: boolean
}

interface Template {
  name: string
  price: number
  description: string
  configuration: {
    fields: []
    formConfig: {
      modules: TemplateModule[]
    }
    previewHtml: string
  }
}

interface DynamicObject {
  [key: string]: any
}

const customiseDocContext = createContext<{
  activeScreen?: string
  goNext?: () => void
  goBack?: () => void
  categories?: { name: string; id: string }[]
  categoryId?: string
  templateId?: string
  template?: Template | undefined
  templateData?: DynamicObject | undefined
  authData?: AuthData
  setTemplate: (data: Template | undefined) => void
  setAuthData: (data: AuthData) => void
  setTemplateData: (data: DynamicObject | undefined) => void
  setCategoryId: (categoryId: string) => void
  setTemplateId: (templateId: string) => void
  clearSavedFormData: () => void
}>({
  setTemplateData: function (data: DynamicObject | undefined): void {
    console.log(data)
  },
  setCategoryId: function (categoryId: string): void {
    console.log(categoryId)
  },
  setTemplateId: function (templateId: string): void {
    console.log(templateId)
  },
  setAuthData: function (data: AuthData): void {
    console.log(data)
  },
  setTemplate: function (data: Template | undefined): void {
    console.log(data)
  },
  clearSavedFormData: function (): void {
    console.log('Clearing saved form data')
  },
})

export default function CustomiseDocumentProvider() {
  const SCREENS = [
    'choose_document_type',
    'choose_template',
    'template_invoice',
    'template_details',
    'confirm_template',
    'template_personal_details',
    'template_payment',
    'template_thank',
  ]
  const [activeScreen, setActiveScreen] = useState(SCREENS[0])
  const { makeRequest: templateCategoriesRequest } = useRequest(
    getTemplateCategories
  )
  const [categories, setCategories] = useState()
  const [categoryId, setCategoryId] = useState('')
  const [templateId, setTemplateId] = useState('')
  const [templateData, setTemplateData] = useState<DynamicObject | undefined>(
    () => {
      const savedData = localStorage.getItem('formData')
      return savedData ? JSON.parse(savedData) : undefined
    }
  )
  const [template, setTemplate] = useState<Template | undefined>()
  const [authData, setAuthData] = useState<AuthData>()

  const requestTemplateCategories = async () => {
    const [categories, err] = await templateCategoriesRequest()
    if (err) {
      toast.error(err.message)
    }
    setCategories(categories?.data)
  }

  const [queryParameters] = useSearchParams()
  const checkParams = () => {
    if (queryParameters.get('trxref')) {
      setActiveScreen('template_thank')
    }
  }

  useEffect(() => {
    checkParams()
    requestTemplateCategories()
  }, [])

  const goNext = () => {
    const idx = SCREENS.findIndex((s) => s === activeScreen)
    const nextScreen = SCREENS[idx + 1]
    setActiveScreen(nextScreen)
  }

  const goBack = () => {
    const idx = SCREENS.findIndex((s) => s === activeScreen)
    const nextScreen = SCREENS[idx - 1]
    setActiveScreen(nextScreen)
  }

  const setCategoryIdReal = (categoryId: string) => {
    setCategoryId(categoryId)
    const idx = SCREENS.findIndex((s) => s === activeScreen)
    const nextScreen = SCREENS[idx + 1]
    setActiveScreen(nextScreen)
  }

  const setTemplateIdReal = (templateId: string) => {
    setTemplateId(templateId)
    const idx = SCREENS.findIndex((s) => s === activeScreen)
    const nextScreen = SCREENS[idx + 1]
    setActiveScreen(nextScreen)
  }

  const setTemplateDataReal = (data: DynamicObject | undefined) => {
    console.log(data)
    setTemplateData(data)
    localStorage.setItem('formData', JSON.stringify(data))
    const idx = SCREENS.findIndex((s) => s === activeScreen)
    const nextScreen = SCREENS[idx + 1]
    setActiveScreen(nextScreen)
  }

  const clearSavedFormData = () => {
    localStorage.removeItem('formData')
    localStorage.removeItem('currentStep')
  }

  const setAuthDataReal = (data: AuthData) => {
    setAuthData(data)
    const idx = SCREENS.findIndex((s) => s === activeScreen)
    const nextScreen = SCREENS[idx + 1]
    setActiveScreen(nextScreen)
    clearSavedFormData()
  }

  const setTemplateReal = (data: Template | undefined) => {
    setTemplate(data)
    const idx = SCREENS.findIndex((s) => s === activeScreen)
    const nextScreen = SCREENS[idx + 1]
    setActiveScreen(nextScreen)
  }

  return (
    <customiseDocContext.Provider
      value={{
        activeScreen,
        goNext,
        goBack,
        setCategoryId: setCategoryIdReal,
        setTemplateId: setTemplateIdReal,
        setTemplateData: setTemplateDataReal,
        setAuthData: setAuthDataReal,
        setTemplate: setTemplateReal,
        clearSavedFormData,
        categories: categories,
        categoryId: categoryId,
        templateId: templateId,
        templateData: templateData,
        authData: authData,
        template: template,
      }}
    >
      <CreateDocument />
    </customiseDocContext.Provider>
  )
}

// Hook to manage request and loading state
export function useTemplateCategories() {
  const {
    makeRequest: templateCategoriesRequest,
    response: categoriesResponse,
  } = useRequest(getTemplateCategories)

  useEffect(() => {
    templateCategoriesRequest()
  }, [])

  return categoriesResponse
}

export function useCustomiseDocContext() {
  return useContext(customiseDocContext)
}
