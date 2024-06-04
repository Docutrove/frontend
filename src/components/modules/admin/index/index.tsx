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
        <Route index path="Dashboard" element={<Main />} />
        <Route path="All-templates" element={<TemplatesAll />} />
        <Route path="Downloads" element={<TempDownloadView />} />
        <Route path="Business-Services" element={<BusinessCardIndex />} />
        <Route path="Business-Details" element={<BusinessDetails />} />
        <Route path="TemplateDownloads" element={<TemplateDownloadDetails />} />
        <Route
          path="Templates-All-Details"
          element={<TemplateDownloadAllDetails />}
        />
      </Routes>
    </Layout>
  )
}
