import { Routes, Route } from 'react-router'
import Layout from '../layout'
import './index.scss'
import Main from '../dashboard'
import TempDownloadView from '../templatesDownload'
import TemplatesAll from '../templatesAll'
import BusinessCardIndex from '../businessIndex'
import BusinessDetails from '../businessCardDetails'
import TemplateDownloadDetails from '../templatesDownloadDetails'
import TemplateDownloadAllDetails from '../templatesAllTemplatesData'

// import AdminPanel from "../adminPanel";

export default function Admin() {
  return (
    <Layout>
      <Routes>
        <Route index path="dashboard" element={<Main />} />
        {/* Temporary till authenticationhas been integrated*/}
        {/* <Route index path="Dashboard" element={<Main />} /> */}
        {/* <Route path="Login" element={<Login />} /> */}
        <Route path="all-templates" element={<TemplatesAll />} />
        <Route path="downloads" element={<TempDownloadView />} />
        <Route path="business-services" element={<BusinessCardIndex />} />
        <Route path="business-details" element={<BusinessDetails />} />
        <Route
          path="template-downloads"
          element={<TemplateDownloadDetails />}
        />
        <Route
          path="templates-all-details"
          element={<TemplateDownloadAllDetails />}
        />
      </Routes>
    </Layout>
  )
}
